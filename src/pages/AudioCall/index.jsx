import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const AudioCallPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto p-4 w-full">
        <header className="flex items-center justify-center mt-[19px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_35X162.svg"
                className="h-[35px]"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="font-medium ml-0.5 text-gray_900"
                    variant="body13"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text className="font-medium text-gray_900" variant="body13">
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <Text className="font-medium text-gray_900" variant="body13">
                Sign in
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA70001"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[54px] items-center justify-start w-[66%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black_900 flex flex-col items-center justify-start rounded-md w-full">
                <div className="bg-gradient6  flex flex-col items-start justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between ml-1.5 md:ml-[0] w-full">
                    <Text
                      className="font-normal mt-[11px] text-white_A700"
                      variant="body12"
                    >
                      3:00
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative rounded-[3px] w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group45.png')",
                      }}
                    >
                      <Img
                        src="images/img_cut.svg"
                        className="absolute bottom-[5%] h-6 right-[5%] w-6"
                        alt="cut"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[347px] mt-6 w-[56%] md:w-full">
                    <div className="border border-blue_gray_400 border-solid flex flex-col h-[94px] items-center justify-end mt-[135px] p-2.5 rounded-[50%] w-[94px]">
                      <Img
                        src="images/img_ellipse70.png"
                        className="h-[72px] md:h-auto mt-0.5 rounded-[50%] w-[72px]"
                        alt="EllipseSeventy"
                      />
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-[35%]">
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group46.png')",
                        }}
                      >
                        <Img
                          src="images/img_cut.svg"
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          alt="cut One"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group47.png')",
                        }}
                      >
                        <Img
                          src="images/img_cut.svg"
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          alt="cut Two"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-6 h-[150px] p-2 relative w-[150px]"
                        style={{
                          backgroundImage: "url('images/img_group48.png')",
                        }}
                      >
                        <Img
                          src="images/img_cut.svg"
                          className="absolute bottom-[5%] h-6 right-[5%] w-6"
                          alt="cut Three"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal ml-1.5 md:ml-[0] my-[11px] text-white_A700"
                    variant="body12"
                  >
                    Hiba Nawab
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-[46%] md:w-full">
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                size="2xlIcn"
                variant="icbOutlineBlack9004d"
              >
                <Img
                  src="images/img_videocamera.svg"
                  className="h-8"
                  alt="videocamera"
                />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                size="2xlIcn"
                variant="icbOutlineBlack9004d"
              >
                <Img
                  src="images/img_microphoneoutl.svg"
                  className="h-8"
                  alt="microphoneOutl"
                />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                size="2xlIcn"
                variant="icbOutlineBlack9004d_1"
              >
                <Img src="images/img_call.svg" className="h-8" alt="call" />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                size="2xlIcn"
                variant="icbOutlineBlack9004d_2"
              >
                <Img src="images/img_volume.svg" className="h-8" alt="volume" />
              </Button>
              <Button
                className="flex h-16 items-center justify-center rounded-[50%] w-16"
                size="2xlIcn"
                variant="icbOutlineBlack9004d"
              >
                <Img
                  src="images/img_group9759.svg"
                  className="h-8"
                  alt="Group9759"
                />
              </Button>
            </div>
          </div>
          <div className="bg-gray_50 border border-blue_gray_50 border-solid flex md:flex-1 flex-col items-start justify-start p-2 rounded-md w-[31%] md:w-full">
            <div className="border-b border-blue_gray_50 border-solid flex flex-row items-start justify-start md:ml-[0] ml-[22px] w-[89%] md:w-full">
              <div className="flex flex-col gap-1 items-center justify-start w-[166px]">
                <div className="flex flex-col items-center justify-center p-2.5 w-full">
                  <Text
                    className="font-medium text-blue_A700_01 w-auto"
                    variant="body13"
                  >
                    Messages(4)
                  </Text>
                </div>
                <Line className="bg-blue_A700_01 h-0.5 w-full" />
              </div>
              <div className="flex flex-col items-center justify-center w-[166px]">
                <Text
                  className="font-medium text-blue_gray_400 w-auto"
                  variant="body13"
                >
                  Participants
                </Text>
              </div>
            </div>
            <List
              className="flex-col gap-4 grid md:ml-[0] ml-[22px] mt-[265px] w-[52%]"
              orientation="vertical"
            >
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_461.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne"
                />
                <div className="flex flex-col gap-3 items-start justify-start mt-1">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_group46.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne One"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_group45.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Two"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Cameron Williamson
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_group47.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Three"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Esther Howard
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_group48.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Four"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Brooklyn Simmons
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_461_28X28.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Five"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Leslie Alexander
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_461_1.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Six"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  src="images/img_461_2.png"
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="FourHundredSixtyOne Seven"
                />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-black_900_03"
                    variant="body16"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    I’m good !! How are you?
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-row gap-2 items-center justify-start mb-5 md:ml-[0] ml-[22px] mt-[30px] w-[89%] md:w-full">
              <div className="font-normal p-0 placeholder:text-blue_gray_400 text-blue_gray_400 text-left text-sm w-full ">
                <Input
                  wrapClassName="bg-gray_50 flex w-[84%] sm:w-full"
                  className="font-normal p-0 placeholder:text-blue_gray_400 text-blue_gray_400 text-left text-sm w-full"
                  name="Group9684"
                  placeholder="Write a comment..."
                  suffix={
                    <Img
                      src="images/img_user.svg"
                      className="ml-[35px] mr-4 my-3.5"
                      alt="user"
                    />
                  }
                  shape="RoundedBorder6"
                  size="4xl"
                  variant="Outline"
                ></Input>
              </div>
              <div className="w-[15%] ">
                <Button
                  className="bg-gray_50 flex h-12 items-center justify-center"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutline_1"
                >
                  <Img src="images/img_send.svg" className="h-5" alt="send" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioCallPage;
