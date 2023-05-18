import React from "react";

import { Button, Img, List, Text } from "components";

const ReferralsPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_8.svg"
                className="h-[35px]"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
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
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text className="font-medium text-gray_900" variant="body13">
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <Text className="font-medium text-gray_900" variant="body13">
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
        <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start max-w-[1268px] mb-[332px] mx-auto md:px-5 w-full">
          <Text className="font-semibold text-black_900" as="h6" variant="h6">
            Refer a Friend
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[39%] md:w-full">
              <Img
                src="images/img_untitled11.svg"
                className="h-80 w-full"
                alt="UntitledEleven"
              />
              <Text
                className="font-medium leading-[39.00px] text-blue_gray_400 text-center w-full"
                variant="body7"
              >
                Invite your friends to join Lorem Ipsum community and earn tips
                & points
              </Text>
            </div>
            <div className="border-2 border-blue_A700_01 border-solid flex md:flex-1 flex-col gap-10 items-center justify-end p-4 rounded-[32px] w-[57%] md:w-full">
              <Text
                className="font-semibold mt-[25px] text-blue_gray_900"
                variant="body4"
              >
                Share with
              </Text>
              <div className="flex flex-col gap-[29px] items-center justify-start mb-4 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[29px] items-center justify-start pb-[5px] px-[5px] w-[15%] sm:w-full">
                    <Img
                      src="images/img_refresh_40X40.svg"
                      className="h-10 w-10"
                      alt="refresh"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Chat
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[31px] items-center justify-start w-[12%] sm:w-full">
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
                  <div className="flex sm:flex-1 flex-col gap-[29px] items-center justify-start pb-[5px] px-[5px] w-[15%] sm:w-full">
                    <Img
                      src="images/img_twitter.svg"
                      className="h-10 w-10"
                      alt="twitter"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Twitter
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[31px] items-center justify-start w-[13%] sm:w-full">
                    <Img
                      src="images/img_whatsapp.svg"
                      className="h-10 w-10"
                      alt="whatsapp"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body12"
                    >
                      Whatsapp
                    </Text>
                  </div>
                  <List
                    className="sm:flex-1 sm:flex-col flex-row gap-4 grid grid-cols-2 w-[32%] sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start sm:ml-[0] pb-[5px] px-[5px] w-full">
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
                    <div className="flex flex-col gap-[29px] items-center justify-start sm:ml-[0] pb-[5px] px-[5px] w-full">
                      <Img
                        src="images/img_share_40X40.svg"
                        className="h-10 w-10"
                        alt="share"
                      />
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        More
                      </Text>
                    </div>
                  </List>
                </div>
                <Text className="text-blue_gray_400" variant="body8">
                  Or share with link
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[83%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[503px] sm:min-w-full text-[22px] text-blue_gray_400 text-center sm:text-lg md:text-xl"
                    shape="RoundedBorder12"
                    size="2xl"
                    variant="FillBluegray50"
                  >
                    https://www.figma.com/file/NlfVhYygR9mAQa
                  </Button>
                  <Img
                    src="images/img_file_40X40.svg"
                    className="h-10 w-10"
                    alt="file"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralsPage;
