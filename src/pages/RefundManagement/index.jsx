import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const RefundManagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[199px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_7.svg"
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
        <div className="flex flex-col font-opensans gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
              <Img
                src="images/img_pngwing1.png"
                className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                alt="pngwingOne"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start w-[84%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body7"
                  >
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                </div>
                <Text
                  className="font-medium mt-5 text-blue_gray_400"
                  variant="body11"
                >
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <div className="flex flex-row items-center justify-start mt-[18px] w-[10%] md:w-full">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body12"
                  >
                    Color:
                  </Text>
                  <Text
                    className="font-medium ml-1 text-blue_gray_400"
                    variant="body12"
                  >
                    Blue
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[16%] md:w-full">
                  <Text
                    className="font-medium text-blue_gray_900"
                    variant="body7"
                  >
                    <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-opensans text-left font-semibold">
                      $
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-colors4 text-2xl font-opensans text-left font-semibold">
                      555.29
                    </span>
                  </Text>
                  <Text
                    className="font-medium line-through mt-[11px] text-blue_gray_400"
                    variant="body13"
                  >
                    <span className="text-colors3 text-base font-opensans text-left font-semibold">
                      $
                    </span>
                    <span className="text-colors3 text-base font-opensans text-left font-semibold">
                      55.99
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-gilroy gap-[29px] items-start justify-between w-full">
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[30px] justify-start p-[29px] sm:px-5 rounded-md shadow-bs1 w-[68%] md:w-full">
              <Text className="font-medium text-black_900_01" variant="body7">
                Track your return
              </Text>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[78px] mr-[420px] w-[38%] md:w-full">
                <div className="md:h-[324px] h-[340px] mb-0.5 relative w-[9%] md:w-full">
                  <Line className="absolute bg-blue_gray_100 h-[322px] inset-[0] justify-center m-auto w-1" />
                  <Button
                    className="absolute flex h-6 inset-x-[0] items-center justify-center mx-auto rounded-[50%] top-[0] w-6"
                    size="mdIcn"
                    variant="icbOutlineGray50"
                  >
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-4"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="absolute flex flex-col md:gap-10 gap-[86px] h-max inset-[0] items-center justify-center m-auto w-[84%]">
                    <div className="bg-gray_50 h-5 outline outline-[1.5px] outline-blue_gray_100 rounded-[50%] w-5"></div>
                    <div className="bg-gray_50 h-5 outline outline-[1.5px] outline-blue_gray_100 rounded-[50%] w-5"></div>
                  </div>
                  <div className="absolute bg-gray_50 bottom-[0] h-5 inset-x-[0] mx-auto outline outline-[1.5px] outline-blue_gray_100 rounded-[50%] w-5"></div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="font-semibold text-blue_800"
                    variant="body13"
                  >
                    Return stared
                  </Text>
                  <Text
                    className="font-semibold mt-[93px] text-blue_gray_200"
                    variant="body13"
                  >
                    Drop off the item by Thu, Mar 1
                  </Text>
                  <Text
                    className="font-semibold mt-[85px] text-blue_gray_200"
                    variant="body13"
                  >
                    Refund sent once we get the items
                  </Text>
                  <Text
                    className="font-semibold mt-[82px] text-blue_gray_200"
                    variant="body13"
                  >
                    Refund on your card
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[31%] md:w-full">
              <div className="bg-white_A700 flex flex-col gap-[37px] items-start justify-start p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start ml-3.5 md:ml-[0] w-[93%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body7"
                    >
                      Refund Summary
                    </Text>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body12"
                      >
                        Price (2 items)
                      </Text>
                      <Text
                        className="font-medium text-black_900_01"
                        variant="body12"
                      >
                        $1110.58
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body12"
                      >
                        Delivery Charges
                      </Text>
                      <Text
                        className="font-medium text-black_900_01"
                        variant="body12"
                      >
                        $10
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body7"
                    >
                      Total refund
                    </Text>
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body7"
                    >
                      $1120.58
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-7 items-start justify-start mb-1.5 ml-3.5 md:ml-[0]">
                  <Text
                    className="font-medium text-blue_A700_01"
                    variant="body12"
                  >
                    Cancel this return
                  </Text>
                  <Text
                    className="font-medium text-blue_A700_01"
                    variant="body12"
                  >
                    View order destails
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[386px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundManagementPage;
