import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FloatingSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

const FloatingSelect = React.forwardRef<HTMLSelectElement, FloatingSelectProps>(
  ({ className, label, id, options, ...props }, ref) => {
    const [hasValue, setHasValue] = React.useState(!!props.value);

    return (
      <div className="relative">
        <select
          id={id}
          ref={ref}
          className={cn(
            "peer flex h-14 w-full rounded-xl border-2 border-border bg-card px-4 pt-5 pb-2 text-base ring-offset-background transition-all duration-300 appearance-none cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "focus-visible:border-primary hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
            !hasValue && "text-muted-foreground",
            className
          )}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          {...props}
        >
          <option value="" disabled hidden>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-foreground bg-card">
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            hasValue || props.value
              ? "top-2 text-xs text-primary font-medium"
              : "top-2 text-xs text-muted-foreground"
          )}
        >
          {label}
        </label>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
      </div>
    );
  }
);

FloatingSelect.displayName = "FloatingSelect";

export { FloatingSelect };
