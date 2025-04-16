
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
}

export const LoadingSpinner = ({ className, size = 24 }: LoadingSpinnerProps) => {
  return (
    <Loader2 
      className={cn("animate-spin text-portfolio-primary", className)} 
      size={size} 
    />
  );
};

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="text-center">
        <LoadingSpinner size={40} />
        <p className="mt-4 text-portfolio-primary font-medium">Loading 3D Elements...</p>
      </div>
    </div>
  );
};
