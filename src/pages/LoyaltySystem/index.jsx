import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LoyaltySystemPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_7.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[83%] md:w-full">
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[62%]">
                      <Img
                        src="images/img_coinsoutline.svg"
                        className="h-6 w-6"
                        alt="coinsOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700_01"
                        variant="body13"
                      >
                        Rewards Points
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
                        src="images/img_edit_24X24.svg"
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
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 pt-1 w-full">
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Text className="font-medium text-gray_900_02" variant="body13">
                  Rewards Points
                </Text>
                <div className="flex flex-col gap-8 items-center justify-start md:ml-[0] ml-[218px] w-3/4 md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-white_A700 flex md:flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-md w-[73%] md:w-full">
                      <div className="flex flex-col gap-[31px] items-start justify-start ml-5">
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body12"
                        >
                          Total Reward Points
                        </Text>
                        <Text
                          className="font-bold text-blue_gray_900"
                          as="h6"
                          variant="h6"
                        >
                          $500
                        </Text>
                      </div>
                      <Img
                        src="images/img_image2022051.png"
                        className="h-[100px] md:h-auto mr-5 object-cover w-[100px]"
                        alt="image2022051"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[26%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[162px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        Withdraw
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-blue_A700_01 text-center text-lg w-[163px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Deposit
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-8 sm:px-5 rounded-md w-full">
                    <div className="flex flex-col gap-[35px] items-start justify-start mt-[5px] w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        variant="body12"
                      >
                        Recent Transactions
                      </Text>
                      <List
                        className="flex-col font-inter gap-[28.79px] grid items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="font-medium text-blue_A700_01"
                            variant="body13"
                          >
                            Today
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-red_700"
                                variant="body12"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                          <Text
                            className="font-medium text-blue_A700_01"
                            variant="body13"
                          >
                            21/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-red_700"
                                variant="body12"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                          <Text
                            className="font-medium text-blue_A700_01"
                            variant="body13"
                          >
                            03/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="font-semibold text-green_600"
                                variant="body12"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="font-normal text-blue_gray_900"
                                variant="body12"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="font-semibold text-red_700"
                                variant="body12"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray_100 h-px w-full" />
                          </div>
                        </div>
                      </List>
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

export default LoyaltySystemPage;
