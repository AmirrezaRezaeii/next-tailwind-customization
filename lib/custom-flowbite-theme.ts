import { CustomFlowbiteTheme } from "flowbite-react";

export const customAccordionTheme: CustomFlowbiteTheme["accordion"] = {
  root: {
    base: "",
    flush: {
      off: "",
      on: "",
    },
  },
  content: {
    base: "p-5 border border-gray-200 shadow !shadow-inner !shadow-stone-200 bg-white",
  },
  title: {
    arrow: {
      base: "hidden",
      open: {
        off: "",
        on: "",
      },
    },
    base: "bg-white flex items-center justify-between w-full p-4 font-bold rtl:text-right text-gray-500 pb-4 gap-3 border border-gray-200",
    flush: {
      off: "border-gray-300 hover:bg-zinc-200",
      on: "",
    },
    heading: "flex w-full items-center justify-between",
    open: {
      off: "",
      on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
    },
  },
};
