import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const QATrackerPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_8.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
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
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[93%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[507px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        src="images/img_save.svg"
                        className="h-6 ml-[7px] w-6"
                        alt="save"
                      />
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        src="images/img_grid.svg"
                        className="h-6 w-6"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-center justify-start w-[49%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body13"
                      >
                        QA Tracker
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
            <div className="flex flex-1 flex-col gap-[31px] items-start justify-start md:mt-0 mt-[37px] w-full">
              <Text className="font-semibold text-gray_900_02" variant="body12">
                QA Tracler
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-4 rounded-md shadow-bs12 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-between md:mt-0 mt-1.5 w-[28%] md:w-full">
                      <Img
                        src="images/img_ellipse91.png"
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        alt="EllipseNinetyOne"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          Top Secret: v3.0 release
                        </Text>
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body13"
                        >
                          iOS
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[34px] items-end justify-start w-[39%] md:w-full">
                      <div className="flex flex-row gap-[30px] items-center justify-end w-3/5 md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-[43%]">
                          <Img
                            src="images/img_ticket_24X24.svg"
                            className="h-6 w-6"
                            alt="ticket"
                          />
                          <Text
                            className="font-medium mt-[3px] text-blue_gray_400"
                            variant="body13"
                          >
                            85 Ticket
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly w-[44%]">
                          <Img
                            src="images/img_point1.svg"
                            className="h-6 w-6"
                            alt="pointOne"
                          />
                          <Text
                            className="font-medium mt-[3px] text-blue_gray_400"
                            variant="body13"
                          >
                            60 Points
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Button
                          className="cursor-pointer font-normal min-w-[110px] text-blue_A700_01 text-center text-sm"
                          shape="CircleBorder15"
                          size="md"
                          variant="OutlineBlueA70001"
                        >
                          Ticket
                        </Button>
                        <Button
                          className="cursor-pointer font-normal min-w-[111px] text-blue_A700_01 text-center text-sm"
                          shape="CircleBorder15"
                          size="md"
                          variant="OutlineBlueA70001"
                        >
                          Details
                        </Button>
                        <Button
                          className="cursor-pointer font-normal min-w-[111px] text-blue_A700_01 text-center text-sm"
                          shape="CircleBorder15"
                          size="sm"
                          variant="OutlineBlueA70001"
                        >
                          Activity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-end justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[86px]"
                    leftIcon={
                      <Img
                        src="images/img_filter.svg"
                        className="ml-3 mr-2 my-[9px]"
                        alt="filter"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlueA70001"
                  >
                    <div className="font-medium text-left text-sm text-white_A700">
                      Filters
                    </div>
                  </Button>
                  <List
                    className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo One"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree One"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo Two"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree Two"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne Two"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo One"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree One"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne Two"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo One One"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree One One"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne One One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour One One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-medium text-blue_A700_01"
                              variant="body15"
                            >
                              Delivered
                            </Text>
                            <Text
                              className="font-semibold mt-[15px] text-blue_gray_900"
                              variant="body12"
                            >
                              Silde drawer project navigation
                            </Text>
                            <Text
                              className="font-normal mt-2.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Navigation, iOS, needs design
                            </Text>
                          </div>
                          <div className="flex relative w-[43%]">
                            <div className="flex my-auto w-[79%]">
                              <div className="flex my-auto w-[73%]">
                                <Img
                                  src="images/img_ellipse92.png"
                                  className="h-10 my-auto rounded-[50%] w-10"
                                  alt="EllipseNinetyTwo Two One"
                                />
                                <Img
                                  src="images/img_profileimglarg_85X85.png"
                                  className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                  alt="EllipseNinetyThree Two One"
                                />
                              </div>
                              <Img
                                src="images/img_ellipse91_40X40.png"
                                className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                                alt="EllipseNinetyOne Two One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse94.png"
                              className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
                              alt="EllipseNinetyFour Two One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QATrackerPage;
