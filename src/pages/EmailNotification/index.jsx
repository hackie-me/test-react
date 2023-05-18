import React from "react";

import { Img, Text } from "components";

const EmailNotificationPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-gilroy h-[1024px] items-center justify-end mx-auto pt-[556px] w-full"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <div className="flex flex-col gap-5 justify-start w-full">
          <div className="bg-blue_50_01 flex flex-col items-center justify-start md:ml-[0] ml-[1020px] mr-6 p-4 md:px-5 rounded-[10px] w-[28%] md:w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-[52%] md:w-full">
                <Text
                  className="bg-blue_A700_01 border-2 border-solid border-white_A700 flex font-semibold h-[45px] items-center justify-center mb-[25px] rounded-[50%] text-center text-white_A700 w-[45px]"
                  variant="body11"
                >
                  S
                </Text>
                <div className="flex flex-col items-start justify-start mt-[5px] pb-0.5 w-[72%]">
                  <Text
                    className="font-semibold text-blue_gray_900"
                    variant="body15"
                  >
                    sayitnow@gmail.com
                  </Text>
                  <Text
                    className="font-medium mt-2 text-blue_gray_400"
                    variant="body16"
                  >
                    Sayitnow
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-1.5 w-[47%] md:w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body16"
                    >
                      3:49 PM
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-4 ml-1 w-4"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <Img
                  src="images/img_image4.png"
                  className="h-[194px] md:h-auto object-cover w-[91%]"
                  alt="imageFour"
                />
                <Text
                  className="font-medium leading-[22.00px] text-blue_gray_900 w-full"
                  variant="body15"
                >
                  *Benefits may be applicable for partner hotels and airlines.
                  T&C Apply.
                </Text>
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

export default EmailNotificationPage;
