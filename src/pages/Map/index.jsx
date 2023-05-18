import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MapPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_2.svg"
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
          <div className="flex flex-col md:gap-10 gap-[361px] justify-start max-w-[1385px] mb-[338px] mt-[9px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start mr-[989px] w-[29%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[93%] sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-[7%]">
                    <Img
                      src="images/img_location_24X24.svg"
                      className="h-6 w-6"
                      alt="location"
                    />
                    <Img
                      src="images/img_group9796.svg"
                      className="h-[11px] w-[9%]"
                      alt="Group9796"
                    />
                    <Img
                      src="images/img_location_1.svg"
                      className="h-6 w-6"
                      alt="location One"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2 items-center justify-start w-[92%] sm:w-full">
                    <Input
                      wrapClassName="w-full"
                      className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                      name="InputField One"
                      placeholder="Choose start location"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray100_1"
                    ></Input>
                    <Input
                      wrapClassName="w-full"
                      className="font-medium p-0 placeholder:text-blue_gray_300 text-base text-blue_gray_300 text-left w-full"
                      name="InputField Two"
                      placeholder="Choose destination"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="OutlineBluegray100_1"
                    ></Input>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_volume.svg"
                className="h-5 w-5"
                alt="volume"
              />
            </div>
            <div className="flex flex-row gap-6 items-end justify-end md:ml-[0] ml-[1271px] w-[9%] md:w-full">
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
                    alt="location Two"
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

export default MapPage;
