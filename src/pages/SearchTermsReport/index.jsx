import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SearchTermsReportPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_10.svg"
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
                    src="images/img_profileimglarg_85X85.png"
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
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Timesheets
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
                        src="images/img_checkmark_24X24.svg"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start p-2 w-full">
                    <Line className="bg-blue_A700_01 h-6 my-[9px] w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-center my-2 w-[39%]">
                      <Img
                        src="images/img_file_24X24.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
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
            <div className="flex flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-[57px] w-full">
              <Text className="font-semibold text-black_900" variant="body12">
                Search Terms Report
              </Text>
              <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray_50 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-2.5 w-full">
                    <Text
                      className="font-medium ml-4 sm:ml-[0] text-blue_gray_600"
                      variant="body13"
                    >
                      Search Term
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[227px] sm:mt-0 mt-1.5 text-blue_gray_600"
                      variant="body13"
                    >
                      Category
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[519px] text-blue_gray_600"
                      variant="body13"
                    >
                      Total Searches{" "}
                    </Text>
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start pt-1 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Shoes
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[273px] text-blue_gray_900"
                      variant="body13"
                    >
                      Footwear
                    </Text>
                    <Text
                      className="font-semibold md:ml-[0] ml-[541px] text-blue_gray_900"
                      variant="body13"
                    >
                      693 (3.47%)
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Line className="bg-blue_gray_100 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        T-Shirt
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[268px] text-blue_gray_900"
                        variant="body13"
                      >
                        Clothes
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[557px] text-blue_gray_900"
                        variant="body13"
                      >
                        617 (3.09%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-[29px] w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Shirt
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[284px] text-blue_gray_900"
                        variant="body13"
                      >
                        Clothes
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[554px] text-blue_gray_900"
                        variant="body13"
                      >
                        565 (2.83%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-[29px] w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        T.V.
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[295px] text-blue_gray_900"
                        variant="body13"
                      >
                        Electronics
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[532px] text-blue_gray_900"
                        variant="body13"
                      >
                        693 (3.47%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-[29px] w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Mobile Phone
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[218px] text-blue_gray_900"
                        variant="body13"
                      >
                        Electronics
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[534px] text-blue_gray_900"
                        variant="body13"
                      >
                        617 (3.09%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-[29px] w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Laptop
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[265px] text-blue_gray_900"
                        variant="body13"
                      >
                        Electronics
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[531px] text-blue_gray_900"
                        variant="body13"
                      >
                        565 (2.83%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-6 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[27px] w-[94%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Earphone
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[247px] text-blue_gray_900"
                        variant="body13"
                      >
                        Electronics
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[532px] text-blue_gray_900"
                        variant="body13"
                      >
                        693 (3.47%)
                      </Text>
                    </div>
                    <Line className="bg-blue_gray_100 h-px mt-6 w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[23px] w-[95%] md:w-full">
                      <Text
                        className="font-bold mt-1 text-blue_gray_900"
                        variant="body12"
                      >
                        Total
                      </Text>
                      <div className="flex flex-col gap-[9px] items-end justify-start mt-1">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          19.989
                        </Text>
                        <Text
                          className="font-normal text-blue_A700_01"
                          variant="body15"
                        >
                          % of Total, 100% (19,986)
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
    </>
  );
};

export default SearchTermsReportPage;
