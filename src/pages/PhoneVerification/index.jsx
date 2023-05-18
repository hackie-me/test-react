import React from "react";

import { Button, Img, Text } from "components";

const PhoneVerificationPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-auto p-[297px] md:px-10 sm:px-5 w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[50px] md:px-5 rounded-[12px] w-[65%] md:w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-2/5 md:w-full">
            <Img
              src="images/img_mobile.svg"
              className="h-[60px] w-[22%]"
              alt="mobile"
            />
            <Text className="font-semibold text-blue_A700_01" variant="body7">
              OTP Verification
            </Text>
          </div>
          <Text
            className="font-medium mt-[37px] text-gray_700"
            variant="body12"
          >
            <span className="text-colors3 text-lg font-gilroy text-left">
              OTP Is Send to
            </span>
            <span className="text-colors9 text-lg font-gilroy text-left">
              {" "}
            </span>
            <span className="text-colors text-lg font-gilroy text-left font-bold">
              +91 01234567890
            </span>
          </Text>
          <Img
            src="images/img_group11201.svg"
            className="h-[52px] mt-[29px] rounded-[3px] w-[73%]"
            alt="Group11201"
          />
          <Button
            className="cursor-pointer font-medium min-w-[396px] sm:min-w-full mt-[50px] text-base text-center text-white_A700"
            shape="RoundedBorder6"
            size="xl"
            variant="FillBlueA70001"
          >
            Verify OTP
          </Button>
          <Text
            className="font-medium mb-[5px] mt-7 text-blue_A700_01"
            variant="body13"
          >
            <span className="text-colors3 text-base font-gilroy text-left">
              Didn’t Recieved Code ?
            </span>
            <span className="text-colors text-base font-gilroy text-left">
              {" "}
            </span>
            <span className="text-colors text-base font-gilroy text-left font-bold">
              Resend{" "}
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default PhoneVerificationPage;
