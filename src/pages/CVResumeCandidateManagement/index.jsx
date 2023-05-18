import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CVResumeCandidateManagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_35X162.svg"
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
                    src="images/img_arrowdown_gray_901.svg"
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
                    src="images/img_arrowdown_gray_901.svg"
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
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start w-full">
            <Text className="font-medium text-black_900_01" variant="body7">
              Candidate Management
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive One"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive Two"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive Three"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive Four"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs4 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[47%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="EllipseFive Five"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Text
                          className="font-bold text-blue_A700_01"
                          variant="body12"
                        >
                          Danial Sams
                        </Text>
                        <Text
                          className="font-medium text-blue_gray_400"
                          variant="body13"
                        >
                          UI/UX Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
                      <Button
                        className="cursor-pointer font-semibold text-base text-center text-white_A700 w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="FillBlueA70001"
                      >
                        View Resume
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[326px]"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBlueA70001"
                      >
                        Save
                      </Button>
                    </div>
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

export default CVResumeCandidateManagementPage;
