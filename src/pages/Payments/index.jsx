import React from "react";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PaymentsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[54px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_5.svg"
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
        <div className="flex h-[1011px] md:h-[773px] justify-end max-w-[1120px] mx-auto md:px-5 relative w-full">
          <div className="bg-white_A700 h-[709px] mb-16 mt-auto mx-auto rounded-bl-md rounded-br-md shadow-bs4 w-[95%]"></div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-white_A700 flex flex-col gap-[27px] items-center justify-start p-[26px] sm:px-5 rounded-md shadow-bs4 w-full">
              <div className="flex flex-col gap-4 items-center justify-start pt-[13px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body2"
                  >
                    Payments
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-medium text-base text-gray_900 text-left w-[11%] sm:w-full"
                    placeholderClassName="text-gray_900"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
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
                <Line className="bg-blue_gray_100 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start mb-3 w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-[28%] md:w-full">
                    <Text
                      className="font-medium mt-0.5 text-blue_gray_900"
                      variant="body12"
                    >
                      Available Balance :
                    </Text>
                    <Text
                      className="font-bold text-blue_A700_01"
                      variant="body7"
                    >
                      $2,145.00
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue_50 flex flex-row md:gap-10 items-center justify-between p-[13px] rounded-tl-md rounded-tr-md w-full">
                        <Text
                          className="font-medium ml-2.5 text-blue_gray_900"
                          variant="body12"
                        >
                          Recent Transactions
                        </Text>
                        <Text
                          className="font-bold mr-2.5 text-blue_A700_01"
                          variant="body12"
                        >
                          View All
                        </Text>
                      </div>
                    </div>
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
                            className="font-semibold md:ml-[0] ml-[736px] text-red_700"
                            variant="body13"
                          >
                            -$20.00
                          </Text>
                          <Img
                            src="images/img_arrowright.svg"
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
                            src="images/img_arrowright.svg"
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            alt="arrowright One"
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
                            src="images/img_arrowright.svg"
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            alt="arrowright Two"
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
                            src="images/img_arrowright.svg"
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
                            src="images/img_arrowright.svg"
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
                            src="images/img_arrowright.svg"
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            alt="arrowright Five"
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
                            src="images/img_arrowright.svg"
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            alt="arrowright Six"
                          />
                        </div>
                        <Line className="bg-blue_gray_100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pt-[5px] w-[96%] md:w-full">
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
                            className="font-semibold md:ml-[0] ml-[738px] md:mt-0 mt-1.5 text-green_600 text-right"
                            variant="body13"
                          >
                            +120.00
                          </Text>
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-2 w-6"
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
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
