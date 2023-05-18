import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const RepeaingTasksPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_2.svg"
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
                    <div className="flex flex-row gap-2 items-start justify-start w-[31%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Tasks
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
                        src="images/img_checkmark.svg"
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
                        src="images/img_settings_24X24.svg"
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
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body7"
              >
                Repeaing Tasks
              </Text>
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="md:h-[193px] h-[214px] relative w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <List
                      className="flex-col gap-[23px] grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                          <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                            <Text
                              className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                              variant="body3"
                            >
                              YH
                            </Text>
                            <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                              <Text
                                className="font-semibold text-blue_gray_900"
                                variant="body12"
                              >
                                Read Work Emails
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body13"
                              >
                                Read all emails on daily basis
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                            shape="RoundedBorder6"
                            size="lg"
                            variant="FillBlueA70001"
                          >
                            Repeat
                          </Button>
                        </div>
                        <Line className="bg-blue_gray_100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-6 items-center justify-start my-0 w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                          <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                            <Text
                              className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                              variant="body3"
                            >
                              YH
                            </Text>
                            <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                              <Text
                                className="font-semibold text-blue_gray_900"
                                variant="body12"
                              >
                                Read Work Emails
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body13"
                              >
                                Read all emails on daily basis
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                            shape="RoundedBorder6"
                            size="lg"
                            variant="FillBlueA70001"
                          >
                            Repeat
                          </Button>
                        </div>
                        <Line className="bg-blue_gray_100 h-px w-full" />
                      </div>
                    </List>
                  </div>
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-start justify-end p-[11px] right-[10%] rounded-md shadow-bs4 w-[11%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body12"
                      >
                        Never
                      </Text>
                      <Text
                        className="font-medium mt-5 text-blue_gray_400"
                        variant="body12"
                      >
                        Daily
                      </Text>
                      <Text
                        className="font-medium mt-[15px] text-blue_gray_400"
                        variant="body12"
                      >
                        Weekly
                      </Text>
                      <Text
                        className="font-medium mt-[15px] text-blue_gray_400"
                        variant="body12"
                      >
                        Monthly
                      </Text>
                      <Text
                        className="font-medium mt-[15px] text-blue_gray_400"
                        variant="body12"
                      >
                        Yearly
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-[23px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[30%]">
                        <Text
                          className="bg-blue_A700_01 flex h-16 items-center justify-center rounded-[50%] text-blue_200 text-center w-16"
                          variant="body3"
                        >
                          YH
                        </Text>
                        <div className="flex flex-col gap-[15px] items-start justify-start mb-0.5 mt-2">
                          <Text
                            className="font-semibold text-blue_gray_900"
                            variant="body12"
                          >
                            Read Work Emails
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_300"
                            variant="body13"
                          >
                            Read all emails on daily basis
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[72px] my-[15px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Repeat
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepeaingTasksPage;
