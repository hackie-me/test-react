import React from "react";

import { Button, Img, Input, PagerIndicator, Text } from "components";

import { CloseSVG } from "../../assets/images";

const OnboardingGuidePage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[178px] justify-start mx-auto pb-[159px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
                <Img
                  src="images/img_group_9.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer m-3"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray300"
                ></Input>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white_A700 top-[0] w-[18px]"
                      variant="body16"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[91px] w-full">
          <div className="flex flex-col md:gap-10 gap-[159px] justify-start w-[78%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start mr-[281px] w-[72%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-full">
                <Img
                  src="images/img_paymentmethod.png"
                  className="h-[299px] md:h-auto object-cover w-[299px]"
                  alt="paymentmethod"
                />
                <div className="flex flex-col gap-2 items-center justify-start md:mt-0 mt-[102px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body2"
                  >
                    Quick & Easy Payments
                  </Text>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_400 text-center"
                    variant="body12"
                  >
                    <>
                      Get your business by accepting card
                      <br />
                      payments with the new card reader
                    </>
                  </Text>
                </div>
              </div>
              <PagerIndicator
                className="flex h-2 justify-center w-[76px]"
                count={4}
                activeCss="inline-block cursor-pointer h-2 bg-blue_A700_01 w-[38.57px] rounded"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_200 w-2"
                selectedWrapperCss="inline-block md:ml-[0] mx-[2.34px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[2.34px] sm:ml-[0]"
              />
            </div>
            <Button
              className="flex h-[75px] items-center justify-center md:ml-[0] ml-[899px] w-[75px]"
              shape="icbRoundedBorder37"
              size="4xlIcn"
              variant="icbFillBlueA70001"
            >
              <Img
                src="images/img_arrowright_white_A700.svg"
                className="h-[26px]"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingGuidePage;
