import React from "react";

import { Button, Img, List, Text } from "components";

const InviteFriendsPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_35X162.svg"
                className="h-[35px]"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start md:ml-[0] ml-[270px] w-auto">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="font-medium text-gray_900 w-16"
                    variant="body13"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="font-medium text-gray_900 w-[69px]"
                    variant="body13"
                  >
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="font-medium text-gray_900 w-[121px]"
                variant="body13"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex flex-row gap-6 sm:hidden items-center justify-start md:ml-[0] ml-[220px] w-auto">
              <Text className="font-medium text-gray_900 w-12" variant="body13">
                Sign in
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA70001"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start max-w-[1268px] mb-[332px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
            <Text className="font-semibold text-black_900" as="h6" variant="h6">
              Invite Friends
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-9 justify-start w-[39%] md:w-full">
                <Img
                  src="images/img_group11187.svg"
                  className="h-[316px] md:ml-[0] ml-[33px] w-4/5"
                  alt="Group11187"
                />
                <Text
                  className="font-medium leading-[39.00px] text-blue_gray_400 text-center w-full"
                  variant="body7"
                >
                  Invite your friends to join Lorem Ipsum community and earn
                  tips & points
                </Text>
              </div>
              <div className="sm:h-[1121px] md:h-[344px] h-[379px] relative w-[57%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[148px] h-full items-center justify-start mt-[41px] mx-auto">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body4"
                  >
                    Share with
                  </Text>
                  <Text className="text-blue_gray_400" variant="body8">
                    Or share with link
                  </Text>
                </div>
                <div className="absolute border border-blue_A700_03 border-solid flex flex-col md:gap-10 gap-[74px] h-full inset-[0] items-center justify-center m-auto p-[46px] md:px-10 sm:px-5 rounded-[16px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-[54px] items-center justify-between mt-16 w-full">
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[7%] sm:w-full">
                      <Img
                        src="images/img_refresh_40X40.svg"
                        className="h-10 ml-0.5 md:ml-[0] w-10"
                        alt="refresh"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Chat
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-6 items-center justify-start w-[13%] sm:w-full">
                      <Img
                        src="images/img_rewind.svg"
                        className="h-10 w-10"
                        alt="rewind"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Telegram
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[10%] sm:w-full">
                      <Img
                        src="images/img_twitter.svg"
                        className="h-10 ml-1 md:ml-[0] w-10"
                        alt="twitter"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Twitter
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[27px] items-center justify-start w-[15%] sm:w-full">
                      <Img
                        src="images/img_whatsapp.svg"
                        className="h-[34px] w-[34px]"
                        alt="whatsapp"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Whatsapp
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-6 items-center justify-start w-[8%] sm:w-full">
                      <Img
                        src="images/img_signal.svg"
                        className="h-10 w-10"
                        alt="signal"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Email
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[7%] sm:w-full">
                      <Img
                        src="images/img_share.svg"
                        className="h-10 ml-0.5 md:ml-[0] w-10"
                        alt="share"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-inter gap-4 items-center justify-start w-[91%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[503px] sm:min-w-full text-[22px] text-blue_gray_400 text-center sm:text-lg md:text-xl"
                      shape="CircleBorder15"
                      size="3xl"
                      variant="FillBluegray50"
                    >
                      https://www.figma.com/file/NlfVhYygR9mAQa
                    </Button>
                    <Img
                      src="images/img_file.svg"
                      className="h-10 w-10"
                      alt="file"
                    />
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

export default InviteFriendsPage;
