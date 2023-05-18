import React from "react";

import { Button, Img, List, Radio, RadioGroup, Text } from "components";

const PremiumPlanComparisonPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_6.svg"
                className="h-[35px]"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="font-medium ml-0.5 text-gray_900"
                    variant="body13"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text className="font-medium text-gray_900" variant="body13">
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text className="font-medium text-gray_900" variant="body13">
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <Text className="font-medium text-gray_900" variant="body13">
                Sign in
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center text-white_A700"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA70001"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1246px] mb-[191px] mx-auto pt-3 md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start">
            <Text className="font-semibold text-black_900" variant="body2">
              Choose your plan
            </Text>
            <Text
              className="font-medium leading-[29.00px] text-black_900 text-center"
              variant="body12"
            >
              <>
                Vulputate augue sed dui, eget bibendum quis fames varius id.
                Pellentesque orci molestie morbi.
                <br />
                felis elementum, eu mauris ac arcu tincidunt.{" "}
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-row gap-6 items-center justify-center w-[16%] md:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[87px] text-center text-lg text-white_A700"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA70001"
              >
                Monthly
              </Button>
              <div className="flex flex-col items-center justify-start p-2.5 rounded-[5px] w-auto">
                <Text
                  className="font-semibold text-blue_gray_400 w-auto"
                  variant="body12"
                >
                  Annualy
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[7px] w-full">
                  <div className="flex flex-col gap-9 items-center justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body7"
                    >
                      Free
                    </Text>
                    <Text className="text-black_900" as="h4" variant="h4">
                      $0
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup500visitors"
                  >
                    <Radio
                      value="500visitors"
                      className="font-normal text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="500 visitors"
                      id="500visitors"
                      size="md"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="font-normal mt-6 sm:pr-5 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="Unlimited projects"
                      id="Unlimitedprojects"
                      size="lg"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="font-normal mt-6 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="extended free trial"
                      id="extendedfreetrial"
                      size="md"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-center text-white_A700"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="FillBlueA70001"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[7px] w-full">
                  <div className="flex flex-col gap-9 items-center justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body7"
                    >
                      Advanced
                    </Text>
                    <Text className="text-black_900" as="h4" variant="h4">
                      $99
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup5000visitors"
                  >
                    <Radio
                      value="5000visitors"
                      className="font-normal text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="5000 visitors"
                      id="5000visitors"
                      size="md"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="font-normal mt-6 sm:pr-5 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="Unlimited projects"
                      id="Unlimitedprojects2"
                      size="lg"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="font-normal mt-6 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="extended free trial"
                      id="extendedfreetrial2"
                      size="md"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-blue_gray_400 text-center"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="OutlineBluegray400"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[7px] w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body7"
                    >
                      Premium
                    </Text>
                    <Text className="text-black_900" as="h4" variant="h4">
                      $299
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup5000visitors one"
                  >
                    <Radio
                      value="5000visitors"
                      className="font-normal text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors one"
                      label="5000 visitors"
                      id="5000visitors2"
                      size="md"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="font-normal mt-6 sm:pr-5 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors one"
                      label="Unlimited projects"
                      id="Unlimitedprojects3"
                      size="lg"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="font-normal mt-6 text-black_900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors one"
                      label="extended free trial"
                      id="extendedfreetrial3"
                      size="md"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-blue_gray_400 text-center"
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="OutlineBluegray400"
                >
                  Create account
                </Button>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPlanComparisonPage;
