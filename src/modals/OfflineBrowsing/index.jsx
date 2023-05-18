import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Text } from "components";

const OfflineBrowsingModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-[30px] items-center justify-start p-4 md:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start mt-[7px] w-full">
            <Text className="font-semibold text-blue_gray_900" variant="body12">
              Offline Reading
            </Text>
            <div className="flex flex-col gap-[27px] items-center justify-start pt-0.5 w-full">
              <div className="flex flex-row gap-[33px] items-start justify-between w-full">
                <Text
                  className="font-medium mt-1 text-blue_gray_300"
                  variant="body12"
                >
                  Top Sections Only (updated twice a day)
                </Text>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid h-6 mb-[3px] rounded-[50%] w-6"></div>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="font-medium mt-[3px] text-blue_gray_300"
                  variant="body12"
                >
                  All Content (updated once per day)
                </Text>
                <div className="bg-blue_A700_01 flex flex-col h-6 items-center justify-start mb-0.5 p-1.5 rounded-[50%] w-6">
                  <div className="bg-white_A700 h-3 rounded-[50%] w-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mb-5 w-full">
            <Button
              className="common-pointer cursor-pointer font-medium text-base text-blue_A700_01 text-center w-[190px]"
              onClick={props.onRequestClose}
              shape="RoundedBorder6"
              size="2xl"
              variant="OutlineBlueA70001"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[190px]"
              shape="RoundedBorder6"
              size="xl"
              variant="FillBlueA70001"
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default OfflineBrowsingModal;
