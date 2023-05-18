import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TeamBuilderPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_05 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_1.svg"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[42%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
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
                        alt="file"
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
            <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[42px] w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body7"
              >
                My Team
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix"
                    />
                    <div className="flex flex-col gap-[13px] items-center justify-end p-[3px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Pheonix Baker
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Founder & CEO
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_150X150.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix One"
                    />
                    <div className="flex flex-col gap-[15px] items-center justify-start pt-[5px] px-[5px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Demi Wilkinson
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Engineering Manager
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_1.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Two"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start pt-[7px] px-[7px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Jose Cooper
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Product Manager
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_2.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Three"
                    />
                    <div className="flex flex-col gap-3.5 items-center justify-start pt-[5px] px-[5px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Lara Johnson
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Design Head
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_3.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Four"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start pt-[7px] px-[7px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Stein Hanley
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        HR Manager
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6_4.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Five"
                    />
                    <div className="flex flex-col gap-2 items-center justify-end p-[3px]">
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_900"
                        variant="body12"
                      >
                        Alex Kanye
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Customer Success Lead
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Six"
                    />
                    <div className="flex flex-col gap-[13px] items-center justify-end p-[3px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Pheonix Baker
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Founder & CEO
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-2 items-center justify-start p-6 sm:px-5 rounded-md shadow-bs4 w-full">
                    <Img
                      src="images/img_ellipse6.png"
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      alt="EllipseSix Seven"
                    />
                    <div className="flex flex-col gap-[13px] items-center justify-end p-[3px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Pheonix Baker
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Founder & CEO
                      </Text>
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

export default TeamBuilderPage;
