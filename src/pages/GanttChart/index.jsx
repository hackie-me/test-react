import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GanttChartPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto pb-[59px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between overflow-auto w-full">
          <div className="flex flex-1 flex-col gap-[50px] justify-start w-full">
            <header className="flex items-center justify-center md:px-5 w-full">
              <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
                  <Img
                    src="images/img_group_2.svg"
                    className="h-[35px] w-[13%]"
                    alt="Group"
                  />
                  <Input
                    value={inputfieldvalue}
                    onChange={(e) => setInputfieldvalue(e)}
                    wrapClassName="flex gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                    className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                    name="InputField"
                    placeholder="Search"
                    prefix={
                      <Img
                        src="images/img_search_black_900.svg"
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
                    variant="srcOutlineBluegray300"
                  ></Input>
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                    <div className="md:h-9 h-[35px] mb-1 relative w-9">
                      <Img
                        src="images/img_notification.svg"
                        className="absolute bottom-[0] h-8 left-[0] w-8"
                        alt="notification"
                      />
                      <Text
                        className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white_A700 top-[0] w-[18px]"
                        variant="body16"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                    <Img
                      src="images/img_profileimglarg_85X85.png"
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      alt="ProfileImgLarg"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1432px] mx-auto md:px-5 w-full">
              <div className="flex font-gilroy md:h-[2702px] sm:h-[859px] h-[871px] justify-end relative w-[95%] md:w-full">
                <Img
                  src="images/img_computer_32X32.svg"
                  className="h-8 mb-[158px] ml-auto mr-[527px] mt-auto w-8"
                  alt="computer"
                />
                <div className="absolute flex flex-col gap-[50px] h-full inset-[0] justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pt-1.5 w-[94%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start md:mt-0 mt-1.5">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body4"
                      >
                        Product Roadmap
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_900"
                        variant="body13"
                      >
                        Chart how your business grows
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-1.5 py-1 w-[56%] md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[66%] md:w-full">
                            <div className="flex flex-row gap-2 items-start justify-start w-[49%] sm:w-full">
                              <div className="bg-light_blue_400_01 h-[18px] rounded-[50%] w-[18px]"></div>
                              <Text
                                className="font-normal text-blue_gray_900_04"
                                variant="body13"
                              >
                                Performance enhancement
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-start justify-start w-[38%] sm:w-full">
                              <div className="bg-purple_A100 h-[18px] mb-1 rounded-[50%] w-[18px]"></div>
                              <Text
                                className="font-normal text-blue_gray_900_04"
                                variant="body13"
                              >
                                Internal optimization
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-2 items-start justify-start w-1/4 md:w-full">
                            <div className="bg-deep_orange_500 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="font-normal text-blue_gray_900_04"
                              variant="body13"
                            >
                              Sometimes happens
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[97px] items-center justify-start w-[69%] md:w-full">
                          <div className="flex flex-row gap-2 items-start justify-start w-2/5 sm:w-full">
                            <div className="bg-green_500 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="font-normal text-blue_gray_900_04"
                              variant="body13"
                            >
                              Customers satisfaction
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-2/5 sm:w-full">
                            <div className="bg-yellow_700 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="font-normal text-blue_gray_900_04"
                              variant="body13"
                            >
                              Customers satisfaction
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px] w-full">
                    <div className="flex flex-col gap-3 items-center justify-end pt-1.5 w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="font-bold text-blue_gray_900_04"
                          variant="body11"
                        >
                          2017
                        </Text>
                        <div className="md:h-[1137px] sm:h-[661px] h-[673px] relative w-full">
                          <Img
                            src="images/img_group10064.png"
                            className="absolute h-[661px] inset-[0] justify-center m-auto object-cover w-[99%]"
                            alt="Group10064"
                          />
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-[97%]">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                              <div className="bg-blue_50 flex flex-row gap-2.5 items-end justify-start p-2.5 rounded-[23px] w-[15%] md:w-full">
                                <Img
                                  src="images/img_arrowdown_black_901.svg"
                                  className="h-6 mb-0.5 ml-1.5 w-6"
                                  alt="arrowdown"
                                />
                                <Text
                                  className="font-medium mt-[5px] text-black_900_01"
                                  variant="body13"
                                >
                                  Developers Team
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-2 justify-start w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[41%] md:w-full">
                                    <div className="bg-light_blue_400_01 flex flex-col items-start justify-end p-2 rounded">
                                      <Text
                                        className="font-medium mb-[3px] mt-[9px] text-white_A700"
                                        variant="body13"
                                      >
                                        Design Database
                                      </Text>
                                    </div>
                                    <div className="bg-green_500 h-12 md:h-8 p-1 relative rounded w-[64%] sm:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="font-medium mt-0.5 text-white_A700"
                                          variant="body13"
                                        >
                                          Charts Design System integration
                                        </Text>
                                      </div>
                                      <Img
                                        src="images/img_computer_32X32.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="computer One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[268px] w-4/5 md:w-full">
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                      <div className="bg-amber_500_04 h-12 md:h-8 p-1 relative rounded w-1/4 md:w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                          <Text
                                            className="font-medium text-white_A700"
                                            variant="body13"
                                          >
                                            Dashboard MVP Deploy
                                          </Text>
                                        </div>
                                        <Img
                                          src="images/img_clock.svg"
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          alt="clock"
                                        />
                                      </div>
                                      <div className="bg-amber_500_04 h-12 pr-1 relative rounded w-[32%] md:w-full">
                                        <div className="absolute flex inset-[0] justify-center m-auto w-[98%]">
                                          <div className="bg-yellow_700 h-12 my-auto rounded-bl rounded-tl w-[11%]"></div>
                                          <div className="flex flex-col items-start justify-end ml-[-25.63px] mr-auto my-auto pr-[7px] py-[7px] z-[1]">
                                            <Text
                                              className="font-medium text-white_A700"
                                              variant="body13"
                                            >
                                              Backup Database Constantly
                                            </Text>
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_overflowmenu.svg"
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          alt="overflowmenu"
                                        />
                                      </div>
                                      <div className="bg-light_blue_400_01 h-12 md:h-8 p-1 relative rounded w-[32%] md:w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                          <Text
                                            className="font-medium mt-0.5 text-white_A700"
                                            variant="body13"
                                          >
                                            Purchasing Other Figma Kits
                                          </Text>
                                        </div>
                                        <Img
                                          src="images/img_notification_32X32.svg"
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          alt="notification One"
                                        />
                                      </div>
                                      <div className="bg-amber_500_04 flex flex-col items-start justify-start md:ml-[0] ml-[25px] p-2 rounded">
                                        <Text
                                          className="font-medium my-[7px] text-white_A700"
                                          variant="body13"
                                        >
                                          Finished!
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[83%] md:w-full">
                                      <Button
                                        className="cursor-pointer flex items-center justify-center min-w-[160px]"
                                        rightIcon={
                                          <Img
                                            src="images/img_trash.svg"
                                            className="ml-[13px] mr-1 my-2"
                                            alt="trash"
                                          />
                                        }
                                        shape="RoundedBorder3"
                                        size="2xl"
                                        variant="FillDeeporange300"
                                      >
                                        <div className="font-medium text-base text-left text-white_A700">
                                          Purchase now
                                        </div>
                                      </Button>
                                      <div className="bg-green_500 flex flex-col items-center justify-start p-1 rounded w-1/2 md:w-full">
                                        <div className="flex flex-row items-end justify-between my-1 w-full">
                                          <Text
                                            className="font-medium mb-[3px] mt-2 text-white_A700"
                                            variant="body13"
                                          >
                                            Self Service AR System
                                          </Text>
                                          <Img
                                            src="images/img_computer_32X32.svg"
                                            className="h-8 w-8"
                                            alt="computer Two"
                                          />
                                        </div>
                                      </div>
                                      <div className="bg-light_blue_400_01 flex flex-col items-center justify-start p-1 rounded w-[32%] md:w-full">
                                        <div className="flex flex-row items-center justify-between my-1 w-[99%] md:w-full">
                                          <Text
                                            className="font-medium text-white_A700"
                                            variant="body13"
                                          >
                                            Workflow Boost
                                          </Text>
                                          <Img
                                            src="images/img_arrowleft.svg"
                                            className="h-8 w-8"
                                            alt="arrowleft"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start mt-[34px] w-[93%] md:w-full">
                              <Input
                                wrapClassName="flex w-[15%]"
                                className="font-medium p-0 placeholder:text-black_900_01 text-base text-black_900_01 text-left w-full"
                                name="Frame34692"
                                placeholder="Designers Team"
                                prefix={
                                  <Img
                                    src="images/img_arrowdown_black_901.svg"
                                    className="mt-2.5 mb-3 ml-4 mr-2.5"
                                    alt="arrow_down"
                                  />
                                }
                                shape="CircleBorder23"
                                size="2xl"
                                variant="FillBlue50"
                              ></Input>
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex-col gap-2 grid items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                                    <div className="bg-purple_A100 h-12 md:h-8 p-1 relative rounded w-[16%] md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto sm:pr-5 pr-7 w-[92%]">
                                        <Text
                                          className="font-medium text-white_A700"
                                          variant="body13"
                                        >
                                          Charts Kit in Fi...
                                        </Text>
                                        <Img
                                          src="images/img_clock.svg"
                                          className="h-8 w-8"
                                          alt="clock One"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_computer_32X32.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="computer Three"
                                      />
                                    </div>
                                    <div className="bg-light_blue_400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-[7px] text-white_A700"
                                        variant="body13"
                                      >
                                        UX Acceleration
                                      </Text>
                                    </div>
                                    <div className="bg-light_blue_400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-[7px] text-white_A700"
                                        variant="body13"
                                      >
                                        Cool Presentation
                                      </Text>
                                    </div>
                                    <div className="bg-light_blue_400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-[7px] text-white_A700"
                                        variant="body13"
                                      >
                                        Data Visualization
                                      </Text>
                                    </div>
                                    <div className="bg-purple_A100 h-12 md:h-8 md:ml-[0] ml-[137px] p-1 relative rounded w-[30%] md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto sm:pr-5 pr-7 w-[96%]">
                                        <Text
                                          className="font-medium text-white_A700"
                                          variant="body13"
                                        >
                                          Material Design Components
                                        </Text>
                                        <Img
                                          src="images/img_clock.svg"
                                          className="h-8 w-8"
                                          alt="clock One"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_computer_32X32.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="computer One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-center ml-[194px] mr-[191px] my-0 w-[69%] md:w-full">
                                    <div className="bg-green_500 h-12 pr-1 relative rounded w-2/5 md:w-full">
                                      <div className="absolute h-12 inset-[0] justify-center m-auto w-[98%]">
                                        <div className="absolute bg-green_500 h-12 inset-y-[0] left-[0] my-auto rounded-bl rounded-tl w-[76%]"></div>
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-1.5 py-1.5">
                                          <Text
                                            className="font-medium mt-0.5 text-white_A700"
                                            variant="body13"
                                          >
                                            Android Design Kit
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_clock.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="clock Two"
                                      />
                                    </div>
                                    <div className="bg-green_500 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-[7px] text-white_A700"
                                        variant="body13"
                                      >
                                        Material Minimal Theme
                                      </Text>
                                    </div>
                                    <div className="bg-amber_500_04 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium mb-1.5 mt-[9px] text-white_A700"
                                        variant="body13"
                                      >
                                        Prototyping
                                      </Text>
                                    </div>
                                    <div className="bg-purple_A100 h-12 md:h-8 p-1 relative rounded w-1/5 md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto sm:pr-5 pr-7 w-[91%]">
                                        <Text
                                          className="font-medium text-white_A700"
                                          variant="body13"
                                        >
                                          GUI
                                        </Text>
                                        <Img
                                          src="images/img_overflowmenu.svg"
                                          className="h-8 w-8"
                                          alt="overflowmenu One"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_trash.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="trash"
                                      />
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start mt-[58px] w-[98%] md:w-full">
                              <Input
                                wrapClassName="flex w-[15%]"
                                className="font-medium p-0 placeholder:text-black_900_01 text-base text-black_900_01 text-left w-full"
                                name="Frame34693"
                                placeholder="Marketing Team"
                                prefix={
                                  <Img
                                    src="images/img_arrowdown_black_901.svg"
                                    className="mt-2.5 mb-3 ml-4 mr-2.5"
                                    alt="arrow_down"
                                  />
                                }
                                shape="CircleBorder23"
                                size="2xl"
                                variant="FillBlue50"
                              ></Input>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-2 justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/5 md:w-full">
                                      <div className="bg-amber_500_04 h-12 md:h-8 p-1 relative rounded w-full">
                                        <div className="absolute flex flex-row gap-[39px] h-max inset-[0] items-center justify-center m-auto sm:pr-5 pr-7 w-[94%]">
                                          <Text
                                            className="font-medium text-white_A700"
                                            variant="body13"
                                          >
                                            Fits for Dashboard
                                          </Text>
                                          <Img
                                            src="images/img_clock.svg"
                                            className="h-8 w-8"
                                            alt="clock Three"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_computer_32X32.svg"
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          alt="computer Four"
                                        />
                                      </div>
                                    </div>
                                    <div className="bg-light_blue_400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-[7px] text-white_A700"
                                        variant="body13"
                                      >
                                        Presentation Showcase
                                      </Text>
                                    </div>
                                    <div className="bg-purple_A100 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="font-medium my-2 text-white_A700"
                                        variant="body13"
                                      >
                                        Purchasing Other Figma Kits
                                      </Text>
                                    </div>
                                    <Input
                                      wrapClassName="flex md:flex-1 md:ml-[0] ml-[153px] w-[27%] md:w-full"
                                      className="font-medium p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                                      name="Group10043"
                                      placeholder="Premium Charts Release"
                                      suffix={
                                        <Img
                                          src="images/img_computer_32X32.svg"
                                          className="ml-[35px] mr-1 my-2"
                                          alt="computer"
                                        />
                                      }
                                      shape="RoundedBorder6"
                                      size="xl"
                                      variant="FillGreen500"
                                    ></Input>
                                  </div>
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[92px] w-[73%] md:w-full">
                                    <div className="bg-purple_A100 h-12 pr-1 relative rounded w-[47%] md:w-full">
                                      <div className="absolute flex inset-[0] justify-center m-auto w-[99%] sm:w-full">
                                        <div className="bg-purple_A100 h-12 my-auto rounded-bl rounded-tl w-[26%]"></div>
                                        <div className="flex flex-row items-center justify-between ml-[-101.67px] mr-auto my-auto sm:pr-5 pr-7 w-[99%] z-[1]">
                                          <Text
                                            className="font-medium text-white_A700"
                                            variant="body13"
                                          >
                                            Dashboard MVP Deploy
                                          </Text>
                                          <Img
                                            src="images/img_clock.svg"
                                            className="h-8 w-8"
                                            alt="clock Four"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_computer_32X32.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="computer Six"
                                      />
                                    </div>
                                    <div className="bg-amber_500_04 h-12 md:h-8 p-1 relative rounded w-[36%] md:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="font-medium text-white_A700"
                                          variant="body13"
                                        >
                                          Backup Database Constantly
                                        </Text>
                                      </div>
                                      <Img
                                        src="images/img_overflowmenu.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="overflowmenu Two"
                                      />
                                    </div>
                                    <div className="bg-deep_orange_300 h-12 md:h-8 p-1 relative rounded w-[18%] md:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="font-medium text-white_A700"
                                          variant="body13"
                                        >
                                          Oooh, no!
                                        </Text>
                                      </div>
                                      <Img
                                        src="images/img_trash.svg"
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        alt="trash One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jan
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          feb
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          mar
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          apr
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          may
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jun
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jul
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          aug
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          sep
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          oct
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          nov
                        </Text>
                        <div className="bg-blue_A700_a2 flex flex-col items-center justify-start rounded-lg">
                          <Text
                            className="font-medium text-white_A700 uppercase"
                            variant="body16"
                          >
                            may
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jan
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          feb
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          mar
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          apr
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          may
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jun
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          jul
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          aug
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          sep
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          oct
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 uppercase"
                          variant="body16"
                        >
                          nov
                        </Text>
                        <Text
                          className="font-medium text-blue_A700_01 text-center uppercase"
                          variant="body16"
                        >
                          dec
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-medium font-roboto md:mt-0 mt-[803px] text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                variant="body18"
              >
                jan
              </Text>
            </div>
          </div>
          <div className="font-roboto md:mt-0 mt-[337px] overflow-x-auto w-[45%]">
            <div className="flex flex-col gap-2 justify-start w-full">
              <div className="flex flex-row sm:gap-[55px] items-center justify-between max-w-[617px] mx-auto md:px-5 w-full">
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
                <Line className="bg-blue_gray_900_04 h-[608px] w-px" />
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-start md:px-5 w-[95%] md:w-full">
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  feb
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  mar
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  jul
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  aug
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  sep
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  oct
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  nov
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  dec
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  jan
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  feb
                </Text>
                <Text
                  className="font-medium text-blue_gray_900_04 text-center tracking-[1.50px] uppercase"
                  variant="body18"
                >
                  mar
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanttChartPage;
