import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PricingEnginePage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_4.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <List
            className="flex-col md:gap-10 gap-[70px] grid items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-9 items-center justify-start my-0 pt-1.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body2"
                >
                  Best Sellers in Electronics
                </Text>
                <Img
                  src="images/img_clock.svg"
                  className="h-10 w-10"
                  alt="clock"
                />
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_194X248.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne"
                    />
                    <Text
                      className="capitalize font-medium mt-[13px] text-blue_gray_400"
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
                          src="images/img_star1.svg"
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
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_1.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="capitalize font-medium mt-[13px] text-blue_gray_400"
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
                          src="images/img_star1_12X12.svg"
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
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_2.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne Two"
                    />
                    <Text
                      className="capitalize font-medium mt-[13px] text-blue_gray_400"
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
                          src="images/img_star1_1.svg"
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
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_3.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne Three"
                    />
                    <Text
                      className="capitalize font-medium mt-[13px] text-blue_gray_400"
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
                          src="images/img_star1_2.svg"
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
            </div>
            <div className="flex flex-1 flex-col gap-9 items-center justify-end my-0 pt-1.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body2"
                >
                  Best Sellers in Electronics
                </Text>
                <Img
                  src="images/img_clock.svg"
                  className="h-10 w-10"
                  alt="clock One"
                />
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_194X248.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="capitalize font-medium mt-3 text-blue_gray_400"
                      variant="body12"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-3.5 text-black_900_02"
                      variant="body7"
                    >
                      boAt Airdopes 131
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
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
                          className="font-normal line-through mb-[3px] mt-2.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_3.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne One"
                        />
                        <Text
                          className="font-medium text-amber_500 text-right"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_1.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne One One"
                    />
                    <Text
                      className="capitalize font-medium mt-3 text-blue_gray_400"
                      variant="body12"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-3.5 text-black_900_02"
                      variant="body7"
                    >
                      HP Envy 13 x360
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
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
                          className="font-normal line-through mb-[3px] mt-2.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_4.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne One One"
                        />
                        <Text
                          className="font-medium text-amber_500 text-right"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_2.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne Two One"
                    />
                    <Text
                      className="capitalize font-medium mt-3 text-blue_gray_400"
                      variant="body12"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="font-medium mt-3.5 text-black_900_02"
                      variant="body7"
                    >
                      OnePlus 10R 5G
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
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
                          className="font-normal line-through mb-[3px] mt-2.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_5.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne Two One"
                        />
                        <Text
                          className="font-medium text-amber_500 text-right"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_pngwing1_3.png"
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      alt="pngwingOne Three One"
                    />
                    <Text
                      className="capitalize font-medium mt-3 text-blue_gray_400"
                      variant="body12"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="font-medium mt-3.5 text-black_900_02"
                      variant="body7"
                    >
                      APPLE iPad
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
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
                          className="font-normal line-through mb-[3px] mt-2.5 text-blue_gray_400"
                          variant="body13"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber_500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          src="images/img_star1_6.svg"
                          className="h-3 my-[3px] w-3"
                          alt="StarOne Three One"
                        />
                        <Text
                          className="font-medium text-amber_500 text-right"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 text-base text-center text-white_A700 w-[248px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlueA70001"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default PricingEnginePage;
