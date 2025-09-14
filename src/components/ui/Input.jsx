import React from "react";

export default function Input({ type = "text", placeholder, ...props }) {
  return (
    <input
      className="form-control form-control-md bg-body-secondary"
      style={{ fontSize: "1.2rem" }}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
