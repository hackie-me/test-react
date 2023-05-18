import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HelpCenterPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_11.svg"
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
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[940px] mb-[234px] mx-auto pt-[13px] md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-[63%] md:w-full">
            <Text className="font-semibold text-black_900" as="h6" variant="h6">
              Hello, how can we help?
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <Input
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                wrapClassName="flex sm:flex-1 sm:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search_bluegray_900.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <Button
                className="cursor-pointer font-medium min-w-[88px] sm:mt-0 mt-0.5 text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-1.5">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body11"
                >
                  What Is This App & How It Works?
                </Text>
                <Text
                  className="font-normal leading-[26.00px] text-blue_gray_400 w-full"
                  variant="body13"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus placerat.
                </Text>
              </div>
              <Img
                src="images/img_menu_32X32.svg"
                className="h-8 w-8"
                alt="menu"
              />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body11"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="h-8 w-8"
                alt="plus"
              />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body11"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="h-8 w-8"
                alt="plus One"
              />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body11"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="h-8 w-8"
                alt="plus Two"
              />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-5 w-full" />
            <div className="flex flex-row sm:gap-10 items-end justify-between mt-[25px] w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body11"
              >
                What Is This App & How It Works?
              </Text>
              <Img
                src="images/img_plus_32X32.svg"
                className="h-8 w-8"
                alt="plus Three"
              />
            </div>
            <Line className="bg-blue_gray_100 h-px mt-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenterPage;
