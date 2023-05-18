import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const StatisticsReportsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_11.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer m-3"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray300"
                ></Input>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
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
                    src="images/img_profileimglarg_85X85.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
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
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Timesheets
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        src="images/img_chartlineoutl.svg"
                        className="h-6 w-6"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700"
                        variant="body13"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start p-2 w-full">
                    <Line className="bg-blue_A700_01 h-6 my-[9px] w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-3/4">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_A700_01"
                        variant="body13"
                      >
                        Statistics & Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Notifications
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
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
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
            </Sidebar>
            <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[57px] w-full">
              <Text className="font-semibold text-black_900" variant="body12">
                Statistics & Reports
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray_50 border-b border-blue_gray_100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[13px] w-full">
                  <Text
                    className="font-medium sm:ml-[0] ml-[18px] text-blue_gray_600"
                    variant="body13"
                  >
                    Services
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[252px] text-blue_gray_600"
                    variant="body13"
                  >
                    Shares
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[263px] text-blue_gray_400"
                    variant="body15"
                  >
                    Clicks
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[276px] text-blue_gray_400"
                    variant="body15"
                  >
                    Virality
                  </Text>
                </div>
                <List
                  className="flex-col md:gap-5 gap-[0] grid items-center mt-0.5 w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray_50_03 border-b border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-1 pt-1 w-[99%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Copy Text
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[239px] text-blue_gray_900"
                        variant="body13"
                      >
                        1,032
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[277px] text-blue_gray_900"
                        variant="body13"
                      >
                        232
                      </Text>
                      <Text
                        className="font-medium ml-72 md:ml-[0] text-blue_gray_900"
                        variant="body13"
                      >
                        000.00%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50_03 border-b border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-row items-start justify-between pr-1 py-1 w-[99%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Email
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        845
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        234
                      </Text>
                      <Text
                        className="font-medium mr-[15px] text-blue_gray_900"
                        variant="body13"
                      >
                        23.45%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50_03 border-b border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-1 py-1 w-[99%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Facebook
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[239px] text-blue_gray_900"
                        variant="body13"
                      >
                        623
                      </Text>
                      <Text
                        className="font-medium ml-72 md:ml-[0] text-blue_gray_900"
                        variant="body13"
                      >
                        12
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[299px] text-blue_gray_900"
                        variant="body13"
                      >
                        0.23%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50_03 border-b border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="font-medium md:mt-0 mt-[5px] text-blue_gray_900"
                        variant="body13"
                      >
                        Google+
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[250px] md:mt-0 mt-1 text-blue_gray_900"
                        variant="body13"
                      >
                        553
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[287px] md:mt-0 mt-1 text-blue_gray_900"
                        variant="body13"
                      >
                        123
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[291px] md:mt-0 mt-1 text-blue_gray_900"
                        variant="body13"
                      >
                        13.43%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50_03 border-b border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-1 py-1 w-[99%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Reddit
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[265px] text-blue_gray_900"
                        variant="body13"
                      >
                        434
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[286px] text-blue_gray_900"
                        variant="body13"
                      >
                        43
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[295px] text-blue_gray_900"
                        variant="body13"
                      >
                        10.21%
                      </Text>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-medium min-w-[145px] md:ml-[0] ml-[931px] mt-8 text-base text-center text-white_A700"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="FillBlueA70001"
                >
                  View Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsReportsPage;
