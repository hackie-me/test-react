import React from "react";

import { Button, Img, List, Text } from "components";

const ProjectPortfolioOnePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_5.svg"
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
                    src="images/img_arrowdown_gray_901.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_901.svg"
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
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1268px] mb-[519px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
            <Text
              className="font-semibold mt-2 text-blue_gray_900"
              variant="body11"
            >
              Project Portfolio
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[69px] text-center text-sm text-white_A700"
              shape="RoundedBorder6"
              size="lg"
              variant="FillBlueA70001"
            >
              Create{" "}
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
              <Img
                src="images/img_rectangle10.png"
                className="h-[257px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                alt="RectangleTen"
              />
              <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                <Text
                  className="font-medium mt-0.5 text-blue_gray_700"
                  variant="body13"
                >
                  Food Ordering App
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
              <Img
                src="images/img_rectangle10_257X296.png"
                className="h-[257px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                alt="RectangleTen One"
              />
              <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                <Text
                  className="font-medium text-blue_gray_700"
                  variant="body13"
                >
                  Fitness & Workout Mobile App
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
              <Img
                src="images/img_rectangle10_1.png"
                className="h-[257px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                alt="RectangleTen Two"
              />
              <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                <Text
                  className="font-medium text-blue_gray_700"
                  variant="body13"
                >
                  Real Estate Landing Page
                </Text>
                <Text
                  className="font-medium mt-1 text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
              <Img
                src="images/img_rectangle10_2.png"
                className="h-[257px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                alt="RectangleTen Three"
              />
              <div className="flex flex-col gap-[5px] items-start justify-end pr-[3px] py-[3px] w-full">
                <Text
                  className="font-medium mt-0.5 text-blue_gray_700"
                  variant="body13"
                >
                  Web Design Landing Page
                </Text>
                <Text
                  className="font-medium text-blue_gray_600"
                  variant="body15"
                >
                  234kb
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolioOnePage;
