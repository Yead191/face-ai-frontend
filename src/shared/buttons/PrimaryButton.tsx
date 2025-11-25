import { Button } from "antd";
import React from "react";

export default function PrimaryButton({
  children,
  className,
  height = 36,
}: {
  children: React.ReactNode;
  className?: string;
  height?: number;
}) {
  return (
    <Button
      style={{
        height: height,
      }}
      className={`${className} rounded-lg bg-linear-to-r! from-[#9810FA] to-[#E60076] border-0! text-[#FFFFFF]! font-medium! w-fit! leading-5`}
    >
      {" "}
      {children}
    </Button>
  );
}
