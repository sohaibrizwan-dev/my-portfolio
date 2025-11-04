import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo/Icon */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-primary border-r-accent rounded-full animate-spin" />
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-28 h-28 border-4 border-transparent border-b-secondary border-l-primary rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "2s" }} />
          
          {/* Inner glow */}
          <div className="absolute inset-4 w-24 h-24 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-full blur-xl animate-pulse" />
          
          {/* Center text */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              SR
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-card/50 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading Experience...
          </p>
          <p className="text-2xl font-bold text-gradient">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl animate-pulse" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default Preloader;
