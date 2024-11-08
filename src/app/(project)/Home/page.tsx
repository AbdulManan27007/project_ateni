import React from "react";
import Image from "next/image";
import { Flex, Radio } from "antd";
import CampaignCard from "@/app/components/campaignCard";
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
          <div className="flex flex-row w-full justify-between dashboard_container py-9">
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
          <div className="flex flex-row space-x-[20px] dashboard_container">
            <CampaignCard
              title="Campaigns"
              count={10}
              bordercolor="border-blue"
              percentage="2.4%"
              iconSrc="/images/dashboard/announcement-button-2.png"
              arrowSrc="/images/dashboard/arrow-up-right.png"
            />
            <CampaignCard
              title="Business opportunities"
              count={8}
              bordercolor="border-[#E9EAEB]"
              percentage="6.2%"
              iconSrc="/images/dashboard/wallet-button.png"
              arrowSrc="/images/dashboard/arrow-up-right.png"
            />
            <CampaignCard
              title="Lorem ipsum"
              count={3}
              bordercolor="border-[#E9EAEB]"
              percentage="0.8%"
              iconSrc="/images/dashboard/user-circle.png"
              arrowSrc="/images/dashboard/arrow-up-right.png"
            />
          </div>
          <div className="dashboard_container">
            <div className="flex justify-between pt-9">
              <div className=" flex items-center font-inter font-semibold text-h3 text-darkGray ">
                Business opportunities found by Margot{" "}
                <span className=" text-parrotGreen">+104%</span>{" "}
              </div>
              <div className="flex flex-row gap-3">
                <div>
                  {" "}
                  <Flex vertical gap="middle">
                    <Radio.Group defaultValue="a" size="large" className="">
                      <Radio.Button value="a" className=" font-inter font-semibold text-h5 text-midgray ">12 months </Radio.Button>
                      <Radio.Button value="b" className=" font-inter font-semibold text-h5 text-midgray ">30 days</Radio.Button>
                      <Radio.Button value="c" className=" font-inter font-semibold text-h5 text-midgray ">7 days</Radio.Button>
                      <Radio.Button value="d" className=" font-inter font-semibold text-h5 text-midgray ">24 hours</Radio.Button>
                    </Radio.Group>
                  </Flex>
                </div>
                <div className="py-2 px-3 rounded-[8px] border border-[#D5D7DA] shadow-custom_shadow">
                  <button className="flex flex-row items-center gap-1">
                    {" "}
                    <Image
                      src="/images/dashboard/filter-lines.png"
                      height={20}
                      width={20}
                      alt=""
                    />{" "}
                    <p className="font-plus_jakarta_sans font-semibold text-h5 text-midgray"></p>{" "}
                    Filters
                  </button>
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
