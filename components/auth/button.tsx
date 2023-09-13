import React, { ComponentProps, ReactNode, Ref, useState } from "react";
import { Button as MantineButton } from "@mantine/core";

interface ButtonProp extends ComponentProps<"button"> {
  text?: string;
  children?: ReactNode;
}

export default function CustomButton({ text, children, ...rest }: ButtonProp) {
  const buttonRef: Ref<HTMLButtonElement> = React.createRef();

  return (
    <div>
      <MantineButton
        size="lg"
        radius="md"
        className=" w-full bg-[#771132] hover:bg-[#532332]    "
        {...rest}
        ref={buttonRef}
      >
        {text}
        {children}
      </MantineButton>
    </div>
  );
}
