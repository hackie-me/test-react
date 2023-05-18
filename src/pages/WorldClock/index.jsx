import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const WorldClockPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-8 items-center justify-start mx-auto pb-[257px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_16.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
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
        </header>
        <div className="flex flex-col gap-[50px] justify-start max-w-[1278px] mx-auto md:px-5 w-full">
          <div className="border-b border-blue_gray_100 border-solid flex flex-col items-start justify-start ml-2.5 md:ml-[0] sm:px-5 px-[30px] w-[85%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start p-2.5 w-full">
                  <Text
                    className="font-medium text-blue_A700_01 w-auto"
                    variant="body13"
                  >
                    World Clock
                  </Text>
                </div>
                <Line className="bg-blue_A700_01 h-0.5 w-full" />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="font-medium text-blue_gray_400 w-auto"
                  variant="body13"
                >
                  Alarm
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="font-medium text-blue_gray_400 w-auto"
                  variant="body13"
                >
                  Stop Watch
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="font-medium text-blue_gray_400 w-auto"
                  variant="body13"
                >
                  Timer
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row gap-2.5 items-center justify-between p-2.5 w-1/5 sm:w-full">
                <Img
                  src="images/img_clock.svg"
                  className="h-8 my-2.5 w-8"
                  alt="clock"
                />
                <Text
                  className="font-bold my-[9px] text-blue_gray_900"
                  variant="body2"
                >
                  World Clock
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[130px] sm:mt-0 my-[13px] text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Add Time Zone
              </Button>
            </div>
            <div className="flex flex-col gap-[38px] items-center justify-start pr-1 py-1 w-full">
              <List
                className="flex-col gap-[22.595px] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body13"
                    >
                      Today, +0HRS
                    </Text>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        New Delhi
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        1:15 PM
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body13"
                    >
                      Today, -1:30
                    </Text>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        Abu Dhabi
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        11:45 AM
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body13"
                    >
                      Today, -1:30
                    </Text>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        New York
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        11:45 AM
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body13"
                    >
                      Today, -1:30
                    </Text>
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="font-semibold mt-0.5 text-blue_gray_900"
                        variant="body7"
                      >
                        Singapore
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body7"
                      >
                        11:45 AM
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mb-[19px] w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body13"
                  >
                    Today, -1:30
                  </Text>
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body7"
                    >
                      Muscat
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body7"
                    >
                      11:45 AM
                    </Text>
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

export default WorldClockPage;
