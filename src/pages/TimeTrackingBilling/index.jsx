import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TimeTrackingBillingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_6.svg"
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
                    src="images/img_profileimglarg.png"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        src="images/img_file.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Reports
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
            <div className="flex flex-1 flex-col gap-[39px] items-start justify-start md:mt-0 mt-[39px] w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body7"
              >
                Timesheets
              </Text>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <div className="bg-white_A700 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[19px] rounded-md w-[49%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-3">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body12"
                    >
                      Worked this week
                    </Text>
                    <Text
                      className="font-medium text-blue_A700_01"
                      variant="body2"
                    >
                      32:52:18
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      40H Limit
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-3 w-[42%]">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <List
                        className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[26%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            src="images/img_group9854.png"
                            className="h-20 md:h-auto object-cover rounded w-[73%]"
                            alt="Group9854"
                          />
                          <div className="flex flex-col items-center justify-start rounded-lg w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body18"
                            >
                              Mon
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <Img
                            src="images/img_group9854.png"
                            className="h-20 md:h-auto object-cover rounded w-[73%]"
                            alt="Group9854 One"
                          />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body18"
                            >
                              Tue
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="h-24 relative w-[41%]">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start pb-[3px] w-[27%]">
                              <Img
                                src="images/img_group9854.png"
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                alt="Group9854 Two"
                              />
                              <div className="flex flex-col items-center justify-start mt-0.5 rounded-[5px] w-full">
                                <Text
                                  className="font-medium text-blue_gray_400"
                                  variant="body18"
                                >
                                  Wed
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[27%]">
                              <Img
                                src="images/img_group9854_blue_A701.png"
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                alt="Group9854 Three"
                              />
                              <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                                <Text
                                  className="font-semibold text-blue_A700_01"
                                  variant="body18"
                                >
                                  Thu
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[27%]">
                              <Img
                                src="images/img_group9854.png"
                                className="h-20 md:h-auto object-cover rounded w-[73%]"
                                alt="Group9854 Four"
                              />
                              <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                                <Text
                                  className="font-medium h-2.5 text-blue_gray_400"
                                  variant="body18"
                                >
                                  Fri
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[65%]">
                          <div className="bg-blue_A700_01 flex flex-col items-center justify-start p-1 rounded-[3px] w-full">
                            <Text
                              className="font-medium text-white_A700"
                              variant="body16"
                            >
                              7h30m
                            </Text>
                          </div>
                          <Img
                            src="images/img_corner.svg"
                            className="h-1 w-[16%]"
                            alt="Corner"
                          />
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[26%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gradient8  h-[78px] w-px" />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body18"
                            >
                              Sat
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-gradient8  h-[78px] w-px" />
                          <div className="flex flex-col items-center justify-start p-0.5 rounded-lg w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body18"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[19px] rounded-md w-[49%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-3 mt-0.5">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body12"
                    >
                      Earned this week
                    </Text>
                    <Text
                      className="font-medium text-blue_A700_01"
                      variant="body2"
                    >
                      $ 2500
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      -
                    </Text>
                  </div>
                  <Img
                    src="images/img_group9845.png"
                    className="h-[78px] md:h-auto mr-3 object-cover"
                    alt="Group9845"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text className="font-semibold text-black_900" variant="body12">
                  Work Summary
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex-col gap-[23px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="bg-blue_gray_50 flex flex-row items-center justify-between p-[9px] w-full">
                        <Text
                          className="font-medium ml-[43px] text-blue_gray_600"
                          variant="body13"
                        >
                          Date
                        </Text>
                        <Text
                          className="font-medium mt-1.5 text-blue_gray_600"
                          variant="body13"
                        >
                          Projects
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_600"
                          variant="body13"
                        >
                          Time
                        </Text>
                        <Text
                          className="font-medium mr-[25px] text-blue_gray_600"
                          variant="body13"
                        >
                          Duration
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-1.5 text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pr-1 pt-1 w-[94%] md:w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          25 May, 2022
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Demo Project
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          9:30 am - 5:50 pm{" "}
                        </Text>
                        <Text
                          className="font-bold mr-[7px] text-blue_gray_900"
                          variant="body13"
                        >
                          <span className="text-colors4 text-base font-gilroy text-left">
                            7
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            h{" "}
                          </span>
                          <span className="text-colors4 text-base font-gilroy text-left">
                            30
                          </span>
                          <span className="text-colors4 text-xs font-gilroy text-left font-normal">
                            m
                          </span>
                        </Text>
                      </div>
                      <Line className="bg-blue_gray_100 h-px w-full" />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTrackingBillingPage;
