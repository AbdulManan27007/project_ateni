import React from "react";
import Image from "next/image";
export const page = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex max-w-[296px] w-full h-screen bg-white justify-center items-center text-h1 font-extrabold">
        Sidebar
      </div>
      <div className=" w-full ">
        <div className="bg-[url('/images/dashboard/dashboard_back.png')] bg-no-repeat bg-cover h-full ">
          <div className="flex flex-col justify-center items-center pt-[90px]">
            <Image
              src="/images/dashboard/Avatar.png"
              height={160}
              width={160}
              alt=""
            />
            <div className="space-y-1 text-center">
              <p className="font-inter text-h2 font-semibold text-darkGray">
                Welcome back, Im Margot
              </p>
              <p className="font-inter text-h4 font-normal text-lightGray ">
                How can I help you get new customers?
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between px-8 pt-[36px]">
            <div className="space-y-1">
              <p className="font-plus_jakarta_sans text-h2 font-semibold text-darkGray">Dashboard</p>
              <p className="font-plus_jakarta_sans text-h4 font-normal text-lightGray">Lorem ipsum dolor sit amet consectetur elit.</p>
            </div>
            <div className="space-x-3">
              <button className="px-[14px] py-[10px] rounded-[8px] border text-center bg-white "><p className="font-plus_jakarta_sans font-semibold text-midgray text-h5">Lorem ipsum</p></button>
              <button className="px-[14px] py-[10px] rounded-[8px] border text-center bg-blue"><p className="font-plus_jakarta_sans font-semibold text-white text-h5">Create campaign</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
