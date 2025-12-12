import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    return (
      <div className="relative">
        <input
          id={id}
          ref={ref}
          className={cn(
            "peer flex h-14 w-full rounded-xl border-2 border-border bg-card px-4 pt-5 pb-2 text-base ring-offset-background transition-all duration-300",
            "placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "focus-visible:border-primary hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            isFocused || hasValue || props.value
              ? "top-2 text-xs text-primary font-medium"
              : "top-1/2 -translate-y-1/2 text-muted-foreground"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export { FloatingInput };
