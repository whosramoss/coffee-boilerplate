import { cn } from "@shared/utils";
import React from "react";

type ChipButtonProps = {
  title: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ChipButton({
  title,
  isSelected = false,
  onClick,
}: ChipButtonProps) {
  return (
    <button onClick={onClick}>
      <h4
        className={cn(
          "cursor-none rounded-full px-[12px] py-[8px] font-semibold text-primary hover:bg-third dark:text-white",
          { "bg-primary text-white hover:text-primary": isSelected },
        )}
      >
        {title}
      </h4>
    </button>
  );
}
