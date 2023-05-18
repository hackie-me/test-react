import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";

const FeedbackPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
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
        <div className="flex flex-col gap-[30px] items-center justify-start mb-[130px] md:px-5 w-[38%] md:w-full">
          <Text
            className="font-semibold leading-[52.00px] text-blue_gray_900 text-center w-full"
            variant="body2"
          >
            Let Us Know How was Your Experience with Us
          </Text>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
              <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Name
                </Text>
              </div>
              <Input
                wrapClassName="w-full"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray_300 sm:h-auto text-base text-blue_gray_300 text-left w-full"
                name="InputField"
                placeholder="Jane Cooper"
                shape="RoundedBorder6"
                size="4xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
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
            <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
              <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Company name
                </Text>
              </div>
              <Input
                wrapClassName="w-full"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray_300 sm:h-auto text-base text-blue_gray_300 text-left w-full"
                name="InputField One"
                placeholder="Enter your company name"
                shape="RoundedBorder6"
                size="5xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
              <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Feedback Title
                </Text>
              </div>
              <Input
                wrapClassName="w-full"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray_300 sm:h-auto text-base text-blue_gray_300 text-left w-full"
                name="InputField Two"
                placeholder="Enter your Feedback Title"
                shape="RoundedBorder6"
                size="5xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                <Text
                  className="font-medium text-blue_gray_900"
                  variant="body12"
                >
                  Message
                </Text>
              </div>
              <TextArea
                className="flex mt-1 w-full"
                name="TextPlaceholde"
                placeholder="Enter message"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineBluegray50"
              ></TextArea>
            </div>
            <Button
              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[512px]"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackPage;
