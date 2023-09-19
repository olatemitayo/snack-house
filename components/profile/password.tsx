import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import ProfileComp from "./profileComponent";
import Button from "../common/button";
import { toast } from "react-toastify";
import { PasswordInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ErrorType, handleError } from "@/utils/handle-error";

const schema = yup.object().shape({
  old_password: yup.string().required("Old password is required"),
  new_password: yup
    .string()
    .required("New password is required")
    .test("match-confirm-password", "Passwords must match", function (value) {
      return value === this.parent.confirm_password;
    })
    .test(
      "different-from-old-password",
      "New password must be different from old password",
      function (value) {
        return value !== this.parent.old_password;
      }
    )
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm new password is required")
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .test(
      "different-from-old-password-confirm",
      "New password must be different from old password",
      function (value) {
        return value !== this.parent.old_password;
      }
    )
    .min(6, "Password must be at least 6 characters"),
});

export default function PasswordChange() {
  const myForm = useForm({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await builder.use().profile.api.update_password(myForm.values);
    },
    mutationKey: builder.profile.api.update_password.get(),
    onSuccess() {
      myForm.reset();
      toast.success("Password successfully updated");
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  return (
    <div>
      <ProfileComp>
        <div>
          <h2 className="text-[32px] mb-[28px]">Change Password</h2>
          <div className=" flex flex-col gap-6 justify-center items-center">
            <form
              className="flex flex-col gap-6 justify-between w-full pb-6 "
              onSubmit={myForm.onSubmit(() => {
                mutate();
              })}
            >
              <PasswordInput
                placeholder="Old Password"
                className=" w-full"
                size="lg"
                {...myForm.getInputProps("old_password")}
              />

              <PasswordInput
                placeholder="New Password"
                className=" w-full"
                size="lg"
                {...myForm.getInputProps("new_password")}
              />

              <PasswordInput
                placeholder="Confirm New Password"
                className=" w-full"
                size="lg"
                {...myForm.getInputProps("confirm_password")}
              />

              <div className=" w-[80%]  rounded-lg">
                <Button
                  text={isLoading ? "Updating..." : "Update Password"}
                  type="submit"
                  className={
                    isLoading
                      ? "bg-white !text-[#771132] !min-w-[227px] border border-[#771132]"
                      : "bg-[#771132] text-white"
                  }
                  disabled={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </ProfileComp>
    </div>
  );
}
