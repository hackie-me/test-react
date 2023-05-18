import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Switch, Text } from "components";

const StereoscopicDisplayPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white_A700 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_4.svg"
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
            <div className="flex flex-col gap-[50px] items-center justify-start w-[65%] md:w-full">
              <div className="flex flex-col gap-[18px] items-center justify-end w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    On/Off Lables
                  </Text>
                  <Switch value={true} className="" />
                </div>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-blue_A700_01 text-blue_A700_01 text-left text-lg w-full"
                  name="Frame34748"
                  placeholder="Interaction"
                  shape="RoundedBorder6"
                  size="xl"
                  variant="FillBlue50"
                ></Input>
                <List
                  className="flex-col gap-[19px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Switch Control
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
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Assistive Touch
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
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Touch Accommodations
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
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[19px] items-center justify-start pt-0.5 w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body12"
                  >
                    Enable VR
                  </Text>
                  <Switch value={true} className="" />
                </div>
                <List
                  className="flex-col gap-[19px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Shake to Undo
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
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Vibrations
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
                        alt="arrowright Four"
                      />
                    </div>
                  </div>
                </List>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-blue_gray_900"
                    variant="body12"
                  >
                    Reachability
                  </Text>
                  <Switch value={true} className="mb-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StereoscopicDisplayPage;
