import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Switch, Text } from "components";

const DisableadsPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_7.svg"
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
            <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start w-full">
              <div className="sm:h-9 h-[41px] md:h-[97px] pt-1 relative w-full">
                <div className="absolute bottom-[0] h-9 md:h-[97px] inset-x-[0] mx-auto w-full">
                  <div className="absolute flex flex-col gap-3 h-max inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[154px] w-[34%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body13"
                      >
                        Notifications
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body13"
                      >
                        General settings
                      </Text>
                    </div>
                    <Line className="bg-gray_300_02 h-px w-full" />
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-start justify-start left-[4%] my-auto w-[58%]">
                    <Text
                      className="font-medium mb-4 text-blue_gray_400_02"
                      variant="body13"
                    >
                      My Profile
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[171px] text-blue_gray_400"
                      variant="body13"
                    >
                      Language
                    </Text>
                    <Line className="bg-blue_A700_01 h-0.5 md:ml-[0] ml-[273px] md:mt-0 mt-[34px] w-[5%]" />
                  </div>
                </div>
                <Text
                  className="absolute font-medium right-[45%] text-blue_gray_400 top-[0]"
                  variant="body13"
                >
                  Theme
                </Text>
                <Text
                  className="absolute font-medium right-[39%] text-blue_A700_01 top-[0]"
                  variant="body13"
                >
                  Ads
                </Text>
              </div>
              <List
                className="flex-col gap-6 grid items-center w-[61%]"
                orientation="vertical"
              >
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start mt-[5px]">
                    <Text
                      className="font-gilroy font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Disable Ads
                    </Text>
                    <Text
                      className="font-normal font-roboto text-blue_gray_400"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur{" "}
                    </Text>
                  </div>
                  <Switch value={true} className="w-[7%]" />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mt-[7px]">
                    <Text
                      className="font-gilroy font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Disable personalized Ads
                    </Text>
                    <Text
                      className="font-normal font-roboto text-blue_gray_400"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur{" "}
                    </Text>
                  </div>
                  <Switch value={true} className="w-[7%]" />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mt-[7px]">
                    <Text
                      className="font-gilroy font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Google Ads
                    </Text>
                    <Text
                      className="font-normal font-roboto text-blue_gray_400"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur{" "}
                    </Text>
                  </div>
                  <Switch value={true} className="w-[7%]" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisableadsPage;
