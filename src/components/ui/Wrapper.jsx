import { cn } from "../../utils/cn";
export const Wrapper = ({ children, className = "font-FarfetchRegular" }) => {
  return (
    <div className={cn("mx-auto w-10/12 max-w-[1140px]", className)}>
      {children}
    </div>
  );
};
