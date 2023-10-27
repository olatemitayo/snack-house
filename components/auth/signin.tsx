import AuthHeaders from "./auth-headers";
import { PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ErrorType, handleError } from "@/utils/handle-error";
import { usePortal, cookieStorage } from "@ibnlanre/portal";
import AuthButton from "./auth-button";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function SignIn() {
  const [, setCookieState] = usePortal.cookie("sh_auth", {
    value: "",
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });

  const myForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });
  const { push } = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await builder.use().accounts.api.sign_in(myForm.values),
    mutationKey: builder.accounts.api.sign_in.get(),
    onSuccess(data) {
      setCookieState(JSON.stringify(data?.data));
      cookieStorage.setItem("sh_auth", JSON.stringify(data?.data));
      myForm.reset();
      toast.success("Welcome", { autoClose: 2000 });
      push("/");
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  return (
    <div className="bg-auth-bg  bg-cover  bg-center bg-no-repeat h-screen flex ">
      <div className="px-[clamp(10px,8vw,100px)]  items-center py-4 max-w-[1440px] mx-auto w-full  flex justify-center ">
        <div className="w-[40%] lg:w-[50%] md:w-[90%] csm:w-full  border rounded-[20px] py-[clamp(20px,5vw,70px)] border-[##898989] mx-auto auth ">
          <AuthHeaders
            header="Returning Customer? Sign In"
            href="/register"
            paragraph="Don't have an account?"
            text="Sign up here"
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
            <PasswordInput
              placeholder="Password"
              radius="md"
              size="lg"
              className="w-full py-[21px]"
              withAsterisk
              {...myForm.getInputProps("password")}
            />
            <div className="pb-[21px] " style={{ width: "max-content" }}>
              <Link href={"/forgot-password"}>
                <p className="text-[#771132] ">Forget Password?</p>
              </Link>
            </div>
            <AuthButton text="Sign In" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}
