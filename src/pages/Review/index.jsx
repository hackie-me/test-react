import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReviewPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  src="images/img_group_4.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="font-medium ml-[9px] text-gray_900"
                      variant="body13"
                    >
                      Orders
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900"
                    variant="body13"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="font-medium ml-4 text-gray_900"
                      variant="body13"
                    >
                      More
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_cart.svg"
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  alt="cart"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-center justify-end md:ml-[0] ml-[86px] mr-[388px] md:px-5 w-[966px] md:w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start pb-[50px] w-[966px] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body2"
              >
                Reviews
              </Text>
              <Button
                className="cursor-pointer font-medium text-base text-center text-white_A700 w-[242px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Write Review
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                <Text className="text-amber_500" variant="body17">
                  4.0
                </Text>
                <div className="flex flex-row items-center justify-evenly mt-4 w-[96%] md:w-full">
                  <Img
                    src="images/img_star.svg"
                    className="h-6 w-6"
                    alt="star"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="h-6 w-6"
                    alt="star One"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="h-6 w-6"
                    alt="star Two"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="h-6 w-6"
                    alt="star Three"
                  />
                  <Img
                    src="images/img_star_24X24.svg"
                    className="h-6 w-6"
                    alt="star Four"
                  />
                </div>
                <Text
                  className="font-medium mt-[23px] text-blue_gray_400"
                  variant="body7"
                >
                  2.2k reviews{" "}
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-end py-[5px] w-[78%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    Excellent
                  </Text>
                  <Img
                    src="images/img_group9980.svg"
                    className="h-px"
                    alt="Group9980"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[27px] w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    Good
                  </Text>
                  <Img
                    src="images/img_group9980_bluegray_100.svg"
                    className="h-px"
                    alt="Group9980 One"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-7 w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    Average
                  </Text>
                  <Img
                    src="images/img_group9980_bluegray_100_1X600.svg"
                    className="h-px"
                    alt="Group9980 Two"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-[23px] w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    Below Average
                  </Text>
                  <Img
                    src="images/img_group9980_1X600.svg"
                    className="h-px"
                    alt="Group9980 Three"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    Poor
                  </Text>
                  <Img
                    src="images/img_group9980_1.svg"
                    className="h-px"
                    alt="Group9980 Four"
                  />
                </div>
              </div>
            </div>
            <List
              className="flex-col gap-[50px] grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_ellipse31.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="EllipseThirtyOne"
                  />
                  <Text
                    className="font-semibold ml-4 md:ml-[0] text-black_900"
                    variant="body12"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Five"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Three"
                    />
                    <Img
                      src="images/img_star_24X24.svg"
                      className="h-4 w-4"
                      alt="star Four"
                    />
                  </div>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                  variant="body15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_ellipse31.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="EllipseThirtyOne One"
                  />
                  <Text
                    className="font-semibold ml-4 md:ml-[0] text-black_900"
                    variant="body12"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    alt="overflowmenu One"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Six"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star One One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Two One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Three One"
                    />
                    <Img
                      src="images/img_star_24X24.svg"
                      className="h-4 w-4"
                      alt="star Four One"
                    />
                  </div>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                  variant="body15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_ellipse31.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="EllipseThirtyOne Two"
                  />
                  <Text
                    className="font-semibold ml-4 md:ml-[0] text-black_900"
                    variant="body12"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    alt="overflowmenu Two"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Seven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star One Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Two Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star Three Two"
                    />
                    <Img
                      src="images/img_star_24X24.svg"
                      className="h-4 w-4"
                      alt="star Four Two"
                    />
                  </div>
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body15"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
