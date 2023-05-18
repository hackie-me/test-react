import React from "react";

import { Button, Img, Line, List, Text } from "components";

const VisualSearchPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_7.svg"
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
        <div className="h-[1156px] md:h-[4464px] sm:h-[988px] max-w-[1268px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[77px] inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
            <div className="flex flex-col gap-[38px] justify-start pt-3 w-full">
              <div className="flex flex-col items-center justify-start">
                <Text className="font-semibold text-black_900" variant="body2">
                  Gallery
                </Text>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start ml-5 md:ml-[0] w-[99%] md:w-full">
                <Text className="font-semibold text-black_900" variant="body7">
                  Recent
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Img
                    src="images/img_rectangle10.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTen"
                  />
                  <Img
                    src="images/img_rectangle11.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera"
                    />
                  </div>
                  <Img
                    src="images/img_rectangle10.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTen One"
                  />
                  <Img
                    src="images/img_rectangle11.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven One"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera One"
                    />
                  </div>
                  <Img
                    src="images/img_rectangle11.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven Two"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-end w-[99%] md:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text className="font-semibold text-black_900" variant="body7">
                  Last Week
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      src="images/img_rectangle10_150X150.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Two"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Three"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group923.png')",
                      }}
                    >
                      <Img
                        src="images/img_checkmark_40X40.svg"
                        className="absolute h-10 inset-[0] justify-center m-auto w-10"
                        alt="checkmark"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle10_150X150.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Three"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Four"
                      />
                    </div>
                    <Img
                      src="images/img_group923.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleSeventeen"
                    />
                    <Img
                      src="images/img_rectangle10_150X150.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Four"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Five"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      src="images/img_rectangle1302.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleFourteen"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwelve"
                    />
                    <Img
                      src="images/img_rectangle13.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleThirteen"
                    />
                    <Img
                      src="images/img_rectangle1302.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleSixteen"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleFifteen"
                    />
                    <Img
                      src="images/img_rectangle13.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleEighteen"
                    />
                    <Img
                      src="images/img_rectangle1302.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwenty"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleNineteen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end pt-2.5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-semibold text-black_900"
                    variant="body7"
                  >
                    A Month Ago
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      src="images/img_rectangle23.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwentyThree"
                    />
                    <Img
                      src="images/img_rectangle21.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwentyOne"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Six"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle23.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwentyFive"
                    />
                    <Img
                      src="images/img_rectangle21.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwentyFour"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Seven"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle21.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwentySix"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Eight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[41%]">
            <div className="h-[1156px] md:h-[925px] relative w-full">
              <div className="absolute bg-white_A700 h-[925px] inset-x-[0] mx-auto rounded-tl-[12px] rounded-tr-[12px] shadow-bs4 top-[0] w-full"></div>
              <div className="absolute flex flex-col gap-[29px] h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start pb-[7px] w-[89%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat md:h-[276px] h-[405px] p-[34px] sm:px-5 relative w-full"
                      style={{
                        backgroundImage: "url('images/img_group923.png')",
                      }}
                    >
                      <Img
                        src="images/img_crop.svg"
                        className="absolute h-[276px] inset-x-[0] mx-auto top-[8%] w-[64%]"
                        alt="Crop"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-[43%] md:w-full">
                      <Img
                        src="images/img_settings_1.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold text-black_900"
                        variant="body7"
                      >
                        Visual Search
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray_200 h-px w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                  <List
                    className="flex-col gap-[3.43px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        src="images/img_rectangle10_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleTen Five"
                      />
                      <Img
                        src="images/img_rectangle11_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleEleven Three"
                      />
                      <Img
                        src="images/img_rectangle13_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleThirteen One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        src="images/img_rectangle14.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleFourteen One"
                      />
                      <Img
                        src="images/img_rectangle12_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleTwelve One"
                      />
                      <Img
                        src="images/img_rectangle20.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleTwenty One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        src="images/img_rectangle16.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleSixteen One"
                      />
                      <Img
                        src="images/img_rectangle15.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleFifteen One"
                      />
                      <Img
                        src="images/img_rectangle21_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleTwentyOne One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        src="images/img_rectangle19.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleNineteen One"
                      />
                      <Img
                        src="images/img_rectangle18.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleEighteen One"
                      />
                      <Img
                        src="images/img_rectangle18_148X148.png"
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        alt="RectangleEighteen One"
                      />
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

export default VisualSearchPage;
