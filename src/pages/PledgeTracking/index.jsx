import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PledgeTrackingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_7.svg"
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
                  src="images/img_profileimglarg_85X85.png"
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[30px] items-start justify-end max-w-[1264px] mx-auto md:px-5 w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Pledge Tracking
          </Text>
          <div className="flex flex-col items-center justify-end w-full">
            <List
              className="flex-col gap-[30px] grid items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-[30px] sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-[99%] md:w-full">
                  <Img
                    src="images/img_rectangle1386.png"
                    className="h-56 md:h-auto object-cover rounded-[3px]"
                    alt="Rectangle1386"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text className="font-bold text-black_900" variant="body12">
                      Kids Education
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] mt-[21px] text-blue_gray_400 w-full"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mattis sit tortor nibh diam velit tempor, mi. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Mattis sit
                      tortor nibh diam velit tempor, mi. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Mattis sit tortor nibh
                      diam velit tempor, mi. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Mattis sit tortor nibh diam
                      velit tempor, mi.{" "}
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-4 w-[56%] md:w-full">
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[15px] items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Donors
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          1356
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[15px] items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Raised
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          $8000
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-4 items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Goal
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          $50000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-[30px] sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-[99%] md:w-full">
                  <Img
                    src="images/img_rectangle1386.png"
                    className="h-56 md:h-auto object-cover rounded-[3px]"
                    alt="Rectangle1386 One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text className="font-bold text-black_900" variant="body12">
                      Kids Education
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] mt-[21px] text-blue_gray_400 w-full"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mattis sit tortor nibh diam velit tempor, mi. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Mattis sit
                      tortor nibh diam velit tempor, mi. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Mattis sit tortor nibh
                      diam velit tempor, mi. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Mattis sit tortor nibh diam
                      velit tempor, mi.{" "}
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-4 w-[56%] md:w-full">
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[15px] items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Donors
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          1356
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[15px] items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Raised
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          $8000
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-4 items-start justify-start p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Goal
                        </Text>
                        <Text
                          className="font-bold mb-[5px] text-blue_A700_01"
                          variant="body12"
                        >
                          $50000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-[30px] sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-[99%] md:w-full">
                  <Img
                    src="images/img_rectangle1386.png"
                    className="h-56 md:h-auto object-cover rounded-[3px]"
                    alt="Rectangle1386 Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text className="font-bold text-black_900" variant="body12">
                      Kids Education
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] mt-[21px] text-blue_gray_400 w-full"
                      variant="body15"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mattis sit tortor nibh diam velit tempor, mi. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Mattis sit
                      tortor nibh diam velit tempor, mi. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Mattis sit tortor nibh
                      diam velit tempor, mi. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Mattis sit tortor nibh diam
                      velit tempor, mi.{" "}
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-4 w-[56%] md:w-full">
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[9px] items-start justify-end p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Donors
                        </Text>
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          1356
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[9px] items-start justify-end p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Raised
                        </Text>
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          $8000
                        </Text>
                      </div>
                      <div className="border border-blue_gray_400 border-solid flex flex-col gap-[9px] items-start justify-end p-2 rounded-md">
                        <Text
                          className="font-normal mt-1 text-blue_gray_900"
                          variant="body13"
                        >
                          Goal
                        </Text>
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          $50000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PledgeTrackingPage;
