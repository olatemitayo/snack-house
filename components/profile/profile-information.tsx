import React, { useEffect, useState } from "react";
import ProfileComp from "./profileComponent";
import Button from "../common/button";
import { ActionIcon } from "@mantine/core";
import { cookieStorage, usePortal } from "@ibnlanre/portal";

interface userprops {
  first_name?: string;
  last_name?: string;
  picture?: string;
  email?: string;
  phone_number?: string;
}

export default function ProfileInfo() {
  const [details] = usePortal<userprops>(
    "user_details",
    JSON.parse(cookieStorage.getItem("sh_auth") as string)
  );

  return (
    <ProfileComp>
      <h2 className="text-[32px] mb-[28px]">Profile Info</h2>
      <div className=" clg:w-full flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-6 justify-between w-full pb-6 ">
          <div className="flex border px-5 py-4 w-[80%] clg:w-full justify-between rounded-lg">
            <input
              type="text"
              placeholder={details?.first_name}
              className="placeholder:text-black w-full"
            />
            <ActionIcon>
              <img src="/edit.svg" alt="" />
            </ActionIcon>
          </div>
          <div className="flex border px-5 py-4 w-[80%] clg:w-full  justify-between rounded-lg">
            <input
              type="text"
              placeholder={details?.last_name}
              className="placeholder:text-black w-full"
            />
            <ActionIcon>
              <img src="/edit.svg" alt="" />
            </ActionIcon>
          </div>
          <div className="flex border px-5 py-4 w-[80%] clg:w-full  justify-between rounded-lg">
            <input
              type="text"
              placeholder={details?.email}
              className="placeholder:text-black w-full"
            />
            <ActionIcon>
              <img src="/edit.svg" alt="" />
            </ActionIcon>
          </div>
          <div className="flex border px-5 py-4 w-[80%] clg:w-full  justify-between rounded-lg">
            {details?.last_name == "" ? (
              <input
                type="text"
                placeholder={details?.phone_number}
                className="placeholder:text-black w-full"
              />
            ) : (
              <input
                disabled
                type="text"
                placeholder="not available"
                className="placeholder:text-[#969595] w-full"
              />
            )}
            <ActionIcon>
              <img src="/edit.svg" alt="" />
            </ActionIcon>
          </div>
          <div className=" w-[80%] clg:w-full   rounded-lg">
            <Button className="!w-full " text="Update Profile" />
          </div>
        </div>
      </div>
    </ProfileComp>
  );
}
