import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LocationPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");
  const [group11197value, setGroup11197value] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_13.svg"
                className="h-[35px] w-[13%]"
                alt="Group10392"
              />
              <Input
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                wrapClassName="flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search_bluegray_900.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="xlSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_900"
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
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_900"
                    variant="body13"
                  >
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="font-medium sm:mt-0 mt-1 text-gray_900"
                  variant="body13"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[980px] items-center justify-start p-6 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group10039.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[406px] justify-start max-w-[1392px] mb-[338px] mt-4 mx-auto md:px-5 w-full">
            <Input
              value={group11197value}
              onChange={(e) => setGroup11197value(e)}
              wrapClassName="flex mr-[1012px] w-[28%]"
              className="font-medium p-0 placeholder:text-blue_gray_400 text-base text-blue_gray_400 text-left w-full"
              name="Group11197"
              placeholder="Search Anything"
              prefix={
                <Img
                  src="images/img_search_bluegray_400.svg"
                  className="mt-3 mb-[11px] cursor-pointer ml-3 mr-2"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer my-auto"
                  onClick={() => setGroup11197value("")}
                  fillColor="#74839d"
                  style={{
                    visibility:
                      group11197value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="srcRoundedBorder6"
              size="lgSrc"
              variant="srcOutlineBluegray100"
            ></Input>
            <div className="flex flex-row gap-6 items-end justify-end md:ml-[0] ml-[1278px] w-[9%] md:w-full">
              <div className="bg-blue_A700_01 md:h-32 h-[50px] mt-[78px] relative rounded-[50%] w-[50px]">
                <Img
                  src="images/img_checkmark_50X50.svg"
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

export default LocationPage;
