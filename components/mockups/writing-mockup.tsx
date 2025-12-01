export function WritingMockup() {
  return (
    <div className="w-full h-full bg-bg-surface flex font-sans">
      {/* Editor Area */}
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-4 border-r border-border-subtle">
        <div className="h-8 w-1/2 bg-border-subtle rounded-none mb-4" />
        
        <div className="space-y-3">
          <div className="h-4 w-full bg-border-subtle/60 rounded-none" />
          <div className="h-4 w-full bg-border-subtle/60 rounded-none" />
          <div className="h-4 w-5/6 bg-border-subtle/60 rounded-none" />
          <div className="h-4 w-full bg-border-subtle/60 rounded-none" />
          <div className="h-4 w-4/5 bg-border-subtle/60 rounded-none" />
        </div>
        
        <div className="mt-4 p-4 rounded-none bg-accent-purple/5 border border-accent-purple/20">
          <div className="flex gap-2 items-center mb-2">
            <div className="w-4 h-4 rounded-none bg-accent-purple" />
            <div className="h-4 w-24 bg-accent-purple/20 rounded-none" />
          </div>
          <div className="h-3 w-full bg-accent-purple/10 rounded-none" />
        </div>
      </div>

      {/* Sidebar Suggestions */}
      <div className="w-64 bg-bg-elevated p-4 hidden md:flex flex-col gap-4">
        <div className="h-4 w-24 bg-border-subtle rounded-none mb-2" />
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-3 rounded-none border border-border-subtle bg-bg-surface">
            <div className="h-3 w-3/4 bg-border-subtle rounded-none mb-2" />
            <div className="h-2 w-full bg-border-subtle/50 rounded-none" />
          </div>
        ))}
      </div>
    </div>
  )
}

