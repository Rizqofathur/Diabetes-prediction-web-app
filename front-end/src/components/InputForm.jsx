export const InputForm = ({ label, placeholder, type, value, funct }) => {
  return (
    <>
      <div className="w-full mt-6">
        <label htmlFor={label} className="block text-sm/6 font-medium text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            id={label}
            name={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={funct}
            className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            required
          />
        </div>
      </div>
    </>
  );
};
