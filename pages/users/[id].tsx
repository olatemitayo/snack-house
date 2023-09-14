import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export default function UserDetails() {
  const { query } = useRouter();
  const { data } = useQuery({
    queryFn: async () => await builder.use().users.details(query?.id as string),
    // queryKey: builder.users.details.use(query?.id as string)
    queryKey: [...builder.users.details.get(), query?.id],
    // enabled: query?.id ? true : false
    enabled: !!query?.id,
  });

  const user = useMemo(() => data?.data, [data?.data]);
  return (
    <div>
      <p>{user?.first_name}</p>
      <p>{user?.last_name}</p>
      <p>{user?.email}</p>
      <p>{user?.department}</p>
    </div>
  );
}
