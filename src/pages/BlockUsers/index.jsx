import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const BlockUsersPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[350px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray_50_03 border-blue_gray_100 border-r border-solid flex flex-col gap-[35px] items-center justify-end p-2.5 w-full">
            <Img
              src="images/img_group10392_35X162.svg"
              className="h-[35px] mt-3.5 w-1/2"
              alt="Group10392"
            />
            <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
              <Text className="font-semibold text-black_900" variant="body7">
                Message
              </Text>
              <div className="bg-white_A700 border border-blue_gray_300 border-solid flex flex-row items-center justify-between mt-4 p-[15px] rounded-lg w-full">
                <Text
                  className="font-medium text-blue_gray_200"
                  variant="body13"
                >
                  Search people or message
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="h-5 mt-0.5 w-5"
                  alt="search"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-start mt-6 w-full">
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col gap-[13px] items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_9.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-10 mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px]">
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
                      Angelyn Weiner: Ok
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    10:05 am
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex-1 sm:h-[1079px] h-[1081px] md:h-[1326px] md:px-5 relative w-full">
          <div className="sm:h-[1079px] h-[1081px] md:h-[1326px] m-auto w-full">
            <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2.5 md:ml-[0] pb-0.5 w-[97%] md:w-full">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="ProfileImgLarg Thirteen"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-4 md:ml-[0] pt-[5px] w-[12%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="font-semibold text-blue_gray_900 w-auto"
                      variant="body12"
                    >
                      Rose J. Henry
                    </Text>
                  </div>
                  <Text
                    className="font-normal text-blue_gray_300"
                    variant="body15"
                  >
                    @rosie
                  </Text>
                </div>
                <div className="bg-blue_50 flex flex-col h-10 items-center justify-start md:ml-[0] ml-[787px] md:mt-0 my-[5px] p-2.5 rotate-[-90deg] rounded-[50%] w-10">
                  <div className="bg-black_900 border-2 border-black_900 border-solid h-5 rotate-[90deg] rounded-[10px] w-1/5"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start ml-2.5 md:ml-[0] mt-[53px] w-[23%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group3302.svg')" }}
                >
                  <Text className="font-medium text-black_900" variant="body12">
                    Hi Jake, how are you?
                  </Text>
                </div>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body15"
                >
                  Yesterday, 2:01pm
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[653px] mt-[30px] w-[37%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[372px] items-center justify-start p-2 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10282.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[106px] h-[356px] items-center justify-end p-4 rounded-[5px] w-[356px]"
                    style={{
                      backgroundImage: "url('images/img_group10281.png')",
                    }}
                  >
                    <Button
                      className="flex h-14 items-center justify-center mt-[134px] rounded-[50%] w-14"
                      size="lgIcn"
                      variant="icbGradientBlack90066Black90066"
                    >
                      <Img
                        src="images/img_playsolid.svg"
                        className="h-8"
                        alt="playSolid"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[70px] text-base text-center text-white_A700"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="GradientBlack90066Black90066"
                    >
                      01:54
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-end justify-end w-[22%] md:w-full">
                  <Text
                    className="font-normal mb-0.5 mt-1.5 text-blue_gray_400"
                    variant="body15"
                  >
                    2:01 pm
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-6 w-6"
                    alt="airplane"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[7px] mt-[30px] w-[30%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group3302.svg')" }}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-[89%] md:w-full">
                    <Img
                      src="images/img_playsolid_blue_A700.svg"
                      className="h-8 w-8"
                      alt="playSolid One"
                    />
                    <div className="h-4 relative w-[59%]">
                      <div className="absolute h-1.5 inset-[0] justify-center m-auto overflow-hidden w-full">
                        <div className="w-full h-full absolute bg-blue_gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-blue_A700_01  rounded-[3px]"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                      <div className="absolute bg-white_A700 border-[3px] border-blue_A700_01 border-solid h-4 inset-y-[0] left-[32%] my-auto rounded-[50%] w-4"></div>
                    </div>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      01:54
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body15"
                >
                  3:02 pm
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[466px] mt-[30px] w-[55%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group3300.svg')" }}
                >
                  <Text className="font-medium text-black_900" variant="body12">
                    Great I will write later the exact time and place. See you
                    soon!
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-end w-[13%] md:w-full">
                  <Text
                    className="font-normal mt-[3px] text-blue_gray_400"
                    variant="body15"
                  >
                    3:02 pm
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-4 mb-[3px] ml-1 w-4"
                    alt="airplane One"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-start mb-[7px] ml-2.5 md:ml-[0] mt-[145px] w-[99%] md:w-full">
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start p-3 rounded-md w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      src="images/img_user.svg"
                      className="h-6 w-6"
                      alt="user"
                    />
                    <Text
                      className="font-medium ml-4 md:ml-[0] md:mt-0 mt-1.5 text-blue_gray_400"
                      variant="body15"
                    >
                      Your message....
                    </Text>
                    <Img
                      src="images/img_plus.svg"
                      className="h-6 md:ml-[0] ml-[733px] w-6"
                      alt="plus"
                    />
                    <Img
                      src="images/img_microphone.svg"
                      className="h-6 ml-4 md:ml-[0] w-6"
                      alt="microphone"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutlineBluegray100_1"
                >
                  <Img src="images/img_send.svg" className="h-6" alt="send" />
                </Button>
              </div>
            </div>
            <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[9%] w-full" />
          </div>
          <div className="absolute bg-gray_50_03 flex flex-col items-start justify-start p-6 sm:px-5 right-[3%] rounded-md top-[7%]">
            <Text
              className="font-medium mt-[5px] text-blue_gray_900"
              variant="body12"
            >
              Contact info
            </Text>
            <Text
              className="font-medium mt-9 text-blue_gray_900"
              variant="body12"
            >
              Select messages
            </Text>
            <Text
              className="font-medium mt-[29px] text-blue_gray_900"
              variant="body12"
            >
              Mute notification
            </Text>
            <Text
              className="font-medium mt-[34px] text-blue_gray_900"
              variant="body12"
            >
              Delete chat
            </Text>
            <Text
              className="font-medium mb-[5px] mt-[34px] text-blue_gray_900"
              variant="body12"
            >
              Block user
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUsersPage;
