import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TargettedFeedPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_5.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer my-4 mx-3"
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
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
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
                    <Text
                      className="font-medium text-gray_900"
                      variant="body13"
                    >
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
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] md:px-5 shadow-bs4 w-[42%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[159px] w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
              <Img
                src="images/img_profileimglarg_72X72.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg One"
              />
              <div className="flex flex-col gap-3.5 items-start justify-start pr-[7px] pt-[7px]">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body11"
                >
                  <span className="text-colors4 text-xl font-gilroy text-left">
                    Danial Sams{" "}
                  </span>
                  <span className="text-colors3 text-lg font-gilroy text-left font-normal">
                    @Lorme impsum 26 sep 2017
                  </span>
                </Text>
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Text>
              </div>
            </div>
            <Img
              src="images/img_rectangle1302.png"
              className="h-[400px] md:h-auto mt-6 object-cover rounded-md w-full"
              alt="Rectangle1302"
            />
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-6 w-full">
              <div className="flex flex-row gap-[21px] items-center justify-between w-[38%]">
                <div className="h-8 md:h-[21px] pb-0.5 px-0.5 relative w-[27%]">
                  <Img
                    src="images/img_eye.svg"
                    className="absolute h-[21px] inset-y-[0] left-[6%] my-auto w-[49%]"
                    alt="eye"
                  />
                  <Text
                    className="absolute font-semibold right-[6%] text-blue_A700_01 top-[0]"
                    variant="body13"
                  >
                    30M
                  </Text>
                </div>
                <div className="md:h-6 h-8 pb-0.5 px-0.5 relative w-[27%]">
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-6 inset-y-[0] left-[6%] my-auto w-[49%]"
                    alt="favorite"
                  />
                  <Text
                    className="absolute font-semibold right-[24%] text-blue_A700_01 top-[0]"
                    variant="body13"
                  >
                    5M
                  </Text>
                </div>
                <div className="h-8 md:h-[26px] pb-0.5 px-0.5 relative w-[27%]">
                  <Img
                    src="images/img_refresh.svg"
                    className="absolute h-[26px] inset-y-[0] left-[6%] my-auto w-[26px]"
                    alt="refresh"
                  />
                  <Text
                    className="absolute font-semibold right-[9%] text-blue_A700_01 top-[0]"
                    variant="body13"
                  >
                    98K
                  </Text>
                </div>
              </div>
              <Img src="images/img_share.svg" className="h-8 w-8" alt="share" />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-6 w-full" />
            <Input
              wrapClassName="mt-6 w-full"
              className="font-medium p-0 placeholder:text-blue_A700_01 text-blue_A700_01 text-left text-lg w-full"
              name="Group9694"
              placeholder="Interests"
              shape="RoundedBorder6"
              size="xl"
              variant="FillBlue50"
            ></Input>
            <div className="flex flex-col gap-4 items-start justify-start mt-[31px] w-[82%] md:w-full">
              <Text className="font-medium text-blue_gray_400" variant="body12">
                Interests based on your recent searches
              </Text>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[92px] text-blue_gray_400 text-center text-sm"
                  shape="CircleBorder23"
                  size="2xl"
                  variant="OutlineBluegray400_1"
                >
                  Nature
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[90px] text-blue_gray_400 text-center text-sm"
                  shape="CircleBorder23"
                  size="xl"
                  variant="OutlineBluegray400_1"
                >
                  Sports
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[115px] text-blue_gray_400 text-center text-sm"
                  shape="CircleBorder23"
                  size="2xl"
                  variant="OutlineBluegray400_1"
                >
                  Adventure
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[96px] text-blue_gray_400 text-center text-sm"
                  shape="CircleBorder23"
                  size="xl"
                  variant="OutlineBluegray400_1"
                >
                  Cycling
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargettedFeedPage;
