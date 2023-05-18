import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const ProjectsTrackingPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_6.svg"
                className="h-[35px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[463px] items-center justify-start mb-[70px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[34%] md:w-full">
                      <Img
                        src="images/img_home.svg"
                        className="h-6 w-6"
                        alt="home"
                      />
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 rounded-lg w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-center justify-between w-[24%]">
                      <Img
                        src="images/img_user_2.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body13"
                      >
                        Me
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[33%] md:w-full">
                      <Img
                        src="images/img_videocamera_24X24.svg"
                        className="h-6 w-6"
                        alt="videocamera"
                      />
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Inbox
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[44%] md:w-full">
                      <Img
                        src="images/img_user_1.svg"
                        className="h-6 w-6"
                        alt="user One"
                      />
                      <Text
                        className="font-semibold mt-1.5 text-blue_gray_700"
                        variant="body13"
                      >
                        My Team
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[56%] md:w-full">
                      <Img
                        src="images/img_companyoutline.svg"
                        className="h-6 w-6"
                        alt="companyOutline"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Organization
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-2/5 md:w-full">
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
                <div className="flex flex-col items-start justify-start p-2 w-full">
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
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-9 items-center justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row mt-3.5 mb-[9px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body4"
                  >
                    Tasks
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 sm:hidden items-end justify-start md:ml-[0] ml-[866px] p-2 rounded-[50%] w-14">
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
                <div className="border border-blue_A700 border-solid flex flex-col h-14 sm:hidden items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </header>
            <div className="bg-white_A700 flex flex-col font-gilroy items-center justify-start p-6 sm:px-5 rounded-lg w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start mb-[7px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between pt-[3px] w-full">
                  <div className="flex flex-row gap-3.5 items-start justify-between w-[13%]">
                    <Text
                      className="font-semibold mt-1 text-blue_gray_900"
                      variant="body12"
                    >
                      Fri, 13 May
                    </Text>
                    <Img
                      src="images/img_calendar.svg"
                      className="h-6 mb-0.5 w-6"
                      alt="calendar"
                    />
                  </div>
                  <div className="flex flex-row font-opensans gap-2.5 items-center justify-between w-[11%]">
                    <Text
                      className="font-semibold ml-0.5 text-blue_gray_600"
                      variant="body15"
                    >
                      This Week
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-5 w-5"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-evenly w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[18%] md:w-full">
                    <Text
                      className="bg-gray_50_01 font-semibold h-[46px] justify-center pb-[11px] pl-3 sm:pr-5 pr-[35px] pt-[17px] text-blue_gray_600 w-[183px]"
                      variant="body15"
                    >
                      Project
                    </Text>
                    <div className="flex flex-col items-start justify-start p-3 w-full">
                      <Text
                        className="font-normal my-[3px] text-blue_gray_900"
                        variant="body15"
                      >
                        DhiWise
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start p-3 w-full">
                      <Text
                        className="font-normal my-[3px] text-blue_gray_900"
                        variant="body15"
                      >
                        DhiWise
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start p-3 w-full">
                      <Text
                        className="font-normal my-[3px] text-blue_gray_900"
                        variant="body15"
                      >
                        DhiWise
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start p-3 w-full">
                      <Text
                        className="font-normal my-[3px] text-blue_gray_900"
                        variant="body15"
                      >
                        DhiWise
                      </Text>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-5 gap-[0] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[83%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                      <Text
                        className="bg-gray_50_01 font-semibold h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-[15px] text-blue_gray_600 w-[211px]"
                        variant="body15"
                      >
                        Task
                      </Text>
                      <div className="flex flex-col items-start justify-end p-3 w-full">
                        <Text
                          className="font-normal mt-[5px] text-blue_gray_900"
                          variant="body15"
                        >
                          Web Screens Design
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end p-3 w-full">
                        <Text
                          className="font-normal mt-[5px] text-blue_gray_900"
                          variant="body15"
                        >
                          Fintech App Design
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end p-3 w-full">
                        <Text
                          className="font-normal mt-[5px] text-blue_gray_900"
                          variant="body15"
                        >
                          Blog Website Design
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end p-3 w-full">
                        <Text
                          className="font-normal mt-[5px] text-blue_gray_900"
                          variant="body15"
                        >
                          News App Design
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                      <Text
                        className="bg-gray_50_01 font-semibold h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-[15px] text-blue_gray_600 w-[211px]"
                        variant="body15"
                      >
                        Date Started
                      </Text>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-[3px] text-blue_gray_900"
                          variant="body15"
                        >
                          12/05/2022
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-1 text-blue_gray_900"
                          variant="body15"
                        >
                          11/05/2022
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-1 text-blue_gray_900"
                          variant="body15"
                        >
                          09/05/2022
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-1 text-blue_gray_900"
                          variant="body15"
                        >
                          06/05/2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                      <Text
                        className="bg-gray_50_01 font-semibold h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-[15px] text-blue_gray_600 w-[211px]"
                        variant="body15"
                      >
                        Total Time
                      </Text>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-[3px] text-blue_gray_900"
                          variant="body15"
                        >
                          123:00 Hrs
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-[3px] text-blue_gray_900"
                          variant="body15"
                        >
                          112:00 Hrs
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-[3px] text-blue_gray_900"
                          variant="body15"
                        >
                          60:00 Hrs
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start p-3 w-full">
                        <Text
                          className="font-normal my-[3px] text-blue_gray_900"
                          variant="body15"
                        >
                          75:00 Hrs
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                      <Text
                        className="bg-gray_50_01 font-semibold h-[46px] justify-center pl-3 sm:pr-5 pr-[35px] py-[15px] text-blue_gray_600 w-[211px]"
                        variant="body15"
                      >
                        Status
                      </Text>
                      <div className="flex flex-col font-gilroy items-start justify-end p-2.5 w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[79px] ml-0.5 md:ml-[0] mt-0.5 text-center text-green_600 text-xs"
                          shape="RoundedBorder9"
                          size="sm"
                          variant="FillGray10004"
                        >
                          Completed
                        </Button>
                      </div>
                      <div className="flex flex-col font-gilroy items-start justify-end p-2.5 w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[61px] ml-0.5 md:ml-[0] mt-0.5 text-amber_700 text-center text-xs"
                          shape="RoundedBorder9"
                          size="sm"
                          variant="FillGray5007"
                        >
                          On Hold
                        </Button>
                      </div>
                      <div className="flex flex-col font-gilroy items-start justify-end p-2.5 w-full">
                        <Text
                          className="bg-gray_100_04 font-medium justify-center ml-0.5 md:ml-[0] mt-0.5 px-2 py-0.5 rounded-lg text-green_600 w-auto"
                          variant="body16"
                        >
                          Completed
                        </Text>
                      </div>
                      <div className="flex flex-col font-gilroy items-start justify-end p-2.5 w-full">
                        <Text
                          className="bg-blue_50 font-medium justify-center ml-0.5 md:ml-[0] mt-0.5 px-2 py-0.5 rounded-lg text-blue_A700_01 w-auto"
                          variant="body16"
                        >
                          In Progress
                        </Text>
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

export default ProjectsTrackingPage;
