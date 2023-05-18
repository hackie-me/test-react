import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AudioLibraryPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[30px] items-center justify-start mx-auto pb-8 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_1.svg"
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
        <div className="flex flex-col items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start pb-[17px] w-full">
            <div className="flex flex-col gap-2 items-start justify-start pt-[5px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[84%] md:w-full">
                <Text className="font-semibold text-black_900" variant="body12">
                  Song Title
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[343px] text-black_900"
                  variant="body12"
                >
                  Album Name
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[130px] text-black_900"
                  variant="body12"
                >
                  Artist
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[275px] text-black_900"
                  variant="body12"
                >
                  Duration
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex-col gap-[16.5px] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Hum Nashe Mein Toh Nahin
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[140px] text-blue_gray_400"
                    variant="body13"
                  >
                    Bhoolbhulaiya 2
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[120px] text-blue_gray_400"
                    variant="body13"
                  >
                    Pritam, Arijit Singh, Tulsi Kumar
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[99px] text-blue_gray_400"
                    variant="body13"
                  >
                    03:28
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    alt="icmoremenu"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[21%] md:w-full">
                    <Img
                      src="images/img_rectangle20_78X78.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty One"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Chaand Baaliyan Song
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[169px] md:mt-0 mt-[33px] text-blue_gray_400"
                    variant="body13"
                  >
                    Chaand Baaliyan
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[108px] md:mt-0 mt-[34px] text-blue_gray_400"
                    variant="body13"
                  >
                    Aditya A
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[257px] md:mt-0 mt-8 text-blue_gray_400"
                    variant="body13"
                  >
                    01:43
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[225px] md:mt-0 mt-[27px] w-6"
                    alt="icmoremenu One"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Two"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Gehraiyaan Title Track
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[174px] text-blue_gray_400"
                    variant="body13"
                  >
                    Gehraiyaan
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[150px] text-blue_gray_400"
                    variant="body13"
                  >
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[62px] text-blue_gray_400"
                    variant="body13"
                  >
                    04:01
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    alt="icmoremenu Two"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[21%] md:w-full">
                    <Img
                      src="images/img_rectangle20_78X78.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Three"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Chaand Baaliyan Song
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[169px] md:mt-0 mt-[33px] text-blue_gray_400"
                    variant="body13"
                  >
                    Chaand Baaliyan
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[108px] md:mt-0 mt-[34px] text-blue_gray_400"
                    variant="body13"
                  >
                    Aditya A
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[257px] md:mt-0 mt-8 text-blue_gray_400"
                    variant="body13"
                  >
                    01:43
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[225px] md:mt-0 mt-[27px] w-6"
                    alt="icmoremenu Three"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
                    <Img
                      src="images/img_rectangle20.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Four"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Hum Nashe Mein Toh Nahin
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[140px] text-blue_gray_400"
                    variant="body13"
                  >
                    Bhoolbhulaiya 2
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[120px] text-blue_gray_400"
                    variant="body13"
                  >
                    Pritam, Arijit Singh, Tulsi Kumar
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[99px] text-blue_gray_400"
                    variant="body13"
                  >
                    03:28
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    alt="icmoremenu Four"
                  />
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
                    <Img
                      src="images/img_rectangle20_1.png"
                      className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                      alt="RectangleTwenty Five"
                    />
                    <Text
                      className="font-medium text-blue_gray_900"
                      variant="body13"
                    >
                      Gehraiyaan Title Track
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[174px] text-blue_gray_400"
                    variant="body13"
                  >
                    Gehraiyaan
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[150px] text-blue_gray_400"
                    variant="body13"
                  >
                    OAFF, Savera, Lothika, Ankur Tewari
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[62px] text-blue_gray_400"
                    variant="body13"
                  >
                    04:01
                  </Text>
                  <Img
                    src="images/img_icmoremenu.svg"
                    className="h-6 md:ml-[0] ml-[223px] w-6"
                    alt="icmoremenu Five"
                  />
                </div>
              </List>
            </div>
          </div>
          <Line className="bg-blue_gray_100 h-px mt-2 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-[23%] md:w-full">
              <Img
                src="images/img_rectangle20.png"
                className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                alt="RectangleTwenty Six"
              />
              <Text className="font-medium text-blue_gray_900" variant="body13">
                Hum Nashe Mein Toh Nahin
              </Text>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[140px] text-blue_gray_400"
              variant="body13"
            >
              Bhoolbhulaiya 2
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[120px] text-blue_gray_400"
              variant="body13"
            >
              Pritam, Arijit Singh, Tulsi Kumar
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[99px] text-blue_gray_400"
              variant="body13"
            >
              03:28
            </Text>
            <Img
              src="images/img_icmoremenu.svg"
              className="h-6 md:ml-[0] ml-[223px] w-6"
              alt="icmoremenu Six"
            />
          </div>
          <Line className="bg-blue_gray_100 h-px mt-4 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-start rounded-md w-1/5 md:w-full">
              <Img
                src="images/img_rectangle20_1.png"
                className="h-[78px] md:h-auto object-cover rounded-md w-[78px]"
                alt="RectangleTwenty Seven"
              />
              <Text className="font-medium text-blue_gray_900" variant="body13">
                Gehraiyaan Title Track
              </Text>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[174px] text-blue_gray_400"
              variant="body13"
            >
              Gehraiyaan
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[150px] text-blue_gray_400"
              variant="body13"
            >
              OAFF, Savera, Lothika, Ankur Tewari
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[62px] text-blue_gray_400"
              variant="body13"
            >
              04:01
            </Text>
            <Img
              src="images/img_icmoremenu.svg"
              className="h-6 md:ml-[0] ml-[223px] w-6"
              alt="icmoremenu Seven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioLibraryPage;
