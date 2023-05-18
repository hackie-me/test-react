import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const DesktopNotificationPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392.svg"
                className="h-[35px] mx-auto w-[65%]"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-12 w-3/5 md:w-full">
                <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                    <Img
                      src="images/img_save.svg"
                      className="h-6 w-6"
                      alt="save"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_700"
                      variant="body13"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      src="images/img_dollaraltsoli.svg"
                      className="h-6 w-6"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700"
                      variant="body13"
                    >
                      Payments
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_walletoutline.svg"
                      className="h-6 w-6"
                      alt="walletOutline"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_700"
                      variant="body13"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_700"
                      variant="body13"
                    >
                      Transactions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-6 w-6"
                      alt="checkmark"
                    />
                    <Text
                      className="font-semibold mt-1 text-blue_gray_700"
                      variant="body13"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      src="images/img_menu.svg"
                      className="h-6 w-6"
                      alt="menu"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700"
                      variant="body13"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-[67%] md:w-full">
                  <Line className="bg-blue_A700_01 h-6 w-0.5" />
                  <Img
                    src="images/img_settings.svg"
                    className="h-6 ml-1.5 w-6"
                    alt="settings"
                  />
                  <Text
                    className="font-semibold ml-2 mt-[5px] text-blue_A700_01"
                    variant="body13"
                  >
                    Settings
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
                <Img
                  src="images/img_question.svg"
                  className="h-6 w-6"
                  alt="question"
                />
                <Text
                  className="font-semibold mt-[5px] text-blue_gray_700"
                  variant="body13"
                >
                  Help
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[52px] items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Text
                  className="font-semibold mb-0.5 md:mt-0 mt-3.5 text-blue_gray_900"
                  variant="body2"
                >
                  Settings
                </Text>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[819px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white_A700 top-[0] w-[18px]"
                      variant="body16"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
              <div className="md:h-8 h-[39px] pt-0.5 relative w-full">
                <div className="absolute bottom-[0] h-8 inset-x-[0] mx-auto w-full">
                  <Line className="absolute bg-gray_300_02 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                  <div className="absolute flex flex-col gap-3.5 h-full inset-y-[0] justify-start left-[16%] my-auto w-[35%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[235px] text-blue_gray_400"
                      variant="body13"
                    >
                      Discovery Settings
                    </Text>
                    <Line className="bg-blue_A700_01 h-0.5 mr-[258px] w-[31%]" />
                  </div>
                </div>
                <Text
                  className="absolute font-medium left-[17%] text-blue_A700_01 top-[0]"
                  variant="body13"
                >
                  Notifications
                </Text>
                <Text
                  className="absolute font-medium left-[4%] text-blue_gray_400 top-[8%]"
                  variant="body13"
                >
                  Profile Settings
                </Text>
                <Text
                  className="absolute font-medium left-[29%] text-blue_gray_400 top-[8%]"
                  variant="body13"
                >
                  Privacy
                </Text>
                <Text
                  className="absolute font-medium right-[38%] text-blue_gray_400 top-[8%]"
                  variant="body13"
                >
                  Data Usage
                </Text>
                <Text
                  className="absolute font-medium right-[24%] text-blue_gray_400 top-[8%]"
                  variant="body13"
                >
                  Display & Theme
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-[61%] md:w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body4"
              >
                Desktop Notifications
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pt-[3px] w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-1 pb-1">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Design & Prototype
                    </Text>
                    <div className="flex flex-col font-roboto gap-2.5 items-center justify-start mt-[3px] w-full">
                      <Text
                        className="font-normal leading-[20.00px] text-blue_gray_400 w-full"
                        variant="body15"
                      >
                        <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                          Design
                        </span>
                        <span className="text-colors3 text-sm font-gilroy text-left font-medium">
                          {" "}
                          -{" "}
                        </span>
                        <span className="text-colors3 text-sm font-gilroy text-left">
                          We combine visual principles, data, color, psychology
                          and decades worth of experience to create asthetic
                          interfaces that bring results.
                        </span>
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                          Prototype
                        </span>
                        <span className="text-colors3 text-sm font-gilroy text-left font-medium">
                          {" "}
                          -{" "}
                        </span>
                        <span className="text-colors3 text-sm font-gilroy text-left">
                          We design interactive prototypes for iPhone, iPad,
                          Android & Web.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-6 items-center justify-center mb-[83px] w-6"
                    shape="icbRoundedBorder3"
                    size="smIcn"
                    variant="icbFillBlueA70001"
                  >
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-5"
                      alt="checkmark One"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[31px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Product Requirements
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    We help layout the foundation of what you are building.
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[23px] pr-[7px] pt-[7px] w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Development
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    We help design a minimum viable product that has the basic
                    features necessary to satisfy.
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-end mt-6 pr-[7px] pt-[7px] w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Upgrade Insurance
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    We will work in gathering requirements making information
                    architecture.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNotificationPage;
