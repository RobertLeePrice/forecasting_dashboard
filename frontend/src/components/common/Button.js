import PropTypes from "prop-types";

function Button({ children, onClick, type, variant, disabled, fullWidth }) {
  const buttonClasses = `flex justify-center border border-transparent rounded-md ${
    variant === "primary" ? "bg-indigo-500" : "bg-gray-500"
  } py-2 px-4 text-sm font-semibold text-white shadow-sm hover:${
    variant === "primary" ? "bg-indigo-600" : "bg-gray-600"
  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${
    variant === "primary" ? "ring-indigo-600" : "ring-gray-600"
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${
    fullWidth ? "w-full" : ""
  }`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
  disabled: false,
  fullWidth: false,
};

export default Button;
