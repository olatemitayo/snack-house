import clsx from "clsx";
import React, { ComponentProps, ReactNode, Ref } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text?: string;
  children?: ReactNode;
  className?: string;
}

export default function Button({
  text,
  children,
  className,
  ...rest
}: ButtonProps) {
  const buttonRef: Ref<HTMLButtonElement> = React.createRef();
  return (
    <div>
      <button
        {...rest}
        ref={buttonRef}
        className={clsx(
          "px-[50.5px]  py-[15px] bg-[#771132] text-white rounded-lg w-max ",
          className
        )}
      >
        {text}
        {children}
      </button>
    </div>
  );
}
