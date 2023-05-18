import React from "react";

import { Img, Input, Radio, RadioGroup, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PollingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto pb-[258px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_2.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
            Polling
          </Text>
          <Text
            className="font-semibold mt-[59px] text-black_900"
            variant="body7"
          >
            How long have you been purchasing our service?
          </Text>
          <RadioGroup
            selectedValue="Lessthan6months"
            className="flex flex-col mt-[30px] w-full"
            name="radiogroupinputplaceho"
          >
            <Radio
              value="Lessthan6months"
              className="font-medium text-blue_A700_01 text-left text-lg"
              inputClassName="h-4 mr-[5px] w-4"
              checked={true}
              name="radiogroupinputplaceho"
              label="Less than 6 months"
              id="Lessthan6months"
              shape="RoundedBorder8"
              size="xl"
              variant="FillBlueA70001"
            ></Radio>
            <Radio
              value="6monthstolessthan1year"
              className="font-medium mt-6 text-blue_gray_400 text-left text-lg"
              inputClassName="h-4 mr-[5px] w-4"
              checked={false}
              name="radiogroupinputplaceho"
              label="6 months to less than 1 year"
              id="6monthstolessthan1year"
              shape="RoundedBorder8"
              size="2xl"
              variant="OutlineBluegray400"
            ></Radio>
            <Radio
              value="1yeartolessthan3years"
              className="font-medium mt-6 text-blue_gray_400 text-left text-lg"
              inputClassName="h-4 mr-[5px] w-4"
              checked={false}
              name="radiogroupinputplaceho"
              label="1 year to less than 3 years"
              id="1yeartolessthan3years"
              shape="RoundedBorder8"
              size="2xl"
              variant="OutlineBluegray400"
            ></Radio>
            <Radio
              value="3yearstolessthan5years"
              className="font-medium mt-6 text-blue_gray_400 text-left text-lg"
              inputClassName="h-4 mr-[5px] w-4"
              checked={false}
              name="radiogroupinputplaceho"
              label="3 years to less than 5 years"
              id="3yearstolessthan5years"
              shape="RoundedBorder8"
              size="2xl"
              variant="OutlineBluegray400"
            ></Radio>
            <Radio
              value="5yearsormore"
              className="font-medium mt-6 text-blue_gray_400 text-left text-lg"
              inputClassName="h-4 mr-[5px] w-4"
              checked={false}
              name="radiogroupinputplaceho"
              label="5 years or more"
              id="5yearsormore"
              shape="RoundedBorder8"
              size="2xl"
              variant="OutlineBluegray400"
            ></Radio>
          </RadioGroup>
        </div>
      </div>
    </>
  );
};

export default PollingPage;
