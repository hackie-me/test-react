import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Switch, Text } from "components";

const EnableLinkedAccountsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_35X162.svg"
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
          <div className="flex flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-col gap-9 items-center justify-start w-full">
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] w-[73%] md:w-full">
                    <Text
                      className="font-medium md:mt-0 my-0.5 text-blue_gray_400"
                      variant="body13"
                    >
                      Profile Settings
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-blue_A700_01"
                      variant="body13"
                    >
                      Notifications
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] md:mt-0 mt-[3px] text-blue_gray_400"
                      variant="body13"
                    >
                      Privacy
                    </Text>
                    <Text
                      className="font-medium ml-11 md:ml-[0] md:mt-0 mt-[5px] text-blue_gray_400"
                      variant="body13"
                    >
                      Discovery Settings
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] md:mt-0 my-0.5 text-blue_gray_400"
                      variant="body13"
                    >
                      Data Usage
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] md:mt-0 my-0.5 text-blue_gray_400"
                      variant="body13"
                    >
                      Display & Theme
                    </Text>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Line className="bg-gray_300_02 h-px mx-auto w-full" />
                    <Line className="bg-blue_A700_01 h-0.5 mb-auto ml-[173px] mt-[-1px] w-[11%] z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-center justify-start w-[52%] md:w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body4"
              >
                Enable Linked Accounts
              </Text>
              <List
                className="flex-col gap-8 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[26%]">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      size="lgIcn"
                      variant="icbFillBlue50"
                    >
                      <Img
                        src="images/img_instagram.svg"
                        className="h-6"
                        alt="instagram"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900"
                      variant="body12"
                    >
                      Instagram
                    </Text>
                  </div>
                  <Switch value={true} className="w-[9%]" />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[21%]">
                    <Button
                      className="common-pointer flex h-10 items-center justify-center rounded-[50%] w-10"
                      onClick={() => navigate("")}
                      size="lgIcn"
                      variant="icbFillBlue50"
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-6"
                        alt="twitter"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900"
                      variant="body12"
                    >
                      Twitter
                    </Text>
                  </div>
                  <Switch value={true} className="w-[9%]" />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[26%]">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      size="lgIcn"
                      variant="icbFillBlue50"
                    >
                      <Img
                        src="images/img_facebook.svg"
                        className="h-6"
                        alt="facebook"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900"
                      variant="body12"
                    >
                      Facebook
                    </Text>
                  </div>
                  <Switch value={false} className="w-[9%]" />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[23%]">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      size="lgIcn"
                      variant="icbFillBlue50"
                    >
                      <Img
                        src="images/img_layoutube.svg"
                        className="h-6"
                        alt="layoutube"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900"
                      variant="body12"
                    >
                      Youtube
                    </Text>
                  </div>
                  <Switch value={true} className="w-[9%]" />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[24%]">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      size="lgIcn"
                      variant="icbFillBlue50"
                    >
                      <Img
                        src="images/img_send.svg"
                        className="h-6"
                        alt="send"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900"
                      variant="body12"
                    >
                      Telegram
                    </Text>
                  </div>
                  <Switch value={false} className="w-[9%]" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnableLinkedAccountsPage;
