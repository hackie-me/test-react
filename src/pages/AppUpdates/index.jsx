import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const AppUpdatesPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
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
          <div className="flex flex-1 flex-col gap-[51px] justify-start md:mt-0 mt-8 w-full">
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
            <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] pb-[5px] w-[68%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-[24%] md:w-full">
                <Img
                  src="images/img_appstoreicon.png"
                  className="h-[50px] md:h-auto object-cover w-[50px]"
                  alt="AppStoreIcon"
                />
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body7"
                >
                  App Store
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-7 w-full">
                <Text
                  className="font-normal mt-1 text-blue_gray_900"
                  variant="body12"
                >
                  <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                    27
                  </span>
                  <span className="text-colors4 text-lg font-gilroy text-left">
                    {" "}
                    Files Uploaded,{" "}
                  </span>
                  <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                    1.20
                  </span>
                  <span className="text-colors4 text-lg font-gilroy text-left">
                    {" "}
                    GB
                  </span>
                </Text>
                <div className="!w-6 h-6 mb-0.5 overflow-visible">
                  <CircularProgressbar
                    className="!w-6 h-6 mb-0.5 overflow-visible"
                    value={40}
                    strokeWidth={8}
                    styles={{
                      trail: { strokeWidth: 8, stroke: "#d6dae2" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(0deg)",
                        stroke: "#0061ff",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[26px] w-full" />
              <div className="flex flex-col gap-3 items-start justify-start mt-[23px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Storage Date Recovery
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  250 MB
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[21px] w-full" />
              <div className="flex flex-col gap-[13px] items-start justify-start mt-[23px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Files Management
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  230 MB
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[21px] w-full" />
              <div className="flex flex-col gap-[13px] items-start justify-start mt-[23px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Google Directory
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  230 MB
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[21px] w-full" />
              <div className="flex flex-col gap-[17px] items-start justify-start mt-[21px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Document Files
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  230 MB
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[21px] w-full" />
              <div className="flex flex-col gap-[13px] items-start justify-start mt-[23px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Files Management
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  150 MB
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[21px] w-full" />
              <div className="flex flex-col gap-3 items-start justify-start mt-[23px]">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Configuration
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  100 MB
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppUpdatesPage;
