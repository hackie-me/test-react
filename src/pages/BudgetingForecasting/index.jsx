import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const BudgetingForecastingPage = () => {
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
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
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
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        src="images/img_dollaraltsoli.svg"
                        className="h-6 w-6"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                      <Img
                        src="images/img_walletoutline.svg"
                        className="h-6 w-6"
                        alt="walletOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[54%]">
                      <Img
                        src="images/img_userarrowsout.svg"
                        className="h-6 w-6"
                        alt="userarrowsOut"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700"
                        variant="body13"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        src="images/img_menu.svg"
                        className="h-6 w-6"
                        alt="menu"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700"
                        variant="body13"
                      >
                        Messages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings Two"
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
            <div className="flex flex-1 flex-col gap-[37px] items-start justify-start md:mt-0 mt-[37px] w-full">
              <Text className="font-semibold text-gray_900_02" variant="body12">
                Transactions
              </Text>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start pr-1 py-1">
                      <Text
                        className="font-medium text-blue_A700_01"
                        variant="body13"
                      >
                        Total Balance
                      </Text>
                      <Text
                        className="font-bold mb-1.5 text-blue_A700_01"
                        as="h6"
                        variant="h6"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#0061ff" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#e0ebff",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start pr-1 py-1">
                      <Text
                        className="font-medium text-green_600"
                        variant="body13"
                      >
                        Total Income
                      </Text>
                      <Text
                        className="font-bold mb-1.5 text-green_600"
                        as="h6"
                        variant="h6"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#349765" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#d2efe0",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[19px] items-start justify-start pr-[5px] py-[5px]">
                      <Text
                        className="font-medium text-red_700"
                        variant="body13"
                      >
                        Total Expenses
                      </Text>
                      <Text
                        className="font-bold mb-[5px] text-red_700"
                        as="h6"
                        variant="h6"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#d03329" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#f6d6d4",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900_02"
                  variant="body12"
                >
                  Recent Transaction
                </Text>
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_checkmark_64X64.svg"
                          className="h-[27px]"
                          alt="checkmark One"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-start pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          Salary
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 16 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-green_600" variant="body12">
                      + $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_arrowgrowthso.svg"
                          className="h-[27px]"
                          alt="arrowgrowthSo"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-start pr-[7px] pt-[7px]">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          Light bill
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 14 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-red_700" variant="body12">
                      - $180
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_arrowgrowthso.svg"
                          className="h-[27px]"
                          alt="arrowgrowthSo One"
                        />
                      </Button>
                      <div className="flex flex-col gap-4 items-start justify-start pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 10 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-red_700" variant="body12">
                      - $550
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_arrowgrowthso.svg"
                          className="h-[27px]"
                          alt="arrowgrowthSo Two"
                        />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start pr-1.5 pt-1.5">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          Loan, interests
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 04 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-red_700" variant="body12">
                      - $240
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_checkmark_64X64.svg"
                          className="h-[27px]"
                          alt="checkmark Two"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-end pr-1 py-1">
                        <Text
                          className="font-semibold mt-0.5 text-black_900"
                          variant="body12"
                        >
                          Salary
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          March, 18 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-green_600" variant="body12">
                      + $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_arrowgrowthso.svg"
                          className="h-[27px]"
                          alt="arrowgrowthSo Three"
                        />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start pr-1.5 pt-1.5">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          Loan, interests
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 04 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-red_700" variant="body12">
                      - $240
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="icbRoundedBorder3"
                        size="3xlIcn"
                        variant="icbFillBlue507f"
                      >
                        <Img
                          src="images/img_arrowgrowthso.svg"
                          className="h-[27px]"
                          alt="arrowgrowthSo Four"
                        />
                      </Button>
                      <div className="flex flex-col gap-[15px] items-start justify-start pr-[5px] pt-[5px]">
                        <Text
                          className="font-semibold text-black_900"
                          variant="body12"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="font-normal text-blue_gray_400"
                          variant="body13"
                        >
                          May, 10 2022
                        </Text>
                      </div>
                    </div>
                    <Text className="font-bold text-red_700" variant="body12">
                      - $550
                    </Text>
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

export default BudgetingForecastingPage;
