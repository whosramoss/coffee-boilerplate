import LinkButton from "@components/buttons/LinkButton";
import { META_NAME } from "@shared/meta";
import { Links } from "@shared/utils";
import React from "react";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center gap-[10px] px-14  pb-[80px] pt-[40px] md:flex-row md:justify-between md:pb-[34px]">
      <div className="flex flex-col items-center gap-[12px] md:flex-row">
        <h4 className="text-[14px] font-semibold text-primary dark:text-third ">
          © {META_NAME}
        </h4>
      </div>
      <div className="flex gap-[15px] text-[14px]">
        <LinkButton title="Github" href={Links.githubProjectLink} />
        <LinkButton title="FakeCoffeeApi" href={Links.fakeCoffeeApiLink} />
      </div>
    </footer>
  );
}
