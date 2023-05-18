import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const CustomisableUserProfilePage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_5.svg"
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
            <div className="flex flex-col gap-[59px] items-center justify-start w-full">
              <div className="sm:h-[297px] md:h-[37px] h-[41px] pt-1 relative w-full">
                <Line className="absolute bg-gray_300_02 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[34px] items-start justify-between left-[3%] w-[69%]">
                  <div className="flex flex-col gap-3.5 items-center justify-start">
                    <Text
                      className="font-medium text-blue_A700_01"
                      variant="body13"
                    >
                      My Profile
                    </Text>
                    <Line className="bg-blue_A700_01 h-0.5 w-full" />
                  </div>
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
                    Language
                  </Text>
                  <Text
                    className="font-medium sm:mt-0 mt-0.5 text-blue_gray_400"
                    variant="body13"
                  >
                    General settings
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body13"
                  >
                    Theme
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body13"
                  >
                    Help and feedback
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[49%] md:w-full">
                <div className="h-[93px] relative w-[93px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[93px] m-auto rounded-[50%] w-[93px]"
                    alt="ProfileImgLarg One"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-[23px] items-center justify-center right-[0] w-[23px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbOutlineGray5010"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="h-[15px]"
                      alt="edit"
                    />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-end pt-[5px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body12"
                        >
                          First Name
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                          name="Group10198"
                          placeholder="Enter First Name"
                          shape="RoundedBorder6"
                          size="4xl"
                          variant="OutlineBluegray100"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body12"
                        >
                          Last Name
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                          name="Group10198 One"
                          placeholder="Enter Last Name"
                          shape="RoundedBorder6"
                          size="4xl"
                          variant="OutlineBluegray100"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Email
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                        name="Group10198 Two"
                        placeholder="Enter Your Email"
                        shape="RoundedBorder6"
                        size="4xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-[19px] rounded-lg w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Mobile Number
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                        name="Group10198 Three"
                        placeholder="Enter Your Number"
                        shape="RoundedBorder6"
                        size="4xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Address
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                        name="Group10199"
                        placeholder="Enter Your Address"
                        shape="RoundedBorder6"
                        size="4xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center text-white_A700"
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
      </div>
    </>
  );
};

export default CustomisableUserProfilePage;
