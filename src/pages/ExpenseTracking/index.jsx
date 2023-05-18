import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ExpenseTrackingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_1.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_black_900.svg"
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-[9px] text-gray_900"
                    variant="body13"
                  >
                    Orders
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900"
                  variant="body13"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-4 text-gray_900"
                    variant="body13"
                  >
                    More
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                src="images/img_cart.svg"
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="md:h-[708px] h-[951px] max-w-[1120px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-4 rounded-bl-md rounded-br-md shadow-bs4 w-[95%] sm:w-full">
            <SelectBox
              className="font-bold mb-[621px] mt-[31px] text-blue_A700_01 text-left text-lg w-[13%] sm:w-full"
              placeholderClassName="text-blue_A700_01"
              indicator={
                <Img
                  src="images/img_arrowdown_blue_A701.svg"
                  className="h-6 mr-[0] w-6"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="Filter & Sort"
              size="sm"
              name="Frame9870"
              isMulti={false}
              options={frame9870OptionsList}
            />
          </div>
          <div className="absolute flex flex-col gap-[50px] h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-blue_A700_01 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-md shadow-bs4 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[7px] ml-3 md:ml-[0] w-[94%] md:w-full">
                <div className="flex flex-col gap-[43px] items-start justify-start w-[30%] md:w-full">
                  <Text className="font-semibold text-gray_50" variant="body2">
                    Expense Tracking
                  </Text>
                  <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                    <Text
                      className="font-medium text-white_A700"
                      variant="body13"
                    >
                      Total Expense :
                    </Text>
                    <Text
                      className="font-bold text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      $2145.00
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-between w-[28%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-16 items-end justify-start">
                    <Text
                      className="font-medium mr-[3px] text-white_A700"
                      variant="body13"
                    >
                      30% from transfer
                    </Text>
                    <Text
                      className="font-medium text-white_A700"
                      variant="body13"
                    >
                      70% from salary
                    </Text>
                  </div>
                  <div className="!w-[131px] h-[132px] overflow-visible">
                    <CircularProgressbar
                      className="!w-[131px] h-[132px] overflow-visible"
                      value={70}
                      strokeWidth={18}
                      styles={{
                        trail: { strokeWidth: 18, stroke: "#67ffffff" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(0deg)",
                          stroke: "#ffffff",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-full">
              <div className="bg-white_A700 flex flex-col gap-[30px] items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs4 w-full">
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_900 text-blue_gray_900 text-left text-lg w-full"
                  name="FrameOne"
                  placeholder="Recent Transactions"
                  shape="CustomBorderTL6"
                  size="xl"
                  variant="FillBlue50"
                ></Input>
                <List
                  className="flex-col gap-6 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Lightbill
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[801px] text-red_700"
                        variant="body13"
                      >
                        -$20.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Salary
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[803px] text-green_600"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright One"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-1 w-[96%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[803px] text-green_600"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Two"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Loan, Interests
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[803px] text-green_600"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Three"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[738px] text-green_600"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Four"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[738px] text-green_600"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Five"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-1 w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900 text-center"
                          variant="body13"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400 text-center"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[738px] text-green_600 text-right"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Six"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-medium text-blue_gray_900 text-center"
                          variant="body13"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="font-normal mt-1 text-blue_gray_400 text-center"
                          variant="body15"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[738px] text-green_600 text-right"
                        variant="body13"
                      >
                        +120.00
                      </Text>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Seven"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackingPage;
