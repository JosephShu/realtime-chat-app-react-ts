import { ReactNode } from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
}

const CustomHeader = ({ children }: Props) => {
  return <div className="custom-header">{children}</div>;
};

export default CustomHeader;
