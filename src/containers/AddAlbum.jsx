import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import back from "../images/back.svg";

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

  const [searchTags, setSearchTags] = useState([]);
  const [value, setValue] = useState(null);

  const handleAddSearchTag = () => {
    setSearchTags([...searchTags, value]);
    setValue(null);
    setValue("");
  };

  const handleDelete = (index) => {
    let list = [...searchTags];
    list.splice(index, 1);
    setSearchTags(list);
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
          <div className="col-start-2 col-span-10 grid grid-cols-12 border-2 border-[#E2E8F0] rounded-lg h-[36rem] overflow-y-auto">
            <div className="col-start-2 col-span-4 text-center">
              <div
                className="w-[320px] h-[400px] bg-slate-200 mx-auto rounded-lg mt-10 drop-shadow-md flex items-center justify-center"
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
            <div className="col-start-7 col-span-5">
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-10 ">
                Album Name:
              </p>
              <input
                type="text"
                // defaultValue={students.group.students.leader.email}
                // onChange={(e) => setLeaderEmail(e.target.value)}
                className="bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
              />
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-12 ">
                Author Name:
              </p>
              <input
                type="text"
                // defaultValue={students.group.students.leader.email}
                // onChange={(e) => setLeaderEmail(e.target.value)}
                className="bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
              />
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-12 ">
                Category:
              </p>
              <select
                // value={firstMemberFormData.specialization}
                // onChange={(e) =>
                //   setFirstMemberFormData({
                //     ...firstMemberFormData,
                //     specialization: e.target.value,
                //   })
                // }
                className="mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[25rem] sm:w-[25rem] rounded-md focus:ring-1"
              >
                <option value="" disabled selected hidden></option>
                <option value="novels">Novels</option>
                <option value="short stories">Short Stories</option>
                <option value="translation">Translation</option>
                <option value="other">Other</option>
              </select>
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-14 ">
                Episode Count:
              </p>
              <input
                type="number"
                // defaultValue={students.group.students.leader.email}
                // onChange={(e) => setLeaderEmail(e.target.value)}
                className="bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
              />
            </div>
            <div className="col-start-2 col-span-10">
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-9 ">
                Preview Text:
              </p>
              <textarea
                // onChange={(e) => setDescription(e.target.value)}
                className=" border-2 w-[48rem] rounded-md h-20 py-1 px-2 resize-none mt-1 outline-0 focus:border-sky-500 focus:ring-sky-500 "
              />
              <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-9 ">
                Tagline:
              </p>
              <textarea
                // onChange={(e) => setDescription(e.target.value)}
                className=" border-2 w-[48rem] rounded-md h-20 py-1 px-2 resize-none mt-1 outline-0 focus:border-sky-500 focus:ring-sky-500 "
              />
              <div className="flex flex-row items-end gap-4 mt-[-1rem]">
                <div>
                  <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-14 ">
                    Search Tags:
                  </p>
                  <input
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                  />
                </div>
                <button
                  className="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out h-9"
                  onClick={handleAddSearchTag}
                >
                  add
                </button>
              </div>
              <div className="h-24 w-96 bg-slate-200 rounded-lg mt-2 mb-4">
                {searchTags.map((object, index) => (
                  <div className="flex flex-row">
                    <h2>{object}</h2>
                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAlbum;
