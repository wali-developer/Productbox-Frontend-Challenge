"use client";

import getBase64 from "@/utils/getBase64";
import Image from "next/image";
import React, { useState } from "react";

const ImagePicker = (props) => {
  const { label, file, onChange, error } = props;
  const [image, setImage] = useState("");
  return (
    <div className="w-full block">
      <p className="text-black/90 text-sm mb-2">{label}</p>
      <div className="flex gap-x-4 items-center">
        <label className="w-full h-[47px] bg-lightBg text-[13px] flex items-center pl-5 rounded-lg overflow-hidden">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
              getBase64(e.target.files[0])
                .then((data) => onChange(data))
                .catch((err) => console.log(err));
            }}
          />
          <span className="flex-1 text-[#8E8E8E] text-[13px]">
            {image ? image.name : "Upload image"}
          </span>
          <span className="w-[107px] h-full bg-black/90 text-center flex items-center justify-center text-white text-[13px]">
            Browse
          </span>
        </label>
        {file && (
          <div className="w-[57px] h-[47px] rounded-lg overflow-hidden">
            <Image
              src={file}
              alt="Preview"
              width={57}
              height={47}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      {error && <p className="text-sm text-[#F85757] mt-2">{error}</p>}
    </div>
  );
};

export default ImagePicker;
