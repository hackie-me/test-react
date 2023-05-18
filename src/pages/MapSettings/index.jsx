import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MapSettingsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const [inputfieldonevalue, setInputfieldonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-between pl-[5px] py-[5px] w-[28%] sm:w-full">
                  <Text
                    className="font-medium ml-0.5 text-gray_900"
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
                <div className="flex flex-row gap-[9px] items-center justify-center ml-6 sm:ml-[0] pl-[5px] py-[5px] w-[28%] sm:w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="font-medium ml-8 sm:ml-[0] sm:mt-0 mt-[11px] text-gray_900"
                  variant="body13"
                >
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
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[980px] items-center justify-start p-6 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group10021.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[406px] justify-start max-w-[1392px] mb-[338px] mt-4 mx-auto md:px-5 w-full">
            <Input
              value={inputfieldonevalue}
              onChange={(e) => setInputfieldonevalue(e)}
              wrapClassName="flex mr-[1012px] w-[28%]"
              className="font-medium p-0 placeholder:text-blue_gray_400 text-base text-blue_gray_400 text-left w-full"
              name="InputField One"
              placeholder="Search Location"
              prefix={
                <Img
                  src="images/img_search_bluegray_400.svg"
                  className="cursor-pointer ml-3 mr-2 my-3"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer my-auto"
                  onClick={() => setInputfieldonevalue("")}
                  fillColor="#74839d"
                  style={{
                    visibility:
                      inputfieldonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="srcRoundedBorder6"
              size="mdSrc"
              variant="srcOutlineBluegray200"
            ></Input>
            <div className="flex flex-row gap-6 items-end justify-end md:ml-[0] ml-[1278px] w-[9%] md:w-full">
              <div className="bg-blue_A700_01 md:h-32 h-[50px] mt-[78px] relative rounded-[50%] w-[50px]">
                <Img
                  src="images/img_checkmark.svg"
                  className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[36%]">
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutlineBluegray400"
                >
                  <Img
                    src="images/img_location.svg"
                    className="h-6"
                    alt="location"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white_A700 border border-blue_gray_400 border-solid flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Img
                      src="images/img_plus_24X24.svg"
                      className="h-6 mt-[7px] rounded-[50%] w-6"
                      alt="plus"
                    />
                    <Line className="bg-blue_gray_400 h-px w-full" />
                    <Img
                      src="images/img_minussolid.svg"
                      className="h-6 mb-[7px] rounded-[50%] w-6"
                      alt="minusSolid"
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

export default MapSettingsPage;
