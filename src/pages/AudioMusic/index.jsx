import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AudioMusicPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group.svg"
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
                    src="images/img_search.svg"
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
                      src="images/img_arrowdown.svg"
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
                      src="images/img_arrowdown.svg"
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
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-6 items-center justify-start md:mt-0 mt-[50px] w-[64%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between py-[7px] w-full">
              <Img
                src="images/img_arrowleft.svg"
                className="h-6 w-6"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="font-semibold text-blue_gray_900"
                  variant="body7"
                >
                  Album Name
                </Text>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-6 w-6"
                alt="overflowmenu"
              />
            </div>
            <Img
              src="images/img_rectangle1224.png"
              className="h-[509px] md:h-auto object-cover rounded-md w-full"
              alt="Rectangle1224"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-end pr-[7px] py-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_800_04"
                      variant="body7"
                    >
                      Tere Jaisa Yaar Kahan...
                    </Text>
                  </div>
                  <Img
                    src="images/img_albumtitleic.svg"
                    className="h-6 w-6"
                    alt="Albumtitleic"
                  />
                </div>
                <div className="flex flex-col gap-3 items-center justify-start pb-[3px] w-full">
                  <Img
                    src="images/img_group1443.svg"
                    className="h-6 w-full"
                    alt="Group1443"
                  />
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body15"
                    >
                      04:10
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body15"
                    >
                      09:00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between py-[5px] w-full">
                <Img
                  src="images/img_minimize.svg"
                  className="h-8 w-8"
                  alt="minimize"
                />
                <div className="flex flex-row items-center justify-center">
                  <Img
                    src="images/img_stepbackwardo.svg"
                    className="h-8 w-8"
                    alt="stepbackwardO"
                  />
                  <Img
                    src="images/img_vector.svg"
                    className="h-[58px] ml-[35px] w-[58px]"
                    alt="Vector"
                  />
                  <Img
                    src="images/img_skipforwardou.svg"
                    className="h-8 ml-[35px] w-8"
                    alt="skipforwardOu"
                  />
                </div>
                <Img
                  src="images/img_repeatoutline.svg"
                  className="h-8 w-8"
                  alt="repeatOutline"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-between w-[34%] md:w-full">
            <Line className="bg-blue_gray_100 h-[980px] sm:h-px sm:w-full w-px" />
            <div className="flex flex-col items-center justify-end sm:mt-0 mt-[30px]">
              <List
                className="flex-col gap-4 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        03:28
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_78X78.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty One"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        01:43
                      </Text>
                      <Text
                        className="font-normal mt-[13px] text-blue_gray_400"
                        variant="body15"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu One"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Two"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        04:01
                      </Text>
                      <Text
                        className="font-normal mt-3 text-blue_gray_400"
                        variant="body15"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Two"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_78X78.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Three"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        01:43
                      </Text>
                      <Text
                        className="font-normal mt-[13px] text-blue_gray_400"
                        variant="body15"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Three"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Four"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-1 pt-1">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Hum Nashe Mein Toh Nahin
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        03:28
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Pritam, Arijit Singh, Tulsi Kumar
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Four"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Five"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        04:01
                      </Text>
                      <Text
                        className="font-normal mt-3 text-blue_gray_400"
                        variant="body15"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Five"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Six"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        04:01
                      </Text>
                      <Text
                        className="font-normal mt-3 text-blue_gray_400"
                        variant="body15"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Six"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Seven"
                    />
                    <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Gehraiyaan Title Track
                      </Text>
                      <Text
                        className="font-normal mt-2 text-blue_gray_400"
                        variant="body15"
                      >
                        04:01
                      </Text>
                      <Text
                        className="font-normal mt-3 text-blue_gray_400"
                        variant="body15"
                      >
                        OAFF, Savera, Lothika, Ankur Tewari
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Seven"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Img
                      src="images/img_rectangle20_78X78.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Eight"
                    />
                    <div className="flex flex-col gap-2 items-start justify-end pr-[5px] pt-[5px]">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body13"
                      >
                        Chaand Baaliyan Song
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        01:43
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Aditya A
                      </Text>
                    </div>
                    <Img
                      src="images/img_icmoremenu.svg"
                      className="h-6 w-6"
                      alt="icmoremenu Eight"
                    />
                  </div>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioMusicPage;
