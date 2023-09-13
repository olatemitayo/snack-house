import AuthHeaders from "./auth-headers";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { PinInput, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { cookieStorage } from "@ibnlanre/portal";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ErrorType, handleError } from "@/utils/handle-error";
import AuthButton from "./auth-button";

const schema = yup.object().shape({
  verification_code: yup
    .string()
    .matches(/^\d{4}$/, "PIN should be a 4-digit number")
    .required("PIN is required"),
});

export default function Pin() {
  const { push } = useRouter();
  const myForm = useForm({
    initialValues: {
      email: cookieStorage.getItem("userEmail") || "",
      verification_code: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await builder.use().accounts.api.verify_code(myForm.values),
    mutationKey: builder.accounts.api.verify_code.get(),
    onSuccess(data, variables, context) {
      myForm.reset();
      push(`/new-password`);
      toast.success("OTP Verified");
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
            header="Verify its you"
            href=""
            paragraph="enter the pin sent to your email"
          />
          <form
            className="w-[80%] mx-auto mt-[clamp(20px,4vw,60px)]"
            onSubmit={myForm.onSubmit((value) => {
              mutate();
            })}
          >
            <Group position="center" className="pb-[17px]">
              <PinInput
                classNames={{
                  input: "w-full h-[84px] ",
                }}
                {...myForm.getInputProps("verification_code")}
              />
            </Group>

            <AuthButton text="Verify Pin" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}
function cookiesState(arg0: string): { data: any } {
  throw new Error("Function not implemented.");
}
