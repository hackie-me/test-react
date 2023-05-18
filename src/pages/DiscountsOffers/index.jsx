import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DiscountsOffersPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-auto pb-[42px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_3.svg"
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
          <div className="flex flex-col font-gilroy gap-[30px] items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between py-1.5 w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body2"
                >
                  Offers For You
                </Text>
              </div>
              <Img
                src="images/img_clock.svg"
                className="h-10 w-10"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                  <div className="h-[194px] relative w-full">
                    <Img
                      src="images/img_pngwing1.png"
                      className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                      alt="pngwingOne"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-gray_50 text-sm top-[0]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <Text
                      className="capitalize font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-[23px] text-black_900_02"
                      variant="body7"
                    >
                      boAt Airdopes 131
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_900_02"
                          variant="body7"
                        >
                          <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-colors1 text-2xl font-gilroy text-left">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-1.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_3.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne"
                        />
                        <Text
                          className="font-medium mt-0.5 text-amber_500"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                  <div className="h-[194px] relative w-full">
                    <Img
                      src="images/img_pngwing1_194X248.png"
                      className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                      alt="pngwingOne One"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-gray_50 text-sm top-[0]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <Text
                      className="capitalize font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-[23px] text-black_900_02"
                      variant="body7"
                    >
                      HP Envy 13 x360
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_900_02"
                          variant="body7"
                        >
                          <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-colors1 text-2xl font-gilroy text-left">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-1.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_4.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne One"
                        />
                        <Text
                          className="font-medium mt-0.5 text-amber_500"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                  <div className="h-[194px] relative w-full">
                    <Img
                      src="images/img_pngwing1_1.png"
                      className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                      alt="pngwingOne Two"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-gray_50 text-sm top-[0]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <Text
                      className="capitalize font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-5 text-black_900_02"
                      variant="body7"
                    >
                      OnePlus 10R 5G
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_900_02"
                          variant="body7"
                        >
                          <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-colors1 text-2xl font-gilroy text-left">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-1.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_5.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne Two"
                        />
                        <Text
                          className="font-medium mt-0.5 text-amber_500"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                  <div className="h-[194px] relative w-full">
                    <Img
                      src="images/img_pngwing1_2.png"
                      className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                      alt="pngwingOne Three"
                    />
                    <Button
                      className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-gray_50 text-sm top-[0]"
                      size="sm"
                      variant="FillGreen600"
                    >
                      30% OFF
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <Text
                      className="capitalize font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-5 text-black_900_02"
                      variant="body7"
                    >
                      APPLE iPad
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="font-medium text-black_900_02"
                          variant="body7"
                        >
                          <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-gilroy text-left">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-colors1 text-2xl font-gilroy text-left">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="font-normal line-through mt-1.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_6.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne Three"
                        />
                        <Text
                          className="font-medium mt-0.5 text-amber_500"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
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

export default DiscountsOffersPage;
