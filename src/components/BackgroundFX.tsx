const BackgroundFX = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
      <div className="absolute -top-28 left-[12%] h-72 w-72 rounded-full bg-sky-400/6 blur-3xl" />
      <div className="absolute top-[24%] right-[8%] h-80 w-80 rounded-full bg-slate-400/5 blur-3xl" />
      <div className="absolute bottom-[10%] left-[36%] h-72 w-72 rounded-full bg-sky-500/5 blur-3xl" />
    </div>
  );
};

export default BackgroundFX;
