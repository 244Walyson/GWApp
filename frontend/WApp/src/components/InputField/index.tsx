import { forwardRef } from "react";

type Props = {
  placeholder: string;
  type?: string;
  className?: string;
};

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type = "text", className, ...props }, ref) => {
    return (
      <input
        className={`bg-card border rounded-lg p-2 w-full focus:outline-none ${className}`}
        type={type}
        ref={ref}
        {...props}
        placeholder={placeholder}
      />
    );
  }
);

export default InputField;
