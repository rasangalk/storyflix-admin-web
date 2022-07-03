import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import back from "../images/back.svg";
import "./AddAlbum.css";

function AddAlbum() {
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      alert("file not supported!");
    }
  };

  return (
    <div className="bg-[#F9F9F9] w-screen h-screen grid grid-cols-12">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-span-11 mx-auto">
        <div className="grid grid-cols-12 grid-rows-6 bg-white w-[65rem] h-[48rem] mt-[2rem] rounded-2xl drop-shadow-2xl">
          <div className="col-span-12">
            <div className="flex flex-row items-end ml-8">
              <img src={back} alt="back" />
              <h2 className="pb-[2px] font-semibold text-4xl ml-6 mt-8">
                Albums
              </h2>
            </div>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-12 border-2 border-[#E2E8F0] rounded-lg h-[36rem]">
            <div className="col-start-2 col-span-4 text-center">
              <div
                className="w-[200px] h-[250px] bg-slate-200 mx-auto rounded-lg mt-10 drop-shadow-md flex items-center justify-center"
                style={{
                  background: imagePreview
                    ? `url('${imagePreview}')no-repeat center/cover`
                    : "#D9D9D9",
                }}
              >
                {!imagePreview && (
                  <>
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer text-black font-semibold text-sm text-center py-[100px] px-[45px]"
                    >
                      Choose Cover
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </>
                )}
              </div>
              {imagePreview && (
                <button
                  onClick={() => {
                    setImagePreview(null);
                  }}
                  className="mt-4 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  remove
                </button>
              )}
            </div>
            <div className="col-start-7 col-span-5">hhhhh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAlbum;
