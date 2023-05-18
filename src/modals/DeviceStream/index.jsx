import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const DeviceStreamModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[18px] md:px-5 rounded-[10px] w-full">
          <Text
            className="font-normal mt-1.5 text-blue_gray_300"
            variant="body13"
          >
            No Device Available
          </Text>
          <div className="flex flex-row gap-4 items-start justify-start mt-[30px] w-3/5 md:w-full">
            <Img
              src="images/img_ciairplay.svg"
              className="h-6 w-6"
              alt="ciairplay"
            />
            <Text
              className="font-medium mt-1 text-blue_gray_900"
              variant="body13"
            >
              Airplay & Blutooth Devices
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start mt-[25px] w-[44%] md:w-full">
            <Img
              src="images/img_mdicellphonel.svg"
              className="h-6 w-6"
              alt="mdicellphonel"
            />
            <Text
              className="font-medium mt-[3px] text-blue_gray_900"
              variant="body13"
            >
              Link with TV Code
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start mb-1 mt-[26px] w-[32%] md:w-full">
            <Img src="images/img_info.svg" className="h-6 w-6" alt="info" />
            <Text
              className="font-medium mt-[3px] text-blue_gray_900"
              variant="body13"
            >
              Learn More
            </Text>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DeviceStreamModal;
