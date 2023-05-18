import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const StoreCreditsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[294px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_13.svg"
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
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[31px] items-start justify-start p-4 rounded-lg shadow-bs1 w-[68%] md:w-full">
            <Input
              wrapClassName="ml-4 md:ml-[0] pr-[35px] w-[97%]"
              className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black_900_01 sm:pr-5 sm:text-xl text-2xl text-black_900_01 text-left w-full"
              name="Group1541"
              placeholder="Order Summary"
              size="10xl"
              variant="UnderLineBluegray100"
            ></Input>
            <List
              className="flex-col gap-8 grid mb-4 ml-4 md:ml-[0] w-[74%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  alt="pngwingOne"
                />
                <div className="flex flex-col gap-[19px] items-start justify-start pb-12 md:pr-10 pr-12 sm:pr-5">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body11"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start w-[26%] md:w-full">
                    <Text
                      className="font-medium text-black_900_01"
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start w-[43%] md:w-full">
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body7"
                    >
                      <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-colors2 text-2xl font-gilroy text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text
                      className="font-medium line-through mt-[11px] text-blue_gray_400"
                      variant="body13"
                    >
                      <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                        55.99
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray_100 w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  alt="pngwingOne One"
                />
                <div className="flex flex-col gap-[19px] items-start justify-start pb-12 md:pr-10 pr-12 sm:pr-5">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body11"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start w-[26%] md:w-full">
                    <Text
                      className="font-medium text-black_900_01"
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start w-[43%] md:w-full">
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body7"
                    >
                      <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-colors2 text-2xl font-gilroy text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text
                      className="font-medium line-through mt-[11px] text-blue_gray_400"
                      variant="body13"
                    >
                      <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors3 text-base font-gilroy text-left font-semibold">
                        55.99
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[257px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full">
              <Input
                wrapClassName="pr-[35px] w-full"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black_900_01 sm:pr-5 sm:text-xl text-2xl text-black_900_01 text-left w-full"
                name="Group1543"
                placeholder="Price Details"
                size="9xl"
                variant="UnderLineBluegray100"
              ></Input>
              <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body12"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text className="font-medium text-green_600" variant="body12">
                    Store Credits
                  </Text>
                  <Text className="font-medium text-green_600" variant="body12">
                    -$111.98
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
                <Text className="font-medium text-black_900_01" variant="body7">
                  Total Amount
                </Text>
                <Text className="font-medium text-black_900_01" variant="body7">
                  $1120.58
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreCreditsPage;
