import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ProfilePic({ size = 100, ...props }: ProfilePicProps) {
  return (
    <Image
      {...props}
      height={size}
      width={size}
      src="/profile.jpg"
      alt="Profile"
      className={cn(props.className, "object-cover aspect-square rounded-full")}
    />
  );
}

export type ProfilePicProps = Omit<
  ComponentProps<typeof Image>,
  "src" | "alt" | "height" | "width"
> & {
  size?: number;
};
