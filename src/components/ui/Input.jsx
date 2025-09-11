import React from "react";

export default function Input({ type = "text", placeholder, ...props }) {
  return <input type={type} placeholder={placeholder} {...props} />;
}
