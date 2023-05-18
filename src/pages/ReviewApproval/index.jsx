import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReviewApprovalPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_5.svg"
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
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:px-5 w-[95%] md:w-full">
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[84%]">
                      <Img
                        src="images/img_coinsoutline.svg"
                        className="h-6 w-6"
                        alt="coinsOutline"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700_01"
                        variant="body13"
                      >
                        Request Management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[46%] md:w-full">
                      <Img
                        src="images/img_user_1.svg"
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[42%] md:w-full">
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
            <div className="flex-1 sm:h-[220px] md:h-[82px] h-[953px] relative w-full">
              <div className="absolute flex flex-col items-center justify-center left-[3%] top-[0] w-auto">
                <Text
                  className="font-medium text-blue_gray_400 w-auto"
                  variant="body13"
                >
                  Approved
                </Text>
              </div>
              <div className="absolute flex flex-col gap-[30px] h-max inset-[0] items-start justify-center m-auto w-full">
                <div className="sm:h-[190px] h-[52px] relative w-[46%] sm:w-full">
                  <div className="absolute bg-gray_50 border-b border-blue_gray_100 border-solid h-[50px] inset-[0] justify-center m-auto w-full"></div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-start justify-center m-auto w-[87%]">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="font-medium text-blue_gray_400 w-auto"
                        variant="body13"
                      >
                        Approved
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start sm:mt-0 mt-0.5 w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="font-medium text-blue_A700_01 w-auto"
                          variant="body13"
                        >
                          Pending
                        </Text>
                      </div>
                      <Line className="bg-blue_A700_01 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-end p-2.5">
                      <Text
                        className="font-medium mt-1.5 text-blue_gray_400"
                        variant="body13"
                      >
                        Rejected
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end w-full">
                  <List
                    className="flex-col gap-6 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            src="images/img_ellipse6_3.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg One"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[30px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold mt-0.5 text-blue_gray_900"
                                variant="body12"
                              >
                                Stein Hanley
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star"
                              />
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              HR Manager
                            </Text>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            src="images/img_profileimglarg_56X56.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg Two"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[22px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold text-blue_gray_900"
                                variant="body12"
                              >
                                Lara Johnson
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star One"
                              />
                            </div>
                            <Text
                              className="font-medium mt-[19px] text-blue_gray_400"
                              variant="body13"
                            >
                              Design Head
                            </Text>
                            <Text
                              className="font-medium mt-3 text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            src="images/img_ellipse6_1.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg Three"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[33px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold mt-0.5 text-blue_gray_900"
                                variant="body12"
                              >
                                jose Cooper
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star Two"
                              />
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              Product Manager
                            </Text>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            src="images/img_ellipse6_3.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg Four"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[30px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold mt-0.5 text-blue_gray_900"
                                variant="body12"
                              >
                                Stein Hanley
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star Three"
                              />
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              HR Manager
                            </Text>
                            <Text
                              className="font-medium text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            src="images/img_profileimglarg_56X56.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg Five"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[22px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold text-blue_gray_900"
                                variant="body12"
                              >
                                Lara Johnson
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star Four"
                              />
                            </div>
                            <Text
                              className="font-medium mt-[19px] text-blue_gray_400"
                              variant="body13"
                            >
                              Design Head
                            </Text>
                            <Text
                              className="font-medium mt-3 text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between pb-2 w-[63%] md:w-full">
                          <Img
                            src="images/img_ellipse6_1.png"
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            alt="ProfileImgLarg Six"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[33px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="font-semibold mt-0.5 text-blue_gray_900"
                                variant="body12"
                              >
                                jose Cooper
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="h-[18px] w-[47%]"
                                alt="star Five"
                              />
                            </div>
                            <Text
                              className="font-medium mt-3.5 text-blue_gray_400"
                              variant="body13"
                            >
                              Product Manager
                            </Text>
                            <Text
                              className="font-medium mt-2 text-blue_gray_400"
                              variant="body13"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue_50 font-medium h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue_A700_01 w-[87px]"
                            variant="body15"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="font-medium text-blue_A700_01 w-auto"
                                variant="body13"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[150px]"
                              shape="RoundedBorder6"
                              size="2xl"
                              variant="FillBlueA70001"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewApprovalPage;
