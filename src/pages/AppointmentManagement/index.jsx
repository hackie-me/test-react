import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AppointmentManagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_35X162.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
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
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1268px] mx-auto pt-[7px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[37px] items-start justify-start w-[68%] md:w-full">
            <Text className="font-semibold text-black_900" variant="body7">
              282 Doctors Available in USA
            </Text>
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 rounded-md w-full">
                <div className="bg-blue_50 md:h-[141px] h-[150px] pt-[9px] px-[9px] relative rounded-[4.5px] w-[150px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] h-[141px] inset-x-[0] mx-auto object-cover w-[84%]"
                    alt="FrameEightyOne"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0]">
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body11"
                  >
                    Dr. Jenny Wilson
                  </Text>
                  <Text
                    className="font-normal text-gray_900_a5"
                    variant="body13"
                  >
                    Dental Surgeon
                  </Text>
                  <Text
                    className="font-normal text-gray_900_a5"
                    variant="body13"
                  >
                    19 Year Experience Overall
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] text-gray_900_a5 w-full"
                    variant="body13"
                  >
                    <span className="text-gray_900_a5 text-base font-gilroy text-left">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors text-base font-gilroy text-left font-semibold">
                      Read More
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-4 items-center justify-start md:ml-[0] ml-[100px] w-[23%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[180px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="cursor-pointer font-medium text-base text-center text-white_A700 w-[180px]"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="FillBlueA70001"
                  >
                    Book Hospital visit
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 rounded-md w-full">
                <div className="bg-blue_50 md:h-[141px] h-[150px] pt-[9px] px-[9px] relative rounded-[4.5px] w-[150px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] h-[141px] inset-x-[0] mx-auto object-cover w-[84%]"
                    alt="FrameEightyOne One"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0]">
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body11"
                  >
                    Dr. Jenny Wilson
                  </Text>
                  <Text
                    className="font-normal text-gray_900_a5"
                    variant="body13"
                  >
                    Dental Surgeon
                  </Text>
                  <Text
                    className="font-normal text-gray_900_a5"
                    variant="body13"
                  >
                    19 Year Experience Overall
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] text-gray_900_a5 w-full"
                    variant="body13"
                  >
                    <span className="text-gray_900_a5 text-base font-gilroy text-left">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors text-base font-gilroy text-left font-semibold">
                      Read More
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-4 items-center justify-start md:ml-[0] ml-[100px] w-[23%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[180px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="cursor-pointer font-medium text-base text-center text-white_A700 w-[180px]"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="FillBlueA70001"
                  >
                    Book Hospital visit
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 rounded-md w-full">
                <div className="bg-blue_50 md:h-[141px] h-[150px] pt-[9px] px-[9px] relative rounded-[4.5px] w-[150px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] h-[141px] inset-x-[0] mx-auto object-cover w-[84%]"
                    alt="FrameEightyOne Two"
                  />
                </div>
                <div className="flex flex-col items-start justify-start ml-4 md:ml-[0]">
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body11"
                  >
                    Dr. Jenny Wilson
                  </Text>
                  <Text
                    className="font-normal mt-[9px] text-gray_900_a5"
                    variant="body13"
                  >
                    Dental Surgeon
                  </Text>
                  <Text
                    className="font-normal mt-[9px] text-gray_900_a5"
                    variant="body13"
                  >
                    19 Year Experience Overall
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] mt-1 text-gray_900_a5 w-full"
                    variant="body13"
                  >
                    <span className="text-gray_900_a5 text-base font-gilroy text-left">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors text-base font-gilroy text-left font-semibold">
                      Read More
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-4 items-center justify-start md:ml-[0] ml-[100px] w-[23%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[180px] text-base text-blue_A700_01 text-center"
                    shape="RoundedBorder6"
                    size="2xl"
                    variant="OutlineBlueA70001"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="cursor-pointer font-medium text-base text-center text-white_A700 w-[180px]"
                    shape="RoundedBorder6"
                    size="xl"
                    variant="FillBlueA70001"
                  >
                    Book Hospital visit
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex h-[159px] sm:h-[210px] md:h-[443px] justify-end relative w-full">
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid h-[210px] mt-auto mx-auto rounded-md w-full"></div>
                  <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[94%]">
                    <div className="bg-blue_50 md:h-[141px] h-[150px] pt-[9px] px-[9px] relative rounded-[4.5px] w-[150px]">
                      <Img
                        src="images/img_frame81.png"
                        className="absolute bottom-[0] h-[141px] inset-x-[0] mx-auto object-cover w-[84%]"
                        alt="FrameEightyOne Three"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start ml-4 md:ml-[0] pr-[7px] py-[7px]">
                      <Text
                        className="font-semibold text-blue_A700_01"
                        variant="body11"
                      >
                        Dr. Jenny Wilson
                      </Text>
                      <Text
                        className="font-normal text-gray_900_a5"
                        variant="body13"
                      >
                        Dental Surgeon
                      </Text>
                      <Text
                        className="font-normal text-gray_900_a5"
                        variant="body13"
                      >
                        19 Year Experience Overall
                      </Text>
                      <Text
                        className="font-normal mb-3 text-gray_900_a5"
                        variant="body13"
                      >
                        <span className="text-gray_900_a5 text-base font-gilroy text-left">
                          Dr. Jenny Wilson (Implantologist), is a Dentist in
                          America, she has 20 years of...{" "}
                        </span>
                        <span className="text-colors text-base font-gilroy text-left font-semibold">
                          Read More
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[100px] w-[23%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[180px] text-base text-blue_A700_01 text-center"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Book Video Consult
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-center text-white_A700 w-[180px]"
                        shape="RoundedBorder6"
                        size="xl"
                        variant="FillBlueA70001"
                      >
                        Book Hospital visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[30%] md:w-full">
            <Text className="font-semibold text-black_900" variant="body12">
              Pick Date and Time
            </Text>
            <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-center p-[30px] sm:px-5 rounded-md w-full">
              <div className="flex flex-col gap-4 items-center justify-start mt-[5px] w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="icbRoundedBorder3"
                    size="lgIcn"
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_arrowleft_black_900.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <Text
                    className="font-medium mt-[7px] text-blue_gray_900"
                    variant="body11"
                  >
                    September 2022
                  </Text>
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="icbRoundedBorder3"
                    size="lgIcn"
                    variant="icbOutlineBluegray50"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="gap-[3px] grid grid-cols-7 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        SUN
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        MON
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        TUE
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        WED
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        THU
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        FRI
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body16"
                      >
                        SAT
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        31
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        1
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        3
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        4
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        5
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        7
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        8
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        9
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        10
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        11
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        12
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_400"
                        variant="body15"
                      >
                        13
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-2 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold h-3.5 text-blue_gray_400"
                          variant="body15"
                        >
                          14
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold h-3.5 text-blue_gray_400"
                          variant="body15"
                        >
                          15
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold h-3.5 text-blue_gray_400"
                          variant="body15"
                        >
                          16
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          17
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold min-w-[43px] text-center text-sm text-white_A700"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        18
                      </Button>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold h-3.5 text-blue_gray_400"
                          variant="body15"
                        >
                          19
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          20
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          21
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          22
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          23
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          24
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          24
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          26
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold h-3.5 text-blue_gray_400"
                          variant="body15"
                        >
                          27
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          28
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          29
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          30
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[7px]">
                        <Text
                          className="font-semibold text-blue_gray_400"
                          variant="body15"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start mt-[30px] w-full">
                <Img
                  src="images/img_frame34732.svg"
                  className="h-12 w-full"
                  alt="Frame34732"
                />
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-7 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      12:30 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      1:00 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      1:30 PM
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row gap-7 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      2:00 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-center text-sm text-white_A700"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlueA70001"
                    >
                      2:30 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      3:00 PM
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row gap-7 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      3:30 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      4:00 PM
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-blue_gray_400 text-center text-sm"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray400"
                    >
                      4:30 PM
                    </Button>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mb-[173px] mt-10">
                <Text className="font-medium text-black_900" variant="body12">
                  Hospital Location
                </Text>
                <Text
                  className="font-normal leading-[26.00px] text-blue_gray_400 w-full"
                  variant="body13"
                >
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentManagementPage;
