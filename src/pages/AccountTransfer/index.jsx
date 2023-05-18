import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const AccountTransferPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray_50 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group_35X162.svg"
              className="h-[35px] mt-[3px] w-[65%]"
              alt="Group"
            />
            <div className="flex flex-col md:gap-10 gap-[441px] items-center justify-start mb-2 w-full">
              <div className="flex flex-col items-start justify-start pt-4 w-full">
                <div className="flex flex-col items-end justify-start rounded-lg w-[46%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[94%] md:w-full">
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
                <div className="flex flex-col items-start justify-start mt-6 p-2 w-full">
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
                <div className="flex flex-col items-start justify-start mt-2 p-2 w-full">
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
                <div className="flex flex-row gap-1.5 items-center justify-start mt-2 p-2 w-full">
                  <Line className="bg-blue_A700_01 h-6 my-[9px] w-0.5" />
                  <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[67%]">
                    <Img
                      src="images/img_userarrowsout.svg"
                      className="h-6 w-6"
                      alt="userarrowsOut"
                    />
                    <Text
                      className="font-semibold mt-[3px] text-blue_A700_01"
                      variant="body13"
                    >
                      Account Transfer
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-2 p-2 w-full">
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
                <div className="flex flex-col items-start justify-start mt-2 p-2 w-full">
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
                <div className="flex flex-col items-start justify-start mt-2 p-2 w-full">
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
        <div className="flex-1 md:h-[1056px] h-[1109px] md:mt-0 mt-6 md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
            <div className="flex flex-col gap-[29px] items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body4"
                >
                  Account Transfer
                </Text>
                <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[9%]">
                  <div className="h-14 overflow-x-auto w-14">
                    <div className="flex flex-row gap-6 h-14 items-center justify-between overflow-auto w-14">
                      <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                        <div className="md:h-9 h-[35px] mb-1 relative w-9">
                          <Img
                            src="images/img_notification.svg"
                            className="absolute bottom-[0] h-8 left-[0] w-8"
                            alt="notification"
                          />
                          <div className="absolute bg-red_700 border border-blue_gray_50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                            <Text
                              className="font-semibold mb-0.5 ml-0.5 md:ml-[0] text-white_A700"
                              variant="body16"
                            >
                              2
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse13.png"
                        className="h-14 md:h-auto object-cover w-14"
                        alt="EllipseThirteen"
                      />
                    </div>
                  </div>
                  <div className="md:h-12 h-14 pl-1 py-1 relative w-[16%]">
                    <Img
                      src="images/img_profileimglarg_48X11.png"
                      className="absolute h-12 inset-y-[0] my-auto object-cover right-[0] rounded-[24px] w-[74%]"
                      alt="ProfileImgLarg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[71%] md:w-full">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[9px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[89%] md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Reciever
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[107px] text-blue_gray_400"
                      variant="body12"
                    >
                      Type
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[107px] text-blue_gray_400"
                      variant="body12"
                    >
                      Date
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[107px] text-blue_gray_400"
                      variant="body12"
                    >
                      Amount
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[72px] text-blue_gray_400"
                      variant="body12"
                    >
                      Transfer
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                  <List
                    className="flex-col gap-6 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-end justify-start w-[19%] md:w-full">
                        <Img
                          src="images/img_ellipse7.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven"
                        />
                        <Text
                          className="font-medium mb-[5px] mt-2.5 text-blue_gray_900"
                          variant="body15"
                        >
                          Ralph Edwards
                        </Text>
                      </div>
                      <Text
                        className="font-medium mb-1.5 md:ml-[0] ml-[62px] md:mt-0 mt-[11px] text-blue_gray_900"
                        variant="body15"
                      >
                        Savings
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[84px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-end justify-start w-[18%] md:w-full">
                        <Img
                          src="images/img_ellipse7_32X32.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven One"
                        />
                        <Text
                          className="font-medium mb-[5px] mt-2.5 text-blue_gray_900"
                          variant="body15"
                        >
                          Jane Cooper
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[72px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        Current
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[86px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-center justify-start w-[16%] md:w-full">
                        <Img
                          src="images/img_ellipse7_1.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Two"
                        />
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body15"
                        >
                          Robert Fox
                        </Text>
                      </div>
                      <Text
                        className="font-medium mb-1.5 md:ml-[0] ml-[87px] md:mt-0 mt-[11px] text-blue_gray_900"
                        variant="body15"
                      >
                        Savings
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[84px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                    <div className="flex h-[34px] justify-end my-0 relative w-full">
                      <div className="flex flex-row h-full items-start justify-center mb-1.5 ml-auto mr-[163px] mt-auto w-[51%]">
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body15"
                        >
                          Current
                        </Text>
                        <Text
                          className="font-medium ml-[86px] text-blue_gray_900"
                          variant="body15"
                        >
                          22/06/2021
                        </Text>
                        <Text
                          className="font-bold ml-[89px] text-blue_A700_01"
                          variant="body15"
                        >
                          $50,152.00
                        </Text>
                      </div>
                      <div className="absolute flex flex-row sm:gap-10 h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-row gap-2 items-end justify-start">
                          <Img
                            src="images/img_ellipse7_2.png"
                            className="h-8 md:h-auto rounded-[50%] w-8"
                            alt="EllipseSeven Three"
                          />
                          <Text
                            className="font-medium mb-[5px] mt-2.5 text-blue_gray_900"
                            variant="body15"
                          >
                            Floyd Miles
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium text-center text-sm text-white_A700 w-[119px]"
                          shape="RoundedBorder6"
                          size="lg"
                          variant="FillBlueA70001"
                        >
                          Transfer
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-center justify-start w-[16%] md:w-full">
                        <Img
                          src="images/img_ellipse7_3.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Four"
                        />
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body15"
                        >
                          Jerome Bell
                        </Text>
                      </div>
                      <Text
                        className="font-medium mb-1.5 md:ml-[0] ml-[82px] md:mt-0 mt-[11px] text-blue_gray_900"
                        variant="body15"
                      >
                        Savings
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[84px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-center justify-start w-[18%] md:w-full">
                        <Img
                          src="images/img_ellipse7_4.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Five"
                        />
                        <Text
                          className="font-medium text-blue_gray_900"
                          variant="body15"
                        >
                          Annette Black
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[67px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        Current
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[86px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start my-0 w-full">
                      <div className="flex md:flex-1 flex-row gap-2 items-end justify-start w-[18%] md:w-full">
                        <Img
                          src="images/img_ellipse7_5.png"
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          alt="EllipseSeven Six"
                        />
                        <Text
                          className="font-medium mb-[5px] mt-2.5 text-blue_gray_900"
                          variant="body15"
                        >
                          Arlene McCoy
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[68px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        Current
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[86px] md:mt-0 my-[9px] text-blue_gray_900"
                        variant="body15"
                      >
                        22/06/2021
                      </Text>
                      <Text
                        className="font-bold mb-1.5 md:ml-[0] ml-[89px] md:mt-0 mt-2.5 text-blue_A700_01"
                        variant="body15"
                      >
                        $50,152.00
                      </Text>
                      <Button
                        className="cursor-pointer font-medium ml-11 md:ml-[0] text-center text-sm text-white_A700 w-[119px]"
                        shape="RoundedBorder6"
                        size="lg"
                        variant="FillBlueA70001"
                      >
                        Transfer
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_50 md:h-[1056px] h-[1109px] inset-y-[0] my-auto pb-[53px] right-[2%] shadow-bs5 w-[23%]">
            <div className="bg-gray_50 h-[1056px] mx-auto shadow-bs5 w-full"></div>
            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
              <Img
                src="images/img_arrowleft.svg"
                className="h-6 mb-0.5 w-6"
                alt="arrowleft"
              />
              <Text
                className="font-semibold mt-1 text-blue_gray_900"
                variant="body12"
              >
                My Profile
              </Text>
              <Img
                src="images/img_share.svg"
                className="h-6 mb-0.5 w-6"
                alt="share"
              />
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[5px] top-[6%] w-[45%]">
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <div className="border-[1.79px] border-blue_A700 border-solid flex flex-col h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                    alt="ProfileImgLarg One"
                  />
                </div>
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body12"
                >
                  Michelle Rock
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[21%] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start pt-1 w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start pb-[5px] pr-[5px] w-full">
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body13"
                  >
                    Mobile Number
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      (808) 555-0111
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                  <Text
                    className="font-normal text-blue_gray_400"
                    variant="body13"
                  >
                    Email
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Michellerock@gmail.com
                    </Text>
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

export default AccountTransferPage;
