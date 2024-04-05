import React, { useState } from "react";

const UserInput = ({onChange, userInput}) => {
  

  //Styles
  const labelStyle = "block text-white mb-1 text-[0.75rem] font-bold uppercase";
  const inputStyle =
    "w-full text-white py-1 px-2 text-base border-[1px] border-[#76c0ae] rounded-sm bg-transparent ";

  return (
    <div className="w-full mt-8 py-8 bg-gradient-to-r from-[#307e6c] to-[#2b996d] ">
      <div className="flex justify-evenly gap-5">
        <p>
          <label className={labelStyle}>Initial Investment</label>
          <input
            className={inputStyle}
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label className={labelStyle}>Annual Investment</label>
          <input
            className={inputStyle}
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="flex justify-evenly gap-5 mt-4">
        <p>
          <label className={labelStyle}>Expected Return</label>
          <input
            className={inputStyle}
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label className={labelStyle}>Duration</label>
          <input
            className={inputStyle}
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;
