import { useState } from "react";

const FormComponent = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <label>Email: </label>
          <input className="border w-full " />
        </div>
        <div>
          <label>Name: </label>
          <input className="border w-full " />
        </div>
        <div>
          <label>Tel: </label>
          <input className="border w-full " />
        </div>
      </div>
      <div>
        <label>Message:</label>
        <textarea className="border w-full" />
      </div>
      <button className="border-2 cta-color">Submit</button>
    </div>
  );
};

export default FormComponent;
