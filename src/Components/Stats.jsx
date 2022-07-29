import React from "react";

const Stats = ({ value, title, className }) => {
  return (
    <div className={`stats bg-[#ffffff]  m-4 min-w-[180px] h-[200px] flex items-center ${className}`}>
      <div className="stat px-10">
        <div className="stat-value text-black text-center font-medium">
          {value}
        </div>
        <div className="stat-title text-center text-xl text-slate-500 tracking-wide mt-3">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Stats;
