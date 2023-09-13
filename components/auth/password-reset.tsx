import AuthHeaders from "./auth-headers";
import { TextInput } from "@mantine/core";
import { builder } from "@/api/builder";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useRouter } from "next/router";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ErrorType, handleError } from "@/utils/handle-error";
import AuthButton from "./auth-button";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function PasswordReset() {
  const { push } = useRouter();
  const myForm = useForm({
    initialValues: {
      email: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await builder.use().accounts.api.forgot_password(myForm.values),
    mutationKey: builder.accounts.api.forgot_password.get(),
    onSuccess(data, variables, context) {
      toast.success("Enter OTP code");
      cookieStorage.setItem("userEmail", myForm.values.email);
      myForm.reset();
      push(`/verify`);
    },
    onError(error, variables, context) {
      handleError(error as ErrorType);
    },
  });
  return (
    <div className="bg-auth-bg  bg-cover  bg-center bg-no-repeat h-screen flex ">
      <div className="px-[clamp(10px,8vw,100px)]  items-center py-4 max-w-[1440px] mx-auto w-full  flex justify-center ">
        <div className="w-[40%] lg:w-[50%] md:w-[90%] csm:w-full  border rounded-[20px] py-[clamp(20px,5vw,70px)] border-[##898989] mx-auto auth ">
          <AuthHeaders
            header="Forgot your password?"
            href="/login"
            paragraph="Please enter your email address or go back to"
            text="Sign In"
          />
          <form
            className="w-[80%] mx-auto mt-[clamp(20px,4vw,60px)]"
            onSubmit={myForm.onSubmit((value) => {
              mutate();
            })}
          >
            <TextInput
              placeholder="Enter your e-mail address"
              radius="md"
              size="lg"
              withAsterisk
              className="w-full py-[21px]"
              {...myForm.getInputProps("email")}
            />

            <AuthButton text="Reset Password" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}
