import React from "react";
import Link from "next/link";

function Button({
  text,
  onClick,
  href,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        className="border-2 border-blue-400 bg-slate-200 px-2 py-1 rounded-lg"
        href={href}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className="border-2 border-blue-400 bg-slate-200 px-2 py-1 rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
