import React from "react";

function Button({ icon, text }) {
  return (
    <button className="bg-primary hover:bg-primary-hover text-sm font-bold text-accent px-4 py-2 lg:px-4 lg:py-2 space-x-2 rounded-4xl cursor-pointer">
      <i className={`fa-solid fa-${icon}`}></i>
      <span>{text}</span>
    </button>
  );
}

export default Button;
