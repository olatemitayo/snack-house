import React, { useState } from "react";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import ProfileComp from "./profileComponent";
import Button from "../common/button";
import axios from "axios";
import { BASE_URL } from "@/config";
import { ToastContainer, toast } from "react-toastify";
import { PasswordInput, TextInput } from "@mantine/core";

interface PasswordUpdateProps {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

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
  const [loading, setLoading] = useState(false);
  const myForm = useForm({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validate: yupResolver(schema),
  });

  const token = JSON.parse(localStorage.getItem("my-user") as string)?.access;

  const handleUpdatePassword = async (value: PasswordUpdateProps) => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `${BASE_URL}/accounts/api/change_password/`,
        {
          old_password: value.old_password,
          new_password: value.new_password,
          confirm_password: value.confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (data) {
        setLoading(false);
        toast.success("Password updated successfully");
        console.log(data);
      }
    } catch (error: any) {
      setLoading(false);
      const errorResponse = error?.response?.data;
      if (errorResponse) {
        if (typeof errorResponse === "string") toast.error(errorResponse);
        else if (typeof errorResponse === "object") {
          if (!Array.isArray(errorResponse)) {
            Object.values(errorResponse).forEach((item) => {
              if (typeof item === "string") toast.error(item);
              else if (Array.isArray(item)) {
                item.forEach((el) => {
                  toast.error(el);
                });
              } else toast.error("Something went wrong");
            });
          } else if (Array.isArray(errorResponse)) {
            errorResponse.forEach((item) => {
              if (typeof item === "string") {
                toast.error(item);
              } else toast.error("Something went wrong");
            });
          }
        } else toast.error("Something went wrong");
      } else toast.error("Network Eror");
    }
  };

  return (
    <div>
      <ProfileComp>
        <div>
          <h2 className="text-[32px] mb-[28px]">Change Password</h2>
          <div className=" flex flex-col gap-6 justify-center items-center">
            <form
              className="flex flex-col gap-6 justify-between w-full pb-6 "
              onSubmit={myForm.onSubmit((value) => {
                handleUpdatePassword(value);
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
                  text={loading ? "Updating..." : "Update Password"}
                  type="submit"
                  className={
                    loading
                      ? "bg-white !text-[#771132] !min-w-[227px] border border-[#771132]"
                      : "bg-[#771132] text-white"
                  }
                  disabled={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </ProfileComp>
    </div>
  );
}
