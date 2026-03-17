const MealDetailSkeleton = () => {
  return (
    <div
      className="min-h-screen animate-pulse"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-[1440px] mx-auto md:px-12 sm:px-8 px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="h-4 w-20 rounded bg-[var(--bg-secondary)]" />
          <div className="h-8 w-32 rounded-full bg-[var(--bg-secondary)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="rounded-2xl aspect-[4/3] bg-[var(--bg-secondary)]" />

          <div className="flex flex-col gap-4">
            <div className="h-4 w-24 rounded bg-[var(--bg-secondary)]" />
            <div className="h-8 w-3/4 rounded bg-[var(--bg-secondary)]" />
            <div className="h-4 w-1/2 rounded bg-[var(--bg-secondary)]" />

            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="h-14 rounded bg-[var(--bg-secondary)]" />
              <div className="h-14 rounded bg-[var(--bg-secondary)]" />
              <div className="h-14 rounded bg-[var(--bg-secondary)]" />
            </div>

            <div className="h-10 w-full rounded-xl bg-[var(--bg-secondary)] mt-4" />
          </div>
        </div>

        <div className="w-full h-px my-10 bg-[var(--border-light)]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-6 rounded bg-[var(--bg-secondary)]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealDetailSkeleton;
