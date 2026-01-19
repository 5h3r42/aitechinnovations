export function SystemPreview() {
  const steps = [
    "Visitor",
    "Website",
    "AI Form",
    "Google Sheet",
    "Email / Call",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-muted-text">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full border border-muted-text/30 bg-background/60">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="opacity-60">-&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
}
