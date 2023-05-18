import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const TwitterloginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_22.svg"
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
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:px-5 w-[39%] md:w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Sign in to Recharge Direct
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text className="font-medium text-blue_gray_900" variant="body12">
                Email
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                name="email"
                placeholder="jane@gmail.com"
                shape="RoundedBorder6"
                size="5xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text className="font-medium text-blue_gray_900" variant="body12">
                Password
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="Group10198"
                placeholder="Enter Password"
                shape="RoundedBorder6"
                size="4xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <Text
              className="font-medium md:ml-[0] ml-[381px] mt-[15px] text-blue_A700_01"
              variant="body12"
            >
              Forgot Password?
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-[23px] text-base text-center text-white_A700"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <Text className="font-normal text-blue_gray_200" variant="body13">
                Or continue with
              </Text>
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[528px] sm:min-w-full text-base text-blue_A700_01 text-center"
                onClick={() => googleSignIn()}
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBlueA70001"
              >
                Sign in with Google
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full text-base text-blue_A700_01 text-center"
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                Sign in with Facebook
              </Button>
              <div className="border border-blue_A700_01 border-solid flex flex-col items-center justify-end p-3 rounded-md w-full">
                <div className="flex flex-row gap-2 items-start justify-center w-[36%] md:w-full">
                  <Img
                    src="images/img_twitterlogo4.png"
                    className="h-6 md:h-auto object-cover w-6"
                    alt="twitterlogoFour"
                  />
                  <Text
                    className="font-medium mt-[5px] text-blue_A700_01"
                    variant="body13"
                  >
                    Sign in with Linkedin
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitterloginPage;
