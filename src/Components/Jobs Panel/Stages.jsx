import React, { useEffect, useState } from "react";
import { useCallback } from "react";

const Stages = ({ value }) => {
  const [toggle, setToggle] = useState();

  const settingValue = useCallback(() => setToggle(value), [value]);

  useEffect(() => {
    settingValue();
  }, [settingValue]);

  console.log("Toggle", toggle);
  return (
    <>
      {" "}
      <button
        className={`btn no-animation ${
          toggle === "Applied"
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-200 hover:bg-slate-200"
        }   border-none  font-normal capitalize rounded-full tracking-wider mr-5 text-black `}
        onClick={() => setToggle("Applied")}
      >
        Applied
      </button>
      <button
        className={`btn no-animation ${
          toggle === "H. Screen"
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-200 hover:bg-slate-200"
        } border-none  font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
        onClick={() => setToggle("H. Screen")}

      >
        h. Screen
      </button>
      <button
        className={`btn no-animation ${
          toggle === "Assesment"
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-200 hover:bg-slate-200"
        }  border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
        onClick={() => setToggle("Assesment")}

      >
        Assesment
      </button>
      <button
        className={`btn no-animation ${
          toggle === "Interview"
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-200 hover:bg-slate-200"
        } border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
        onClick={() => setToggle("Interview")}

      >
        Interview
      </button>
      <button
        className={`btn no-animation ${
          toggle === "Offer"
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-200 hover:bg-slate-200"
        }  border-none font-normal capitalize rounded-full tracking-wider mr-5 text-black`}
        onClick={() => setToggle("Offer")}

      >
        offer
      </button>
    </>
  );
};

export default Stages;
