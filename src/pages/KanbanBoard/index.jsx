import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const KanbanBoardPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_5.svg"
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
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
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
                        src="images/img_user.svg"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-4/5">
                      <Img
                        src="images/img_checkcircleou.svg"
                        className="h-6 w-6"
                        alt="checkcircleOu"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
                        variant="body13"
                      >
                        Project Management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[55%] md:w-full">
                      <Img
                        src="images/img_companyoutline.svg"
                        className="h-6 w-6"
                        alt="companyOutline"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Organisation
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
                        src="images/img_settings_24X24.svg"
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
            <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[39px] w-full">
              <Text className="font-semibold text-gray_900_02" variant="body12">
                Project Management
              </Text>
              <div className="flex flex-col gap-8 items-center justify-end w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="h-[50px] relative w-[37%] sm:w-full">
                    <div className="absolute border-b border-blue_gray_100 border-solid flex flex-row gap-[42px] h-full inset-[0] items-center justify-center m-auto p-0.5 w-full">
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="font-medium text-blue_gray_400 w-auto"
                          variant="body13"
                        >
                          In Progress
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center mr-[17px] w-auto">
                        <Text
                          className="font-medium text-blue_gray_400 w-auto"
                          variant="body13"
                        >
                          In Review
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-start left-[4%] my-auto w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="font-medium text-blue_A700_01 w-auto"
                          variant="body13"
                        >
                          To Do
                        </Text>
                      </div>
                      <Line className="bg-blue_A700_01 h-0.5 w-full" />
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[160px]"
                    leftIcon={
                      <Img
                        src="images/img_plus.svg"
                        className="ml-6 mr-[11px] my-[13px]"
                        alt="plus"
                      />
                    }
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="FillBlueA70001"
                  >
                    <div className="font-medium text-base text-left text-white_A700">
                      Add Card
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-end w-full">
                  <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Two"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen One"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen One"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve One"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message One"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file One"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Three"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Two"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Two"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Two"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Two"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Two"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Four"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Three"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Three"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Three"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Three"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Three"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Five"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Four"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Four"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Four"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Four"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Four"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Six"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Five"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Five"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Five"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Five"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Five"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Seven"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Six"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Six"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Six"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Six"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Six"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Eight"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Seven"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Seven"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Seven"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Seven"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Seven"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Nine"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Eight"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Eight"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Eight"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Eight"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Eight"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Ten"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-[3px] text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Nine"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Nine"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Nine"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Nine"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Nine"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Eleven"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-[3px] text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Ten"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Ten"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Ten"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Ten"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Ten"
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
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-deep_orange_A100_33 font-medium h-[23px] justify-center pb-0.5 pt-[5px] px-[9px] rounded text-deep_orange_400 w-[81px]"
                            variant="body16"
                          >
                            Low Priority
                          </Text>
                          <Img
                            src="images/img_user_24X24.svg"
                            className="h-6 w-6"
                            alt="user Twelve"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] mt-[3px] text-blue_gray_400 w-full"
                            variant="body16"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                src="images/img_ellipse15.png"
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                alt="EllipseFifteen Eleven"
                              />
                              <Img
                                src="images/img_ellipse13.png"
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                alt="EllipseThirteen Eleven"
                              />
                            </div>
                            <Img
                              src="images/img_ellipse12.png"
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              alt="EllipseTwelve Eleven"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[55%]">
                            <Img
                              src="images/img_message.svg"
                              className="h-4 w-4"
                              alt="message Eleven"
                            />
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body16"
                            >
                              12 comments
                            </Text>
                            <Img
                              src="images/img_file_16X16.svg"
                              className="h-4 w-4"
                              alt="file Eleven"
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

export default KanbanBoardPage;
