import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ConvertFilesPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto pb-[550px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
              <Img
                src="images/img_group_1.svg"
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
        <div className="flex flex-col gap-[50px] items-center justify-start pt-4 md:px-5 rounded-[9.47px] w-[52%] md:w-full">
          <div className="flex flex-col gap-[42px] items-center justify-start w-full">
            <Text className="font-semibold text-black_900" as="h2" variant="h2">
              Convert WORD to PDF
            </Text>
            <Text className="font-medium text-blue_gray_400" variant="body7">
              Make DOC and DOCX files easy to read by converting them to PDF.
            </Text>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start rounded-[9.47px] w-[41%] md:w-full">
            <Button
              className="cursor-pointer font-bold min-w-[298px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white_A700"
              shape="RoundedBorder9"
              size="4xl"
              variant="FillBlueA70001"
            >
              Select WORD files
            </Button>
            <Text className="font-medium text-blue_gray_400" variant="body12">
              or drop WORD documents here
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertFilesPage;
