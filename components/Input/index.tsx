import { ErrorMessage, Field } from "formik";
import React from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  inputClass?: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  inputClass,
  className,
  required = false,
}) => {
  return (
    <div className={className}>
      <label
        className="text-sm font-bold text-gray-600 uppercase"
        htmlFor={name}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <Field
        className={`w-full p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline ${
          inputClass || ""
        }`}
        type={type}
        placeholder={label}
        name={name}
        required={required}
      />
      <ErrorMessage
        className="text-red-600 text-sm"
        name={name}
        component="div"
      />
    </div>
  );
};

export default Input;
