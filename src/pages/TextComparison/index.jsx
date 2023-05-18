import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TextComparisonPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto pb-[149px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_6.svg"
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
        <div className="flex flex-col items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Text Comparison
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[30px] w-full">
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[35px] items-center justify-start p-[50px] md:px-10 sm:px-5 shadow-bs4 w-1/2 md:w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="font-medium mt-[5px] text-blue_gray_200"
                  variant="body12"
                >
                  Text
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="h-6 w-6"
                  alt="close"
                />
              </div>
              <Text
                className="font-normal leading-[29.00px] mb-72 text-blue_gray_400 w-full"
                variant="body12"
              >
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &#39;Content here, content here&#39;, making it look like
                  readable English.{" "}
                </>
              </Text>
            </div>
            <div className="bg-gray_50_01 flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 shadow-bs4 w-1/2 md:w-full">
              <div className="flex flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[25px] mt-[25px] w-[92%] md:w-full">
                <Text
                  className="font-medium mt-[5px] text-blue_gray_200"
                  variant="body12"
                >
                  Text
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="h-6 w-6"
                  alt="close One"
                />
              </div>
              <Text
                className="font-normal leading-[29.00px] md:ml-[0] ml-[25px] mt-[35px] text-blue_gray_400 w-[92%] sm:w-full"
                variant="body12"
              >
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &#39;Content here, content here&#39;, making it look like
                  readable English.{" "}
                </>
              </Text>
              <Img
                src="images/img_file_24X24.svg"
                className="h-6 md:ml-[0] ml-[560px] mt-[289px] w-6"
                alt="file"
              />
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium mt-[50px] text-center text-lg text-white_A700 w-[349px]"
            shape="RoundedBorder6"
            size="2xl"
            variant="FillBlueA70001"
          >
            Compare Texts
          </Button>
        </div>
      </div>
    </>
  );
};

export default TextComparisonPage;
