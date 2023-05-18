import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UserGroupsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_8.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search Items, Customer etc"
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
        <div className="bg-white_A700 flex flex-col gap-[30px] items-center justify-start p-[39px] md:px-5 w-[42%] md:w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body7">
            User Groups
          </Text>
          <div className="flex flex-col md:gap-10 gap-[308px] items-center justify-start mb-[30px] w-[96%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex-col gap-4 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      6:15 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      4:00 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 md:pr-10 sm:pr-5 pr-[280px] w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      3:45 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 md:pr-10 sm:pr-5 pr-[354px] w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      2:15 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="font-normal mt-1 text-blue_gray_400"
                      variant="body15"
                    >
                      11:50 am
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-end justify-start my-0 w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="font-normal mt-1 text-blue_gray_400"
                      variant="body15"
                    >
                      7:50 am
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_400"
                      variant="body15"
                    >
                      6:30 am
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[502px]"
              shape="RoundedBorder6"
              size="2xl"
              variant="FillBlueA70001"
            >
              Join Group
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGroupsPage;
