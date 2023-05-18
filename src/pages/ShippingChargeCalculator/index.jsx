import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ShippingChargeCalculatorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto pb-[73px] w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  src="images/img_group_11.svg"
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
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-9 items-start justify-start p-8 sm:px-5 rounded-lg shadow-bs1 w-[68%] md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[77%] md:w-full">
                <Img
                  src="images/img_pngwing1_180X180.png"
                  className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                  alt="pngwingOne"
                />
                <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Samsung Galaxy M12
                  </Text>
                  <Text
                    className="font-medium mt-[19px] text-blue_gray_400"
                    variant="body11"
                  >
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[17px] w-[23%] md:w-full">
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
                  <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[37%] md:w-full">
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
                  <div className="flex flex-row font-gilroy items-center justify-between mt-3 w-full">
                    <div className="flex flex-row items-center justify-evenly">
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="icbRoundedBorder3"
                        size="lgIcn"
                        variant="icbOutlineBluegray100"
                      >
                        <Img
                          src="images/img_menu_36X36.svg"
                          className="h-4"
                          alt="menu"
                        />
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[64px] text-black_900_01 text-center text-lg"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBluegray400"
                      >
                        1
                      </Button>
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="icbRoundedBorder3"
                        size="lgIcn"
                        variant="icbOutlineBluegray100"
                      >
                        <Img
                          src="images/img_plus_36X36.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-6 my-1.5 w-px" />
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body12"
                    >
                      Save For Later
                    </Text>
                    <Line className="bg-blue_gray_100 h-6 my-1.5 w-px" />
                    <Text className="font-medium text-red_700" variant="body12">
                      Remove
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                <Text className="font-medium text-black_900_01" variant="body7">
                  Shipping Charges
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Pick-up Area Pin Code
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray_800 sm:h-auto text-base text-blue_gray_800 text-left w-full"
                    name="zipcode"
                    placeholder="333333"
                    shape="RoundedBorder6"
                    size="4xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Delivery Area Pin Code
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray_800 sm:h-auto text-base text-blue_gray_800 text-left w-full"
                    name="zipcode One"
                    placeholder="333333"
                    shape="RoundedBorder6"
                    size="4xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Weight
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray_800_01 sm:h-auto text-base text-blue_gray_800_01 text-left w-full"
                    name="weight"
                    placeholder="0.5 KG"
                    shape="RoundedBorder6"
                    size="4xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start mt-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Cash On Delivery and Name Pay Balance Applicable
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray_800_01 sm:h-auto text-base text-blue_gray_800_01 text-left w-full"
                    name="InputField One"
                    placeholder="Not Applicable"
                    shape="RoundedBorder6"
                    size="5xl"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-[23px] pb-[11px] w-[62%] md:w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Charge
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-full">
                    <Text
                      className="font-bold text-blue_gray_900"
                      variant="body2"
                    >
                      $199
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      ( Includes : Import free deposit )
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[478px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Price Details
                  </Text>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
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
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Discount
                    </Text>
                    <Text
                      className="font-medium text-green_600"
                      variant="body12"
                    >
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
                      $199
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray_100 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Total Amount
                  </Text>
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
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
      </div>
    </>
  );
};

export default ShippingChargeCalculatorPage;
