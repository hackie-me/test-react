import React from "react";

import { Img, Text } from "components";

const GameScorePage = () => {
  return (
    <>
      <div className="bg-blue_A700_01 flex flex-col font-gilroy items-center justify-start mx-auto p-[246px] md:px-10 sm:px-5 w-full">
        <div className="md:h-[395px] h-[479px] mb-[53px] relative w-[41%] sm:w-full">
          <div className="absolute bottom-[0] md:h-[342px] h-[450px] inset-x-[0] mx-auto w-[85%]">
            <Img
              src="images/img_group9789.svg"
              className="absolute bottom-[0] h-[342px] inset-x-[0] mx-auto rounded-[32.64px] w-[93%]"
              alt="Group9789"
            />
            <div className="absolute md:h-[106px] h-[180px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[180px] m-auto w-full">
                <div className="md:h-[62px] h-[98px] mb-[-24px] mx-auto w-3/5 z-[1]">
                  <div className="absolute h-[86px] inset-x-[0] mx-auto top-[0] w-[85px]">
                    <Img
                      src="images/img_union.png"
                      className="h-[68px] m-auto object-cover w-[67px]"
                      alt="Union"
                    />
                    <Img
                      src="images/img_star1.svg"
                      className="absolute bg-gradient7  h-[86px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs9 w-[85px]"
                      alt="StarOne"
                    />
                  </div>
                  <div className="absolute bottom-[0] h-[72px] left-[0] w-[72px]">
                    <Img
                      src="images/img_union_white_A700.png"
                      className="h-[55px] m-auto object-cover w-[54px]"
                      alt="Union One"
                    />
                    <Img
                      src="images/img_star1_72X72.svg"
                      className="absolute bg-gradient7  h-[72px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs9 w-[72px]"
                      alt="StarOne One"
                    />
                  </div>
                  <div className="absolute bottom-[0] h-[72px] right-[0] w-[72px]">
                    <Img
                      src="images/img_union_white_A700_55X54.png"
                      className="h-[55px] m-auto object-cover w-[54px]"
                      alt="Union Two"
                    />
                    <Img
                      src="images/img_star1_1.svg"
                      className="absolute bg-gradient7  h-[72px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs9 w-[72px]"
                      alt="StarOne Two"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[106px] items-center justify-start mt-auto mx-auto p-[27px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group2236.png')" }}
                >
                  <Text
                    className="mb-2 text-shadow-ts text-white_A700"
                    as="h5"
                    variant="h5"
                  >
                    complete
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[41%] inset-x-[0] mx-auto text-pink_A700 w-max"
                variant="body10"
              >
                level 20
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-1/2">
            <Text className="font-medium text-light_blue_300" variant="body7">
              score
            </Text>
            <Text
              className="bg-cyan_100 font-medium h-[45px] justify-center mt-1 pt-[3px] sm:px-5 px-[35px] rounded-[22.5px] text-blue_600_01 w-48"
              as="h6"
              variant="h6"
            >
              15 200
            </Text>
            <Text
              className="font-medium mt-4 text-light_blue_300"
              variant="body7"
            >
              reward
            </Text>
            <div className="flex flex-row gap-3 items-start justify-center mt-[5px] w-[55%] md:w-full">
              <Img
                src="images/img_coinimg.svg"
                className="h-[45px] w-3/5"
                alt="coinimg"
              />
              <Text className="mt-[5px] text-blue_600_01" variant="body1">
                15
              </Text>
            </div>
            <div className="bg-deep_purple_A400 flex flex-col items-center justify-start mt-[22px] outline outline-[3.11px] outline-white_A700 rounded-[27.5px] shadow-bs10 w-[70%] md:w-full">
              <div className="bg-deep_purple_A200 flex flex-col items-start justify-start mb-1.5 rounded-[24px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-end p-1.5"
                  style={{ backgroundImage: "url('images/img_group2237.svg')" }}
                >
                  <Text
                    className="font-medium h-[33px] mt-[3px] text-shadow-ts1 text-white_A700 tracking-[1.12px] w-[33px]"
                    variant="body4"
                  >
                    ok
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector9.png"
            className="absolute h-[186px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            alt="VectorNine"
          />
        </div>
      </div>
    </>
  );
};

export default GameScorePage;
