import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const DeepLinkingModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-6 items-center justify-end p-[13px] md:px-5 rounded-md w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start mt-4">
            <Text className="font-semibold text-black_900" variant="body12">
              Share the link
            </Text>
            <Text
              className="common-pointer font-normal leading-[26.00px] text-blue_gray_600 text-center w-full"
              variant="body13"
              onClick={() => navigate("")}
            >
              https://www.xyz.in/SanDisk-Cruzer-Blade-Flash-Drive/dp/B005FYNT3G/?
            </Text>
          </div>
          <Button
            className="cursor-pointer font-medium text-base text-center text-white_A700 w-[304px]"
            shape="RoundedBorder6"
            size="2xl"
            variant="FillBlueA70001"
          >
            Share
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DeepLinkingModal;
