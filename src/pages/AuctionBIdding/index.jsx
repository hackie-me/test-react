import React from "react";

import { Button, Img, Input, List, Slider, Text, TextArea } from "components";

import { CloseSVG } from "../../assets/images";

const AuctionBIddingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[35px] items-center justify-start mx-auto pb-[57px] w-full">
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
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-lg shadow-bs1 w-[63%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                src="images/img_rectangle1380.png"
                className="h-[516px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                alt="Rectangle1380"
              />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[30px] pb-1 w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start sm:mt-0 mt-2">
                  <Text
                    className="font-semibold text-black_900"
                    variant="body4"
                  >
                    Secluded intown Treehouse
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-[30px] items-center justify-between w-[18%] sm:w-full">
                  <Button
                    className="cursor-pointer flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                    size="xlIcn"
                    variant="icbOutlineBlueA70001"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-6"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    onClick={() => sliderRef.current?.slideNext?.()}
                    size="xlIcn"
                    variant="icbOutlineBlack9000c"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-6"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <Text
                className="font-semibold mt-[35px] text-black_900"
                variant="body12"
              >
                Review
              </Text>
              <div className="flex flex-row gap-2 items-end justify-start mt-[21px] w-[26%] md:w-full">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  alt="ProfileImgLarg"
                />
                <div className="flex flex-col gap-[9px] items-center justify-start mb-[3px] mt-[7px] w-[66%]">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body13"
                  >
                    Leslie Alexander
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-[98%] md:w-full">
                    <Img
                      src="images/img_star.svg"
                      className="h-5 w-5"
                      alt="star"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-5 w-5"
                      alt="star One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-5 w-5"
                      alt="star Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-5 w-5"
                      alt="star Three"
                    />
                    <Img
                      src="images/img_star_20X20.svg"
                      className="h-5 w-5"
                      alt="star Four"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-medium leading-[26.00px] mt-4 text-blue_gray_400 w-full"
                variant="body13"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                congue purus sodales tincidunt. Egestas nunc habitant facilisi
                porttitor felis sit cras nulla in.
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs1 w-[36%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-0.5 mt-[7px] w-full">
              <Text className="font-semibold text-black_900" variant="body7">
                Place Your Bid
              </Text>
              <div className="flex flex-row items-start justify-between mt-[31px] pt-[5px] w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[45%]">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    Ends In
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-gray_900_05 text-lg w-[45px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                    <Img
                      src="images/img_group24.svg"
                      className="h-5"
                      alt="GroupTwentyFour"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-gray_900_05 text-lg w-[45px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                    <Img
                      src="images/img_group24.svg"
                      className="h-5"
                      alt="Group9828"
                    />
                    <Button
                      className="cursor-pointer font-bold h-[45px] text-center text-gray_900_05 text-lg w-[45px]"
                      shape="RoundedBorder6"
                      size="xl"
                      variant="FillBlue50"
                    >
                      00
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    Highest Bid
                  </Text>
                  <Text className="font-bold text-blue_A700_01" variant="body4">
                    $20,000
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start mt-8 pt-[9px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-medium text-black_900_01"
                    variant="body7"
                  >
                    Bids History
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body12"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray_50 border border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755"
                      />
                      <Text
                        className="font-medium ml-2 text-blue_gray_400"
                        variant="body12"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-28 text-blue_A700_01"
                        variant="body12"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50 border border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755 One"
                      />
                      <Text
                        className="font-medium ml-2 text-blue_gray_400"
                        variant="body12"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-28 text-blue_A700_01"
                        variant="body12"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_50 border border-blue_gray_100 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-md w-full">
                    <div className="flex flex-row items-center justify-start rounded-[3px] w-[98%] md:w-full">
                      <Img
                        src="images/img_rectangle755.png"
                        className="h-[54px] md:h-auto object-cover rounded-[3px] w-[54px]"
                        alt="Rectangle755 Two"
                      />
                      <Text
                        className="font-medium ml-2 text-blue_gray_400"
                        variant="body12"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="font-bold ml-28 text-blue_A700_01"
                        variant="body12"
                      >
                        $20,000
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-8 w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col gap-1 items-start justify-start mx-2.5">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="font-medium text-black_900_01"
                          variant="body12"
                        >
                          Your Bid Amount
                        </Text>
                      </div>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray_200 sm:h-auto text-base text-blue_gray_200 text-left w-full"
                        name="InputField One"
                        placeholder="Enter amount"
                        shape="RoundedBorder6"
                        size="4xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <Button
                className="cursor-pointer font-medium mt-10 text-base text-center text-white_A700 w-[390px]"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Place Your Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionBIddingPage;
