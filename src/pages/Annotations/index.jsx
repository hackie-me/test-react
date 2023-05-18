import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AnnotationsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group.svg"
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
        <div className="bg-white_A700 flex flex-col md:gap-10 gap-[68px] items-end justify-start p-[37px] md:px-5 w-[42%] md:w-full">
          <div className="flex flex-row items-center justify-between w-[70%] md:w-full">
            <Text className="font-semibold text-blue_gray_900" variant="body7">
              Post With Annotation
            </Text>
            <Img src="images/img_close.svg" className="h-6 w-6" alt="close" />
          </div>
          <div className="flex flex-col items-start justify-start mb-[13px] mr-[13px] w-[96%] md:w-full">
            <div className="flex flex-col gap-2 items-start justify-start">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body7"
              >
                My Story
              </Text>
              <Text
                className="font-normal leading-[29.00px] text-blue_gray_400 w-full"
                variant="body12"
              >
                <>
                  I&#39;ve rented a car in Las Vegas and have reserved a hotel
                  in Twentynine Palms which is just north of Joshua Tree.
                  We&#39;ll drive from Las Vegas through Mojave National
                  Preserve and possibly do a short hike on our way down. Then
                  spend all day on Monday at Joshua Tree. We can decide the next
                  morning if we want to do more in Joshua Tree or Mojave before
                  we head back.
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start mt-[37px]">
              <Text
                className="font-semibold text-blue_gray_900"
                variant="body11"
              >
                Jane Cooper
              </Text>
              <Text className="font-normal text-blue_gray_400" variant="body12">
                Decemeber, 2021
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start mt-[34px] w-full">
              <Input
                wrapClassName="flex w-full"
                className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                name="Frame34630"
                placeholder="It’s a story about the planning of a trip to Las Vegas."
                prefix={
                  <Img
                    src="images/img_info.svg"
                    className="mt-[9px] mb-[11px] ml-3 mr-2.5"
                    alt="info"
                  />
                }
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineGray70011"
              ></Input>
              <Input
                wrapClassName="flex w-full"
                className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                name="Frame34632"
                placeholder="It has mentioned places where to go in a week."
                prefix={
                  <Img
                    src="images/img_info.svg"
                    className="mt-3 mb-3.5 ml-3 mr-2.5"
                    alt="info"
                  />
                }
                shape="RoundedBorder6"
                size="5xl"
                variant="OutlineGray70011"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-[267px] w-full">
              <Button
                className="cursor-pointer font-medium h-[50px] text-base text-blue_A700_01 text-center w-[243px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                Clear
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center text-white_A700 w-[243px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnotationsPage;
