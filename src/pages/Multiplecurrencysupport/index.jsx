import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MultiplecurrencysupportPage = () => {
  const navigate = useNavigate();

  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto pb-[546px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_3.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_black_900.svg"
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-[9px] text-gray_900"
                    variant="body13"
                  >
                    Orders
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900"
                  variant="body13"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-4 text-gray_900"
                    variant="body13"
                  >
                    More
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                src="images/img_cart.svg"
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-9 items-start justify-start max-w-[1119px] mx-auto md:px-5 w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Trending Currency
          </Text>
          <List
            className="flex-col gap-9 grid items-center w-full"
            orientation="vertical"
          >
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    src="images/img_folder.svg"
                    className="h-9 w-[37%]"
                    alt="folder"
                  />
                  <Text className="font-medium text-black_900" variant="body12">
                    US Dollar
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-row gap-[179px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-center ml-2 w-[34%]">
                  <div className="bg-blue_900_02 h-9 md:h-[27px] p-[3px] relative w-[51%]">
                    <Img
                      src="images/img_vector.svg"
                      className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]"
                      alt="Vector"
                    />
                  </div>
                  <Text className="font-medium text-black_900" variant="body12">
                    Euro
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2">
                  <Img
                    src="images/img_minimize.svg"
                    className="h-9 w-[29%]"
                    alt="minimize"
                  />
                  <Text
                    className="font-medium mb-[3px] mt-2.5 text-black_900"
                    variant="body12"
                  >
                    Pound Sterling
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <div className="bg-white_A700 h-9 relative w-[27%]">
                    <Img
                      src="images/img_close.svg"
                      className="absolute h-9 inset-[0] justify-center m-auto w-full"
                      alt="close"
                    />
                  </div>
                  <Text className="font-medium text-black_900" variant="body12">
                    Canadian Dollar
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-blue_50 border border-blue_A700_01 border-solid flex flex-1 flex-row gap-[105px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2 w-[57%]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-9 w-[30%]"
                    alt="camera"
                  />
                  <Text
                    className="font-medium mb-[3px] mt-2.5 text-black_900"
                    variant="body12"
                  >
                    Indian Rupee
                  </Text>
                </div>
                <div className="bg-blue_A700_01 flex flex-col h-4 items-center justify-start mr-2 my-2.5 p-1 rounded-[50%] w-4">
                  <div className="bg-white_A700 h-2 rounded-[50%] w-2"></div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    src="images/img_map.svg"
                    className="h-9 w-[27%]"
                    alt="map"
                  />
                  <Text className="font-medium text-black_900" variant="body12">
                    Australian Dollar
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    src="images/img_menu_36X54.svg"
                    className="h-9 w-[33%]"
                    alt="menu"
                  />
                  <Text className="font-medium text-black_900" variant="body12">
                    UAE Dirham
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-row gap-[76px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2 w-[66%]">
                  <Img
                    src="images/img_google.svg"
                    className="common-pointer h-9 w-[26%]"
                    alt="google"
                    onClick={() => navigate("")}
                  />
                  <Text
                    className="font-medium mb-[3px] mt-2.5 text-black_900"
                    variant="body12"
                  >
                    Singapore Dollar
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2">
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[7px] w-[29%]">
                    <div className="bg-red_A700 h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Text
                    className="font-medium mb-[3px] mt-[11px] text-black_900"
                    variant="body12"
                  >
                    Japanese Yen
                  </Text>
                </div>
                <div className="bg-white_A700 border border-blue_gray_200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default MultiplecurrencysupportPage;
