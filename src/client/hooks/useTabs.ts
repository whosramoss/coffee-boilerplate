import { TabEnum } from "@shared/enums";
import { TTabBar } from "@shared/types";
import { useState } from "react";

export const useTabs = (itens: TTabBar[]) => {
  const [tabs, setTabs] = useState<TTabBar[]>(itens);

  const setTabActive = (tab: TabEnum) => {
    window.scrollTo(0, 0);
    setTabs((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item.tab === tab ? true : false,
      })),
    );
  };

  return { tabs, setTabActive };
};
