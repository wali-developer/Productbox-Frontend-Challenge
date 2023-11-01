import React from "react";

const InputField = ({ label, type, placeholder, error, ...rest }) => {
  return (
    <div className="mb-5">
      <label className="text-sm text-black/90 block mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full placeholder:text-textColor-gray text-black text-sm focus:outline-none flex-1 h-[50px] rounded-md bg-lightBg px-4 ${
          error ? "border border-[#F85757]" : ""
        }`}
        {...rest}
      />
      {error && <p className="text-sm text-[#F85757] mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
