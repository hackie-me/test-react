import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardGuestsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                src="images/img_group_4.svg"
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
                    src="images/img_arrowdown_gray_901.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_901.svg"
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
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1268px] mb-[302px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start w-[21%] md:w-full">
              <Img
                src="images/img_arrowleft.svg"
                className="h-6 w-6"
                alt="arrowleft"
              />
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body7"
              >
                Dashboard Guests
              </Text>
            </div>
            <Input
              value={inputfieldvalue}
              onChange={(e) => setInputfieldvalue(e)}
              wrapClassName="flex md:flex-1 w-2/5 md:w-full"
              className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
              name="InputField"
              placeholder="Search Friends"
              suffix={
                inputfieldvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer ml-[35px] mr-3 my-4"
                    onClick={() => setInputfieldvalue("")}
                    fillColor="#bac1ce"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    src="images/img_search_blue_A200.svg"
                    className="cursor-pointer ml-[35px] mr-3 my-4"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder6"
              size="xlSrc"
              variant="srcOutlineBluegray300"
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_72X72.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fifteen"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_72X72.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seventeen"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-end pr-[5px] pt-[5px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eighteen"
                  />
                  <div className="flex flex-col items-start justify-end pr-[7px] pt-[7px]">
                    <Text
                      className="font-semibold text-blue_gray_900"
                      variant="body12"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1 w-[59%] md:w-full">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        New York
                      </Text>
                      <div className="bg-blue_gray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold text-blue_A700_01"
                    variant="body13"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardGuestsPage;
