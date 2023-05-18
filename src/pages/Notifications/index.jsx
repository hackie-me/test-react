import React from "react";

import { Button, Img, List, Text } from "components";

const NotificationsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-gilroy h-[1024px] items-center justify-end mx-auto pt-[193px] w-full"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <div className="flex flex-col gap-5 justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start md:ml-[0] ml-[978px] mr-6 p-3 md:px-5 rounded-[15px] w-[31%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-2 w-full">
              <div className="flex flex-row items-start justify-start rounded-[5px] w-[95%] md:w-full">
                <Text
                  className="font-normal mt-[5px] text-black_900"
                  variant="body14"
                >
                  Notifications
                </Text>
                <Button
                  className="ml-[109px]"
                  shape="RoundedBorder3"
                  size="md"
                  variant="Outline"
                >
                  <div className="bg-white_A700 cursor-pointer font-normal min-w-[89px] text-black_900_e4 text-center text-xs">
                    <div className="ml-[109px]">Settings</div>
                  </div>
                </Button>
                <Button
                  className="ml-3.5"
                  shape="RoundedBorder3"
                  size="md"
                  variant="Outline"
                >
                  <div className="bg-white_A700 cursor-pointer font-normal min-w-[89px] text-black_900_e4 text-center text-xs">
                    <div className="ml-3.5">Clear All</div>
                  </div>
                </Button>
              </div>
              <List
                className="flex-col gap-5 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon One"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon Two"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon Three"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One Three"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon Four"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One Four"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            src="images/img_appicon.png"
                            className="h-8 md:h-auto object-cover w-8"
                            alt="AppIcon Five"
                          />
                          <Text
                            className="font-semibold mt-[3px] text-black_900"
                            variant="body13"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="font-normal mt-0.5 text-black_900"
                            variant="body14"
                          >
                            Meeting
                          </Text>
                          <Img
                            src="images/img_appicon_28X28.png"
                            className="h-7 md:h-auto object-cover w-7"
                            alt="AppIcon One Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="font-normal mt-1 text-gray_500_01"
                          variant="body14"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[355px] mt-[3px] text-gray_900_09"
                    variant="body14"
                  >
                    6:00 PM
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <footer className="bg-blue_gray_900_7f flex font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-[575px] mr-5 my-1 w-[59%]">
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    src="images/img_start.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Start"
                  />
                  <Img
                    src="images/img_search.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Search"
                  />
                  <Img
                    src="images/img_desktop.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Desktop"
                  />
                  <Img
                    src="images/img_widgets.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Widgets"
                  />
                  <div className="flex flex-col items-center justify-start p-2 w-[41px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-end p-0.5 w-[25px]"
                      style={{
                        backgroundImage: "url('images/img_explorericon.png')",
                      }}
                    >
                      <div className="bg-gradient5  h-[7px] mt-3 w-[48%]"></div>
                    </div>
                  </div>
                  <div className="md:h-[38px] h-[41px] relative w-[41px]">
                    <div className="bg-white_A700_0c border border-solid border-white_A700_0c flex flex-col h-full items-center justify-end m-auto rounded w-[41px]">
                      <div className="bg-white_A700_87 h-0.5 mt-9 rounded-[1px] w-2/5"></div>
                    </div>
                    <Img
                      src="images/img_placeyouricon.png"
                      className="absolute h-[25px] inset-[0] justify-center m-auto object-cover w-[25px]"
                      alt="PlaceYourIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between pt-0.5 w-[26%] sm:w-full">
                <Img
                  src="images/img_arrowup.svg"
                  className="h-6 w-6"
                  alt="arrowup"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Img
                    src="images/img_signal.svg"
                    className="h-6 w-6"
                    alt="signal"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="h-6 w-6"
                    alt="volume"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-6 w-6"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="font-normal text-white_A700"
                    variant="body16"
                  >
                    11:55 PM
                  </Text>
                  <Text
                    className="font-normal mt-[3px] text-white_A700"
                    variant="body16"
                  >
                    10/6/2021
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
