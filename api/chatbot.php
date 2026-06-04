<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['reply' => 'Please send a chat message using the website chatbot.']);
    exit;
}

$rawInput = file_get_contents('php://input') ?: '';
$request = json_decode($rawInput, true);

if (!is_array($request)) {
    http_response_code(400);
    echo json_encode(['reply' => 'The chatbot could not read that message. Please try again.']);
    exit;
}

$message = trim((string)($request['message'] ?? ''));
$history = is_array($request['history'] ?? null) ? array_slice($request['history'], -8) : [];

if ($message === '' || strlen($message) > 1200) {
    http_response_code(400);
    echo json_encode(['reply' => 'Please send a shorter question about AITech Innovations services, pricing, AI audits, or booking.']);
    exit;
}

$regulatedPattern = '/\b(legal advice|medical advice|diagnosis|prescription|investment|financial advice|tax advice|accounting advice|regulated advice|lawsuit|contract dispute|mortgage advice|insurance advice)\b/i';
if (preg_match($regulatedPattern, $message)) {
    echo json_encode([
        'reply' => 'I cannot give legal, medical, financial, tax, or other regulated professional advice. I can help with AITech Innovations services, AI automation ideas, AI audits, booking, pricing guidance, and contact options. For anything specific, please request a free AI Audit or contact the team.',
    ]);
    exit;
}

$knowledgeBase = [];
$knowledgeDir = __DIR__ . '/knowledge';
foreach (['services', 'pricing', 'ai-audit', 'contact', 'faqs'] as $name) {
    $file = $knowledgeDir . '/' . $name . '.json';
    if (!is_readable($file)) {
        continue;
    }

    $content = json_decode((string)file_get_contents($file), true);
    if (is_array($content)) {
        $knowledgeBase[$name] = $content;
    }
}

if ($knowledgeBase === []) {
    http_response_code(500);
    echo json_encode(['reply' => 'The chatbot knowledge base is not available right now. Please request a free AI Audit or contact the team.']);
    exit;
}

function message_matches(string $message, array $keywords): bool
{
    foreach ($keywords as $keyword) {
        if (strpos($message, $keyword) !== false) {
            return true;
        }
    }

    return false;
}

function scripted_reply(string $message, array $knowledgeBase): string
{
    $normalized = strtolower($message);
    $contact = $knowledgeBase['contact'] ?? [];
    $pricing = $knowledgeBase['pricing'] ?? [];

    if (message_matches($normalized, ['audit', 'ai audit', 'free audit', 'automation audit', 'request audit'])) {
        return 'The free AI Automation Audit is a 30-minute review of your workflow. We look for practical ways to reduce repeated admin, enquiry replies, lead follow-up, booking friction, and support questions. You can request it here in the chat or use the booking link.';
    }

    if (message_matches($normalized, ['price', 'pricing', 'cost', 'how much', 'package', 'quote', 'budget'])) {
        $auditPrice = $pricing['ai_audit_pricing']['guidance'] ?? 'The initial AI Automation Audit is free.';
        return 'Website pricing starts from £499 for a Starter Website, from £899 for a Business Website, from £1,499 for a Premium Website, and from £49/month for Website Care. Final pricing depends on pages, content, features, and setup. ' . $auditPrice . ' For exact pricing, request a quote or book a free AI Audit.';
    }

    if (message_matches($normalized, ['automate', 'automation', 'customer support', 'support chatbot', 'chatbot', 'faq', 'follow up', 'follow-up', 'booking flow', 'admin'])) {
        return 'We can help identify practical automation opportunities such as repeated enquiry replies, FAQ handling, lead capture, booking handoff, follow-up, and simple website chatbot flows. The best next step is a free AI Automation Audit.';
    }

    if (message_matches($normalized, ['service', 'services', 'offer', 'website', 'web design', 'redesign', 'landing page', 'seo', 'hostinger'])) {
        return 'AITech Innovations builds trust-focused websites for professional service businesses, including website design, redesigns, landing pages, enquiry and booking setup, basic SEO, Hostinger upload, and practical automation support. If you want tailored recommendations, request a free AI Audit.';
    }

    if (message_matches($normalized, ['book', 'booking', 'call', 'calendar', 'appointment', 'schedule'])) {
        return 'You can book a free 30-minute AI Automation Audit using the booking link on this site. If you prefer, send a WhatsApp enquiry and the team can help arrange the next step.';
    }

    if (message_matches($normalized, ['whatsapp', 'message you', 'contact you', 'phone'])) {
        $number = (string)($contact['whatsapp_number'] ?? '');
        return $number !== ''
            ? 'Yes. You can contact AITech Innovations on WhatsApp for quick enquiries, website quotes, and AI Audit handoff.'
            : 'Yes. Use the WhatsApp button on this site for quick enquiries, website quotes, and AI Audit handoff.';
    }

    if (message_matches($normalized, ['email', 'mail', 'support@'])) {
        $email = (string)($contact['email'] ?? 'support@aitechinnovations.com');
        return 'You can email AITech Innovations at ' . $email . '. You can also use WhatsApp or book a free AI Automation Audit.';
    }

    if (message_matches($normalized, ['wordpress', 'word press', 'wp'])) {
        return 'AITech Innovations only uses WordPress when it is the right fit. For many small brochure websites, static HTML, CSS, and JavaScript are simpler, faster, and easier to host.';
    }

    if (message_matches($normalized, ['how long', 'timeline', 'time take', 'turnaround', 'launch'])) {
        return 'Most small websites can be planned, built, reviewed, and launched in around 7-14 days, depending on content, pages, feedback, and features.';
    }

    if (message_matches($normalized, ['hello', 'hi', 'hey', 'help'])) {
        return 'Hi. I can help with AITech Innovations services, pricing guidance, AI audits, booking, WhatsApp, email, and common website questions. What would you like to know?';
    }

    return '';
}

$scriptedReply = scripted_reply($message, $knowledgeBase);
if ($scriptedReply !== '') {
    echo json_encode(['reply' => $scriptedReply, 'source' => 'scripted']);
    exit;
}

$apiKey = getenv('OPENAI_API_KEY') ?: ($_ENV['OPENAI_API_KEY'] ?? '');
if ($apiKey === '') {
    echo json_encode([
        'reply' => 'I am not sure from the current knowledge base. Please request a free AI Audit or contact the team.',
        'source' => 'fallback',
    ]);
    exit;
}

$safeHistory = [];
foreach ($history as $entry) {
    if (!is_array($entry)) {
        continue;
    }

    $role = ($entry['role'] ?? '') === 'assistant' ? 'assistant' : 'user';
    $content = trim((string)($entry['content'] ?? ''));
    if ($content === '') {
        continue;
    }

    $safeHistory[] = [
        'role' => $role,
        'content' => substr($content, 0, 800),
    ];
}

$systemPrompt = implode("\n", [
    'You are the AITech Innovations website assistant.',
    'Answer only about AITech Innovations, AI automation services, AI audits, booking, pricing guidance, website services, and contact options.',
    'Use the supplied local knowledge base as your source of truth.',
    'Do not invent testimonials, case study results, guarantees, exact prices beyond stated "from" pricing, or unsupported claims.',
    'Do not provide legal, medical, financial, tax, or regulated professional advice.',
    'If the knowledge base does not answer the question, say you are not sure and suggest requesting a free AI Audit or contacting the team.',
    'Keep replies concise, friendly, and practical. When appropriate, offer WhatsApp, booking, or a free AI Audit handoff.',
]);

$userPrompt = json_encode([
    'knowledge_base' => $knowledgeBase,
    'conversation_history' => $safeHistory,
    'visitor_question' => $message,
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

$payload = [
    'model' => 'gpt-5.4-mini',
    'input' => [
        ['role' => 'system', 'content' => $systemPrompt],
        ['role' => 'user', 'content' => $userPrompt],
    ],
    'max_output_tokens' => 320,
];

$ch = curl_init('https://api.openai.com/v1/responses');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 18,
]);

$responseBody = curl_exec($ch);
$statusCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
    error_log('Chatbot OpenAI request failed: HTTP ' . $statusCode . ' ' . $curlError . ' ' . substr((string)$responseBody, 0, 500));
    http_response_code(502);
    echo json_encode(['reply' => 'I could not reach the AI assistant just now. Please request a free AI Audit, use WhatsApp, or book a call and the team will help.']);
    exit;
}

$response = json_decode($responseBody, true);
$reply = trim((string)($response['output_text'] ?? ''));

if ($reply === '' && isset($response['output']) && is_array($response['output'])) {
    foreach ($response['output'] as $outputItem) {
        foreach (($outputItem['content'] ?? []) as $contentItem) {
            $text = $contentItem['text'] ?? '';
            if (is_string($text) && trim($text) !== '') {
                $reply .= ($reply === '' ? '' : "\n") . trim($text);
            }
        }
    }
}

if ($reply === '') {
    $reply = 'I am not sure from the current knowledge base. Please request a free AI Audit or contact the team.';
}

echo json_encode(['reply' => substr($reply, 0, 1400)]);
