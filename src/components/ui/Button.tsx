import Link from "next/link";

function Button({
  text,
  onClick,
  href,
  disabled = false,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}) {
  let className = "border-solid border-2 border-blue-400 px-2 py-1 rounded-lg ";
  if (disabled) {
    className += "bg-gray-300";
  }

  if (href) {
    return (
      <Link className={className} href={href}>
        {text}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
