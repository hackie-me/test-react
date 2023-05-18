import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const LiveChatSummaryPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[350px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray_50 border-blue_gray_100 border-r border-solid flex flex-col gap-[34px] items-center justify-center p-6 sm:px-5 w-full">
            <Img
              src="images/img_group_5.svg"
              className="h-[35px] mt-[18px] w-[54%]"
              alt="Group"
            />
            <div className="flex flex-col gap-8 items-start justify-start mb-3 w-full">
              <Text className="font-semibold text-black_900" variant="body7">
                Settings
              </Text>
              <div className="bg-white_A700 border border-blue_gray_300 border-solid flex flex-row items-center justify-between p-3 rounded-md w-full">
                <Text
                  className="font-medium text-blue_gray_200"
                  variant="body13"
                >
                  Search people or message
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="h-5 my-1 w-5"
                  alt="search"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_9.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Rose J. Henry
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Kai Caudle
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Ali Comer
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Jacklyn Kovach
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Landon Mosby
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Man Marin
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_72X72.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Benito Nickel
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Anton Ligon
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Carmelo Rousseau
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Available
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_9.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start pt-1">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body13"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start md:px-5 py-6 w-full">
          <div className="flex flex-col gap-[29px] items-center justify-start mb-[26px] w-full">
            <div className="flex flex-col gap-6 justify-start w-full">
              <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[50px] w-[16%] md:w-full">
                <Img
                  src="images/img_profileimglarg_40X40.png"
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  alt="ProfileImgLarg Twelve"
                />
                <div className="flex flex-col gap-[5px] items-start justify-end pt-1.5 w-[67%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body13"
                    >
                      Design Group
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="font-normal text-blue_gray_900"
                      variant="body15"
                    >
                      Danial is typing...
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-7 items-center justify-start w-[91%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[17%] md:w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex flex-col items-start justify-start mt-[5px] w-[76%]">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body16"
                    >
                      Landon Mosby
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[125px] mt-1 text-black_900 text-center text-lg"
                      shape="CustomBorderBL10"
                      size="lg"
                      variant="FillIndigo50"
                    >
                      Hii Team 😊
                    </Button>
                    <Text
                      className="font-normal mt-[9px] text-blue_gray_400"
                      variant="body15"
                    >
                      Yesterday, 2:01pm
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[472px] mt-8 text-blue_gray_400"
                  variant="body13"
                >
                  Today
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-2.5 pb-[3px] w-[31%] md:w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start mt-[3px] w-[87%]">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body16"
                    >
                      Ali Comer
                    </Text>
                    <div className="bg-indigo_50 flex flex-col items-center justify-start p-2 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="font-medium leading-[29.00px] text-black_900"
                        variant="body12"
                      >
                        <>
                          Hii Everyone!
                          <br />
                          dont forget to make a note.
                        </>
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body18"
                    >
                      10:30 am
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[582px] mt-3.5 w-[42%] md:w-full">
                  <div className="flex flex-col items-end justify-start sm:mt-0 mt-[3px] w-[92%] sm:w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body16"
                    >
                      Ali Comer
                    </Text>
                    <div className="bg-blue_50 md:h-[364px] h-[372px] mt-2 p-2 relative rotate-[180deg] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-[372px] sm:w-full">
                      <Img
                        src="images/img_rectangle12.png"
                        className="h-[356px] m-auto object-cover rounded-[5px] w-[356px]"
                        alt="RectangleTwelve"
                      />
                      <Button
                        className="absolute bottom-[6%] cursor-pointer font-medium min-w-[70px] right-[6%] text-base text-center text-white_A700"
                        shape="RoundedBorder3"
                        size="sm"
                        variant="GradientBlack90066Black90066"
                      >
                        01:54
                      </Button>
                      <Button
                        className="absolute flex h-14 inset-[0] items-center justify-center m-auto rounded-[50%] w-14"
                        size="lgIcn"
                        variant="icbGradientBlack90066Black90066"
                      >
                        <Img
                          src="images/img_offer.svg"
                          className="h-8"
                          alt="offer"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-end justify-end mt-1 w-1/5 md:w-full">
                      <Text
                        className="font-normal mt-1.5 text-blue_gray_400"
                        variant="body15"
                      >
                        2:01pm
                      </Text>
                      <Img
                        src="images/img_airplane.svg"
                        className="h-6 ml-1 w-6"
                        alt="airplane"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-8 md:h-auto ml-1 sm:ml-[0] rounded-[50%] w-8"
                    alt="ProfileImgLarg Fifteen"
                  />
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[26px] w-[13%] md:w-full">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex flex-col items-start justify-start mt-1 w-[69%]">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body16"
                    >
                      Angelyn Weiner
                    </Text>
                    <Button
                      className="cursor-pointer font-medium min-w-[56px] mt-1 text-black_900 text-center text-lg"
                      shape="CustomBorderBL10"
                      size="xl"
                      variant="FillIndigo50"
                    >
                      Ok
                    </Button>
                    <Text
                      className="font-normal mt-[7px] text-blue_gray_400"
                      variant="body18"
                    >
                      2:30 pm
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start mb-0.5 p-3 rounded-md">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="h-5 mb-0.5 w-5"
                      alt="user"
                    />
                    <Text
                      className="font-medium ml-4 md:ml-[0] md:mt-0 mt-[5px] text-blue_gray_400"
                      variant="body15"
                    >
                      Your message....
                    </Text>
                    <Img
                      src="images/img_plus_20X20.svg"
                      className="h-5 mb-0.5 md:ml-[0] ml-[700px] w-5"
                      alt="plus"
                    />
                    <Img
                      src="images/img_microphone.svg"
                      className="h-5 mb-0.5 ml-4 md:ml-[0] w-5"
                      alt="microphone"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="icbRoundedBorder6"
                  size="2xlIcn"
                  variant="icbOutlineBluegray100_1"
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

export default LiveChatSummaryPage;
