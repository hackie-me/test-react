import React from "react";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CenralizedBillingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[54px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group.svg"
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
        <div className="flex flex-col items-center justify-end max-w-[1120px] mx-auto md:px-5 w-full">
          <div className="bg-white_A700 flex flex-col gap-[49px] items-center justify-start p-[26px] sm:px-5 rounded-md shadow-bs4 w-full">
            <div className="flex flex-col gap-4 items-center justify-start pt-3 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body2"
                >
                  Centralized Billing
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
            <List
              className="flex-col gap-[50px] grid items-center mb-[99px] w-full"
              orientation="vertical"
            >
              <div className="h-[214px] md:h-[358px] relative w-full">
                <div className="absolute bg-white_A700 h-[214px] inset-[0] justify-center m-auto rounded-md shadow-bs4 w-full"></div>
                <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-blue_50 flex flex-row md:gap-10 items-center justify-between p-[13px] rounded-tl-md rounded-tr-md w-full">
                      <Text
                        className="font-medium ml-2.5 text-blue_gray_900"
                        variant="body12"
                      >
                        This Month
                      </Text>
                      <Text
                        className="font-bold mr-2.5 text-blue_A700_01"
                        variant="body12"
                      >
                        $65
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[19%] md:w-full">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[3px]">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Mobile bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 20 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[738px] text-blue_gray_900"
                        variant="body13"
                      >
                        $15.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[19%] md:w-full">
                        <Img
                          src="images/img_ellipse1_50X50.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne One"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[3px]">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Internet bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 24 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[734px] md:mt-0 mt-[17px] text-blue_gray_900"
                        variant="body13"
                      >
                        $50.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-[5px] w-6"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[214px] md:h-[358px] relative w-full">
                <div className="absolute bg-white_A700 h-[214px] inset-[0] justify-center m-auto rounded-md shadow-bs4 w-full"></div>
                <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-blue_50 flex flex-row md:gap-10 items-center justify-between p-[13px] rounded-tl-md rounded-tr-md w-full">
                      <Text
                        className="font-medium ml-2.5 text-blue_gray_900"
                        variant="body12"
                      >
                        Next week
                      </Text>
                      <Text
                        className="font-bold mr-2.5 text-blue_A700_01"
                        variant="body12"
                      >
                        $265
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[18%] md:w-full">
                        <Img
                          src="images/img_ellipse1_1.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne One"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Light bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 4 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[745px] text-blue_gray_900"
                        variant="body13"
                      >
                        $15.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright One"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[18%] md:w-full">
                        <Img
                          src="images/img_ellipse1_50X50.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne One One"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[3px]">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Internet bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 6 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[733px] md:mt-0 mt-[17px] text-blue_gray_900"
                        variant="body13"
                      >
                        $250.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-[5px] w-6"
                        alt="arrowright One One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[214px] md:h-[358px] relative w-full">
                <div className="absolute bg-white_A700 h-[214px] inset-[0] justify-center m-auto rounded-md shadow-bs4 w-full"></div>
                <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-blue_50 flex flex-row md:gap-10 items-center justify-between p-[13px] rounded-tl-md rounded-tr-md w-full">
                      <Text
                        className="font-medium ml-2.5 text-blue_gray_900"
                        variant="body12"
                      >
                        Next Month
                      </Text>
                      <Text
                        className="font-bold mr-2.5 text-blue_A700_01"
                        variant="body12"
                      >
                        $74
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[19%] md:w-full">
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne Two"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[3px]">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Mobile bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 20 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[735px] text-blue_gray_900"
                        variant="body13"
                      >
                        $25.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        alt="arrowright Two"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-[19%] md:w-full">
                        <Img
                          src="images/img_ellipse1_50X50.png"
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          alt="EllipseOne One Two"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[3px]">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Internet bill
                          </Text>
                          <Text
                            className="font-normal text-blue_gray_400"
                            variant="body15"
                          >
                            Payment in 24 days
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[737px] md:mt-0 mt-[17px] text-blue_gray_900"
                        variant="body13"
                      >
                        $49.00
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-[5px] w-6"
                        alt="arrowright One Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenralizedBillingPage;
