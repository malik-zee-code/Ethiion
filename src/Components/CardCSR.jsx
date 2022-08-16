import { Checkbox } from "@mui/material";
import React from "react";

const CardCSR = ({ name, image, role,check }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="w-full bg-white shadow-lg flex mt-5 p-8 items-center rounded-md">
      <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} defaultChecked={check}/>

      <img
        src={image}
        alt=""
        className="object-cover w-[70px] h-[70px] rounded-full"
      />

      <div className="flex flex-col ml-5 ">
        <span className="text-xl">{name}</span>
        <span className="text-slate-400">{role}</span>
      </div>
    </div>
  );
};

export default CardCSR;
