import * as auth from "firebase/auth";
import React, { MouseEventHandler } from "react";

interface props {
  onEvent: MouseEventHandler;
  children: string;
  tailwind: string;
}

const Sign = React.memo(({ onEvent, children, tailwind = "" }: props) => {
  const style = `sign-in-button ${tailwind}`;

  return (
    <button onClick={onEvent} className={style}>
      {children}
    </button>
  );
});

export default Sign;
