import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const VideoAdsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-8 items-center justify-start mx-auto pb-16 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-4 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[57%] md:w-full">
                <Img
                  src="images/img_frame34827.svg"
                  className="h-9"
                  alt="Frame34827"
                />
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-[63%] md:w-full">
                  <Input
                    value={inputfieldvalue}
                    onChange={(e) => setInputfieldvalue(e)}
                    wrapClassName="flex w-[452px] sm:w-full"
                    className="font-medium p-0 placeholder:text-blue_gray_200 text-blue_gray_200 text-left text-sm w-full"
                    name="InputField"
                    placeholder="Placeholder Text"
                    suffix={
                      inputfieldvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] mr-3 my-2"
                          onClick={() => setInputfieldvalue("")}
                          fillColor="#bac1ce"
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      ) : (
                        <Img
                          src="images/img_search_bluegray_900.svg"
                          className="cursor-pointer ml-[35px] mr-3 my-2"
                          alt="search"
                        />
                      )
                    }
                    shape="srcRoundedBorder6"
                    size="smSrc"
                    variant="srcOutlineBluegray300"
                  ></Input>
                  <Img
                    src="images/img_microphone.svg"
                    className="h-5 w-5"
                    alt="microphone"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-between w-[11%] md:w-full">
                <Img
                  src="images/img_videocamera.svg"
                  className="h-9 w-9"
                  alt="videocamera"
                />
                <Img
                  src="images/img_notification_36X36.svg"
                  className="h-9 w-9"
                  alt="notification"
                />
                <Img
                  src="images/img_profileimglarg_85X85.png"
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1341px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[70%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[534px] items-center justify-start w-full"
              style={{ backgroundImage: "url('images/img_group10080.png')" }}
            >
              <div className="bg-gradient9  flex flex-col gap-3 items-center justify-end p-2 w-full">
                <div className="h-2 mt-[458px] overflow-hidden relative w-[99%]">
                  <div className="w-full h-full absolute bg-blue_gray_50 rounded-[4px]"></div>
                  <div
                    className="h-full absolute bg-amber_500  rounded-[4px]"
                    style={{ width: "26%" }}
                  ></div>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-between w-[29%]">
                    <Img
                      src="images/img_icons.svg"
                      className="h-10"
                      alt="Icons"
                    />
                    <div className="flex flex-row items-center justify-evenly">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body15"
                      >
                        0:01
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        variant="body15"
                      >
                        /
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        variant="body15"
                      >
                        8:00:43
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_minimize_40X40.svg"
                    className="h-10 w-10"
                    alt="minimize"
                  />
                </div>
              </div>
            </div>
            <Text
              className="font-semibold mt-[23px] text-black_900_01"
              variant="body12"
            >
              8 Hours of Birds Singing in the Forests Below El Capitan
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-3 w-full">
              <div className="flex md:flex-1 flex-row items-start justify-evenly md:mt-0 mt-[5px] w-[24%] md:w-full">
                <Text
                  className="font-gilroy font-medium text-blue_gray_400"
                  variant="body13"
                >
                  1,094,526 views
                </Text>
                <Text
                  className="font-inter font-normal text-blue_gray_400"
                  variant="body15"
                >
                  •
                </Text>
                <Text
                  className="font-gilroy font-medium text-blue_gray_400"
                  variant="body13"
                >
                  May 25, 2018
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between pr-1.5 w-[47%] md:w-full">
                <div className="flex flex-row items-center justify-evenly w-[12%] sm:w-full">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="h-6 w-6"
                    alt="thumbsup"
                  />
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    567
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[17%] sm:w-full">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="h-6 w-6"
                    alt="thumbsup One"
                  />
                  <Text
                    className="font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    Dislike
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[16%] sm:w-full">
                  <Img
                    src="images/img_share_24X24.svg"
                    className="h-6 w-6"
                    alt="share"
                  />
                  <Text
                    className="font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    Share
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[22%] sm:w-full">
                  <Img
                    src="images/img_download.svg"
                    className="h-6 w-6"
                    alt="download"
                  />
                  <Text
                    className="font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    Download
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[22%] sm:w-full">
                  <Img
                    src="images/img_bookmark_24X24.svg"
                    className="h-6 w-6"
                    alt="bookmark"
                  />
                  <Text
                    className="font-medium ml-1 text-blue_A700_01"
                    variant="body15"
                  >
                    Bookmark
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray_100 h-px mt-[22px] w-full" />
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
              <div className="flex flex-row font-gilroy gap-4 items-center justify-start w-auto">
                <Img
                  src="images/img_avatarsmall.png"
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  alt="AvatarSmall"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="font-medium text-black_900_01 w-auto"
                    variant="body13"
                  >
                    Nature Soundscapes
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    104K subscribers
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-inter font-medium mb-3 min-w-[111px] text-center text-sm text-white_A700"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray90014"
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-4 pb-[3px] px-[3px] w-full">
              <Text
                className="font-normal leading-[26.00px] md:ml-[0] ml-[60px] text-black_900_01 w-[68%] sm:w-full"
                variant="body13"
              >
                Find your absolutely beautiful and serene place and listen to
                nature sounds, birds signing and relaxing water sounds with
                breathtaking views of Mount Shuksan. It’s 8-hour 4k video of
                discovery and peace. Download it for your personal use and
                transform your 4K TV into a source of relaxation and
                restoration.
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[60px] text-blue_gray_400"
                variant="body15"
              >
                SHOW MORE
              </Text>
            </div>
          </div>
          <List
            className="md:flex-1 flex-col gap-3 grid w-[29%] md:w-full"
            orientation="vertical"
          >
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{ backgroundImage: "url('images/img_group10083.png')" }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_104X169.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark One"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_1.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Two"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_2.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Three"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_3.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Four"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_4.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Five"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_5.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Six"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_6.png')",
                }}
              >
                <Text
                  className="bg-black_900 font-medium h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white_A700 w-12"
                  variant="body16"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="font-semibold leading-[26.00px] text-black_900_01 w-full"
                  variant="body13"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="font-medium text-blue_gray_400 w-auto"
                    variant="body15"
                  >
                    ChannelName
                  </Text>
                  <Img
                    src="images/img_checkmark_16X16.svg"
                    className="h-4 w-4"
                    alt="checkmark Seven"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="font-gilroy font-medium text-blue_gray_400"
                    variant="body15"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="font-inter font-semibold ml-1 text-blue_gray_400"
                    variant="body16"
                  >
                    •
                  </Text>
                  <Text
                    className="font-gilroy font-medium ml-1 text-blue_gray_400"
                    variant="body15"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default VideoAdsPage;
