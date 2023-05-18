import React from "react";

import { Img, Text } from "components";

const LocationBasedAlertsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-gilroy h-[1024px] items-center justify-end mx-auto pt-[826px] w-full"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <div className="flex flex-col gap-5 justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-end md:ml-[0] ml-[1014px] mr-6 p-3.5 md:px-5 rounded-[13px] w-[28%] md:w-full">
            <div className="flex flex-col gap-1.5 items-center justify-start rounded w-[99%] md:w-full">
              <div className="flex flex-row items-end justify-between rounded w-full">
                <div className="flex flex-row gap-1.5 items-start justify-start rounded">
                  <Img
                    src="images/img_image3.png"
                    className="h-5 md:h-auto object-cover rounded w-5"
                    alt="imageThree"
                  />
                  <Text
                    className="font-medium mt-1 text-blue_gray_900"
                    variant="body16"
                  >
                    Puffy Bakery
                  </Text>
                </div>
                <Text
                  className="font-medium mt-[5px] text-blue_gray_400"
                  variant="body16"
                >
                  3m ago
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-between pt-0.5 rounded w-full">
                <div className="flex flex-col items-start justify-start mt-[3px]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body13"
                  >
                    Near Puffy Bakery?
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] mt-[3px] text-blue_gray_400 w-full"
                    variant="body15"
                  >
                    Check out review to see what other people would it here !
                  </Text>
                </div>
                <Img
                  src="images/img_image2.png"
                  className="h-9 md:h-auto object-cover rounded w-9"
                  alt="imageTwo"
                />
              </div>
            </div>
          </div>
          <footer className="bg-blue_gray_900_7f flex font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-[575px] mr-5 my-1 w-[59%]">
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    src="images/img_start.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Start"
                  />
                  <Img
                    src="images/img_search.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Search"
                  />
                  <Img
                    src="images/img_desktop.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Desktop"
                  />
                  <Img
                    src="images/img_widgets.png"
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    alt="Widgets"
                  />
                  <div className="flex flex-col items-center justify-start p-2 w-[41px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-end p-0.5 w-[25px]"
                      style={{
                        backgroundImage: "url('images/img_explorericon.png')",
                      }}
                    >
                      <div className="bg-gradient5  h-[7px] mt-3 w-[48%]"></div>
                    </div>
                  </div>
                  <div className="md:h-[38px] h-[41px] relative w-[41px]">
                    <div className="bg-white_A700_0c border border-solid border-white_A700_0c flex flex-col h-full items-center justify-end m-auto rounded w-[41px]">
                      <div className="bg-white_A700_87 h-0.5 mt-9 rounded-[1px] w-2/5"></div>
                    </div>
                    <Img
                      src="images/img_placeyouricon.png"
                      className="absolute h-[25px] inset-[0] justify-center m-auto object-cover w-[25px]"
                      alt="PlaceYourIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between pt-0.5 w-[26%] sm:w-full">
                <Img
                  src="images/img_arrowup.svg"
                  className="h-6 w-6"
                  alt="arrowup"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Img
                    src="images/img_signal.svg"
                    className="h-6 w-6"
                    alt="signal"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="h-6 w-6"
                    alt="volume"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-6 w-6"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="font-normal text-white_A700"
                    variant="body16"
                  >
                    11:55 PM
                  </Text>
                  <Text
                    className="font-normal mt-[3px] text-white_A700"
                    variant="body16"
                  >
                    10/6/2021
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LocationBasedAlertsPage;
