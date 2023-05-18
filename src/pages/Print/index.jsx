import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const PrintPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start md:px-5 w-[95%] md:w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_8.svg"
                className="h-[35px] mt-[3px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[375px] items-center justify-start mb-2 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
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
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
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
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] rounded-lg w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-center justify-start w-1/2">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body13"
                      >
                        Documents
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
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
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
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
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
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
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
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
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[42px] items-center justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="header-row mt-3.5 mb-[13px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body4"
                  >
                    Documents
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-row font-opensans gap-6 sm:hidden items-center justify-between w-[14%]">
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
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
                  <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      alt="ProfileImgLarg"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="bg-gray_50 flex flex-col gap-3 h-[196px] md:h-auto items-center justify-center max-w-[1022px] outline outline-[2px] outline-blue_A700_01 sm:px-5 px-8 py-[15px] rounded-md w-full">
                <Img
                  src="images/img_file_26X26.svg"
                  className="h-[26px] w-[26px]"
                  alt="file One"
                />
                <Text
                  className="font-medium text-blue_gray_600 w-auto"
                  variant="body12"
                >
                  Add a File Here or
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[96px]"
                  leftIcon={
                    <Img
                      src="images/img_upload.svg"
                      className="ml-3 mr-2 my-[9px]"
                      alt="upload"
                    />
                  }
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBlueA70001"
                >
                  <div className="font-medium text-blue_A700_01 text-left text-sm">
                    Upload
                  </div>
                </Button>
              </div>
              <List
                className="flex-col gap-[22.95px] grid items-center pb-[3px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-6 w-6"
                        alt="file Two"
                      />
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-blue_A700_01 text-center text-sm"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-6 w-6"
                        alt="file Three"
                      />
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-blue_A700_01 text-center text-sm"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-6 w-6"
                        alt="file Four"
                      />
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-blue_A700_01 text-center text-sm"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start pr-0.5 py-0.5">
                      <Img
                        src="images/img_file_1.svg"
                        className="h-6 w-6"
                        alt="file Five"
                      />
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        File Name
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-blue_A700_01 text-center text-sm"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Print
                    </Button>
                  </div>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPage;
