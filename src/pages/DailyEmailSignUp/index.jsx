import React from "react";

import { Button, Img, Input, List, Text } from "components";

const DailyEmailSignUpPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_2.svg"
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
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
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
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start mb-[352px] md:px-5 w-[29%] md:w-full">
          <Text className="font-semibold text-black_900" as="h6" variant="h6">
            Daily Email SIgn Up
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start w-[35%] md:w-full">
              <Img
                src="images/img_group2696.svg"
                className="h-[120px] w-full"
                alt="Group2696"
              />
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body7"
                >
                  Subscribe
                </Text>
                <Text
                  className="font-medium text-blue_gray_300"
                  variant="body13"
                >
                  Get the good stuff
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-[396px] sm:w-full">
                <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body13"
                  >
                    Email
                  </Text>
                </div>
                <Input
                  wrapClassName="w-full"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray_200 sm:h-auto text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Enter Your Email"
                  shape="RoundedBorder6"
                  size="xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium text-base text-center text-white_A700 w-[396px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyEmailSignUpPage;
