interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const sizeClasses = {
  sm: "w-5 h-5 border-2",
  md: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-[3px]",
};

const Loader: React.FC<LoaderProps> = ({ size = "md", text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div
        className={`rounded-full animate-spin border-t-transparent border-orange-500 ${sizeClasses[size]}`}
      />

      {text && <p className="text-sm text-[var(--text-tertiary)]">{text}</p>}
    </div>
  );
};

export default Loader;
