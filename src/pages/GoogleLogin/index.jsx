import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const GoogleLoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start mb-[18px] w-[45%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start w-full">
            <Img
              src="images/img_group_1.svg"
              className="h-[35px] w-[32%]"
              alt="Group"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body2"
              >
                Sign in to Recharge Direct
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Email
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray_300 sm:h-auto text-base text-blue_gray_300 text-left w-full"
                    name="email"
                    placeholder="jane@gmail.com"
                    shape="RoundedBorder6"
                    size="5xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-end justify-start mt-1 w-full">
                    <Input
                      wrapClassName="flex md:h-auto w-[512px] sm:w-full"
                      className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                      name="InputField"
                      placeholder="Enter Password"
                      suffix={
                        <Img
                          src="images/img_eye.svg"
                          className="ml-[35px] mr-3 my-4"
                          alt="eye"
                        />
                      }
                      shape="RoundedBorder6"
                      size="4xl"
                      variant="OutlineBluegray100"
                    ></Input>
                    <Text
                      className="font-medium text-blue_A700_01"
                      variant="body12"
                    >
                      Forgot Password?
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium text-base text-center text-white_A700 w-[512px]"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="FillBlueA70001"
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[29px] items-center justify-start pt-1 rounded-md w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-[78%] md:w-full">
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[33%]" />
              <Text className="font-normal text-blue_gray_200" variant="body13">
                Or continue with
              </Text>
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[33%]" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[512px] sm:min-w-full"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="ml-[35px] mr-2 my-[13px]"
                    alt="google"
                  />
                }
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBlueA70001"
              >
                <div className="font-medium text-base text-blue_A700_01 text-left">
                  Sign in with Google
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[512px] sm:min-w-full mt-[17px]"
                leftIcon={
                  <div className="h-6 ml-[35px] mr-2 pt-1 pl-[9px] pr-[3px] w-6 bg-blue_700 rounded-[3px] my-[13px] flex justify-center items-center">
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </div>
                }
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                <div className="font-medium text-base text-blue_A700_01 text-left">
                  Sign in with Facebook
                </div>
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-[17px] text-base text-blue_A700_01 text-center"
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                Sign in with Linkedin
              </Button>
              <Text
                className="font-normal mt-[29px] text-gray_900_14"
                variant="body13"
              >
                <span className="text-colors7 text-base font-gilroy text-left">
                  Don’t have an account?{" "}
                </span>
                <span className="text-colors7 text-base font-gilroy text-left font-bold">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-colors text-base font-gilroy text-left font-bold underline"
                >
                  Sign up.
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleLoginPage;
