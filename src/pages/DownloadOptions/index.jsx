import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DownloadOptionsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_2.svg"
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
        <div className="bg-white_A700 flex flex-col gap-[37px] items-start justify-start p-[37px] md:px-5 w-[42%] md:w-full">
          <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] w-[59%] md:w-full">
            <Img
              src="images/img_arrowleft_bluegray_900.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text className="font-semibold text-blue_gray_900" variant="body7">
              Download
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mb-[527px] ml-3 md:ml-[0] pb-[3px] w-[96%] md:w-full">
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                <div className="flex flex-row items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start">
                    <Img
                      src="images/img_file.svg"
                      className="h-6 w-6"
                      alt="file"
                    />
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      File Name
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close"
                  />
                </div>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  2.3MB of 9.0mb
                </Text>
                <div className="h-1 overflow-hidden relative w-full">
                  <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                  <div
                    className="h-full absolute bg-blue_A700_01  rounded-[2px]"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                <div className="flex flex-row items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start">
                    <Img
                      src="images/img_file.svg"
                      className="h-6 w-6"
                      alt="file One"
                    />
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      File Name
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close One"
                  />
                </div>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  2.3MB of 9.0mb
                </Text>
                <div className="h-1 overflow-hidden relative w-full">
                  <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                  <div
                    className="h-full absolute bg-blue_A700_01  rounded-[2px]"
                    style={{ width: "64%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                <div className="flex flex-row items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start">
                    <Img
                      src="images/img_file.svg"
                      className="h-6 w-6"
                      alt="file Two"
                    />
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      File Name
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close Two"
                  />
                </div>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  2.3MB of 9.0mb
                </Text>
                <div className="h-1 overflow-hidden relative w-full">
                  <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                  <div
                    className="h-full absolute bg-blue_A700_01  rounded-[2px]"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
                <div className="flex flex-row items-center justify-between py-0.5 w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start">
                    <Img
                      src="images/img_file.svg"
                      className="h-6 w-6"
                      alt="file Three"
                    />
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      File Name
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close Three"
                  />
                </div>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  2.3MB of 9.0mb
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadOptionsPage;
