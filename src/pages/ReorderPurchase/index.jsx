import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReorderPurchasePage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_8.svg"
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
          <div className="md:h-[1011px] h-[1016px] relative w-full">
            <div className="absolute bg-white_A700 h-[1011px] inset-[0] justify-center m-auto rounded-md shadow-bs4 w-full"></div>
            <div className="absolute flex flex-col gap-[29px] h-max inset-[0] items-center justify-center m-auto w-[95%]">
              <div className="flex flex-col gap-[25px] items-center justify-start pt-2.5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body2"
                  >
                    Reorder Purchase
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-medium text-base text-blue_gray_900 text-left w-[11%] sm:w-full"
                    placeholderClassName="text-blue_gray_900"
                    indicator={
                      <Img
                        src="images/img_arrowdown_bluegray_900.svg"
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
                className="flex-col font-opensans gap-6 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_pngwing1.png"
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    alt="pngwingOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="font-medium font-opensans text-blue_gray_900"
                        variant="body7"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button
                        className="cursor-pointer font-gilroy font-semibold min-w-[86px] text-center text-lg text-white_A700"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body11"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
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
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
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
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_pngwing1.png"
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    alt="pngwingOne One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="font-medium font-opensans text-blue_gray_900"
                        variant="body7"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button
                        className="cursor-pointer font-gilroy font-semibold min-w-[86px] text-center text-lg text-white_A700"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body11"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
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
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
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
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_pngwing1.png"
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    alt="pngwingOne Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                      <Text
                        className="font-medium font-opensans text-blue_gray_900"
                        variant="body7"
                      >
                        Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                      </Text>
                      <Button
                        className="cursor-pointer font-gilroy font-semibold min-w-[86px] text-center text-lg text-white_A700"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        Reorder
                      </Button>
                    </div>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body11"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[11%] md:w-full">
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
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[19%] md:w-full">
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
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_pngwing1.png"
                        className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                        alt="pngwingOne Three"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between rounded-[5px] w-full">
                          <Text
                            className="font-medium font-opensans text-blue_gray_900"
                            variant="body7"
                          >
                            Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                          </Text>
                          <Button
                            className="cursor-pointer font-gilroy font-semibold min-w-[86px] text-center text-lg text-white_A700"
                            shape="RoundedBorder6"
                            size="2xl"
                            variant="FillBlueA70001"
                          >
                            Reorder
                          </Button>
                        </div>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body11"
                        >
                          (Blue,6GB RAM, 128GB Storage)
                        </Text>
                        <div className="flex flex-row items-center justify-start mt-3 w-[6%] md:w-full">
                          <Text
                            className="font-medium text-blue_gray_400 text-center"
                            variant="body12"
                          >
                            Blue
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_900 text-center"
                            variant="body12"
                          >
                            Color:
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[15px] items-end justify-start mt-3 w-[19%] md:w-full">
                          <Text
                            className="font-medium text-blue_gray_900 text-center"
                            variant="body7"
                          >
                            <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-opensans font-semibold">
                              $
                            </span>
                            <span className="md:text-[22px] sm:text-xl text-colors4 text-2xl font-opensans font-semibold">
                              555.29
                            </span>
                          </Text>
                          <Text
                            className="font-medium line-through mt-2 text-blue_gray_400 text-center"
                            variant="body13"
                          >
                            <span className="text-colors3 text-base font-opensans font-semibold">
                              $
                            </span>
                            <span className="text-colors3 text-base font-opensans font-semibold">
                              55.99
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReorderPurchasePage;
