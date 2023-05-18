import React from "react";

import { Button, Img, Input, Text } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_21.svg"
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
        <div className="flex flex-col gap-[34px] items-center justify-start mb-[364px] md:px-5 w-[39%] md:w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Create Account
          </Text>
          <div className="flex flex-col items-center justify-end pt-[5px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body12"
                  >
                    First Name
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium p-0 placeholder:text-blue_gray_700 text-base text-blue_gray_700 text-left w-full"
                    name="Group10198"
                    placeholder="jane"
                    shape="RoundedBorder6"
                    size="5xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body12"
                  >
                    Last Name
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium p-0 placeholder:text-blue_gray_700 text-base text-blue_gray_700 text-left w-full"
                    name="Group10198 One"
                    placeholder="Jnson"
                    shape="RoundedBorder6"
                    size="4xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[19px] rounded-lg w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Mobile Number
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_700 text-base text-blue_gray_700 text-left w-full"
                  name="mobileNo"
                  placeholder="+91 1234567890"
                  shape="RoundedBorder6"
                  size="4xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Email
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_700 text-base text-blue_gray_700 text-left w-full"
                  name="email"
                  placeholder="jane@gmail.com"
                  shape="RoundedBorder6"
                  size="5xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Set Password
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-blue_gray_200 text-left text-lg w-full"
                  name="Group10198 Two"
                  placeholder="Set password"
                  shape="RoundedBorder6"
                  size="5xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
