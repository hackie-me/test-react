import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ScoringPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_900_06 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-blue_gray_900_03 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[97%]">
              <div className="flex flex-row font-pilatextended gap-[18px] items-start justify-between py-[5px] w-[12%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-[49%]">
                  <div className="bg-deep_orange_A400 h-2 my-1 rounded-[50%] w-2"></div>
                  <Text
                    className="font-extrabold text-white_A700 uppercase"
                    variant="body12"
                  >
                    Live
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="font-extrabold text-white_A700_87 uppercase"
                    variant="body12"
                  >
                    Line
                  </Text>
                </div>
              </div>
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex gap-3 md:ml-[0] ml-[111px] md:mt-0 my-1.5 w-[31%] md:w-full"
                className="font-gilroy font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search Game"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer m-3"
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
                size="mdSrc"
                variant="srcFillGray90006"
              ></Input>
              <div className="bg-gray_900_06 flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[526px] p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_700 border border-gray_900_06 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-blue_gray_200 top-[0] w-[18px]"
                    variant="body16"
                  >
                    2
                  </Text>
                </div>
              </div>
              <Button
                className="flex h-14 items-center justify-center ml-8 md:ml-[0] rounded-[50%] w-14"
                size="lgIcn"
                variant="icbFillGray90006"
              >
                <Img
                  src="images/img_settings.svg"
                  className="h-8"
                  alt="settings"
                />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1267px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[26px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[34%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[116px]"
                leftIcon={
                  <Img
                    src="images/img_globe.svg"
                    className="ml-2.5 mr-2 my-2.5"
                    alt="globe"
                  />
                }
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                <div className="font-bold text-base text-left text-white_A700">
                  Football
                </div>
              </Button>
              <Button
                className="flex h-[46px] items-center justify-center w-[46px]"
                shape="icbRoundedBorder3"
                size="lgIcn"
                variant="icbFillBluegray90003"
              >
                <Img
                  src="images/img_globe.svg"
                  className="h-[21px]"
                  alt="globe"
                />
              </Button>
              <Img
                src="images/img_tabs.svg"
                className="h-[46px] rounded-[5px] w-[46px]"
                alt="Tabs"
              />
              <Img
                src="images/img_tabs_46X46.svg"
                className="h-[46px] rounded-[5px] w-[46px]"
                alt="Tabs One"
              />
              <Img
                src="images/img_tabs_1.svg"
                className="h-[46px] rounded-[5px] w-[46px]"
                alt="Tabs Two"
              />
              <Img
                src="images/img_info.svg"
                className="h-[46px] rounded-[5px] w-[46px]"
                alt="info"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_18X18.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_1.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_2.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Two"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_3.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One One"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play One"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal One"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_4.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Three"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_5.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Two"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Two"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Two"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_6.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Four"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_7.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Three"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Three"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Three"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_8.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Five"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_9.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Four"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Four"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Four"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_10.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Six"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_11.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Five"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Five"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Five"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_12.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Seven"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_13.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Six"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Six"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Six"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_14.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Eight"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_15.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Seven"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Seven"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Seven"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_16.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Nine"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_17.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Eight"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Eight"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Eight"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_18.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Ten"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_19.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Nine"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Nine"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Nine"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_20.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Eleven"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_21.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Ten"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Ten"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Ten"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="font-medium text-white_A700_87"
                          variant="body16"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            src="images/img_globe_22.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe Twelve"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[185px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            0
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[17px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            src="images/img_globe_23.svg"
                            className="h-[18px] w-[18px]"
                            alt="globe One Eleven"
                          />
                          <Text
                            className="font-bold font-gilroy ml-2 mt-0.5 text-white_A700"
                            variant="body16"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[169px] mt-0.5 text-white_A700_75 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                          <Text
                            className="font-black font-pilatextended ml-[15px] mt-0.5 text-white_A700 uppercase"
                            variant="body13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            src="images/img_play.svg"
                            className="h-4 w-4"
                            alt="play Eleven"
                          />
                          <Text
                            className="font-normal text-white_A700_87"
                            variant="body18"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white_A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          src="images/img_signal.svg"
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          alt="signal Eleven"
                        />
                        <Text
                          className="font-bold mb-1 rotate-[90deg] text-gray_400_01"
                          variant="body18"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.8
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        2.1
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[83px] text-black_900 text-center text-xs"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="OutlineBlack9000c"
                      >
                        1.3
                      </Button>
                    </div>
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

export default ScoringPage;
