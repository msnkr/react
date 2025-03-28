import { useState } from "react";

const FormComponent = () => {
  return (
    <div className="px-12 space-y-4">
      <div className="space-y-4">
        <div>
          <label>Email: </label>
          <input className="border w-full p-2" />
        </div>
        <div>
          <label>Name: </label>
          <input className="border w-full p-2" />
        </div>
        <div>
          <label>Tel: </label>
          <input className="border w-full p-2" />
        </div>
      </div>
      <div>
        <label>Message:</label>
        <textarea className="border w-full p-4 h-40" />
      </div>
      <button className="border px-4 py-1">Submit</button>
    </div>
  );
};

export default FormComponent;
