"use client";

import ChipButton from "@components/buttons/ChipButton";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
  alertTitle: string;
  alertDescription: string;
  alertActions: AlertActionProps[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type AlertActionProps = {
  title: string;
};

export default function Alert({
  isOpen,
  alertTitle,
  alertDescription,
  alertActions,
  setIsOpen,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="mb-2 text-center text-3xl font-bold">
                {alertTitle}
              </h3>
              <p className="mb-6 text-center font-semibold text-third">
                {alertDescription}
              </p>
              <div className="grid grid-cols-2">
                {alertActions.map((e) => (
                  <ChipButton
                    title={e.title}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
