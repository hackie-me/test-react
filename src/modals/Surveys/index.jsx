import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const SurveysModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[21%]"
      overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-6 items-center justify-end p-6 md:px-5 rounded-md w-full">
          <div className="flex flex-col gap-3.5 items-center justify-start mt-[7px]">
            <Text className="font-semibold text-blue_gray_900" variant="body12">
              Rate Your Experience
            </Text>
            <Text className="font-normal text-blue_gray_400" variant="body13">
              Are you satisfied with the service?
            </Text>
          </div>
          <Img
            src="images/img_frame9866.svg"
            className="h-[50px] w-[61%]"
            alt="Frame9866"
          />
        </div>
      </div>
    </ModalProvider>
  );
};

export default SurveysModal;
