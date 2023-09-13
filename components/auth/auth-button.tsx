import React from "react";
import CustomButton from "./button";

import { Loader } from "@mantine/core";

interface AuthButtonProps {
  loading: boolean;
  text: string;
}

export default function AuthButton({ loading, text }: AuthButtonProps) {
  return (
    <div>
      <CustomButton
        text={text}
        className={
          loading
            ? "!cursor-not-allowed w-full bg-[#771132] hover:bg-[#532332]"
            : "w-full bg-[#771132] hover:bg-[#532332]"
        }
        type="submit"
      >
        {loading ? (
          <Loader className="ms-2" size="sm" color="white" type="submit" />
        ) : null}
      </CustomButton>
    </div>
  );
}
