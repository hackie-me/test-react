import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ContentDeliveryNetworkPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_3.svg"
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
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-8 w-full">
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
            <div className="flex flex-col gap-7 items-center justify-start pt-1 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] w-[67%] md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      My Profile
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[50px] text-blue_gray_400"
                      variant="body13"
                    >
                      Notifications
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[50px] text-blue_gray_400"
                      variant="body13"
                    >
                      Language
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[50px] md:mt-0 mt-0.5 text-blue_gray_400"
                      variant="body13"
                    >
                      General settings
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[50px] text-blue_gray_400"
                      variant="body13"
                    >
                      Theme
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[49px] text-blue_A700_01"
                      variant="body13"
                    >
                      Network
                    </Text>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Line className="bg-gray_300_02 h-px mx-auto w-full" />
                    <Line className="bg-blue_A700_01 h-0.5 mb-auto ml-auto mr-[305px] mt-[-1px] w-[9%] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <div className="bg-white_A700 flex flex-col gap-[18px] items-start justify-start mb-[135px] p-4 rounded-lg">
                  <Text
                    className="font-medium mt-1 text-blue_gray_600"
                    variant="body13"
                  >
                    Overview
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_600"
                    variant="body13"
                  >
                    Domains
                  </Text>
                  <Text
                    className="font-medium text-blue_A700_01"
                    variant="body13"
                  >
                    CDN
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_600"
                    variant="body13"
                  >
                    SSL
                  </Text>
                  <Text
                    className="font-medium mb-[5px] text-blue_gray_600"
                    variant="body13"
                  >
                    STFP Users
                  </Text>
                </div>
                <div className="border border-blue_gray_300 border-solid flex md:flex-1 flex-col items-start justify-end md:mt-0 mt-[22px] p-6 sm:px-5 rounded-lg w-[83%] md:w-full">
                  <Text
                    className="font-semibold mt-[9px] text-blue_gray_900"
                    variant="body4"
                  >
                    CDN
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-[33px] w-full">
                    <Text
                      className="font-semibold text-blue_gray_700"
                      variant="body12"
                    >
                      Domain
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_700"
                      variant="body12"
                    >
                      Enable CDN
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-7 w-full">
                    <Text
                      className="common-pointer font-medium mt-[3px] text-black_900"
                      variant="body12"
                      onClick={() => navigate("")}
                    >
                      www.mydomain.com
                    </Text>
                    <Button
                      className="flex h-5 items-center justify-center mb-[5px] w-5"
                      shape="icbRoundedBorder3"
                      size="smIcn"
                      variant="icbFillBlueA70001"
                    >
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="h-4"
                        alt="checkmark One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[23px] w-full">
                    <Text
                      className="common-pointer font-medium mt-[3px] text-black_900"
                      variant="body12"
                      onClick={() => navigate("")}
                    >
                      www.mydomain.com
                    </Text>
                    <Button
                      className="flex h-5 items-center justify-center mb-[5px] w-5"
                      shape="icbRoundedBorder3"
                      size="smIcn"
                      variant="icbFillBlueA70001"
                    >
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="h-4"
                        alt="checkmark Two"
                      />
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[190px] md:ml-[0] ml-[652px] mt-[19px] text-base text-center text-white_A700"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="FillBlueA70001"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDeliveryNetworkPage;
