import { cn } from "./utils";
export function ScrollArea({
  className: className,
  children: children,
  ...props
}) {
  return (
    <div
      data-slot="scroll-area"
      className={cn("relative overflow-y-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}
