import { builder } from "@/api/builder";
import AuthButton from "@/components/auth/auth-button";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { ErrorType, handleError } from "@/utils/handle-error";
import Link from "next/link";

export default function Users() {
  const myForm = useForm({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      department: "",
    },
  });
  const queryClient = useQueryClient();

  const { data, isError } = useQuery({
    queryFn: async () => {
      const { data } = await builder.use().users.fetch();
      return data;
    },
    queryKey: builder.users.fetch.get(),
  });

  if (isError) {
    console.log("Error notice");
  }
  //if we use query ciient for key name for an emdppint that has same key name with 2 or more endpoonts.wil all the end points be called together at once?

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => await builder.use().users.create(myForm.values),
    mutationKey: builder.users.create.get(),
    onSuccess(data, variables, context) {
      toast.success("User successfully created");
      queryClient.invalidateQueries(["users", "fetch"]);
      myForm.reset();
    },
    onError(error, variables, context) {
      handleError(error as ErrorType);
    },
  });
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex gap-20 justify-between">
        <div>
          <form
            action=""
            className="grid h-[400px]"
            onSubmit={myForm.onSubmit(() => {
              mutate();
            })}
          >
            <TextInput
              placeholder="first name"
              label="Full name"
              withAsterisk
              {...myForm.getInputProps("first_name")}
            />
            <TextInput
              placeholder="last name"
              label="Last name"
              withAsterisk
              {...myForm.getInputProps("last_name")}
            />
            <TextInput
              placeholder="email "
              label="Email"
              withAsterisk
              {...myForm.getInputProps("email")}
            />
            <TextInput
              placeholder="department"
              label="Department"
              withAsterisk
              {...myForm.getInputProps("department")}
            />
            <AuthButton loading={isLoading} text="Create User" />
          </form>
        </div>
        <div>
          <h1 className="text-2xl">Current Users</h1>
          <ul className="flex flex-wrap gap-5">
            {data?.map((item: any) => (
              <Link href={`/users/${item.id}`} id={item.id}>
                <li
                  id="item.id"
                  className="border p-4 mb-6 w-[200px] text-[14px]"
                >
                  <p>{item.first_name}</p>
                  <p>{item.last_name}</p>
                  <p>{item.email}</p>
                  <p>{item.department}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
