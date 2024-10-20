export default function BgGradient({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`relative isolate ${className}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 70% 25%, 100% 50%, 70% 75%, 50% 100%, 30% 75%, 0% 50%, 30% 25%)",
            }}
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-45 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72rem] animate-gradient"
          />
        </div>
        {children}
      </div>
    );
  }
  