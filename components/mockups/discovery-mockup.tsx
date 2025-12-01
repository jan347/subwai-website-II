export function DiscoveryMockup() {
  return (
    <div className="w-full h-full bg-bg-surface flex flex-col p-4 md:p-6 gap-4 font-sans">
      {/* Search Bar */}
      <div className="flex gap-4 mb-2">
        <div className="flex-1 h-10 bg-bg-elevated border border-border-subtle rounded-md flex items-center px-4 text-sm text-text-tertiary">
          Search grants...
        </div>
        <div className="w-24 h-10 bg-bg-elevated border border-border-subtle rounded-md" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 rounded-lg border border-border-subtle bg-bg-elevated flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="h-4 w-8 bg-success/20 rounded-full" />
              <div className="h-4 w-12 bg-border-subtle rounded" />
            </div>
            <div className="h-5 w-3/4 bg-border-subtle rounded" />
            <div className="h-3 w-full bg-border-subtle/50 rounded" />
            <div className="h-3 w-2/3 bg-border-subtle/50 rounded" />
            
            <div className="mt-2 flex gap-2">
              <div className="h-6 w-16 bg-border-subtle/30 rounded" />
              <div className="h-6 w-16 bg-border-subtle/30 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

