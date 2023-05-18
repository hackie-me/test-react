import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ActivityLogPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy gap-[35px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group_1.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
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
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="font-medium ml-0.5 text-gray_900"
                      variant="body13"
                    >
                      Products
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_901.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="font-medium text-gray_900"
                      variant="body13"
                    >
                      Resouces
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_901.svg"
                      className="h-6 w-6"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text className="font-medium text-gray_900" variant="body13">
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] md:px-5 shadow-bs4 w-[42%] md:w-full">
          <div className="flex flex-row items-start justify-between w-[61%] md:w-full">
            <Img
              src="images/img_arrowleft.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text
              className="font-semibold mt-0.5 text-blue_gray_900"
              variant="body7"
            >
              Activity Log
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mt-[54px] w-full">
            <Text className="font-medium text-blue_gray_900" variant="body7">
              Today
            </Text>
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg One"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillRed400"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Rose
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      liked a photo
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Carmelo’s
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      post.
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      {" "}
                      20 min ago.
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_profileimglarg_72X52.png"
                  className="h-[72px] md:h-auto object-cover"
                  alt="ProfileImgLarg One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg_72X72.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg Two"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillRed400"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Benito
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                      liked a photo{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Carmelo’s{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      post.{" "}
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      50 min ago.
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_profileimglarg_72X52.png"
                  className="h-[72px] md:h-auto object-cover"
                  alt="ProfileImgLarg One One"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[31px] items-start justify-start mb-[130px] mt-[31px] w-full">
            <Text className="font-medium text-blue_gray_900" variant="body7">
              This Month
            </Text>
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg_1.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg Three"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillBlueA20003"
                    >
                      <Img src="images/img_videocamera.svg" alt="videocamera" />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Anton
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                      Posted a new video{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      .{" "}
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      5w
                    </span>
                  </Text>
                </div>
                <Img src="images/img_user.svg" className="h-6 w-6" alt="user" />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg_2.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg Four"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillBlueA20003"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        alt="videocamera One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Kai
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                      Posted a new video{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      .{" "}
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      5w
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_user.svg"
                  className="h-6 w-6"
                  alt="user One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg_72X72.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg Five"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillRed400"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification Two"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Benito
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      {" "}
                      liked a photo{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      Carmelo’s{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      post.{" "}
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      6w.
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_profileimglarg_3.png"
                  className="h-[72px] md:h-auto object-cover"
                  alt="ProfileImgLarg One Two"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      src="images/img_profileimglarg_4.png"
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      alt="ProfileImgLarg Six"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] rounded-[50%] w-6"
                      size="mdIcn"
                      variant="icbFillBlueA20003"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        alt="videocamera Two"
                      />
                    </Button>
                  </div>
                  <Text
                    className="font-medium leading-[29.00px] text-blue_gray_900 w-[77%] sm:w-full"
                    variant="body12"
                  >
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      Marin Posted a new video{" "}
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 text-lg font-gilroy text-left">
                      .{" "}
                    </span>
                    <span className="text-colors3 text-lg font-gilroy text-left">
                      5w
                    </span>
                  </Text>
                </div>
                <Img
                  src="images/img_user.svg"
                  className="h-6 w-6"
                  alt="user Two"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLogPage;
