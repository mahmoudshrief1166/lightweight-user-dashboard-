import React from "react";

export default function Button({ content, style = "primary", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return <button className={`${base} ${styles[style]}`} {...props}>{content}</button>;
}
