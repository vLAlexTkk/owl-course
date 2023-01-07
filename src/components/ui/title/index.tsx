import { ITitle } from "@src/types/titleType";

export const Title = ({ tag, children }: ITitle): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className="font-jost text-20 leading-24 md:text-26 md:leading-35">{children}</h1>;
    case "h2":
      return <h2 className="font-jost text-16 leading-20 md:text-22 md:leading-30">{children}</h2>;
    case "h3":
      return <h3 className="font-jost text-16 leading-20 md:text-20 md:leading-27">{children}</h3>;
    default:
      return <h2>{children}</h2>;
  }
};
