import { FC, memo } from "react";
import { useToggle } from "hooks";
import { classNames } from "utils";

export const SwitchBox: FC<ISwitch> = memo(
  ({ onChange, disabled, withError, checked, size }) => {
    const { open, toggle } = useToggle(checked);
    return (
      <div
        className={classNames(
          "flex items-center justify-between  rounded-full  px-1  ",
          open ? "bg-indigo-400 " : withError ? "bg-red-400 " : "bg-gray-400 ",
          disabled ? " cursor-default" : "cursor-pointer",
          size === "small" ? "h-7 w-14" : "h-8 w-16"
        )}
        onClick={() => {
          if (!disabled && onChange) {
            onChange(!open);
            toggle();
          }
        }}
      >
        {open && (
          <span
            className={classNames(
              "text-secondary  font-semibold pl-1",
              size === "small" ? "text-xs" : "text-sm"
            )}
          >
            Yes
          </span>
        )}
        <div
          className={classNames(
            " rounded-full border   ",
            open
              ? "bg-secondary border-indigo-700 "
              : withError
              ? "bg-red-600 border-red-700"
              : "bg-gray-600 border-gray-700",
            size === "small" ? "w-5 h-5" : "w-6 h-6"
          )}
        />
        {!open && (
          <span
            className={classNames(
              "text-gray-600  font-semibold pr-1",
              size === "small" ? "text-xs" : "text-sm"
            )}
          >
            No
          </span>
        )}
      </div>
    );
  }
);
