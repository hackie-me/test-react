import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const group10257OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const group10256OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmailDeliverabilityPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_9.svg"
                className="h-[35px] mx-auto w-[65%]"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-12 w-[42%] md:w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start w-[78%] md:w-full">
                  <Line className="bg-blue_A700_01 h-6 w-0.5" />
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      src="images/img_bookmark.svg"
                      className="h-6 w-6"
                      alt="bookmark"
                    />
                    <Text
                      className="font-semibold text-blue_A700_01 w-auto"
                      variant="body13"
                    >
                      Inbox
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[93%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[91%] md:w-full">
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
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
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
                  <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                    <Img
                      src="images/img_send_24X24.svg"
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
                  <div className="flex flex-row gap-2 items-start justify-start w-[82%] md:w-full">
                    <Img
                      src="images/img_file_24X24.svg"
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
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[610px] w-[27%] md:w-full">
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
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[37px] items-center justify-start md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[22px] sm:px-5 w-full">
              <Input
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                wrapClassName="flex md:flex-1 ml-5 md:ml-[0] md:mt-0 my-0.5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search_bluegray_900.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center">
                <SelectBox
                  className="font-medium text-base text-gray_900 text-left w-[27%] sm:w-full"
                  placeholderClassName="text-gray_900"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      className="h-6 mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Products"
                  size="sm"
                  name="Group10257"
                  isMulti={false}
                  options={group10257OptionsList}
                />
                <SelectBox
                  className="font-medium text-base text-gray_900 text-left w-[28%] sm:w-full"
                  placeholderClassName="text-gray_900"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      className="h-6 mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="Resouces"
                  size="sm"
                  name="Group10256"
                  isMulti={false}
                  options={group10256OptionsList}
                />
                <Text
                  className="font-medium sm:mt-0 mt-1 text-gray_900"
                  variant="body13"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto mr-[19px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
            <List
              className="flex-col gap-8 grid items-center w-[96%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
                <Img
                  src="images/img_pic.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic"
                />
                <div className="flex md:mt-0 mt-0.5 relative w-[95%] md:w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pt-[5px] w-full">
                <Img
                  src="images/img_pic_50X50.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic One"
                />
                <div className="flex relative w-[95%] md:w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
                <Img
                  src="images/img_pic_1.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic Two"
                />
                <div className="flex md:mt-0 mt-0.5 relative w-[95%] md:w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
                <Img
                  src="images/img_pic_2.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic Three"
                />
                <div className="flex md:mt-0 mt-0.5 relative w-[95%] md:w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
                <Img
                  src="images/img_pic_3.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic Four"
                />
                <div className="flex relative w-[95%] md:w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
                <Img
                  src="images/img_pic_4.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="Pic Five"
                />
                <div className="flex relative w-[95%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start my-auto">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between pr-[5px] pt-[5px] w-full">
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
                      Volutpat, dictum sed eleifend orci, consequat auctor odio
                      eget porta. Id qua
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailDeliverabilityPage;
