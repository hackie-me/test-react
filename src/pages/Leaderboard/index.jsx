import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LeaderboardPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_900_06 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-blue_gray_900_03 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[31%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search Game"
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
                  variant="srcFillGray90006"
                ></Input>
                <div className="bg-gray_900_06 flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[526px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-gray_900_06 border-solid font-semibold h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-blue_gray_200 top-[0] w-[18px]"
                      variant="body16"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <Button
                  className="flex h-14 items-center justify-center ml-8 md:ml-[0] rounded-[50%] w-14"
                  size="lgIcn"
                  variant="icbFillGray90006"
                >
                  <Img
                    src="images/img_settings.svg"
                    className="h-8"
                    alt="settings"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-blue_gray_900_03 flex flex-col md:gap-10 gap-[482px] items-center justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[35%] md:w-full">
                      <Img
                        src="images/img_home.svg"
                        className="h-6 w-6"
                        alt="home"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_100"
                        variant="body13"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end p-[15px] w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[38%] md:w-full">
                      <Img
                        src="images/img_computer.svg"
                        className="h-6 w-6"
                        alt="computer"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_100"
                        variant="body13"
                      >
                        Library
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_900_06 flex flex-col items-start justify-start p-4 rounded-[10px] w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Img
                        src="images/img_volume.svg"
                        className="h-6 w-6"
                        alt="volume"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_100"
                        variant="body13"
                      >
                        Leaderboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start w-[45%] md:w-full">
                      <Img
                        src="images/img_volume_24X24.svg"
                        className="h-6 w-6"
                        alt="volume One"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_100"
                        variant="body13"
                      >
                        Massage
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-2/5 md:w-full">
                      <Img
                        src="images/img_user.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_100"
                        variant="body13"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900_06 flex flex-col items-center justify-start p-4 rounded-[10px] w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      alt="ProfileImgLarg"
                    />
                    <Text
                      className="font-semibold ml-2 text-blue_gray_100"
                      variant="body13"
                    >
                      Wade Warren
                    </Text>
                    <Img
                      src="images/img_arrowdown_bluegray_100.svg"
                      className="h-6 ml-[45px] w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-full">
                <div className="h-[422px] md:mt-0 mt-[145px] relative w-[34%] md:w-full">
                  <Img
                    src="images/img_234571onepie.png"
                    className="h-[197px] mb-[-28.82px] ml-[45px] object-cover w-[58%] z-[1]"
                    alt="234571onepie"
                  />
                  <div className="bg-blue_gray_900_03 flex flex-col items-center justify-start mt-auto mx-auto p-10 sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="font-medium text-white_A700_01"
                      variant="body7"
                    >
                      One Piece
                    </Text>
                    <Text
                      className="font-medium mt-[22px] text-white_A700_01"
                      variant="body12"
                    >
                      1340 pts
                    </Text>
                    <Text
                      className="font-bold my-[25px] text-white_A700"
                      as="h2"
                      variant="h2"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="h-[567px] relative w-[34%] md:w-full">
                  <Img
                    src="images/img_pngfind1.png"
                    className="h-[242px] mb-[-10px] mx-auto object-cover w-3/4 z-[1]"
                    alt="pngfindOne"
                  />
                  <div className="bg-blue_gray_900_03 flex flex-col items-center justify-start mt-auto mx-auto p-[82px] md:px-10 sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="font-medium text-white_A700_01"
                      variant="body7"
                    >
                      Naruto
                    </Text>
                    <Text
                      className="font-medium mt-[22px] text-white_A700_01"
                      variant="body12"
                    >
                      1470 pts
                    </Text>
                    <Text
                      className="font-bold my-6 text-white_A700"
                      as="h2"
                      variant="h2"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <div className="h-[381px] md:mt-0 mt-[186px] relative w-[34%] md:w-full">
                  <Img
                    src="images/img_pngfind2.png"
                    className="h-[184px] mb-[-13px] mx-auto object-cover w-[48%] z-[1]"
                    alt="pngfindTwo"
                  />
                  <div className="bg-blue_gray_900_03 flex flex-col items-center justify-start mt-auto mx-auto p-[29px] sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="font-medium text-white_A700_01"
                      variant="body7"
                    >
                      Dragon Ball
                    </Text>
                    <Text
                      className="font-medium mt-[15px] text-white_A700_01"
                      variant="body12"
                    >
                      1202 pts
                    </Text>
                    <Text
                      className="font-bold mb-[7px] mt-[25px] text-white_A700"
                      as="h2"
                      variant="h2"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex-col md:gap-5 gap-[0] grid items-center w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray_900_03 border-black_900 border-solid border-y flex flex-1 flex-row items-start justify-between my-0 p-[21px] sm:px-5 w-full">
                  <Text
                    className="font-normal ml-[53px] mt-[3px] text-blue_gray_100"
                    variant="body12"
                  >
                    Rank
                  </Text>
                  <Text
                    className="font-normal my-0.5 text-blue_gray_100"
                    variant="body12"
                  >
                    Anime
                  </Text>
                  <Text
                    className="font-normal mr-[53px] my-0.5 text-blue_gray_100"
                    variant="body12"
                  >
                    PTS
                  </Text>
                </div>
                <div className="bg-blue_gray_900_03 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-center justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="font-semibold text-gray_50_01"
                      variant="body12"
                    >
                      4
                    </Text>
                    <Img
                      src="images/img_bxsleftarrow.svg"
                      className="h-[21px] w-[21px]"
                      alt="bxsleftarrow"
                    />
                  </div>
                  <Text
                    className="font-medium text-gray_50_01"
                    variant="body12"
                  >
                    Demon slayer
                  </Text>
                  <Text
                    className="font-semibold mr-[60px] text-blue_A200_01"
                    variant="body12"
                  >
                    1007
                  </Text>
                </div>
                <div className="bg-blue_gray_900_03 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 p-2.5 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[3%] md:w-full">
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] text-gray_50_01"
                      variant="body12"
                    >
                      5
                    </Text>
                    <Img
                      src="images/img_bxsleftarrow.svg"
                      className="h-[21px] w-[21px]"
                      alt="bxsleftarrow One"
                    />
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[206px] text-gray_50_01"
                    variant="body12"
                  >
                    Bleach
                  </Text>
                  <Text
                    className="font-semibold md:ml-[0] ml-[263px] mr-[63px] text-blue_A200_01"
                    variant="body12"
                  >
                    990
                  </Text>
                </div>
                <div className="bg-blue_gray_900_03 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-start justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] text-gray_50_01"
                      variant="body12"
                    >
                      6
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] w-[21px]"
                      alt="arrowdown One"
                    />
                  </div>
                  <Text
                    className="font-medium text-gray_50_01"
                    variant="body12"
                  >
                    Hunter X Hunter
                  </Text>
                  <Text
                    className="font-semibold mr-16 text-blue_A200_01"
                    variant="body12"
                  >
                    958
                  </Text>
                </div>
                <div className="bg-blue_gray_900_03 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-start justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] text-gray_50_01"
                      variant="body12"
                    >
                      7
                    </Text>
                    <Img
                      src="images/img_bxsleftarrow.svg"
                      className="h-[21px] w-[21px]"
                      alt="bxsleftarrow Two"
                    />
                  </div>
                  <Text
                    className="font-medium text-gray_50_01"
                    variant="body12"
                  >
                    Demon slayer
                  </Text>
                  <Text
                    className="font-semibold mr-[62px] text-blue_A200_01"
                    variant="body12"
                  >
                    900
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
