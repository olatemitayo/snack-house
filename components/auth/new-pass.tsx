import AuthHeaders from "./auth-headers";
import { PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ErrorType, handleError } from "@/utils/handle-error";
import AuthButton from "./auth-button";
import { cookieStorage } from "@ibnlanre/portal";

const schema = yup.object().shape({
  new_password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password must contain text and number characters"
    )
    .min(8, "Password must be at least 8 characters long")

    .required("Password is required"),
  confirm_password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password must contain text and number characters"
    )
    .min(8, "Password must be at least 8 characters long")
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("Password is required"),
});

export default function NewPass() {
  const { push } = useRouter();
  const myForm = useForm({
    initialValues: {
      email: cookieStorage.getItem("userEmail") || "",
      new_password: "",
      confirm_password: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await builder.use().accounts.api.setnew_password(myForm.values),
    mutationKey: builder.accounts.api.setnew_password.get(),
    onSuccess(data, variables, context) {
      myForm.reset();
      toast.success("Password successfully created");
      push(`/login`);
    },
    onError(error, variables, context) {
      handleError(error as ErrorType);
    },
  });

  return (
    <div className="bg-auth-bg  bg-cover  bg-center bg-no-repeat h-screen flex ">
      <div className="px-[clamp(10px,8vw,100px)]  items-center py-4 max-w-[1440px] mx-auto w-full  flex justify-center ">
        <div className="w-[40%] lg:w-[50%] md:w-[90%] csm:w-full  border rounded-[20px] py-[clamp(20px,5vw,70px)] border-[##898989] mx-auto auth ">
          <AuthHeaders header="Create New Password" href="" />
          <form
            className="w-[80%] mx-auto mt-[clamp(15px,2vw,30px)]"
            onSubmit={myForm.onSubmit((value) => {
              mutate();
            })}
          >
            <PasswordInput
              placeholder="Enter New Password"
              radius="md"
              size="lg"
              className="w-full py-[21px]"
              withAsterisk
              {...myForm.getInputProps("new_password")}
            />
            <PasswordInput
              placeholder="Confirm New Password"
              radius="md"
              size="lg"
              className="w-full py-[21px]"
              withAsterisk
              {...myForm.getInputProps("confirm_password")}
            />

            <AuthButton text="Reset Password" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}
