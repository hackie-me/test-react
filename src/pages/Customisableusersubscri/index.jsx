import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CustomisableusersubscriPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-10 items-center justify-start mx-auto pb-[461px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_2.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
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
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
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
                    <Text
                      className="font-medium text-gray_900"
                      variant="body13"
                    >
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
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[33px] items-center justify-center md:px-5 w-[58%] md:w-full">
          <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start pb-4 rounded-md shadow-bs4 w-[48%] md:w-full">
            <Input
              wrapClassName="flex w-full"
              className="font-bold p-0 placeholder:text-blue_A700_01 text-blue_A700_01 text-left text-lg uppercase w-full"
              name="Group9834"
              placeholder="Basic plan"
              suffix={
                <Img
                  src="images/img_edit.svg"
                  className="mt-[11px] mb-2.5 ml-[35px] mr-6"
                  alt="edit"
                />
              }
              shape="CustomBorderTL6"
              size="xl"
              variant="FillBlue50"
            ></Input>
            <div className="flex flex-col gap-4 items-start justify-start w-[92%] md:w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start pt-2.5 w-[74%] md:w-full">
                <div className="flex flex-row items-start justify-start w-[49%] md:w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-6 w-6"
                    alt="clock"
                  />
                  <Text
                    className="font-bold text-blue_A700_01"
                    as="h6"
                    variant="h6"
                  >
                    50
                  </Text>
                  <Text
                    className="font-medium mt-[15px] text-blue_gray_900"
                    variant="body12"
                  >
                    /month
                  </Text>
                </div>
                <List
                  className="flex-col font-inter gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Total Visits :
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between w-[52%]">
                      <Button
                        className="flex h-8 items-center justify-center rounded-[50%] w-8"
                        size="lgIcn"
                        variant="icbOutlineBlue50"
                      >
                        <Img
                          src="images/img_minussolid.svg"
                          className="h-4"
                          alt="minusSolid"
                        />
                      </Button>
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body13"
                      >
                        2
                      </Text>
                      <Button
                        className="flex h-8 items-center justify-center rounded-[50%] w-8"
                        size="lgIcn"
                        variant="icbOutlineBlue50"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[18px] items-end justify-between w-full">
                    <Text
                      className="font-medium mb-0.5 mt-[9px] text-blue_gray_900"
                      variant="body12"
                    >
                      Total Pages :
                    </Text>
                    <div className="flex flex-row gap-8 items-center justify-between w-[52%]">
                      <Button
                        className="flex h-8 items-center justify-center rounded-[50%] w-8"
                        size="lgIcn"
                        variant="icbOutlineBlue50"
                      >
                        <Img
                          src="images/img_minussolid.svg"
                          className="h-4"
                          alt="minusSolid One"
                        />
                      </Button>
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body13"
                      >
                        2
                      </Text>
                      <Button
                        className="flex h-8 items-center justify-center rounded-[50%] w-8"
                        size="lgIcn"
                        variant="icbOutlineBlue50"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus One"
                        />
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <Img
                    src="images/img_checkmark_22X22.svg"
                    className="h-[22px] mt-0.5 w-[22px]"
                    alt="checkmark"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                    variant="body13"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <Img
                    src="images/img_checkmark_22X22.svg"
                    className="h-[22px] mt-0.5 w-[22px]"
                    alt="checkmark One"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                    variant="body13"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <Img
                    src="images/img_checkmark_22X22.svg"
                    className="h-[22px] mt-0.5 w-[22px]"
                    alt="checkmark Two"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                    variant="body13"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <Img
                    src="images/img_checkmark_22X22.svg"
                    className="h-[22px] mt-0.5 w-[22px]"
                    alt="checkmark Three"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                    variant="body13"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[48%] md:w-full">
            <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start pb-4 rounded-md shadow-bs4 w-full">
              <Input
                wrapClassName="flex w-full"
                className="font-bold p-0 placeholder:text-blue_A700_01 text-blue_A700_01 text-left text-lg uppercase w-full"
                name="Group9834 One"
                placeholder="PREMIUM plan"
                suffix={
                  <Img
                    src="images/img_edit.svg"
                    className="mt-[11px] mb-2.5 ml-[35px] mr-[26px]"
                    alt="edit"
                  />
                }
                shape="CustomBorderTL6"
                size="xl"
                variant="FillBlue50"
              ></Input>
              <div className="flex flex-col gap-4 items-start justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start pt-2.5 w-[76%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-[54%] md:w-full">
                    <Img
                      src="images/img_clock.svg"
                      className="h-6 w-6"
                      alt="clock One"
                    />
                    <Text
                      className="font-bold text-blue_A700_01"
                      as="h6"
                      variant="h6"
                    >
                      100
                    </Text>
                    <Text
                      className="font-medium mt-[15px] text-blue_gray_900"
                      variant="body12"
                    >
                      /month
                    </Text>
                  </div>
                  <List
                    className="flex-col font-inter gap-4 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-6 items-center justify-between w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Total Visits :
                      </Text>
                      <div className="flex flex-row gap-8 items-center justify-between w-[54%]">
                        <Button
                          className="flex h-8 items-center justify-center rounded-[50%] w-8"
                          size="lgIcn"
                          variant="icbOutlineBlue50"
                        >
                          <Img
                            src="images/img_minussolid.svg"
                            className="h-4"
                            alt="minusSolid Two"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-blue_A700_01"
                          variant="body13"
                        >
                          10
                        </Text>
                        <Button
                          className="flex h-8 items-center justify-center rounded-[50%] w-8"
                          size="lgIcn"
                          variant="icbOutlineBlue50"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="h-4"
                            alt="plus Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-[18px] items-end justify-between w-full">
                      <Text
                        className="font-medium mb-0.5 mt-[9px] text-blue_gray_900"
                        variant="body12"
                      >
                        Total Pages :
                      </Text>
                      <div className="flex flex-row gap-8 items-center justify-between w-[54%]">
                        <Button
                          className="flex h-8 items-center justify-center rounded-[50%] w-8"
                          size="lgIcn"
                          variant="icbOutlineBlue50"
                        >
                          <Img
                            src="images/img_minussolid.svg"
                            className="h-4"
                            alt="minusSolid Three"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-blue_A700_01"
                          variant="body13"
                        >
                          10
                        </Text>
                        <Button
                          className="flex h-8 items-center justify-center rounded-[50%] w-8"
                          size="lgIcn"
                          variant="icbOutlineBlue50"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="h-4"
                            alt="plus Three"
                          />
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      src="images/img_checkmark_22X22.svg"
                      className="h-[22px] mt-0.5 w-[22px]"
                      alt="checkmark Four"
                    />
                    <Text
                      className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                      variant="body13"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      src="images/img_checkmark_22X22.svg"
                      className="h-[22px] mt-0.5 w-[22px]"
                      alt="checkmark Five"
                    />
                    <Text
                      className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                      variant="body13"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      src="images/img_checkmark_22X22.svg"
                      className="h-[22px] mt-0.5 w-[22px]"
                      alt="checkmark Six"
                    />
                    <Text
                      className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                      variant="body13"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      src="images/img_checkmark_22X22.svg"
                      className="h-[22px] mt-0.5 w-[22px]"
                      alt="checkmark Seven"
                    />
                    <Text
                      className="sm:flex-1 font-normal leading-[26.00px] text-blue_gray_900 w-[91%] sm:w-full"
                      variant="body13"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
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

export default CustomisableusersubscriPage;
