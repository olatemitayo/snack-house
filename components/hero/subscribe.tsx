import React, { useState } from "react";
import Button from "../common/button";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "@/config";
import { ToastContainer, toast } from "react-toastify";

interface SubscribeProps {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
});

export default function Subscribe() {
  const [loading, setLoading] = useState(false);

  const myForm = useForm({
    initialValues: {
      email: "",
    },
    validate: yupResolver(schema),
  });

  const handleLogin = async (value: SubscribeProps) => {
    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/api/subscribe/`, {
        email: value.email,
      });

      if (response.data) {
        setLoading(false);

        toast.success("Thank you for subscribing to our Newsletter");
        myForm.reset();
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
    <div className="bg-[#F1E7EB]">
      <section className="px-[clamp(10px,6vw,100px)]  py-16 cmd:py-4 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center clg:gap-4 clg:flex-col">
          <p className="cmd:text-center">
            Sign up for our newsletter to receive discounts, events and more.
          </p>
          <form
            action=""
            className="flex cmd:block"
            onSubmit={myForm.onSubmit((value) => {
              handleLogin(value);
            })}
          >
            <input
              type="text"
              className="w-[300px] p-4 "
              placeholder="enter your email address"
              {...myForm.getInputProps("email")}
            />
            <Button
              text="Subscribe"
              className="cmd:w-full rounded-none "
              type="submit"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
