const TextInput = ({ type = "text", label, name, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          type={type}
          name={name}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextInput;
