import React from "react";

import { Button, Img, Input, Text } from "components";

const GuestLoginPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mb-[332px] w-[45%] md:w-full">
          <Img
            src="images/img_group_6.svg"
            className="h-[35px] w-[32%]"
            alt="Group"
          />
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text className="font-semibold text-blue_gray_900" variant="body2">
              Login as a Guest
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
                    name="password"
                    placeholder="*********"
                    suffix={
                      <Img
                        src="images/img_eye.svg"
                        className="ml-[35px] mr-3 my-4"
                        alt="eye"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
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
      </div>
    </>
  );
};

export default GuestLoginPage;
