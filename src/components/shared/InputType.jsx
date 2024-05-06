import React from "react";

const InputType = ({labelFor, value, onChange, name, inputType, labelText}) => {
  return (
    <div>
      <div className="mt-8 flex flex-wrap w-full justify-between items-center md:flex-row">
        <label className="font-semibold" htmlFor={labelFor}>{labelText} :</label>
        <input type={inputType} value={value} name={name} onChange={onChange} className="mt-2 border rounded outline-0 md:p-1 md:mt-0 md:ml-4"  />
      </div>
    </div>
  );
};

export default InputType;