import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, SeekBar, Switch, Text } from "components";

const CustomiseSoundsModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-4 items-center justify-center p-5 md:px-5 rounded-md w-full">
          <Text
            className="font-semibold mt-[17px] text-blue_gray_900"
            variant="body12"
          >
            Sound Settings
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start mb-2.5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start pt-[5px] w-[97%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body13"
                  >
                    Ring Volume
                  </Text>
                  <SeekBar
                    inputValue={[50.95]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue_A700_01 border-[1.5px] border-solid bg-gray_50_04 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-[18px] rounded-[3px] w-full"
                    trackClassName="h-[5px] flex rounded-[3px] w-full"
                  />{" "}
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="font-medium text-blue_gray_400"
                    variant="body13"
                  >
                    Alarm Volume
                  </Text>
                  <SeekBar
                    inputValue={[50.95]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue_A700_01 border-[1.5px] border-solid bg-gray_50_04 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-[18px] rounded-[3px] w-full"
                    trackClassName="h-[5px] flex rounded-[3px] w-full"
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <Text
                    className="font-medium mt-[5px] text-blue_gray_400"
                    variant="body13"
                  >
                    Vibrate on Ring
                  </Text>
                  <Switch value={true} className="mr-[5px]" />
                </div>
                <div className="flex flex-col gap-[18px] items-center justify-start py-0.5 w-full">
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Ringtone
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mb-0.5 w-[27%]">
                      <Text
                        className="font-normal mt-0.5 text-blue_gray_400"
                        variant="body15"
                      >
                        Playtime
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-4 mb-[3px] w-4"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Message
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-between w-[27%]">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Bamboo
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-4 w-4"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between py-0.5 w-full">
                    <Text
                      className="font-medium text-blue_gray_400"
                      variant="body13"
                    >
                      Notifications
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-between w-1/4">
                      <Text
                        className="font-normal text-blue_gray_400"
                        variant="body15"
                      >
                        Tri-tone
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-4 w-4"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-between w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-[50px] text-base text-blue_A700_01 text-center w-36"
                onClick={props.onRequestClose}
                shape="RoundedBorder6"
                size="2xl"
                variant="OutlineBlueA70001"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center text-white_A700 w-36"
                shape="RoundedBorder6"
                size="2xl"
                variant="FillBlueA70001"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CustomiseSoundsModal;
