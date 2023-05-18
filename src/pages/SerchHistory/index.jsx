import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SerchHistoryPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray_50_03 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                src="images/img_group10392_18.svg"
                className="h-[35px] md:ml-[0] ml-[43px] w-[65%]"
                alt="Group10392"
              />
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-[20.8px] mt-12 w-full"
              >
                {[...Array(7)].map((item, index) => (
                  <AccordionItem uuid={index} key={Math.random()}>
                    <div className="flex flex-col gap-3 justify-start w-full">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {({ expanded }) => (
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="font-semibold mt-[5px] text-blue_gray_700"
                                  variant="body13"
                                >
                                  Categories
                                </Text>
                                {expanded && (
                                  <Img
                                    src="images/img_arrowup_black_900.svg"
                                    className="h-6 w-6"
                                    alt="arrowup"
                                  />
                                )}
                                {!expanded && (
                                  <Img
                                    src="images/img_arrowdown_bluegray_700.svg"
                                    className="h-6 w-6"
                                    alt="arrowdown"
                                  />
                                )}
                              </div>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="w-full ">
                        <div className="flex flex-col gap-[17px] items-start justify-start ml-4 md:ml-[0]">
                          <Text
                            className="font-semibold text-blue_gray_700"
                            variant="body15"
                          >
                            Kids Footwear
                          </Text>
                          <Text
                            className="font-semibold text-blue_gray_700"
                            variant="body15"
                          >
                            Womens Footwear
                          </Text>
                          <Text
                            className="font-semibold text-blue_gray_700"
                            variant="body15"
                          >
                            Mens Footwear
                          </Text>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[492px] w-[27%] md:w-full">
                <Img
                  src="images/img_question.svg"
                  className="h-6 w-6"
                  alt="question"
                />
                <Text
                  className="font-semibold mt-[5px] text-blue_gray_700"
                  variant="body13"
                >
                  Help
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Input
                  value={group10270value}
                  onChange={(e) => setGroup10270value(e)}
                  wrapClassName="flex md:flex-1 md:mt-0 my-0.5 w-[46%] md:w-full"
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
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[446px] p-2 rounded-[50%] w-14">
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
            </header>
            <div className="sm:h-[1452px] h-[374px] md:h-[718px] relative w-[96%] md:w-full">
              <List
                className="absolute bottom-[0] sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-center mx-auto w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-3 items-center justify-start sm:ml-[0] p-[11px] rounded-[12px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group3319.png')",
                    }}
                  >
                    <Button
                      className="flex h-[45px] items-center justify-center mb-[141px] w-[45px]"
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[30px]"
                        alt="favorite"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                    <Text
                      className="font-urbanist leading-[33.55px] text-blue_gray_800_03 w-full"
                      variant="body9"
                    >
                      Nike sports running shoes for men
                    </Text>
                    <Text
                      className="font-lato text-green_600_03"
                      variant="body6"
                    >
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors10 text-[24.4px] font-urbanist text-left font-semibold">
                        $10
                      </span>
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors11 text-[24.4px] text-left font-normal">
                        {" "}
                      </span>
                      <span className="md:text-[19.35px] sm:text-[17.35px] text-colors12 text-[21.35px] font-urbanist text-left font-medium line-through">
                        $13
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-3 items-center justify-start sm:ml-[0] p-[11px] rounded-[12px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group3320.png')",
                    }}
                  >
                    <Button
                      className="flex h-[45px] items-center justify-center mb-[141px] w-[45px]"
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[30px]"
                        alt="favorite One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                    <Text
                      className="font-urbanist leading-[33.55px] text-blue_gray_800_03 w-full"
                      variant="body9"
                    >
                      Nike sneakers shoes for men
                    </Text>
                    <Text
                      className="font-lato text-green_600_03"
                      variant="body6"
                    >
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors10 text-[24.4px] font-urbanist text-left font-semibold">
                        $10
                      </span>
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors11 text-[24.4px] text-left font-normal">
                        {" "}
                      </span>
                      <span className="md:text-[19.35px] sm:text-[17.35px] text-colors12 text-[21.35px] font-urbanist text-left font-medium line-through">
                        $13
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-3 items-center justify-start sm:ml-[0] p-[11px] rounded-[12px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group3321.png')",
                    }}
                  >
                    <Button
                      className="flex h-[45px] items-center justify-center mb-[141px] w-[45px]"
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[30px]"
                        alt="favorite Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                    <Text
                      className="font-urbanist leading-[33.55px] text-blue_gray_800_03 w-full"
                      variant="body9"
                    >
                      Nike sneakers shoes for men
                    </Text>
                    <Text
                      className="font-lato text-green_600_03"
                      variant="body6"
                    >
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors10 text-[24.4px] font-urbanist text-left font-semibold">
                        $10
                      </span>
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors11 text-[24.4px] text-left font-normal">
                        {" "}
                      </span>
                      <span className="md:text-[19.35px] sm:text-[17.35px] text-colors12 text-[21.35px] font-urbanist text-left font-medium line-through">
                        $13
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-3 items-center justify-start sm:ml-[0] p-[11px] rounded-[12px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group3322.png')",
                    }}
                  >
                    <Button
                      className="flex h-[45px] items-center justify-center mb-[141px] w-[45px]"
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbOutline"
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[30px]"
                        alt="favorite Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                    <Text
                      className="font-urbanist leading-[33.55px] text-blue_gray_800_03 w-full"
                      variant="body9"
                    >
                      Nike sports running shoes for men
                    </Text>
                    <Text
                      className="font-lato text-green_600_03"
                      variant="body6"
                    >
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors10 text-[24.4px] font-urbanist text-left font-semibold">
                        $10
                      </span>
                      <span className="md:text-[22.4px] sm:text-[20.4px] text-colors11 text-[24.4px] text-left font-normal">
                        {" "}
                      </span>
                      <span className="md:text-[19.35px] sm:text-[17.35px] text-colors12 text-[21.35px] font-urbanist text-left font-medium line-through">
                        $13
                      </span>
                    </Text>
                  </div>
                </div>
              </List>
              <div className="absolute bg-white_A700 flex flex-col gap-3 items-center justify-end left-[0] p-[11px] rounded-md shadow-bs14 top-[0] w-[49%]">
                <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Img
                        src="images/img_close.svg"
                        className="h-6 w-6"
                        alt="close"
                      />
                      <Text
                        className="font-medium ml-3 sm:ml-[0] sm:mt-0 mt-1 text-blue_gray_900"
                        variant="body13"
                      >
                        Lorem ipsum
                      </Text>
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-6 sm:ml-[0] ml-[318px] w-6"
                        alt="clock"
                      />
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                </div>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                  name="Group9787"
                  placeholder="Lorem ipsum"
                  prefix={
                    <Img
                      src="images/img_close.svg"
                      className="mt-auto mb-2.5 mr-3"
                      alt="close"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="mt-auto mb-2.5 ml-[35px]"
                      alt="clock"
                    />
                  }
                  size="sm"
                  variant="UnderLineBluegray100"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                  name="Group9788"
                  placeholder="Lorem ipsum"
                  prefix={
                    <Img
                      src="images/img_close.svg"
                      className="mt-auto mb-2.5 mr-3"
                      alt="close"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="mt-auto mb-2.5 ml-[35px]"
                      alt="clock"
                    />
                  }
                  size="sm"
                  variant="UnderLineBluegray100"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                  name="Group9789"
                  placeholder="Lorem ipsum"
                  prefix={
                    <Img
                      src="images/img_close.svg"
                      className="mt-auto mb-2.5 mr-3"
                      alt="close"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="mt-auto mb-2.5 ml-[35px]"
                      alt="clock"
                    />
                  }
                  size="sm"
                  variant="UnderLineBluegray100"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_900 text-base text-blue_gray_900 text-left w-full"
                  name="Group9790"
                  placeholder="Lorem ipsum"
                  prefix={
                    <Img
                      src="images/img_close.svg"
                      className="mt-auto mb-2.5 mr-3"
                      alt="close"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_clock_24X24.svg"
                      className="mt-auto mb-2.5 ml-[35px]"
                      alt="clock"
                    />
                  }
                  size="sm"
                  variant="UnderLineBluegray100"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerchHistoryPage;
