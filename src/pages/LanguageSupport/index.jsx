import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const LanguageSupportPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white_A700 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_8.svg"
                className="h-[35px] mt-[3px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[507px] items-center justify-start mb-2 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[66%] md:w-full">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-6 w-6"
                        alt="bookmark"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Track Certificate
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-2/5">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
                        variant="body13"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
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
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="font-semibold mb-0.5 mt-3.5 text-blue_gray_900"
                variant="body2"
              >
                Settings
              </Text>
              <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[13%]">
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification One"
                    />
                    <Text
                      className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white_A700 top-[0] w-[18px]"
                      variant="body16"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="border-b border-blue_gray_100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[59%] md:w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      My Profile
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      Notifications
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="font-medium text-blue_A700_01 w-auto"
                        variant="body13"
                      >
                        General settings
                      </Text>
                    </div>
                    <Line className="bg-blue_A700_01 h-0.5 w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      Theme
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 w-auto"
                      variant="body13"
                    >
                      Network
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[33px] items-center justify-start w-4/5 md:w-full">
                <List
                  className="flex-col gap-[16.5px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row sm:gap-10 items-start justify-between my-0 pt-0.5 w-full">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        src="images/img_user_1.svg"
                        className="h-6 mb-0.5 w-6"
                        alt="user One"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_900"
                        variant="body12"
                      >
                        My Profile
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue_gray_100 w-full" />
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 py-0.5 w-full">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        src="images/img_notification_24X24.svg"
                        className="h-6 w-6"
                        alt="notification Two"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_900"
                        variant="body12"
                      >
                        Notifications
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright One"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue_gray_100 w-full" />
                  <div className="flex flex-1 flex-row sm:gap-10 items-start justify-between my-0 pt-0.5 w-full">
                    <div className="flex flex-row gap-4 items-end justify-start">
                      <Img
                        src="images/img_settings_1.svg"
                        className="h-6 mb-[3px] w-6"
                        alt="settings Three"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_900"
                        variant="body12"
                      >
                        Language
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright Two"
                    />
                  </div>
                </List>
                <List
                  className="flex-col gap-[16.5px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between py-0.5 w-full">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        src="images/img_dashboard.svg"
                        className="h-6 w-6"
                        alt="dashboard One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_900"
                        variant="body12"
                      >
                        Theme
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright Three"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue_gray_100 w-full" />
                  <div className="flex flex-1 flex-row sm:gap-10 items-start justify-between pt-0.5 w-full">
                    <div className="flex flex-row gap-4 items-end justify-start">
                      <Img
                        src="images/img_question_24X24.svg"
                        className="h-6 mb-[3px] w-6"
                        alt="question One"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_900"
                        variant="body12"
                      >
                        Help & Feedback
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright Four"
                    />
                  </div>
                  <Line className="self-center h-px bg-blue_gray_100 w-full" />
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between py-0.5 w-full">
                    <div className="flex flex-row gap-4 items-start justify-start">
                      <Img
                        src="images/img_alarm.svg"
                        className="h-6 w-6"
                        alt="alarm"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_900"
                        variant="body12"
                      >
                        Switch Account
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-6 w-6"
                      alt="arrowright Five"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSupportPage;
