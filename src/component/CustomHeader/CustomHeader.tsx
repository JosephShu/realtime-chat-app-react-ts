interface Props {
  children: JSX.Element | JSX.Element[];
}

const CustomHeader = ({ children }: Props) => {
  return <div className="custom-header">{children}</div>;
};

export default CustomHeader;
