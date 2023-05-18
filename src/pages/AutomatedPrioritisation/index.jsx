import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AutomatedPrioritisationPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_2.svg"
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
                        src="images/img_user_1.svg"
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
                    <div className="flex flex-row gap-2 items-start justify-start w-[91%]">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Automated Prioritisation
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
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between rounded-md w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body7"
                >
                  Team Builder
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[104px]"
                  leftIcon={
                    <Img
                      src="images/img_filter.svg"
                      className="ml-4 mr-2 my-2.5"
                      alt="filter"
                    />
                  }
                  shape="RoundedBorder6"
                  size="xl"
                  variant="FillBlueA70001"
                >
                  <div className="font-medium text-left text-lg text-white_A700">
                    Filter
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[147px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user One"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] mt-[3px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Two"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Research
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_50_06 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillOrangeA700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Three"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[147px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Four"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] mt-[3px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Five"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Research
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_50_06 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillOrangeA700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Six"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Seven"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Eight"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Research
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_50_06 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillOrangeA700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Nine"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Ten"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] mt-1 text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Eleven"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Research
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_50_06 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillOrangeA700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white_A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 w-6"
                          alt="user Twelve"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="font-semibold text-gray_900_03"
                            variant="body12"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="font-medium leading-[22.00px] text-blue_gray_400 w-full"
                            variant="body15"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body16"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-gray_100_03 text-sm top-[10%]"
                        shape="RoundedBorder3"
                        size="md"
                        variant="FillRed700"
                      >
                        Overdue
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

export default AutomatedPrioritisationPage;
