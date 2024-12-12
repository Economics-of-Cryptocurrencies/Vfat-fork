function SwapRight() {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow sm:min-w-[450px]">
      <div className="p-6 pt-0 flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-4 text-[var(--primary)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide-icon lucide text-muted-foreground"
          >
            <path d="M6 10V5c0-1.7 1.3-3 3-3h1" key="13af7h"></path>
            <path d="m3 7 3 3 3-3" key="x25e72"></path>
            <circle cx="18" cy="6" r="4" key="14r987"></circle>
            <path d="M18 14v5c0 1.7-1.3 3-3 3h-1" key="1ogxox"></path>
            <path d="m21 17-3-3-3 3" key="1m4qyr"></path>
            <circle cx="6" cy="18" r="4" key="jn0mx"></circle>
          </svg>
          <div className="text-sm text-muted-foreground text-center">
            Select tokens and amount to get started
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapRight;
