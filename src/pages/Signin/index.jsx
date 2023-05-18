import React from "react";

import { Button, Img, Input, Text } from "components";

const SigninPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto p-[200px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[228px] w-[51%] md:w-full">
          <Img
            src="images/img_group_7.svg"
            className="h-[35px] w-[31%]"
            alt="Group"
          />
          <Text
            className="font-semibold mt-[62px] text-blue_gray_900"
            variant="body2"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text className="font-medium text-blue_gray_900" variant="body12">
                Email
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                name="Group10198"
                placeholder="Enter Email"
                shape="RoundedBorder6"
                size="4xl"
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
                name="Group10198 One"
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
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center text-white_A700"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
