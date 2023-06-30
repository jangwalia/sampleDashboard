import React from "react";
import classNames from "classnames";

function Button({ children, primary, info }) {
  const btnClass = classNames("text-white", {
    "bg-blue-400 p-8 rounded mr-4": primary,
    "bg-yellow-400 text-black p-8 rounded": info,
  });
  return <button className={btnClass}>{children}</button>;
}

export default Button;
