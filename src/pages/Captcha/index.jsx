import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const CaptchaPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_2.svg"
                className="h-[35px]"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="font-medium mt-[3px] text-gray_900"
                  variant="body13"
                >
                  Products
                </Text>
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="font-medium mt-[3px] text-gray_900"
                  variant="body13"
                >
                  Resouces
                </Text>
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="font-medium sm:mt-0 mt-1 text-gray_900"
                variant="body13"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
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
        <div className="sm:h-[1460px] h-[727px] md:h-[744px] mb-[163px] md:px-5 relative w-[38%] sm:w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[62px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <Img
              src="images/img_group.svg"
              className="h-[35px] w-[32%]"
              alt="Group"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
              <Text
                className="font-semibold text-blue_gray_900 w-auto"
                variant="body2"
              >
                Sign in to Recharge Direct
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-[52px] md:h-auto items-center justify-start px-3 rounded-lg w-full">
                    <Text
                      className="font-medium text-blue_gray_300"
                      variant="body13"
                    >
                      jane@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <div className="bg-white_A700 border border-blue_gray_100 border-solid flex sm:flex-col flex-row sm:gap-5 h-[52px] md:h-auto items-center justify-start px-3 rounded-lg w-[512px] sm:w-full">
                      <div className="flex flex-col items-start justify-start pr-[5px] py-[5px]">
                        <Text
                          className="font-medium text-blue_gray_300"
                          variant="body13"
                        >
                          Enter Password
                        </Text>
                      </div>
                      <Img
                        src="images/img_eye.svg"
                        className="h-5 w-5"
                        alt="eye"
                      />
                    </div>
                    <Text
                      className="font-medium text-blue_A700_01 w-auto"
                      variant="body12"
                    >
                      Forgot Password?
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_50_08 flex flex-row font-roboto items-center justify-between outline outline-[1px] outline-blue_gray_100_04 p-[7px] rounded-sm shadow-bs7 w-full">
                  <CheckBox
                    className="font-medium leading-[normal] ml-[5px] my-[18px] text-black_900 text-left text-sm"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="Imnotarobot"
                    id="Imnotarobot"
                    label="I’m not a robot"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineGray40002"
                  ></CheckBox>
                  <div className="flex flex-col gap-1 items-center justify-center mr-[3px] w-auto">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[46px] w-12"
                      alt="volume"
                    />
                    <Text
                      className="text-gray_500_01 w-auto"
                      as="h1"
                      variant="h1"
                    >
                      Privacy - Terms
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_A700_01 flex flex-col font-gilroy items-start justify-start px-[18px] py-3 rounded-md w-[512px] sm:w-full">
                  <Text
                    className="font-medium text-white_A700 w-auto"
                    variant="body13"
                  >
                    Log in
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white_A700 border border-blue_gray_100_04 border-solid bottom-[0] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto p-[7px] shadow-bs8 w-[79%]">
            <div className="flex flex-col items-center justify-start my-1 w-full">
              <Input
                wrapClassName="w-full"
                className="font-medium leading-[normal] p-0 placeholder:text-white_A700 text-left text-lg text-white_A700 w-full"
                name="Group10033"
                placeholder="Select all images with a bicycle."
                size="6xl"
                variant="FillBlueA20004"
              ></Input>
              <div className="flex flex-col h-[386px] sm:h-auto items-center justify-start mt-[5px] w-[386px] sm:w-full">
                <div className="flex flex-col h-[386px] sm:h-auto items-center justify-start w-[386px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      src="images/img_rectangle.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle"
                    />
                    <Img
                      src="images/img_rectangle_126X126.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle One"
                    />
                    <Img
                      src="images/img_rectangle_1.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Two"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-evenly mt-1 w-full">
                    <Img
                      src="images/img_rectangle_2.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Three"
                    />
                    <div className="md:h-[102px] h-[114px] relative w-[114px]">
                      <Img
                        src="images/img_rectangle_102X102.png"
                        className="absolute bottom-[0] h-[102px] object-cover right-[0] w-[102px]"
                        alt="Rectangle Four"
                      />
                      <Button
                        className="absolute flex h-[26px] items-center justify-center left-[0] top-[0] w-[26px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillBlueA20004"
                      >
                        <Img
                          src="images/img_checkmark_26X26.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <Img
                      src="images/img_rectangle_3.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Five"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      src="images/img_rectangle_4.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Six"
                    />
                    <Img
                      src="images/img_rectangle_5.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Seven"
                    />
                    <Img
                      src="images/img_rectangle_6.png"
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      alt="Rectangle Eight"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-5 w-[97%] md:w-full">
                <Img
                  src="images/img_refresh.svg"
                  className="h-6 w-6"
                  alt="refresh"
                />
                <Img
                  src="images/img_music.svg"
                  className="h-6 ml-2.5 sm:ml-[0] w-6"
                  alt="music"
                />
                <Img
                  src="images/img_info.svg"
                  className="h-6 ml-2.5 sm:ml-[0] w-6"
                  alt="info"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[94px] sm:ml-[0] ml-[186px] text-center text-sm text-white_A700"
                  shape="RoundedBorder3"
                  size="md"
                  variant="FillBlueA20004"
                >
                  VERIFY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptchaPage;
