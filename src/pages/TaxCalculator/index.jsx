import React from "react";

import { Sidebar } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const inputFieldOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TaxCalculatorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
                  placeholder="Search Items, Customer etc"
                  prefix={
                    <Img
                      src="images/img_search_black_900.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[94%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[309px] items-center justify-end p-[5px] w-full">
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
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[42%] md:w-full">
                      <Img
                        src="images/img_ticket.svg"
                        className="h-6 w-6"
                        alt="ticket"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700"
                        variant="body13"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[46%] md:w-full">
                      <Img
                        src="images/img_user.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Friend List
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
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_edit.svg"
                        className="h-6 w-6"
                        alt="edit"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        src="images/img_bag.svg"
                        className="h-6 w-6"
                        alt="bag"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[47%]">
                      <Img
                        src="images/img_calculator.svg"
                        className="h-6 w-6"
                        alt="calculator"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Calculator
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
            <div className="flex flex-1 md:flex-col flex-row md:gap-[58px] items-start justify-between md:mt-0 mt-[53px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[17px] w-[46%] md:w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body2"
                >
                  Save Your Tax !
                </Text>
                <Text
                  className="font-medium leading-[29.00px] mt-[34px] text-blue_gray_700 w-full"
                  variant="body12"
                >
                  Tax-saving investing is eay & rewarding you could earn enough
                  for a surfip trip.
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start mt-6 w-[72%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-[99%] md:w-full">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-6 w-6"
                      alt="checkmark"
                    />
                    <div className="flex flex-row gap-2 items-center justify-start mt-1">
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Save Money -
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_700"
                        variant="body13"
                      >
                        Save 1,50,000 per year
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-start justify-between pt-1 w-full">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-[18px] w-[18px]"
                      alt="checkmark One"
                    />
                    <div className="flex flex-row gap-2 items-start justify-start">
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Free -
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_700"
                        variant="body13"
                      >
                        Get started without any charge
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-between w-[99%] md:w-full">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-6 w-6"
                      alt="checkmark Two"
                    />
                    <div className="flex flex-row gap-2 items-center justify-start mt-1">
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Save Money -
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_700"
                        variant="body13"
                      >
                        Save 1,50,000 per year
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-start justify-between pt-1 w-full">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-[18px] w-[18px]"
                      alt="checkmark Three"
                    />
                    <div className="flex flex-row gap-2 items-start justify-start">
                      <Text
                        className="font-semibold text-blue_gray_700"
                        variant="body13"
                      >
                        Free -
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_700"
                        variant="body13"
                      >
                        Get started without any charge
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[53px] items-center justify-start w-1/2 md:w-full">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-[57px] items-center justify-start mt-[7px] w-[88%] md:w-full">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body7"
                    >
                      Tax Calculator
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="bg-white_A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-md shadow-bs4 w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                          <Text
                            className="font-medium text-blue_gray_400"
                            variant="body13"
                          >
                            Estimated Annual Salary
                          </Text>
                          <Text
                            className="font-semibold text-blue_A700_01"
                            as="h6"
                            variant="h6"
                          >
                            $2145.00
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start mt-5 w-[396px] sm:w-full">
                        <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px] w-full">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            Filling Status
                          </Text>
                        </div>
                        <SelectBox
                          className="font-semibold h-11 text-base text-blue_gray_900 text-left w-full"
                          placeholderClassName="text-blue_gray_900"
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_200.svg"
                              className="h-5 w-5"
                              alt="arrow_down"
                            />
                          }
                          size="2xl"
                          isSearchable={false}
                          placeholder="Single"
                          shape="RoundedBorder6"
                          isMulti={false}
                          options={inputFieldOneOptionsList}
                          name="InputField One"
                          variant="OutlineBluegray100"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start mt-[26px] pb-[3px] w-full">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body13"
                        >
                          Dependents
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <div className="h-6 relative w-full">
                              <div className="absolute bg-blue_50 flex flex-col h-max inset-[0] items-start justify-center m-auto px-[11px] rounded w-full">
                                <div className="bg-blue_A700_01 h-2 rounded w-[67%]"></div>
                              </div>
                              <div className="absolute flex flex-row h-full inset-[0] items-center justify-center m-auto w-[39%]">
                                <div className="bg-blue_A700_01 border-2 border-blue_A700_01 border-solid h-6 rounded-[50%] w-6"></div>
                                <div className="bg-gray_50_04 border-2 border-blue_A700_01 border-solid h-6 rounded-[50%] w-6"></div>
                              </div>
                              <div className="absolute bg-blue_50 h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"></div>
                              <div className="absolute bg-blue_A700_01 border-2 border-blue_A700_01 border-solid h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"></div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body15"
                              >
                                0
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body15"
                              >
                                1
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body15"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium text-blue_gray_300"
                                variant="body15"
                              >
                                3+
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-5 w-full">
                        <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px] w-full">
                          <Text
                            className="font-medium text-blue_gray_900"
                            variant="body13"
                          >
                            State you’ll Fill In
                          </Text>
                        </div>
                        <SelectBox
                          className="font-semibold mt-1 text-base text-blue_gray_900 text-left w-full"
                          placeholderClassName="text-blue_gray_900"
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_200.svg"
                              className="h-5 mr-3 w-5"
                              alt="arrow_down"
                            />
                          }
                          size="xl"
                          isSearchable={false}
                          placeholder="India"
                          shape="RoundedBorder6"
                          isMulti={false}
                          options={countryOptionsList}
                          name="country"
                          variant="OutlineBluegray100"
                        />
                      </div>
                      <CheckBox
                        className="font-medium mt-[21px] text-blue_gray_300 text-left text-sm"
                        inputClassName="h-5 mr-[5px] w-5"
                        name="InputLabelS"
                        id="InputLabelS"
                        label="I work in multiple state"
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium text-base text-center text-white_A700 w-[500px]"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="FillBlueA70001"
                >
                  Calculate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxCalculatorPage;
