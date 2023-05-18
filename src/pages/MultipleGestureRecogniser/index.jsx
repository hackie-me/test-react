import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, SeekBar, Switch, Text } from "components";

const MultipleGestureRecogniserPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white_A700 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_35X162.svg"
                className="h-[35px] mt-[3px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[573px] items-center justify-start mb-2 w-full">
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
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="font-semibold mb-0.5 sm:mt-0 mt-3.5 text-blue_gray_900"
                variant="body2"
              >
                Multiple Gesture Recogniser
              </Text>
              <div className="flex sm:flex-1 flex-row font-opensans gap-6 items-center justify-between w-[13%] sm:w-full">
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
            <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start pt-0.5 w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Zoom
                  </Text>
                  <Switch value={true} className="" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[59%] md:w-full">
                  <Text
                    className="font-medium text-blue_gray_600"
                    variant="body13"
                  >
                    Zoom magnifies the entire screen:
                  </Text>
                  <div className="flex flex-col gap-2.5 items-start justify-end pl-[5px] pt-[5px] w-full">
                    <Text
                      className="font-medium md:ml-[0] ml-[3px] text-blue_gray_400"
                      variant="body13"
                    >
                      Double-tap three figner to zoom
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[3px] text-blue_gray_400"
                      variant="body13"
                    >
                      Drag three finger to move round the screen
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[3px] text-blue_gray_400"
                      variant="body13"
                    >
                      Double-tap three fingers and drag to change zoom
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between mt-[18px] w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body12"
                >
                  Follow Focus
                </Text>
                <Switch value={true} className="" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[18px] pt-0.5 w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-blue_gray_900"
                    variant="body12"
                  >
                    Smart Typing
                  </Text>
                  <Switch value={true} className="mb-0.5" />
                </div>
                <Text
                  className="font-medium leading-[26.00px] text-blue_gray_600 w-[88%] sm:w-full"
                  variant="body13"
                >
                  Smart Typing will switch to Window Zoom when a keyboard
                  appears,and move the Window so that text is zoomed but the
                  keyboard is not.
                </Text>
              </div>
              <List
                className="flex-col gap-[17.5px] grid items-center mt-[17px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-blue_gray_900"
                    variant="body12"
                  >
                    Keyboard Shortcuts
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between pb-0.5 w-[8%]">
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body13"
                      >
                        On
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-6 w-6"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Zoom Controller
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between pb-0.5 w-[8%]">
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body13"
                      >
                        Off
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-6 w-6"
                      alt="arrowright One"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-1.5 text-blue_gray_900"
                    variant="body12"
                  >
                    Zoom Region
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between w-[23%]">
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body13"
                      >
                        Full Screen Zoom
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-6 w-6"
                      alt="arrowright Two"
                    />
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-5 items-start justify-start mt-5 w-full">
                <Text
                  className="font-normal text-blue_gray_400"
                  variant="body13"
                >
                  Maximum Zoom Level
                </Text>
                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-between w-full">
                  <SeekBar
                    inputValue={[50.43]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue_A700_01 border-[1.5px] border-solid bg-gray_50_04 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-6 rounded w-[92%]"
                    trackClassName="h-1.5 flex rounded w-full"
                  />{" "}
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-1">
                    <Text
                      className="font-bold text-blue_gray_400"
                      variant="body13"
                    >
                      5.0 px
                    </Text>
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

export default MultipleGestureRecogniserPage;
