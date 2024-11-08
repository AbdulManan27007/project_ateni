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
          <div className="flex flex-row w-full justify-between px-8 py-9">
            <div className="space-y-1">
              <p className="font-plus_jakarta_sans text-h2 font-semibold text-darkGray">
                Dashboard
              </p>
              <p className="font-plus_jakarta_sans text-h4 font-normal text-lightGray">
                Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </div>
            <div className=" space-x-3  flex flex-row">
              <div>
                <button className="flex flex-row px-[14px] py-[10px] rounded-[8px] shadow-custom-light border border-[#D5D7DA] text-center bg-white gap-1">
                  <Image
                    src="/images/dashboard/circle_button.png"
                    height={20}
                    width={20}
                    alt=""
                  />{" "}
                  <p className="font-plus_jakarta_sans font-semibold text-midgray text-h5">
                    Lorem ipsum
                  </p>
                </button>
              </div>
              <div>
                <button className="flex flex-row px-[14px] py-[10px] rounded-[8px] shadow-custom-light border text-center bg-blue gap-1">
                  <p className="font-plus_jakarta_sans font-semibold text-white text-h5">
                    Create campaign
                  </p>
                  <Image
                    src="/images/dashboard/announcement_button.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[346px] w-full border-2 rounded-[12px] border-blue shadow-custom_shadow">
            <div className=" max-w-[250px] w-full my-[20px]">
              <div className="font-plus_jakarta_sans text-h5 font-semibold text-lightGray">Campaigns</div>
              <div className="flex justify-between ">
                <div className="font-plus_jakarta_sans text-h1 font-semibold text-darkGray">10</div>
                <div className="my-[7px]">
                  <div className="flex flex-row py-[2px] px-[6px] border border-[#D5D7DA] rounded-[6px] items-center justify-center space-x-1 shadow-custom_shadow">
                    <div>
                      <Image
                        src="/images/dashboard/arrow-up-right.png"
                        height={12}
                        width={12}
                        alt=""
                      />
                    </div>
                    <p className="font-inter text-h5 text-center font-medium text-midgray">2.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
