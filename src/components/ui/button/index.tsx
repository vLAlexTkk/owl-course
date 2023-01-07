import { IButton } from "@src/types/buttonType";
import { NextImage } from "../image/NextImage";

export const Button = ({ appearence, arrow = "none", children, ...props }: IButton): JSX.Element => {
  return (
    <button
      className={
        appearence == "primary"
          ? "w-[150px] rounded-[5px] border border-primary bg-primary px-2 py-2 text-center text-14 leading-14 text-white transition-colors hover:bg-white hover:text-primary"
          : "bg-white" || appearence == "ghost"
          ? "w-[150px] rounded-[5px] border border-white-200 bg-white px-2 py-2 text-14 leading-14 text-black transition-colors hover:bg-white-200"
          : "bg-primary"
      }
      {...props}
    >
      <a className="flex flex-row items-baseline justify-center gap-2">
        {children}
        {arrow != "none" && (
          <span
            className={
              arrow == "right"
                ? "relative flex aspect-video h-2 w-1.5 shrink-0 transition-transform"
                : "hidden" || arrow == "down"
                ? "relative flex aspect-video h-2 w-1.5 shrink-0 rotate-90 transition-transform"
                : "hidden"
            }
          >
            <NextImage
              layout="fill"
              objectFit="fill"
              src="/icons/arrow-right.svg"
              alt="arrow-down"
              className="text-primary"
              priority
            />
          </span>
        )}
      </a>
    </button>
  );
};
