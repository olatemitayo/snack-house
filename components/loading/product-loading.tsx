import { Skeleton } from "@mantine/core";

export default function ProductLoading() {
  return (
    <div className="w-full grid gap-2">
      <div className="h-[800px] w-full    gap-2 hidden cmd:grid">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
      <div className="h-[300px] w-full flex justify-between  gap-2 cmd:hidden">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
      <div className="h-[300px] w-full flex justify-between  gap-2 cmd:hidden">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
    </div>
  );
}
