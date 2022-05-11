interface Props {
  is: any;
  children: JSX.Element;
}

const CustomConditional = ({ is, children }: Props) => {
  return <>{is ? children : null}</>;
};

export default CustomConditional;
