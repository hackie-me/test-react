import React from "react";
import { default as ModalProvider } from "react-modal";

import { Switch, Text } from "components";

const AudioEditorModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-4 items-center justify-end p-6 md:px-5 rounded-lg w-full">
          <Text
            className="font-semibold mt-[7px] text-blue_gray_900"
            variant="body12"
          >
            Sound Settings
          </Text>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-row gap-9 items-center justify-between pt-1 w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="font-semibold text-black_900_01"
                  variant="body13"
                >
                  Sounds
                </Text>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  Turn sound on/off according to your preference
                </Text>
              </div>
              <Switch value={true} className="w-[12%]" />
            </div>
            <div className="flex flex-row items-center justify-between pt-[5px] w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start">
                <Text
                  className="font-semibold text-black_900_01"
                  variant="body13"
                >
                  App Sounds
                </Text>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  App sounds for notifications
                </Text>
              </div>
              <Switch value={true} className="w-[12%]" />
            </div>
            <div className="flex flex-row gap-9 items-center justify-between pt-[5px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start">
                <Text
                  className="font-semibold text-black_900_01"
                  variant="body13"
                >
                  App Sounds
                </Text>
                <Text
                  className="font-medium text-blue_gray_400"
                  variant="body15"
                >
                  Turn sound on/off according to your preference
                </Text>
              </div>
              <Switch value={false} className="w-[12%]" />
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AudioEditorModal;
