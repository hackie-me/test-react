import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const IdeaManagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-1.5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_3.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_black_900.svg"
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
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="font-medium ml-0.5 text-gray_900"
                      variant="body13"
                    >
                      Products
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_901.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="font-medium text-gray_900"
                      variant="body13"
                    >
                      Resouces
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_901.svg"
                      className="h-6 w-6"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text className="font-medium text-gray_900" variant="body13">
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg_85X85.png"
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start pt-[9px] w-[74%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body4"
              >
                Add a Note
              </Text>
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-col items-start justify-start p-2 rounded-md w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] pl-1 w-[54%] md:w-full">
                    <div className="flex flex-col items-center justify-start rounded w-[27%] sm:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Button
                          className="flex h-5 items-center justify-center w-5"
                          shape="icbRoundedBorder3"
                          size="smIcn"
                          variant="icbFillGray30003"
                        >
                          <Img src="images/img_mobile.svg" alt="mobile" />
                        </Button>
                        <Img
                          src="images/img_volume.svg"
                          className="h-5 w-5"
                          alt="volume"
                        />
                        <Img
                          src="images/img_refresh.svg"
                          className="h-5 w-5"
                          alt="refresh"
                        />
                        <Img
                          src="images/img_iconstypeunde.svg"
                          className="h-5 rounded w-5"
                          alt="IconsTypeunde"
                        />
                      </div>
                    </div>
                    <Button
                      className="flex h-7 items-center justify-center ml-7 sm:ml-[0] w-7"
                      shape="icbRoundedBorder3"
                      size="smIcn"
                      variant="icbFillGray5008"
                    >
                      <Img
                        src="images/img_link.svg"
                        className="h-5"
                        alt="link"
                      />
                    </Button>
                    <List
                      className="sm:flex-col flex-row gap-6 grid grid-cols-2 ml-6 sm:ml-[0] w-[46%] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray_50_08 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            src="images/img_volume_20X20.svg"
                            className="h-5 w-5"
                            alt="volume One"
                          />
                          <Img
                            src="images/img_user.svg"
                            className="h-5 w-5"
                            alt="user"
                          />
                          <Img
                            src="images/img_iconstypeh3.svg"
                            className="h-5 w-5"
                            alt="IconsTypehThree"
                          />
                        </div>
                      </div>
                      <div className="bg-gray_50_08 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            src="images/img_menu_20X20.svg"
                            className="h-5 w-5"
                            alt="menu"
                          />
                          <Img
                            src="images/img_menu_1.svg"
                            className="h-5 w-5"
                            alt="menu One"
                          />
                          <Img
                            src="images/img_menu_2.svg"
                            className="h-5 w-5"
                            alt="menu Two"
                          />
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray_50_08 md:h-3.5 h-[27px] ml-6 sm:ml-[0] p-1 relative rounded w-[7%] sm:w-full">
                      <Img
                        src="images/img_cursor.svg"
                        className="absolute h-3.5 inset-[0] justify-center m-auto w-[72%]"
                        alt="cursor"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-col items-center justify-end p-[34px] sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start mt-[11px] w-[97%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between pt-[5px] w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start">
                        <Text
                          className="font-semibold text-blue_gray_900"
                          variant="body11"
                        >
                          Rashed Othman Salem
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body12"
                        >
                          Webflow Developer
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body12"
                      >
                        Dubai, U.A.E
                      </Text>
                    </div>
                    <Text
                      className="font-medium leading-[29.00px] mt-6 text-blue_gray_400"
                      variant="body12"
                    >
                      <>
                        As a candidate for the Webflow Developer position at
                        02100, I would like to introduce myself as an
                        exceptional designer with a strong background in
                        Webflow, I understand the impact that good design can
                        have. In applying for this position, I am confident due
                        to my recent job and freelance experience, as well as my
                        education.
                        <br />
                        As UI/UX Designer at Unseen Works DMCC, I created
                        innovative, creative, and digital experiences using a
                        variety of software and concepts. An enthusiast of Figma
                        and web design, I excel in both. I&#39;ve always had a
                        keen eye for how things fit together and do not. Other
                        members of the team sought my advice on their designs.
                        <br />
                        <br />
                        I’m applying for this position because I want a career
                        in Webflow, I love how Webflow gave me the ability to
                        bring designs to life. I realize that I don’t have a
                        strong background in Html etc., but I’m willing to learn
                        it to get the position.
                      </>
                    </Text>
                    <div className="flex flex-col gap-[18px] items-start justify-start mt-[29px]">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body11"
                      >
                        Michele D.
                      </Text>
                      <Text
                        className="font-medium text-blue_gray_400"
                        variant="body12"
                      >
                        Director of Say It Now
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[535px] sm:min-w-full text-base text-center text-white_A700"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Save Changes
            </Button>
          </div>
          <div className="bg-white_A700 border border-blue_gray_50 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[70px] p-3 rounded-md w-[24%] md:w-full">
            <div className="flex flex-row gap-[26px] items-start justify-between mt-1 w-full">
              <Button
                className="flex h-[34px] items-center justify-center w-[34px]"
                shape="icbRoundedBorder6"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_arrowdown_bluegray_903.svg"
                  alt="arrowdown Two"
                />
              </Button>
              <Text
                className="font-medium mt-2 text-blue_gray_900"
                variant="body11"
              >
                September 2021
              </Text>
              <Button
                className="flex h-[34px] items-center justify-center rotate-[-180deg] w-[34px]"
                shape="icbRoundedBorder6"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_arrowdown_bluegray_903.svg"
                  alt="arrowdown Three"
                />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start mt-4 w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                    <Text
                      className="font-semibold text-blue_gray_900 w-auto"
                      variant="body18"
                    >
                      SUN
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                    <Text
                      className="font-semibold text-blue_gray_900 w-auto"
                      variant="body18"
                    >
                      MON
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="font-semibold text-blue_gray_900 w-auto"
                    variant="body18"
                  >
                    TUE
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="font-semibold text-blue_gray_900 w-auto"
                    variant="body18"
                  >
                    WED
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="font-semibold text-blue_gray_900 w-auto"
                    variant="body18"
                  >
                    THU
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row grid grid-cols-2 w-[29%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                    <Text
                      className="font-semibold text-blue_gray_900 w-auto"
                      variant="body18"
                    >
                      FRI
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                    <Text
                      className="font-semibold text-blue_gray_900 w-auto"
                      variant="body18"
                    >
                      SAT
                    </Text>
                  </div>
                </List>
              </div>
              <List
                className="flex-col gap-[0] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      31
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      1
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      2
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      3
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      4
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      5
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      6
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      7
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      8
                    </Text>
                    <Img
                      src="images/img_eventdots_green_600.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      9
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots One One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      10
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Two One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      11
                    </Text>
                    <div className="bg-green_600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      12
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Three One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      13
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      14
                    </Text>
                    <Img
                      src="images/img_eventdots_green_600_4X10.svg"
                      className="h-1 mt-1 w-[34%]"
                      alt="EventDots Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      15
                    </Text>
                    <div className="bg-orange_A700 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      16
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots One Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      17
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Two Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      18
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Three Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      19
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Four One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      20
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 pr-[5px] w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      21
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      22
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      23
                    </Text>
                    <Img
                      src="images/img_eventdots_4X10.svg"
                      className="h-1 w-[34%]"
                      alt="EventDots One Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      24
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Two Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      25
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 w-[54%]"
                      alt="EventDots Three Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      26
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 w-[54%]"
                      alt="EventDots Four Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[5px] w-[11%]">
                    <div className="bg-blue_A700_01 flex flex-col items-center justify-end p-1 rounded-[14px] w-full">
                      <Text
                        className="font-semibold h-3 mt-[3px] text-gray_50_01"
                        variant="body16"
                      >
                        27
                      </Text>
                      <div className="bg-gray_50_01 h-1 mt-1 rounded-[50%] w-1"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      28
                    </Text>
                    <div className="bg-blue_A700_01 h-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      1
                    </Text>
                    <Img
                      src="images/img_eventdots_green_600_4X10.svg"
                      className="h-1 mt-1 w-[34%]"
                      alt="EventDots Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      2
                    </Text>
                    <div className="bg-orange_A700 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      3
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots One Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      4
                    </Text>
                    <div className="bg-green_600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      5
                    </Text>
                    <Img
                      src="images/img_eventdots_4X10.svg"
                      className="h-1 mt-1 w-[34%]"
                      alt="EventDots Two Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      6
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      7
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      8
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      9
                    </Text>
                    <Img
                      src="images/img_eventdots_4X10.svg"
                      className="h-1 mt-1 w-[34%]"
                      alt="EventDots One Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold h-3 mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      10
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Two Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      11
                    </Text>
                    <Img
                      src="images/img_eventdots.svg"
                      className="h-1 mt-1 w-[54%]"
                      alt="EventDots Three Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="font-semibold mt-[3px] text-blue_gray_400"
                      variant="body16"
                    >
                      12
                    </Text>
                    <Img
                      src="images/img_eventdots_orange_A700.svg"
                      className="h-1 mt-1 w-[34%]"
                      alt="EventDots Four Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="font-semibold mb-1 text-blue_gray_400"
                      variant="body16"
                    >
                      13
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <List
              className="flex-col gap-6 grid items-center mb-[136px] mt-6 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[13px] items-start justify-start pt-1 w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start w-1/2 md:w-full">
                  <Text
                    className="font-semibold text-black_900_01"
                    variant="body13"
                  >
                    TODAY
                  </Text>
                  <Text
                    className="font-normal text-black_900_01"
                    variant="body13"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-blue_A700_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body15"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="font-medium ml-3.5 md:ml-[0] text-blue_gray_400"
                      variant="body15"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="font-normal text-black_900_01"
                    variant="body13"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-amber_500_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body15"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="font-medium ml-3.5 md:ml-[0] text-blue_gray_400"
                      variant="body15"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="font-normal text-black_900_01"
                    variant="body13"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-green_600 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body15"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="font-medium ml-3.5 md:ml-[0] text-blue_gray_400"
                      variant="body15"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="font-normal text-black_900_01"
                    variant="body13"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-blue_A700_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="font-semibold text-black_900_01"
                      variant="body15"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="font-medium ml-3.5 md:ml-[0] text-blue_gray_400"
                      variant="body15"
                    >
                      Financial Update
                    </Text>
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

export default IdeaManagementPage;
