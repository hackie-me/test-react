import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const EventsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-end justify-start mx-auto pb-[66px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  src="images/img_group_4.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="font-medium ml-[9px] text-gray_900"
                      variant="body13"
                    >
                      Orders
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_902.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900"
                    variant="body13"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="font-medium ml-4 text-gray_900"
                      variant="body13"
                    >
                      More
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_902.svg"
                      className="h-6 w-6"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_cart.svg"
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  alt="cart"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start overflow-auto md:px-5 w-[95%] md:w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[66%] md:w-full">
              <Text
                className="font-semibold mt-[7px] text-blue_gray_900"
                variant="body2"
              >
                Today’s Events
              </Text>
              <Img
                src="images/img_clock_40X40.svg"
                className="h-10 mb-1.5 w-10"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320.png"
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text className="font-medium text-black_900" variant="body11">
                    Music concert
                  </Text>
                  <Text
                    className="font-semibold text-blue_gray_400"
                    variant="body12"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-col gap-3 items-start justify-end pr-[5px] py-[5px]">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320_250X620.png"
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 One"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text className="font-medium text-black_900" variant="body11">
                    Health Seminar
                  </Text>
                  <Text
                    className="font-semibold text-blue_gray_400"
                    variant="body12"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-col gap-3 items-start justify-end pr-[5px] py-[5px]">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      10 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13px] items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320_1.png"
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Two"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text className="font-medium text-black_900" variant="body11">
                    Health Seminar
                  </Text>
                  <Text
                    className="font-semibold text-blue_A700_01 text-right"
                    variant="body12"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between py-[5px] w-full">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      10 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[25px] items-start justify-end pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[78%] md:w-full">
              <Text
                className="font-semibold mt-1.5 text-blue_gray_900"
                variant="body2"
              >
                Upcoming Events
              </Text>
              <Img
                src="images/img_clock_40X40.svg"
                className="h-10 mb-1.5 w-10"
                alt="clock One"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320.png"
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Three"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_400"
                      variant="body15"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[21px] text-blue_gray_400"
                    variant="body13"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-blue_A700_01 text-center text-xs"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320.png"
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Four"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_400"
                      variant="body15"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[21px] text-blue_gray_400"
                    variant="body13"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-blue_A700_01 text-center text-xs"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320.png"
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Five"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_400"
                      variant="body15"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[21px] text-blue_gray_400"
                    variant="body13"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-blue_A700_01 text-center text-xs"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320.png"
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Six"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="font-semibold text-blue_gray_400"
                      variant="body15"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[21px] text-blue_gray_400"
                    variant="body13"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-blue_A700_01 text-center text-xs"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1320_160X300.png"
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  alt="Rectangle1320 Seven"
                />
                <div className="flex flex-col items-center justify-start mt-1 pt-[3px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700_01 text-right"
                      variant="body15"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[19px] text-blue_gray_400"
                    variant="body13"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between mt-3.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-blue_A700_01 text-center text-xs"
                      shape="RoundedBorder6"
                      size="lg"
                      variant="OutlineBlueA70001"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
