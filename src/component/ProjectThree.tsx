import { useCallback, useEffect, useState } from "react";

const LiveClock = () => {
  const [clock, setClock] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dateString = new Date().toDateString();
  const secondProgress = (clock.seconds / 60) * 100;

  const getDayPeriod = useCallback(() => {
    if (clock.hours >= 12) {
      return "PM";
    } else return "AM";
  }, [clock.hours]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center font-mono overflow-hidden relative">
      {/* ── Ambient glow backdrop ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-orange-600/5 blur-[80px]" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 px-12 py-14 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="block w-6 h-px bg-amber-400/60" />
          <p className="text-[10px] tracking-[0.35em] uppercase text-amber-400/70 font-light">
            Local Time
          </p>
          <span className="block w-6 h-px bg-amber-400/60" />
        </div>

        {/* ── Clock digits ── */}
        <div className="flex items-end gap-2 select-none">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-[96px] leading-none font-bold tracking-tighter text-white tabular-nums">
              {clock.hours}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 mt-1">
              hrs
            </span>
          </div>

          {/* Separator */}
          <div className="flex flex-col gap-3 mb-8 px-1">
            <span className="block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="block w-2 h-2 rounded-full bg-amber-400 animate-pulse [animation-delay:0.5s]" />
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-[96px] leading-none font-bold tracking-tighter text-white tabular-nums">
              {clock.minutes}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 mt-1">
              min
            </span>
          </div>

          {/* AM/PM + Seconds stacked */}
          <div className="flex flex-col items-start gap-2 mb-3 ml-3">
            {/* Period badge */}
            <span className="px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest font-semibold">
              {getDayPeriod()}
            </span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-4xl leading-none font-semibold tracking-tight text-white/60 tabular-nums">
                {clock.seconds}
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/15 mt-0.5">
                sec
              </span>
            </div>
          </div>
        </div>

        {/* ── Seconds progress bar ── */}
        <div className="w-full flex flex-col gap-2">
          <div className="relative w-full h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-1000 ease-linear"
              style={{ width: `${secondProgress}%` }}
            />
            {/* Glow tip */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400 blur-[4px] transition-all duration-1000 ease-linear"
              style={{ left: `calc(${secondProgress}% - 6px)` }}
            />
          </div>
          <div className="flex justify-between text-[9px] tracking-widest text-white/15 uppercase">
            <span>00</span>
            <span>30</span>
            <span>60</span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Date string ── */}
        <div className="flex items-center gap-4">
          {/* Small clock icon (pure CSS/SVG) */}
          <svg
            className="w-4 h-4 text-amber-400/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          <p className="text-sm tracking-[0.15em] text-white/35 uppercase font-light">
            {dateString}
          </p>
        </div>

        {/* ── Live indicator ── */}
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/60">
            Live
          </span>
          The window size is {windowSize.width}, {windowSize.height}
        </div>
      </div>
    </div>
  );
};

export default LiveClock;
