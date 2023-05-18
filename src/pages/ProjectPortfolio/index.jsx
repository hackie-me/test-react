import React from "react";

import { Button, Img, List, Text } from "components";

const ProjectPortfolioPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_7.svg"
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
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1268px] mb-[220px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
            <Text
              className="font-semibold mt-2 text-blue_gray_900"
              variant="body11"
            >
              Tenplates
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[86px]"
              leftIcon={
                <Img
                  src="images/img_filter.svg"
                  className="ml-3 mr-2 my-[9px]"
                  alt="filter"
                />
              }
              shape="RoundedBorder6"
              size="lg"
              variant="FillBlueA70001"
            >
              <div className="font-medium text-left text-sm text-white_A700">
                Filters
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[3px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                  <Img
                    src="images/img_rectangle10_257X620.png"
                    className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                    alt="RectangleTen"
                  />
                  <Text
                    className="font-semibold text-blue_gray_700"
                    variant="body13"
                  >
                    Hand Drawn Flat Design Presentation Templates
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                  <Img
                    src="images/img_rectangle10_3.png"
                    className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                    alt="RectangleTen One"
                  />
                  <Text
                    className="font-semibold text-blue_gray_700"
                    variant="body13"
                  >
                    Gredient Business Presentation Templates Free Vector
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start rounded-[3px] w-[49%] md:w-full">
                <Img
                  src="images/img_rectangle10_4.png"
                  className="h-[257px] sm:h-auto object-cover rounded-[3px] w-full"
                  alt="RectangleTen Two"
                />
                <Text
                  className="font-semibold text-blue_gray_700"
                  variant="body13"
                >
                  Hand Drawn Flat Design Presentation Templates
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolioPage;
