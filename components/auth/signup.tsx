import AuthHeaders from "./auth-headers";
import { toast } from "react-toastify";
import { Loader, PasswordInput, TextInput } from "@mantine/core";

import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { usePortal } from "@ibnlanre/portal";
import { ErrorType, handleError } from "@/utils/handle-error";
import AuthButton from "./auth-button";

const schema = yup.object().shape({
  first_name: yup.string().min(2, "Name should have at least 2 characters"),
  last_name: yup.string().min(2, "Name should have at least 2 characters"),
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password must contain text and number characters"
    )
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default function SignUp() {
  const [, setCookieState] = usePortal.cookie("sh_auth", {
    value: "",
    path: "/",
    secure: true,
  });
  const myForm = useForm({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
    },
    validate: yupResolver(schema),
  });

  const { push } = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await builder.use().accounts.api.sign_up(myForm.values),
    mutationKey: builder.accounts.api.sign_up.get(),
    onSuccess(data, variables, context) {
      setCookieState(JSON.stringify(data.data));
      myForm.reset();
      toast.success("Account successfuly created", { autoClose: 2000 });
      push("/login");
    },
    onError(error, variables, context) {
      handleError(error as ErrorType);
    },
  });

  return (
    <div className="bg-auth-bg  bg-cover  bg-center bg-no-repeat h-screen flex ">
      <div className="px-[clamp(10px,8vw,100px)]  mt-[70px] items-center py-4 max-w-[1440px] mx-auto w-full  flex justify-center ">
        <div className="w-[40%] lg:w-[50%] md:w-[90%] csm:w-full  border rounded-[20px] py-[clamp(20px,3vw,28px)] border-[##898989] mx-auto auth ">
          <AuthHeaders
            header="Create your account"
            href="/login"
            paragraph="Already have an account?"
            text="Sign in here"
          />
          <form
            className="w-[80%] mx-auto mt-[clamp(20px,4vw,40px)] "
            onSubmit={myForm.onSubmit((value) => {
              mutate();
            })}
          >
            <TextInput
              placeholder="First Name"
              radius="md"
              size="lg"
              withAsterisk
              className="w-full py-3"
              {...myForm.getInputProps("first_name")}
            />
            <TextInput
              placeholder="Last Name"
              radius="md"
              size="lg"
              withAsterisk
              className="w-full py-3"
              {...myForm.getInputProps("last_name")}
            />
            <TextInput
              placeholder="Enter your e-mail address"
              radius="md"
              size="lg"
              withAsterisk
              className="w-full py-3"
              {...myForm.getInputProps("email")}
            />
            <PasswordInput
              placeholder="Password"
              radius="md"
              size="lg"
              className="w-full py-3"
              withAsterisk
              {...myForm.getInputProps("password")}
            />
            <PasswordInput
              placeholder="Confirm Password"
              radius="md"
              size="lg"
              className="w-full py-4 mb-4"
              withAsterisk
              {...myForm.getInputProps("confirm_password")}
            />
            <AuthButton text="Sign Up" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}
