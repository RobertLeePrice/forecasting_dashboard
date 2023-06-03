import { Link } from "react-router-dom";

export default function LinkButton({
  to,
  color = "purple",
  icon: Icon,
  fullWidth = false,
  children,
}) {
  const bgColors = {
    purple: "bg-purple hover:bg-dark-purple",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  const bgColorClass = bgColors[color] || bgColors["purple"];
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <Link
      className={`inline-flex items-center gap-x-2 rounded-md ${bgColorClass} ${widthClass} pl-4 pr-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline`}
      to={to}
    >
      {children}
      {Icon && <Icon className="-ml-0.5 h-5 w-5" aria-hidden="true" />}
    </Link>
  );
}
