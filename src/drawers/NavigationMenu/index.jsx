import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const NavigationMenuDrawer = (props) => {
  return (
    <Drawer placement="left" className="!w-[22%]" {...props}>
      <div>
        <div className="flex flex-col font-gilroy items-start justify-start mx-auto sm:w-full md:w-full">
          <Sidebar className="!sticky !w-[310px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-gray_50_03 flex flex-col md:gap-10 gap-[375px] h-[1080px] md:h-auto items-start justify-start p-6 sm:px-5 w-[310px]">
              <div className="flex flex-col gap-8 h-[478px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Img
                    src="images/img_81.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="EightyOne"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="font-semibold text-blue_gray_900 w-full"
                      variant="body13"
                    >
                      Ashfak Sayem
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400 w-full"
                      variant="body16"
                    >
                      ashfaksayem@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="bg-blue_A700_01 flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-6 w-6"
                        alt="calendar"
                      />
                      <Text
                        className="flex-1 font-semibold text-white_A700 w-auto"
                        variant="body13"
                      >
                        Calendar
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] text-[10px] text-black_900 text-center tracking-[-0.10px] w-5"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillLightblue100"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_iconoutline.svg"
                        className="h-6 w-6"
                        alt="IconOutline"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Rewards
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] text-[10px] text-black_900 text-center tracking-[-0.10px] w-5"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillRed200"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_location.svg"
                        className="h-6 w-6"
                        alt="location"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Address
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_calendar_24X24.svg"
                        className="h-6 w-6"
                        alt="calendar Two"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Payments Methods
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_settings_2.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Offers
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] text-[10px] text-black_900 text-center tracking-[-0.10px] w-5"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillGreenA100"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_user_2.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Refer a Friend
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_call.svg"
                        className="h-6 w-6"
                        alt="call"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Support
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-blue_gray_100_6c h-0.5 rounded-[1px] w-full" />
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        src="images/img_question_1.svg"
                        className="h-6 w-6"
                        alt="question"
                      />
                      <Text
                        className="flex-1 font-semibold text-blue_gray_700_01 w-auto"
                        variant="body13"
                      >
                        Colour Scheme
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_200 flex flex-row gap-1 items-center justify-center p-1 rounded-[20px] w-full">
                  <div className="bg-white_A700 flex flex-1 flex-row gap-2 items-center justify-center pl-2 pr-4 py-1 rounded-[16px] shadow-bs13 w-full">
                    <Img
                      src="images/img_brightness.svg"
                      className="h-6 w-6"
                      alt="brightness"
                    />
                    <Text
                      className="font-semibold text-blue_gray_700_01 w-auto"
                      variant="body15"
                    >
                      Light
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-center pl-2 pr-4 py-1 rounded-[16px] w-full">
                    <Img
                      src="images/img_uiiconmoonli.svg"
                      className="h-6 w-6"
                      alt="UIiconmoonli"
                    />
                    <Text
                      className="font-semibold text-blue_gray_700_01 w-auto"
                      variant="body15"
                    >
                      Dark
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationMenuDrawer;
