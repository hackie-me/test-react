import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TaskBlockerPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_05 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_7.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search.."
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
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        src="images/img_save.svg"
                        className="h-6 w-6"
                        alt="save"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[42%] md:w-full">
                      <Img
                        src="images/img_user_1.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        My Team
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        src="images/img_chartlineoutl.svg"
                        className="h-6 w-6"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700"
                        variant="body13"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[81%]">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
                        variant="body13"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        src="images/img_file.svg"
                        className="h-6 w-6"
                        alt="file One"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      src="images/img_question.svg"
                      className="h-6 w-6"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700"
                      variant="body13"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 pt-0.5 w-full">
              <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
                <Text
                  className="font-semibold mt-2 text-blue_gray_900"
                  variant="body7"
                >
                  Design Team
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[107px]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="ml-3 mr-2 my-[9px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder6"
                  size="lg"
                  variant="FillBlueA70001"
                >
                  <div className="font-medium text-left text-sm text-white_A700">
                    Add Task
                  </div>
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-8 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix"
                    />
                    <Text
                      className="font-semibold mb-[5px] text-blue_gray_900"
                      variant="body12"
                    >
                      Pheonix Baker
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_150X150.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix One"
                    />
                    <Text
                      className="font-semibold mb-[5px] text-blue_gray_900"
                      variant="body12"
                    >
                      Demi Wilkinson
                    </Text>
                  </div>
                </List>
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-[15px] items-center justify-end p-[23px] sm:px-5 rounded-md shadow-bs4 w-[23%] md:w-full">
                  <Img
                    src="images/img_ellipse6_1.png"
                    className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                    alt="EllipseSix Two"
                  />
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Jose Cooper
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-[13px] items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-[23%] md:w-full">
                  <Img
                    src="images/img_ellipse6_2.png"
                    className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                    alt="EllipseSix Three"
                  />
                  <Text
                    className="font-semibold mb-[5px] text-blue_gray_900"
                    variant="body12"
                  >
                    Lara Johnson
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start mt-[39px] w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mb-[3px] mt-2.5 text-black_900"
                    variant="body12"
                  >
                    Task Priority
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center w-[131px]"
                    rightIcon={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="ml-3.5 mr-4 my-2"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray100"
                  >
                    <div className="font-medium text-black_900_01 text-left text-sm">
                      This Week
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user One"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-[7px] text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user Two"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-[7px] text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen One"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve One"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu One"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder One"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user Three"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-[7px] text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Two"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Two"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Two"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu Two"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder Two"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user Four"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-2 text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Three"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Three"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Three"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu Three"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder Three"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user Five"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-2 text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Four"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Four"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Four"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu Four"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder Four"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-gray_100_03 text-sm"
                            shape="RoundedBorder3"
                            size="md"
                            variant="FillRed700"
                          >
                            Overdue
                          </Button>
                          <Img
                            src="images/img_user.svg"
                            className="h-6 w-6"
                            alt="user Six"
                          />
                        </div>
                        <Text
                          className="font-semibold mt-[19px] text-gray_900_03"
                          variant="body12"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] mt-2 text-blue_gray_400 w-full"
                          variant="body16"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse6_1.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Five"
                              />
                              <Img
                                src="images/img_ellipse6_150X150.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Five"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse6.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Five"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-4 w-4"
                              alt="menu Five"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_folder.svg"
                              className="h-4 w-4"
                              alt="folder Five"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
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

export default TaskBlockerPage;
