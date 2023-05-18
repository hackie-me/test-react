import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9869OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmailListPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-gray_50 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group_3.svg"
                className="h-[35px] mt-[3px] w-[65%]"
                alt="Group"
              />
              <div className="flex flex-col md:gap-10 gap-[573px] items-center justify-start mb-2 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[32%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-6 w-6"
                        alt="bookmark"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Inbox
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[37%] md:w-full">
                      <Img
                        src="images/img_star.svg"
                        className="h-6 w-6"
                        alt="star"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Starred
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[41%] md:w-full">
                      <Img
                        src="images/img_clock.svg"
                        className="h-6 w-6"
                        alt="clock"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Snoozed
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[29%] md:w-full">
                      <Img
                        src="images/img_send.svg"
                        className="h-6 w-6"
                        alt="send"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Sent
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[34%] md:w-full">
                      <Img
                        src="images/img_file.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700"
                        variant="body13"
                      >
                        Drafts
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
          <div className="flex flex-1 flex-col gap-[37px] items-center justify-start md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[22px] sm:px-5 shadow-bs4 w-full">
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:flex-1 ml-5 md:ml-[0] md:mt-0 my-0.5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer my-4 mx-3"
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
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center">
                <SelectBox
                  className="font-medium text-base text-gray_900 text-left w-[28%] sm:w-full"
                  placeholderClassName="text-gray_900"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_902.svg"
                      className="h-6 mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Products"
                  size="md"
                  name="Frame9869"
                  isMulti={false}
                  options={frame9869OptionsList}
                />
                <SelectBox
                  className="font-medium ml-6 sm:ml-[0] text-base text-gray_900 text-left w-[28%] sm:w-full"
                  placeholderClassName="text-gray_900"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_902.svg"
                      className="h-6 mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Resouces"
                  size="md"
                  name="Frame9870"
                  isMulti={false}
                  options={frame9870OptionsList}
                />
                <Text
                  className="font-medium ml-8 sm:ml-[0] sm:mt-0 mt-[11px] text-gray_900"
                  variant="body13"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg_85X85.png"
                className="h-14 md:h-auto mr-5 rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[129px] items-end justify-start w-[96%] md:w-full">
              <List
                className="flex-col gap-8 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic"
                  />
                  <div className="flex mr-[5px] md:mt-0 mt-[7px] relative w-[94%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        Aspen Mango
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-0.5 text-blue_A700_01 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic_50X50.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic One"
                  />
                  <div className="flex md:mt-0 mt-[5px] relative w-[95%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body12"
                      >
                        Wade Warren
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-43.38px] mt-1 text-blue_A700_01 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic_1.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic Two"
                  />
                  <div className="flex mr-[5px] md:mt-0 mt-[7px] relative w-[94%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-0.5 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic_2.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic Three"
                  />
                  <div className="flex mr-[5px] md:mt-0 mt-[7px] relative w-[94%] md:w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-0.5 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic_3.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic Four"
                  />
                  <div className="flex mr-[5px] md:mt-0 mt-[5px] relative w-[94%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Devon Lane
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-1 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 w-full">
                  <Img
                    src="images/img_pic_4.png"
                    className="h-[50px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[50px]"
                    alt="Pic Five"
                  />
                  <div className="flex mr-[5px] md:mt-0 mt-[5px] relative w-[94%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Darlene Robertson
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-1 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 pr-[5px] pt-[5px] w-full">
                  <Img
                    src="images/img_pic_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="Pic Six"
                  />
                  <div className="flex relative w-[95%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Ronald Richards
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-1 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-between my-0 pr-[5px] pt-[5px] w-full">
                  <Img
                    src="images/img_pic.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="Pic Seven"
                  />
                  <div className="flex relative w-[95%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-auto">
                      <Text
                        className="font-semibold text-gray_900_12"
                        variant="body12"
                      >
                        Eleanor Pena
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat, dictum sed eleifend orci, consequat auctor
                        odio eget porta. Id qua
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-49.38px] mt-1 text-blue_gray_400 z-[1]"
                      variant="body15"
                    >
                      22 Jun, 12:00 PM
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[136px]"
                leftIcon={
                  <Img
                    src="images/img_forward.svg"
                    className="ml-4 mr-2 my-3.5"
                    alt="forward"
                  />
                }
                shape="RoundedBorder6"
                size="lg"
                variant="FillBlueA70001"
              >
                <div className="font-medium text-left text-lg text-white_A700">
                  Compose
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailListPage;
