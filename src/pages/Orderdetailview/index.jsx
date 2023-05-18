import React from "react";

import { Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame34816OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OrderdetailviewPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[329px] w-full">
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
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1268px] mx-auto pt-[9px] md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Text className="font-semibold text-blue_gray_900" variant="body2">
              Order details
            </Text>
            <SelectBox
              className="sm:flex-1 font-medium mt-1 text-blue_A700_01 text-left text-lg w-[8%] sm:w-full"
              placeholderClassName="text-blue_A700_01"
              indicator={
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  className="h-6 mr-[0] w-6"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="Invoice"
              size="sm"
              name="Frame34816"
              isMulti={false}
              options={frame34816OptionsList}
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[67%] md:w-full">
              <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start pr-[5px] pt-[5px] w-full">
                  <Text className="font-medium text-black_900" variant="body12">
                    <span className="text-colors6 text-lg font-gilroy text-left font-semibold">
                      Order Id:
                    </span>
                    <span className="text-colors6 text-lg font-gilroy text-left">
                      {" "}
                    </span>
                    <span className="text-colors text-lg font-gilroy text-left">
                      #21204034879
                    </span>
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Shipping Address
                    </Text>
                    <Text
                      className="font-normal leading-[29.00px] text-blue_gray_900 w-full"
                      variant="body12"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body12"
                    >
                      Payment Method
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_900"
                      variant="body12"
                    >
                      BHIM UPI
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
                <Text className="font-medium text-green_600" variant="body7">
                  Delivered 02, May 2022
                </Text>
                <div className="flex md:flex-col flex-row font-opensans gap-4 items-center justify-start w-full">
                  <Img
                    src="images/img_pngwing1.png"
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    alt="pngwingOne"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[76%] md:w-full">
                    <Text
                      className="font-medium leading-[30.00px] text-blue_gray_900 w-full"
                      variant="body7"
                    >
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Text
                      className="font-medium mt-5 text-blue_gray_400"
                      variant="body11"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[16%] md:w-full">
                      <Text
                        className="font-medium text-blue_gray_900"
                        variant="body12"
                      >
                        Color:
                      </Text>
                      <Text
                        className="font-medium ml-1 text-blue_gray_400"
                        variant="body12"
                      >
                        Blue
                      </Text>
                    </div>
                    <Text
                      className="font-medium mt-[17px] text-blue_gray_900"
                      variant="body7"
                    >
                      <span className="md:text-[22px] sm:text-xl text-colors text-2xl font-opensans text-left font-semibold">
                        $
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-colors4 text-2xl font-opensans text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start mb-[179px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Price Details
                  </Text>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-7 items-center justify-start mt-[15px] pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Price(2 iteam)
                    </Text>
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body12"
                    >
                      $1110.58
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Discount
                    </Text>
                    <Text
                      className="font-medium text-green_600"
                      variant="body12"
                    >
                      -$111.98
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body12"
                    >
                      Delivery Charges
                    </Text>
                    <Text
                      className="font-medium text-black_900_01"
                      variant="body12"
                    >
                      $10
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      Donate{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-colors8 text-lg font-gilroy text-left underline"
                    >
                      Remove
                    </a>
                  </Text>
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body12"
                  >
                    $2
                  </Text>
                </div>
                <Line className="bg-blue_gray_100 h-px mt-[22px] w-full" />
                <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Total Amount
                  </Text>
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    $1120.58
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

export default OrderdetailviewPage;
