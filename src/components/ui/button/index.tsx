import { IButton } from "@src/types/buttonType";

export const Button = ({ appearence, children, ...props }: IButton): JSX.Element => {
  return (
    <button
      className={
        appearence == "primary"
          ? "rounded-[5px] border border-primary bg-primary px-2 py-2 text-center text-14 leading-14 text-white transition-colors hover:bg-white hover:text-primary"
          : "bg-white" || appearence == "ghost"
          ? "border border-white-200 bg-white px-2 py-2 text-14 leading-14 text-black transition-colors hover:bg-white-200"
          : "bg-primary"
      }
      {...props}
    >
      {children}
    </button>
  );
};
