import React from "react";
import VolunteerExtra from "../misc/VolunteerExtra";

const Extra = () => {
  return (
    <div className="w-1/5 bg-brown-500 shadow ">
      <div className=" px-4 py-4 ">
        <div className="text-sm">
          <h1 className="text-xl font-bold border-b mb-4">HOTLINES</h1>
          <p className="mb-2">
            <span className="font-bold">EMERGENCY HOTLINE</span> - 911
          </p>
          <p className="mb-2">
            <span className="font-bold">NDRRMC </span>- (02) 8911-5061 to 65 LOC
            100
          </p>
          <p className="mb-2">
            <span className="font-bold">PAGASA </span>- (02) 8284-0800
          </p>
          <p className="mb-2">
            <span className="font-bold">MMDA </span>- (02) 882 4151 to 77
          </p>
          <p className="mb-2">
            <span className="font-bold">COAST GUARD </span>- (02) 8527-3877
          </p>
          <p className="mb-2">
            <span className="font-bold">RED CROSS </span>- 143 OR (02) 8527-8385
            to 95
          </p>
          <p className="mb-2">
            <span className="font-bold">PNP </span>- 117 OR (02) 8722-0650
          </p>
          <p className="mb-2">
            <span className="font-bold">PHIVOLCS </span>- (02) 8426-1468 TO 79
          </p>
          <p>
            <span className="font-bold">BFP </span>- (02) 8426-0219; (02)
            8426-0246
          </p>
        </div>
        <div className="text-sm mt-4">
          <h1 className="text-xl font-bold border-b mb-4">VOLUNTEERS</h1>
          <VolunteerExtra />
          <VolunteerExtra />
          <VolunteerExtra />
          <VolunteerExtra />
          <VolunteerExtra />
        </div>
      </div>
    </div>
  );
};

export default Extra;
