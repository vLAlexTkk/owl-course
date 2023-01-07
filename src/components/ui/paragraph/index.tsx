import { IParagraph } from "@src/types/paragraphType";

export const Paragraph = ({ children, size }: IParagraph): JSX.Element => {
  return (
    <p
      className={
        size === "sm"
          ? "text-14 leading-24"
          : size === "md"
          ? "text-16 leading-24"
          : size === "lg"
          ? "text-18 leading-30"
          : "text-10"
      }
    >
      {children}
    </p>
  );
};
