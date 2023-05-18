import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const PrivacySettingsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[350px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray_50_03 border-blue_gray_100 border-r border-solid flex flex-col gap-9 items-center justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group10392_15.svg"
              className="h-[35px] w-[54%]"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[53px] items-start justify-start mb-[201px] w-full">
              <div className="flex flex-row gap-4 items-end justify-start w-[76%] md:w-full">
                <Img
                  src="images/img_arrowleft_bluegray_900.svg"
                  className="h-8 mb-[3px] w-8"
                  alt="arrowleft"
                />
                <Text
                  className="font-semibold mt-1.5 text-blue_gray_900"
                  variant="body7"
                >
                  Privacy Settings
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start pb-[5px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-semibold mt-1 text-blue_gray_900"
                      variant="body12"
                    >
                      Who Can See My Post?
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-6 mb-0.5 w-6"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mt-2 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body13"
                      >
                        Friends
                      </Text>
                      <Line className="bg-blue_gray_100 h-px mt-[29px] w-full" />
                      <div className="flex flex-row items-start justify-between mt-[26px] w-full">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body13"
                        >
                          Public
                        </Text>
                        <div className="bg-white_A700 border-[0.83px] border-blue_gray_50 border-solid h-5 rounded-[2.5px] w-5"></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body13"
                        >
                          Friends
                        </Text>
                        <Button
                          className="flex h-5 items-center justify-center w-5"
                          shape="icbRoundedBorder3"
                          size="smIcn"
                          variant="icbFillBlueA70001"
                        >
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="h-4"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body13"
                        >
                          Friends of friends
                        </Text>
                        <div className="bg-white_A700 border-[0.83px] border-blue_gray_50 border-solid h-5 rounded-[2.5px] w-5"></div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-blue_gray_100 h-px mt-[27px] w-full" />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] py-0.5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start my-[3px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Who Can See My Photos?
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Friends of friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <Line className="bg-blue_gray_100 h-px mt-6 w-full" />
                <div className="flex flex-row items-start justify-between mt-[23px] py-0.5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start my-[3px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Who Can See My Videos?
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Public
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
                <Line className="bg-blue_gray_100 h-px mt-6 w-full" />
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[25px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold mt-1 text-blue_gray_900"
                        variant="body12"
                      >
                        Who Can See My Profile?
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-6 mb-0.5 w-6"
                        alt="arrowdown Two"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body13"
                      >
                        Public
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-[23px] w-full">
                  <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                    <Text
                      className="font-semibold leading-[29.00px] text-blue_gray_900"
                      variant="body12"
                    >
                      Who Can Send Me Friend Request?
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 w-6"
                      alt="arrowdown Three"
                    />
                  </div>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body13"
                  >
                    Public
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex-1 sm:h-[1079px] h-[1081px] md:h-[1303px] md:px-5 relative w-full">
          <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] w-[99%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                alt="ProfileImgLarg"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start ml-4 md:ml-[0] pt-[5px] w-[11%] md:w-full">
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
              <Img
                src="images/img_overflowmenu.svg"
                className="h-6 md:ml-[0] ml-[824px] md:mt-0 mt-3.5 w-6"
                alt="overflowmenu"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-[54px] w-[23%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                style={{ backgroundImage: "url('images/img_group3302.svg')" }}
              >
                <Text className="font-medium text-black_900" variant="body12">
                  Hi Jake, how are you?
                </Text>
              </div>
              <Text className="font-normal text-blue_gray_400" variant="body15">
                Yesterday, 2:01pm
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[654px] mt-[30px] w-[37%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[372px] items-center justify-start p-2 w-full"
                style={{ backgroundImage: "url('images/img_group10282.svg')" }}
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
            <div className="flex flex-col gap-3 items-start justify-start ml-2 md:ml-[0] mt-[30px] w-[30%] md:w-full">
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
              <Text className="font-normal text-blue_gray_400" variant="body15">
                3:02 pm
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[467px] mt-[30px] w-[55%] md:w-full">
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
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start mb-2 md:ml-[0] ml-[11px] mt-[145px] w-[99%] md:w-full">
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
      </div>
    </>
  );
};

export default PrivacySettingsPage;
