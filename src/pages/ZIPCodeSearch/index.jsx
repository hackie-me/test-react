import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const group9970OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ZIPCodeSearchPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[195px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_15.svg"
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
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start w-[49%] md:w-full">
            <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
              <div className="flex flex-col gap-8 items-center justify-start rounded-md">
                <Img
                  src="images/img_rectangle1213.png"
                  className="h-24 md:h-auto object-cover rounded-md w-24"
                  alt="Rectangle1213"
                />
                <Img
                  src="images/img_rectangle1214.png"
                  className="h-24 md:h-auto object-cover rounded-md w-24"
                  alt="Rectangle1214"
                />
                <Img
                  src="images/img_rectangle1215.png"
                  className="h-24 md:h-auto object-cover rounded-md w-24"
                  alt="Rectangle1215"
                />
                <Img
                  src="images/img_rectangle1216.png"
                  className="h-24 md:h-auto object-cover rounded-md w-24"
                  alt="Rectangle1216"
                />
                <Img
                  src="images/img_rectangle1217.png"
                  className="h-24 md:h-auto object-cover rounded-md w-24"
                  alt="Rectangle1217"
                />
              </div>
              <Img
                src="images/img_rectangle163.png"
                className="sm:flex-1 h-[512px] md:h-auto object-cover rounded w-[512px] sm:w-full"
                alt="Rectangle163"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-between rounded-md w-full">
              <Button
                className="cursor-pointer font-medium text-blue_A700_01 text-center text-lg w-[300px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                Add to Cart
              </Button>
              <Button
                className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[300px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
            <Text
              className="font-gilroy font-medium leading-[32.00px] text-blue_gray_900 w-full"
              variant="body7"
            >
              OnePlus 10R 5G (Sierra Black, 12GB RAM, 256GB Storage, 150W
              SuperVOOC)
            </Text>
            <div className="flex flex-row font-gilroy sm:gap-10 items-start justify-between mt-6 w-full">
              <div className="flex flex-row gap-2 items-start justify-between w-[47%]">
                <Img
                  src="images/img_star_24X24.svg"
                  className="h-6 w-6"
                  alt="star"
                />
                <div className="flex flex-row gap-2 items-center justify-start">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body12"
                  >
                    4.3/5
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    (112 Ratings l 94 Reviews)
                  </Text>
                </div>
              </div>
              <Img src="images/img_share.svg" className="h-6 w-6" alt="share" />
            </div>
            <Text
              className="font-hairline font-urbanist italic mt-9 text-black_900_01"
              variant="body7"
            >
              <span className="md:text-[26px] sm:text-2xl text-colors2 text-[28px] font-gilroy text-left font-semibold">
                $499
              </span>
              <span className="md:text-[22px] sm:text-xl text-colors2 text-2xl font-gilroy text-left font-fw">
                {" "}
              </span>
              <span className="text-colors3 text-base font-gilroy text-left font-semibold line-through">
                $599
              </span>
            </Text>
            <div className="flex flex-col font-gilroy gap-4 items-start justify-start mt-[37px] w-[28%] md:w-full">
              <SelectBox
                className="font-medium text-black_900_01 text-left text-lg w-[53%] sm:w-full"
                placeholderClassName="text-black_900_01"
                indicator={
                  <Img
                    src="images/img_arrowdown_black_902.svg"
                    className="h-6 mr-[0] w-6"
                    alt="arrow_down"
                  />
                }
                isSearchable={false}
                placeholder="Shades"
                size="sm"
                name="Group9970"
                isMulti={false}
                options={group9970OptionsList}
              />
              <Img
                src="images/img_group9981.svg"
                className="h-[34px] w-full"
                alt="Group9981"
              />
            </div>
            <List
              className="sm:flex-col flex-row font-gilroy gap-6 grid sm:grid-cols-1 grid-cols-4 mt-6 w-[68%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="xlIcn"
                    variant="icbOutlineBluegray10002"
                  >
                    <Img
                      src="images/img_checkmark_87X87.svg"
                      className="h-[58px]"
                      alt="checkmark"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body15"
                  >
                    <>
                      100% <br />
                      Authentic
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="2xlIcn"
                    variant="icbOutlineBluegray10002"
                  >
                    <Img
                      src="images/img_reply.svg"
                      className="h-[52px]"
                      alt="reply"
                    />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body15"
                  >
                    <>
                      15 days
                      <br />
                      Returns
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="3xlIcn"
                    variant="icbOutlineBluegray10002"
                  >
                    <Img src="images/img_vector.svg" alt="Vector" />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body15"
                  >
                    <>
                      COD
                      <br />
                      Available
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                  <Button
                    className="flex h-[87px] items-center justify-center w-[87px]"
                    shape="icbRoundedBorder12"
                    size="2xlIcn"
                    variant="icbOutlineBluegray10002"
                  >
                    <Img src="images/img_car_87X87.svg" alt="car" />
                  </Button>
                  <Text
                    className="font-medium leading-[22.00px] text-center text-gray_800"
                    variant="body15"
                  >
                    <>
                      Free
                      <br />
                      Delivery
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col font-gilroy gap-[13px] items-start justify-start mt-[30px] w-[66%] md:w-full">
              <Text className="font-medium text-black_900" variant="body13">
                Delivery
              </Text>
              <div className="flex flex-col gap-[18px] items-start justify-start pt-1 w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="font-normal text-blue_gray_200"
                    variant="body13"
                  >
                    Enter Pincode
                  </Text>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[45%] md:w-full">
                  <Img
                    src="images/img_location.svg"
                    className="h-4 mb-[3px] w-4"
                    alt="location"
                  />
                  <Text
                    className="font-medium mt-0.5 text-blue_A700_01"
                    variant="body15"
                  >
                    Use My Current Location
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

export default ZIPCodeSearchPage;
