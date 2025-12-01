export function ComplianceMockup() {
  return (
    <div className="w-full h-full bg-bg-surface flex flex-col p-6 font-sans">
      <div className="flex justify-between items-center mb-8">
        <div className="h-6 w-32 bg-border-subtle rounded" />
        <div className="h-8 w-8 rounded-full border border-success text-success flex items-center justify-center text-xs">
          98%
        </div>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-border-subtle bg-bg-elevated hover:bg-bg-elevated/80">
            <div className="w-5 h-5 rounded-full border-2 border-success flex items-center justify-center">
              {i <= 3 && <div className="w-2.5 h-2.5 bg-success rounded-full" />}
            </div>
            <div className="flex-1">
              <div className="h-3 w-1/2 bg-border-subtle rounded mb-1" />
              <div className="h-2 w-1/4 bg-border-subtle/50 rounded" />
            </div>
            <div className="h-6 w-16 bg-border-subtle/20 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

