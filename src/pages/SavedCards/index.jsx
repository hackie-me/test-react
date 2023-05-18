import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SavedCardsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[51px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_9.svg"
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
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto md:px-5 rounded-lg w-full">
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg shadow-bs1 w-[68%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-4 w-[97%] md:w-full">
              <Input
                wrapClassName="pr-[35px] w-full"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black_900_01 sm:pr-5 sm:text-xl text-2xl text-black_900_01 text-left w-full"
                name="Frame9983"
                placeholder="Saved Cards"
                size="9xl"
                variant="UnderLineBluegray100"
              ></Input>
              <div className="flex flex-col gap-6 items-center justify-start rounded w-full">
                <List
                  className="flex-col gap-6 grid items-center rounded w-full"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start my-0 p-4 rounded w-full">
                    <div className="flex md:flex-col flex-row gap-2 items-center justify-start my-[7px] w-full">
                      <Img
                        src="images/img_search.svg"
                        className="h-9 w-9"
                        alt="search"
                      />
                      <div className="flex md:flex-1 md:flex-col flex-row gap-2 items-start justify-between w-[95%] md:w-full">
                        <Img
                          src="images/img_ellipse3.png"
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          alt="EllipseThree"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[3px] pb-[5px]">
                          <Text
                            className="font-medium text-black_900_01"
                            variant="body11"
                          >
                            HDFC Debit Card
                          </Text>
                          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              XXXX XXXX XXXX XX48
                            </Text>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              Exp : 03/22
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start my-0 p-4 rounded w-full">
                    <div className="flex md:flex-col flex-row gap-2 items-center justify-start my-[7px] w-full">
                      <Img
                        src="images/img_search.svg"
                        className="h-9 w-9"
                        alt="search One"
                      />
                      <div className="flex md:flex-1 md:flex-col flex-row gap-2 items-start justify-between w-[95%] md:w-full">
                        <Img
                          src="images/img_ellipse3_60X60.png"
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          alt="EllipseThree One"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[3px] pb-[5px]">
                          <Text
                            className="font-medium text-black_900_01"
                            variant="body11"
                          >
                            SBI Credit Card
                          </Text>
                          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              XXXX XXXX XXXX XX48
                            </Text>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              Exp : 03/22
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start p-4 rounded w-full">
                  <div className="flex flex-col gap-[30px] justify-start my-2 w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-[49%] md:w-full">
                      <Img
                        src="images/img_radiobutton.svg"
                        className="h-9 w-9"
                        alt="RadioButton"
                      />
                      <Text
                        className="font-medium text-black_900_02"
                        variant="body11"
                      >
                        Add New Credit/Debit/ATM Card
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[60px] w-[67%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                            className="font-medium text-black_900_02"
                            variant="body12"
                          >
                            Name On Card
                          </Text>
                        </div>
                        <Input
                          wrapClassName="w-full"
                          className="font-medium md:h-auto p-0 placeholder:text-blue_gray_400 sm:h-auto text-blue_gray_400 text-left text-lg w-full"
                          name="InputField One"
                          placeholder="Enter Your First Name"
                          shape="RoundedBorder6"
                          size="4xl"
                          variant="OutlineBluegray100"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                            className="font-medium text-black_900_02"
                            variant="body12"
                          >
                            Card Number
                          </Text>
                        </div>
                        <div className="bg-white_A700 border border-blue_gray_100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 rounded w-full">
                          <div className="flex flex-col items-start justify-end pr-1 py-1">
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body12"
                            >
                              XXXX XXXX XXXX XX34
                            </Text>
                          </div>
                          <Img
                            src="images/img_rupaylogo1.png"
                            className="sm:flex-1 h-[17px] md:h-auto object-cover w-[12%] sm:w-full"
                            alt="RupayLogoOne"
                          />
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                          <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                            <Text
                              className="font-medium text-black_900_02"
                              variant="body12"
                            >
                              Expiry Date
                            </Text>
                          </div>
                          <Input
                            wrapClassName="w-full"
                            className="font-medium md:h-auto p-0 placeholder:text-blue_gray_400 sm:h-auto text-blue_gray_400 text-left text-lg w-full"
                            name="InputField Two"
                            placeholder="00/0000"
                            shape="RoundedBorder6"
                            size="4xl"
                            variant="OutlineBluegray100"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                          <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                            <Text
                              className="font-medium text-black_900_02"
                              variant="body12"
                            >
                              CVV
                            </Text>
                          </div>
                          <Input
                            wrapClassName="w-full"
                            className="font-medium md:h-auto p-0 placeholder:text-blue_gray_400 sm:h-auto text-blue_gray_400 text-left text-lg w-full"
                            name="price Three"
                            placeholder="XXX"
                            shape="RoundedBorder6"
                            size="4xl"
                            variant="OutlineBluegray100"
                          ></Input>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium text-base text-center text-white_A700 w-[500px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        Pay $1120.58
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[500px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[92%] md:w-full">
              <Input
                wrapClassName="pr-[35px] w-full"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black_900_01 sm:pr-5 sm:text-xl text-2xl text-black_900_01 text-left w-full"
                name="Group883"
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
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    Discount
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
              <div className="flex flex-row gap-[68px] items-center justify-start w-[94%] md:w-full">
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
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedCardsPage;
