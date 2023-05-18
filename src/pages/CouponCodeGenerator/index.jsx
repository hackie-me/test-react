import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CouponCodeGeneratorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-auto pb-[97px] w-full">
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
        <div className="flex flex-col font-chivo md:gap-10 gap-[70px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[300px] items-start justify-start p-8 sm:px-5 rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_group6514.png')" }}
          >
            <div className="flex flex-col gap-8 justify-start mb-1 md:ml-[0] ml-[18px] w-[37%] md:w-full">
              <div className="bg-white_A700 h-20 md:h-[45px] mr-[241px] p-[17px] relative rounded-[17.14px] w-[46%]">
                <Img
                  src="images/img_image62.png"
                  className="absolute h-[45px] inset-[0] justify-center m-auto object-cover w-[76%]"
                  alt="imageSixtyTwo"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[11px] text-white_A700 w-[98%] sm:w-full"
                as="h3"
                variant="h3"
              >
                Get extra 20% off on Gadgets
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-gilroy gap-[30px] items-center justify-end pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body2"
              >
                Deals Of The Day
              </Text>
              <Img
                src="images/img_clock.svg"
                className="h-10 mb-1.5 w-10"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      src="images/img_pngwing1_3.png"
                      className="h-[194px] md:h-auto object-cover w-full"
                      alt="pngwingOne"
                    />
                    <Text
                      className="font-medium text-black_900_02"
                      variant="body7"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700_01 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-5 w-5"
                        alt="file"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-6 md:ml-[0] mt-[13px] text-blue_gray_400"
                    variant="body13"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      src="images/img_pngwing1_4.png"
                      className="h-[194px] md:h-auto object-cover w-full"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="font-medium text-black_900_02"
                      variant="body7"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700_01 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-5 w-5"
                        alt="file One"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-6 md:ml-[0] mt-[13px] text-blue_gray_400"
                    variant="body13"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      src="images/img_pngwing1_5.png"
                      className="h-[194px] md:h-auto object-cover w-full"
                      alt="pngwingOne Two"
                    />
                    <Text
                      className="font-medium text-black_900_02"
                      variant="body7"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700_01 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-5 w-5"
                        alt="file Two"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-6 md:ml-[0] mt-[13px] text-blue_gray_400"
                    variant="body13"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end py-5 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-6 md:ml-[0] w-[84%] md:w-full">
                    <Img
                      src="images/img_pngwing1_6.png"
                      className="h-[194px] md:h-auto object-cover w-full"
                      alt="pngwingOne Three"
                    />
                    <Text
                      className="font-medium text-black_900_02"
                      variant="body7"
                    >
                      Flat 20% OFF
                    </Text>
                  </div>
                  <div className="bg-blue_50 border-blue_A700_01 border-dashed border-y flex flex-col items-center justify-start mt-[15px] p-3 w-full">
                    <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        32JU80P
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-5 w-5"
                        alt="file Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-medium ml-6 md:ml-[0] mt-[13px] text-blue_gray_400"
                    variant="body13"
                  >
                    12,Nov,2021
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCodeGeneratorPage;
