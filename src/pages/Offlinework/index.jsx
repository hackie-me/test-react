import React from "react";

import { Button, Img, Text } from "components";

const OfflineworkPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-gilroy h-[1080px] mx-auto relative w-full">
        <header className="flex items-center justify-center mt-[35px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_15.svg"
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
        <div className="absolute bg-gray_900_cc flex flex-col h-full inset-[0] items-center justify-center m-auto p-[415px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start mt-[9px] w-[65%] md:w-full">
            <Img
              src="images/img_music.svg"
              className="h-[83px] w-[23%]"
              alt="music"
            />
            <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
              <Text
                className="font-semibold text-white_A700 w-auto"
                variant="body7"
              >
                You are offline
              </Text>
              <Text
                className="font-medium leading-[26.00px] max-w-[396px] md:max-w-full text-blue_gray_50 text-center"
                variant="body13"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                sociis quam nascetur felis in enim. Praesent id vel nisi,
                adipiscing scelerisque.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfflineworkPage;
