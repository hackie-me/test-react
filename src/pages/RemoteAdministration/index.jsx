import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const RemoteAdministrationPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_7.svg"
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
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-center justify-start my-2 w-[24%] md:w-full">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold text-blue_gray_700"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[56%]">
                      <Img
                        src="images/img_linkedin.svg"
                        className="h-6 w-6"
                        alt="linkedin"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
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
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row mt-[17px] mb-[9px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body4"
                  >
                    Organization
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 sm:hidden items-end justify-start md:ml-[0] ml-[767px] p-2 rounded-[50%] w-14">
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
            <div className="flex flex-col font-gilroy gap-8 items-center justify-start w-full">
              <div className="border-b border-blue_gray_100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-2/5 md:w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      Employee Login
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="font-medium text-blue_A700_01 w-auto"
                        variant="body13"
                      >
                        Manage Sysytems
                      </Text>
                    </div>
                    <Line className="bg-blue_A700_01 h-0.5 w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      Team
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[67%] md:w-full">
                <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg One"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-end pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Rose J. Henry
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_2.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Two"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Kai Caudle
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_5.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Three"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Ali Comer
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_6.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Four"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-end pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Jacklyn Kovach
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_4.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Five"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Man Marin
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_72X72.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Six"
                      />
                      <div className="flex flex-col gap-3 items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Benito Nickel
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Seven"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-end pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Rose J. Henry
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_2.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Eight"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Kai Caudle
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_5.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Nine"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Ali Comer
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_6.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Ten"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-end pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Jacklyn Kovach
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_4.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Eleven"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Man Marin
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        src="images/img_profileimglarg_72X72.png"
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        alt="ProfileImgLarg Twelve"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body12"
                        >
                          Benito Nickel
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body15"
                          >
                            Project Manger
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
    </>
  );
};

export default RemoteAdministrationPage;
