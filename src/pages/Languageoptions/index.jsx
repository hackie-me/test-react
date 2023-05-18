import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LanguageoptionsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto pb-[86px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs4 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_7.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-[9px] text-gray_900"
                    variant="body13"
                  >
                    Orders
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900"
                  variant="body13"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-4 text-gray_900"
                    variant="body13"
                  >
                    More
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                src="images/img_cart.svg"
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <Text className="font-semibold text-blue_gray_900" variant="body2">
            Language options
          </Text>
          <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col gap-[23px] items-center justify-start py-4 rounded-md w-full">
            <div className="flex flex-col gap-4 justify-start pt-0.5 w-full">
              <div className="flex flex-row gap-4 items-end justify-start ml-6 md:ml-[0] w-[17%] md:w-full">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-6 mb-[3px] w-6"
                  alt="arrowleft"
                />
                <Text
                  className="font-medium mt-[5px] text-blue_gray_400"
                  variant="body12"
                >
                  Search Lanaguages
                </Text>
              </div>
              <Line className="bg-blue_gray_100 h-px w-full" />
            </div>
            <div className="flex flex-col gap-6 items-center justify-start mb-[23px] w-[91%] md:w-full">
              <List
                className="flex-col gap-6 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-0 w-full">
                  <Input
                    wrapClassName="flex flex-1 w-full"
                    className="font-normal p-0 placeholder:text-black_900 text-base text-black_900 text-left w-full"
                    name="Frame34840"
                    placeholder="Amharic"
                    prefix={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mt-2 mb-2.5 ml-3 mr-2 w-full"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder6"
                    size="xl"
                    variant="FillBlue50"
                  ></Input>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Danish
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Gujarati
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Latin
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Ukrainian
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-0 w-full">
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Armenian
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Dhivehi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Haitian Creole
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Latvian
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Urdu
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-0 w-full">
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Assamese
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Dogri
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Hausa
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      Malay
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Uyghur
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-0 w-full">
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Aymara
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Dutch
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Hawaiian
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      Malayalam
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Uzbek
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between my-0 w-full">
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Azerbaijani
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      English
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Hebrew
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Maori
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Vietnamese
                    </Text>
                  </div>
                </div>
              </List>
              <div className="md:gap-5 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Bambara
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-end p-3 rounded-md w-full">
                  <Text
                    className="font-normal ml-8 md:ml-[0] mt-0.5 text-black_900"
                    variant="body13"
                  >
                    Esperanto
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Hindi
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-end p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Nepali
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Welsh
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-end p-3 rounded-md w-full">
                  <Text
                    className="font-normal ml-8 md:ml-[0] mt-0.5 text-black_900"
                    variant="body13"
                  >
                    Basque
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Estonian
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                  <Text
                    className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                    variant="body13"
                  >
                    Hmong
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                  <Text
                    className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                    variant="body13"
                  >
                    Norwegian
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                  <Text
                    className="font-normal md:ml-[0] ml-[31px] text-black_900"
                    variant="body13"
                  >
                    Xhosa
                  </Text>
                </div>
              </div>
              <List
                className="flex-col gap-6 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Belarusian
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Ewe
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Hungarian
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      Odia (Oriya)
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Yiddish
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      Bengali
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-[5px] text-black_900"
                      variant="body13"
                    >
                      Filipino
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Icelandic
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Scots Gaelic
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Yoruba
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[23px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col items-start justify-end p-2 rounded-md w-full">
                    <Text
                      className="font-normal ml-9 md:ml-[0] mt-1.5 text-black_900"
                      variant="body13"
                    >
                      Bhojpuri
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Finnish
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-3 rounded-md w-full">
                    <Text
                      className="font-normal ml-8 md:ml-[0] mt-0.5 text-black_900"
                      variant="body13"
                    >
                      Japanese
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-end p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Sepedi
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-3 rounded-md w-full">
                    <Text
                      className="font-normal md:ml-[0] ml-[31px] text-black_900"
                      variant="body13"
                    >
                      Zulu
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageoptionsPage;
