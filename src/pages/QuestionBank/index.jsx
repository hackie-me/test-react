import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const QuestionBankPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_3.svg"
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
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start max-w-[940px] mb-[93px] mx-auto pt-2.5 md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start w-[70%] md:w-full">
            <Text className="font-semibold text-black_900" as="h6" variant="h6">
              Let Us Discuss Questions About Product
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-[90%] md:w-full">
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex w-[84%] sm:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Ask a question..."
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer my-4 mx-3"
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
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <Button
                className="cursor-pointer font-medium min-w-[88px] sm:mt-0 mt-0.5 text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-1.5 text-blue_gray_900"
                    variant="body11"
                  >
                    What Is This App & How It Works?
                  </Text>
                  <Img
                    src="images/img_menu.svg"
                    className="h-8 w-8"
                    alt="menu"
                  />
                </div>
                <Text
                  className="font-normal leading-[26.00px] text-blue_gray_400 w-[91%] sm:w-full"
                  variant="body13"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                  augue at fringilla posuere ac, et diam. Augue pulvinar eget
                  purus, iaculis porta adipiscing pulvinar mi ante. Suspendisse
                  ullamcorper etiam natoque et blandit. Adipiscing lacus, vitae
                  morbi sed. Amet, enim vel nec ipsum ac sed. Nulla fermentum
                  turpis penatibus placerat.
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="font-semibold mt-1.5 text-blue_gray_900"
                  variant="body11"
                >
                  What Is This App & How It Works?
                </Text>
                <Img src="images/img_plus.svg" className="h-8 w-8" alt="plus" />
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="font-semibold mt-1.5 text-blue_gray_900"
                  variant="body11"
                >
                  What Is This App & How It Works?
                </Text>
                <Img
                  src="images/img_plus.svg"
                  className="h-8 w-8"
                  alt="plus One"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-blue_gray_100 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="font-semibold mt-1.5 text-blue_gray_900"
                  variant="body11"
                >
                  What Is This App About?
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="h-8 w-8"
                  alt="menu One"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="font-normal text-blue_gray_600"
                  variant="body13"
                >
                  A. Lorem ipsum
                </Text>
                <Text
                  className="font-normal mt-[13px] text-blue_gray_600"
                  variant="body13"
                >
                  B. Lorem ipsum dolor sit amet
                </Text>
                <Text
                  className="font-semibold mt-3 text-green_600"
                  variant="body13"
                >
                  C. Lorem
                </Text>
                <Text
                  className="font-normal mt-[19px] text-blue_gray_600"
                  variant="body13"
                >
                  D. Lorem ipsum dolor{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="font-semibold mt-1.5 text-blue_gray_900"
                  variant="body11"
                >
                  What Is This App & How It Works?
                </Text>
                <Img
                  src="images/img_plus.svg"
                  className="h-8 w-8"
                  alt="plus Two"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionBankPage;
