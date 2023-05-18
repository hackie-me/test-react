import React from "react";

import { Button, Img, List, Text } from "components";

const DownloadPermissionPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-8 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_8.svg"
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
        <div className="md:h-[1215px] sm:h-[1887px] h-[409px] max-w-[1268px] mb-[519px] mx-auto md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col gap-[25px] inset-x-[0] items-start justify-start mx-auto rounded-[5px] w-full">
            <Text className="font-semibold text-blue_gray_900" variant="body11">
              Image Library
            </Text>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[3px] rounded-[5px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen"
                />
                <Text
                  className="font-medium mt-3.5 text-blue_gray_700"
                  variant="body13"
                >
                  naturephotography.jpg
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                <Img
                  src="images/img_rectangle10_257X296.png"
                  className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen One"
                />
                <Text
                  className="font-medium mt-3.5 text-blue_gray_700"
                  variant="body13"
                >
                  naturephotography.jpg
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                <Img
                  src="images/img_rectangle10_1.png"
                  className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen Two"
                />
                <Text
                  className="font-medium mt-3.5 text-blue_gray_700"
                  variant="body13"
                >
                  naturephotography.jpg
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[5px] w-full">
                <Img
                  src="images/img_rectangle10_2.png"
                  className="h-[257px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen Three"
                />
                <Text
                  className="font-medium mt-3.5 text-blue_gray_700"
                  variant="body13"
                >
                  naturephotography.jpg
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
            </List>
          </div>
          <div className="absolute bg-white_A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-4 rounded-[10px] shadow-bs6 top-[0] w-1/4">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Text
                className="font-medium leading-[26.00px] text-blue_gray_900 text-center"
                variant="body13"
              >
                <>
                  DhiWise app wants to download files <br />
                  in your device
                </>
              </Text>
              <div className="flex flex-row gap-4 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-medium text-blue_A700_01 text-center text-sm w-[134px]"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="OutlineBlueA70001"
                >
                  Deny
                </Button>
                <Button
                  className="cursor-pointer font-medium text-center text-sm text-white_A700 w-[134px]"
                  shape="RoundedBorder6"
                  size="lg"
                  variant="FillBlueA70001"
                >
                  Allow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPermissionPage;
