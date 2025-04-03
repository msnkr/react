import { useState } from "react";

const FormComponent = () => {
  return (
    <div className="px-12 my-12">
      <div className="space-y-2">
        <div>
          <label>Email: </label>
          <input className="border w-full h-8" />
        </div>
        <div>
          <label>Name: </label>
          <input className="border w-full h-8" />
        </div>
        <div>
          <label>Tel: </label>
          <input className="border w-full h-8" />
        </div>
      </div>
      <div className="mt-4">
        <label>Message:</label>
        <textarea className="border w-full h-50" />
      </div>
      <button className="border-2 cursor-pointer px-6 py-2 button-item text-white">
        Submit
      </button>
    </div>
  );
};

export default FormComponent;
