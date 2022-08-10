import React from "react";

const Stats = ({ value, title, className }) => {
  return (
    <div className={`stats  ${className}`}>
      <div className="stat px-10">
        <div className="stat-value text-black text-[28px] text-center font-medium">
          {value}
        </div>
        <div className="stat-title text-center text-md text-slate-500 tracking-wide mt-3">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Stats;
