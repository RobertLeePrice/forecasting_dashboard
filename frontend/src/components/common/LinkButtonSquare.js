import { Link } from "react-router-dom";

export default function LinkButton({ to, icon: Icon, children }) {
  return (
    <Link
      className={`text-white/50 p-3 inline-flex justify-center rounded-md hover:bg-storm-light hover:text-white smooth-hover`}
      to={to}
    >
      {children}
      {Icon && (
        <Icon className="-ml-0.5 h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      )}
    </Link>
  );
}
