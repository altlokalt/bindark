import React from "react";

import {
  Button,
  Img,
  Text,
  Line,
  List,
  CheckBox,
  Input,
  Switch,
} from "components";

const Homepage3DarkPage = () => {
  function handleNavigate90() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate91() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[5813px] items-start justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0106homepage3dark.png')" }}
      >
        <div className="flex flex-col items-start justify-start overflow-auto md:px-[20px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[66px] items-center justify-start md:ml-[0] ml-[105px] md:w-[100%] w-[95%]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[19px] w-[100%]">
                <div className="flex items-center justify-start md:ml-[0] ml-[235px] w-[auto]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className=""
                        alt="lightbulb"
                      />
                    </Button>
                    <Text
                      className="capitalize text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Binasea
                    </Text>
                  </div>
                </div>
                <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[40px] sm:hidden items-center justify-start md:ml-[0] ml-[220px] sm:w-[100%] w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[12%] my-[1px]">
                    <div className="flex flex-row gap-[8px] items-center justify-between">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Home
                      </a>
                      <Img
                        src="images/img_arrowdown_white_a700.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown"
                      />
                    </div>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[15%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center pt-[2px]">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Explore
                      </a>
                      <Img
                        src="images/img_arrowdown_white_a700.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown One"
                      />
                    </div>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[12%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center pt-[2px]">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Pages
                      </a>
                      <Img
                        src="images/img_arrowdown_white_a700.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown Two"
                      />
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Create
                    </a>
                  </li>
                  <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row gap-[12px] items-start justify-start md:ml-[0] ml-[97px] w-[auto]">
                  <Button className="bg-gray_901 border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold min-w-[192px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                    Connect Wallet
                  </Button>
                  <Button className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                    <Img
                      src="images/img_car.svg"
                      className="h-[24px]"
                      alt="car"
                    />
                  </Button>
                  <Button className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                    <Img
                      src="images/img_subtract.svg"
                      className=""
                      alt="Subtract"
                    />
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex flex-col font-poppins gap-[42px] justify-start md:w-[100%] w-[60%]">
              <div className="h-[400px] md:h-[720px] md:ml-[0] ml-[49px] relative md:w-[100%] w-[96%]">
                <div className="absolute h-[360px] md:h-[720px] inset-[0] justify-center m-[auto] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] h-[100%] items-center justify-between m-[auto] w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[24%]">
                      <div
                        className="bg-cover bg-no-repeat h-[320px] relative rounded-[30px] shadow-bs11 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_img_17.png')",
                        }}
                      >
                        <Img
                          src="images/img_img_320x250.png"
                          className="h-[320px] m-[auto] object-cover rounded-[30px] w-[100%]"
                          alt="IMG"
                        />
                        <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-[30px] w-[100%]">
                          <div className="flex flex-col gap-[115px] md:gap-[40px] justify-start my-[5px] w-[100%]">
                            <Img
                              src="images/img_2.png"
                              className="h-[78px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                              alt="One"
                            />
                            <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[203px] md:w-[100%] w-[7%]">
                              <Line className="bg-gradient4  h-[61px] w-[2px]" />
                              <Img
                                src="images/img_star3_18x15.svg"
                                className="h-[18px] w-[100%]"
                                alt="StarThree"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[360px] relative md:w-[100%] w-[43%]">
                      <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[54%]">
                        <div
                          className="bg-cover bg-no-repeat h-[320px] relative rounded-[30px] shadow-bs11 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_img_18.png')",
                          }}
                        >
                          <Img
                            src="images/img_img_1.png"
                            className="h-[320px] m-[auto] object-cover rounded-[30px] w-[100%]"
                            alt="IMG One"
                          />
                          <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[9px] rounded-[30px] w-[100%]">
                            <div className="flex flex-col gap-[115px] md:gap-[40px] justify-start my-[10px] md:w-[100%] w-[97%]">
                              <Img
                                src="images/img_2.png"
                                className="h-[78px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                                alt="One One"
                              />
                              <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[208px] md:w-[100%] w-[8%]">
                                <Line className="bg-gradient4  h-[61px] w-[2px]" />
                                <Img
                                  src="images/img_star3_18x16.svg"
                                  className="h-[18px] w-[100%]"
                                  alt="StarThree One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[63%]">
                        <div
                          className="bg-cover bg-no-repeat h-[360px] relative rounded-[30px] shadow-bs11 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_img_19.png')",
                          }}
                        >
                          <Img
                            src="images/img_img_360x288.png"
                            className="h-[360px] m-[auto] object-cover rounded-[30px] w-[100%]"
                            alt="IMG Two"
                          />
                          <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[17px] rounded-[30px] w-[100%]">
                            <div className="flex flex-col gap-[129px] md:gap-[40px] justify-start my-[5px] w-[100%]">
                              <Img
                                src="images/img_2.png"
                                className="h-[88px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                                alt="One Two"
                              />
                              <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[234px] md:w-[100%] w-[8%]">
                                <Line className="bg-gradient4  h-[68px] w-[2px]" />
                                <Img
                                  src="images/img_star3_20x18.svg"
                                  className="h-[20px] w-[100%]"
                                  alt="StarThree Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[16%] my-[auto] w-[27%]">
                    <div
                      className="bg-cover bg-no-repeat h-[360px] relative rounded-[30px] shadow-bs11 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_20.png')",
                      }}
                    >
                      <Img
                        src="images/img_img_2.png"
                        className="h-[360px] m-[auto] object-cover rounded-[30px] w-[100%]"
                        alt="IMG Three"
                      />
                      <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[17px] rounded-[30px] w-[100%]">
                        <div className="flex flex-col gap-[129px] md:gap-[40px] justify-start my-[5px] w-[100%]">
                          <Img
                            src="images/img_2.png"
                            className="h-[88px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="One Three"
                          />
                          <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[234px] md:w-[100%] w-[8%]">
                            <Line className="bg-gradient4  h-[68px] w-[2px]" />
                            <Img
                              src="images/img_star3_83.svg"
                              className="h-[20px] w-[100%]"
                              alt="StarThree Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[30%]">
                  <div
                    className="bg-cover bg-no-repeat h-[400px] relative rounded-[30px] shadow-bs11 w-[100%]"
                    style={{ backgroundImage: "url('images/img_img_21.png')" }}
                  >
                    <Img
                      src="images/img_img_400x320.png"
                      className="h-[400px] m-[auto] object-cover rounded-[30px] w-[100%]"
                      alt="IMG Four"
                    />
                    <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[19px] rounded-[30px] shadow-bs12 w-[100%]">
                      <div className="flex flex-col gap-[164px] md:gap-[40px] justify-start my-[10px] w-[100%]">
                        <Img
                          src="images/img_2.png"
                          className="h-[83px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                          alt="One Four"
                        />
                        <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[265px] md:w-[100%] w-[5%]">
                          <Line className="bg-gradient4  h-[64px] w-[2px]" />
                          <Img
                            src="images/img_star3_19x14.svg"
                            className="h-[19px] w-[100%]"
                            alt="StarThree Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[301px] h-[319px] relative md:w-[100%] w-[94%]">
                <div className="absolute flex flex-col inset-x-[0] justify-start mx-[auto] top-[0] w-[99%]">
                  <Img
                    src="images/img_offer_white_a700.svg"
                    className="h-[18px] md:ml-[0] ml-[982px] w-[18px]"
                    alt="offer"
                  />
                  <Img
                    src="images/img_01.svg"
                    className="h-[36px] mr-[1018px] mt-[3px] w-[3%]"
                    alt="One Five"
                  />
                  <Img
                    src="images/img_03_31x27.svg"
                    className="bg-gradient22  h-[31px] md:ml-[0] ml-[1022px] mt-[22px] w-[3%]"
                    alt="Three"
                  />
                  <Img
                    src="images/img_04_30x30.png"
                    className="h-[30px] md:h-[auto] md:ml-[0] ml-[137px] mr-[882px] mt-[146px] object-cover w-[30px]"
                    alt="Four"
                  />
                </div>
                <div className="absolute bottom-[0] flex flex-col gap-[30px] items-center justify-start right-[0] w-[89%]">
                  <Text
                    className="leading-[60.50px] text-center text-gray_900 sm:w-[100%] w-[93%]"
                    as="h4"
                    variant="h4"
                  >
                    <span className="md:text-[48px] text-white_A700 text-[60px] font-dmsans font-bold">
                      Defind, Collect and Sell Super Rate{" "}
                    </span>
                    <span className="md:text-[48px] text-indigo_A700 text-[60px] font-dmsans font-bold">
                      NFT{" "}
                    </span>
                  </Text>
                  <Text
                    className="capitalize font-medium leading-[32.00px] text-center text-gray_400 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </Text>
                  <div className="flex flex-row font-dmsans gap-[12px] items-start justify-center md:w-[100%] w-[38%]">
                    <div className="md:h-[48px] h-[56px] relative w-[49%]">
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient23  blur-[30.00px] bottom-[0] h-[48px] inset-x-[0] mx-[auto] w-[96%]"></div>
                      <Button className="absolute bg-gradient22  cursor-pointer font-bold inset-x-[0] min-w-[170px] mx-[auto] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 top-[0] w-[auto]">
                        Explore now
                      </Button>
                    </div>
                    <Button className="border-[2px] border-solid border-white_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                      Creat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[100px] w-[100%]">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center sm:pr-[20px] pr-[360px] md:pr-[40px] w-[100%]"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-1 h-[184px] items-center justify-end sm:ml-[0] pt-[127px] w-[100%]"
                style={{ backgroundImage: "url('images/img_04.svg')" }}
              >
                <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                  Domain name
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 h-[184px] items-center justify-end sm:ml-[0] pt-[127px] w-[100%]"
                style={{ backgroundImage: "url('images/img_04.svg')" }}
              >
                <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                  Digital art
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 h-[184px] items-center justify-end sm:ml-[0] pt-[127px] w-[100%]"
                style={{ backgroundImage: "url('images/img_04.svg')" }}
              >
                <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                  Style
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 h-[184px] items-center justify-end sm:ml-[0] pt-[127px] w-[100%]"
                style={{ backgroundImage: "url('images/img_04.svg')" }}
              >
                <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                  Music
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 h-[184px] items-center justify-end sm:ml-[0] pt-[127px] w-[100%]"
                style={{ backgroundImage: "url('images/img_04.svg')" }}
              >
                <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                  Sport
                </Button>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start md:ml-[0] ml-[336px] mt-[100px] md:w-[100%] w-[74%]">
            <div className="flex flex-col gap-[40px] items-center justify-start md:w-[100%] w-[99%]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Live Auctions
                </Text>
              </div>
              <div className="h-[512px] relative w-[100%]">
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[97%]">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start sm:ml-[0] p-[20px] rounded-[15px] w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[290px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Sweet Baby #1
                        </Text>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite.svg"
                            className="h-[20px]"
                            alt="favorite"
                          />
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                          <Img
                            src="images/img_2_gray_900.png"
                            className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Two"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-gradient4  h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_84.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Five"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              13h
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              28m
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              36s
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[290px]">
                        <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_9.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_7.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg"
                            />
                            <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Stephan Neal
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-medium text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                5 ETH
                              </Text>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[16px] mt-[3px] w-[15px]"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border-[1px] border-gray_400 border-solid flex items-center justify-center px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
                        leftIcon={
                          <Img
                            src="images/img_bag.svg"
                            className="mr-[10px] text-center"
                            alt="bag"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                          Place Bid
                        </div>
                      </Button>
                    </div>
                    <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start sm:ml-[0] p-[20px] rounded-[15px] w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[290px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Moon Pepe #1
                        </Text>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite.svg"
                            className="h-[20px]"
                            alt="favorite One"
                          />
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                          <Img
                            src="images/img_2_gray_900.png"
                            className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Two One"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-gradient4  h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_85.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Six"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              13h
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              28m
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              36s
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[290px]">
                        <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_22.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_18.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg One"
                            />
                            <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Magnus Perry
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-medium text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                5 ETH
                              </Text>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[16px] mt-[3px] w-[15px]"
                              alt="close One"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A700 flex items-center justify-center px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
                        leftIcon={
                          <Img
                            src="images/img_bag.svg"
                            className="mr-[10px] text-center"
                            alt="bag"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                          Place Bid
                        </div>
                      </Button>
                    </div>
                    <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start sm:ml-[0] p-[20px] rounded-[15px] w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[290px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Giulia Glur #32
                        </Text>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite.svg"
                            className="h-[20px]"
                            alt="favorite Two"
                          />
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                          <Img
                            src="images/img_2_gray_900.png"
                            className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Two Two"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-gradient4  h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_86.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Seven"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              13h
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              28m
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              36s
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[290px]">
                        <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[161px]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_22.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_19.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Two"
                            />
                            <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Frederick Dixon
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-medium text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                5 ETH
                              </Text>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[16px] mt-[3px] w-[15px]"
                              alt="close Two"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border-[1px] border-gray_400 border-solid flex items-center justify-center px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
                        leftIcon={
                          <Img
                            src="images/img_bag.svg"
                            className="mr-[10px] text-center"
                            alt="bag"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                          Place Bid
                        </div>
                      </Button>
                    </div>
                    <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start sm:ml-[0] p-[20px] rounded-[15px] w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[290px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Archetype #588
                        </Text>
                        <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite.svg"
                            className="h-[20px]"
                            alt="favorite Three"
                          />
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                          <Img
                            src="images/img_2_gray_900.png"
                            className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Two Three"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-gradient4  h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_87.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Eight"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              13h
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              28m
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-gray_900 w-[auto]"
                            variant="body11"
                          >
                            :
                          </Text>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-center text-gray_900 w-[auto]"
                              variant="body11"
                            >
                              36s
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[290px]">
                        <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_22.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_20.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Three"
                            />
                            <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Theo Watts
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[22%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-medium text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                5 ETH
                              </Text>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[16px] mt-[3px] w-[15px]"
                              alt="close Three"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border-[1px] border-gray_400 border-solid flex items-center justify-center px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
                        leftIcon={
                          <Img
                            src="images/img_bag.svg"
                            className="mr-[10px] text-center"
                            alt="bag"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                          Place Bid
                        </div>
                      </Button>
                    </div>
                  </List>
                </div>
                <Img
                  src="images/img_nextprev_white_a700.svg"
                  className="absolute h-[48px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="NextPrev"
                />
              </div>
              <Button className="bg-gradient24  items-center justify-center p-[2px] rounded-[23px] text-center">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient24  items-center justify-center p-[2px] rounded-[23px] text-center">
                    See more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[35px] items-center justify-start md:w-[100%] w-[96%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Top seller
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="md:h-[50px] h-[52px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Four"
                            />
                            <div className="absolute bg-gray_700 h-[50px] inset-[0] justify-center m-[auto] rounded-[50%] w-[50px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[64px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[64px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Five"
                            />
                            <div className="absolute bg-gray_700 flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[6px] rounded-[50%] w-[64px]">
                              <div className="bg-gradient24  mb-[2px] p-[3px] rounded-[25px] w-[97%] ">
                                <div className="bg-gray_700 border-solid h-[50px] rounded-[50%] w-[50px]"></div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark One"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus One"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[66px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Six"
                            />
                            <div className="absolute bg-gray_700 h-[66px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Two"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Two"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="md:h-[50px] h-[52px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Seven"
                            />
                            <div className="absolute bg-gray_700 h-[50px] inset-[0] justify-center m-[auto] rounded-[50%] w-[50px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Three"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Three"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[96px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[96px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Eight"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[96px] inset-x-[0] mx-[auto] w-[100%]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Four"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Four"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[64px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[64px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Nine"
                            />
                            <div className="absolute bg-gray_700 h-[64px] inset-[0] justify-center m-[auto] rounded-[50%] w-[64px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Five"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Five"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[66px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Ten"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[66px] inset-x-[0] mx-[auto] w-[100%]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Six"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Six"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[68px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[68px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Eleven"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[68px] inset-x-[0] mx-[auto] rounded-[50%] w-[68px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Seven"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Seven"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[84px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[84px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Twelve"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[84px] inset-x-[0] mx-[auto] rounded-[50%] w-[84px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Eight"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Eight"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[54px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[54px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Thirteen"
                            />
                            <div className="absolute bg-gray_700 h-[54px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[54px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Nine"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Nine"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[66px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Fourteen"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[66px] inset-x-[0] mx-[auto] w-[100%]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Ten"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Ten"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <div className="h-[52px] md:h-[60px] relative w-[28%]">
                          <div
                            className="absolute bg-cover bg-no-repeat h-[50px] md:h-[60px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_50x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_50x50.png"
                              className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                              alt="Bg Fifteen"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[60px] inset-x-[0] mx-[auto] w-[60px]"></div>
                          </div>
                          <Img
                            src="images/img_checkmark_green_500_20x20.svg"
                            className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                            alt="checkmark Eleven"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                            variant="body8"
                          >
                            Roxanne Wallaker
                          </Text>
                          <Text
                            className="font-medium font-poppins text-gray_403 text-left w-[auto]"
                            variant="body11"
                          >
                            1.54 wETH
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                        <Img
                          src="images/img_plus.svg"
                          className="h-[20px] w-[20px]"
                          alt="plus Eleven"
                        />
                        <Text
                          className="font-bold text-gray_400 text-right w-[auto]"
                          variant="body10"
                        >
                          #1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[99%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Explore
              </Text>
              <div className="md:h-[1065px] h-[1128px] mt-[19px] relative w-[100%]">
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[97%]">
                  <List
                    className="flex-col gap-[30px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 h-[508px] items-center justify-end pt-[352px] w-[100%]"
                        style={{ backgroundImage: "url('images/img_03.svg')" }}
                      >
                        <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Img
                              src="images/img_close_gray_400.svg"
                              className="h-[36px] w-[auto]"
                              alt="close Four"
                            />
                            <div className="flex flex-row items-end justify-between w-[100%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body6"
                                >
                                  “The Monkey sad ”
                                </Text>
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  @SolvadorDali
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  Current bid
                                </Text>
                                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                  1.56 wETH
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-center justify-start w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat h-[508px] relative w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_img_507x450.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg.png"
                            className="h-[508px] m-[auto] object-cover rounded-[16px] w-[100%]"
                            alt="Bg Sixteen"
                          />
                          <div className="absolute bg-gray_700 flex flex-col md:gap-[40px] gap-[74px] h-[100%] inset-[0] justify-center m-[auto] pt-[24px] rounded-[16px] w-[100%]">
                            <div className="flex flex-col gap-[166px] md:gap-[40px] justify-start md:ml-[0] ml-[145px] mr-[24px] md:w-[100%] w-[63%]">
                              <div className="flex h-[40px] items-center justify-start md:ml-[0] ml-[241px] w-[40px]">
                                <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                                  <Img
                                    src="images/img_favorite_red_600.svg"
                                    className="h-[20px]"
                                    alt="favorite Four"
                                  />
                                </Button>
                              </div>
                              <Button
                                className="bg-white_A700 flex items-center justify-center min-w-[147px] mr-[134px] px-[16px] py-[12px] rounded-[24px] text-center w-[auto]"
                                leftIcon={
                                  <Img
                                    src="images/img_bag_indigo_a700.svg"
                                    className="mr-[10px] text-center"
                                    alt="bag"
                                  />
                                }
                              >
                                <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-indigo_A700">
                                  Place a bid
                                </div>
                              </Button>
                            </div>
                            <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <Img
                                  src="images/img_close_gray_400.svg"
                                  className="h-[36px] w-[auto]"
                                  alt="close One"
                                />
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                    <Text
                                      className="font-bold text-left text-white_A700 w-[auto]"
                                      variant="body6"
                                    >
                                      “The Monkey sad ”
                                    </Text>
                                    <Text
                                      className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                      variant="body10"
                                    >
                                      @SolvadorDali
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                    <Text
                                      className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                      variant="body10"
                                    >
                                      Current bid
                                    </Text>
                                    <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                      1.56 wETH
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 h-[508px] items-center justify-end pt-[352px] w-[100%]"
                        style={{ backgroundImage: "url('images/img_03.svg')" }}
                      >
                        <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Img
                              src="images/img_close_gray_400.svg"
                              className="h-[36px] w-[auto]"
                              alt="close Two"
                            />
                            <div className="flex flex-row items-end justify-between w-[100%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body6"
                                >
                                  “The Monkey sad ”
                                </Text>
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  @SolvadorDali
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  Current bid
                                </Text>
                                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                  1.56 wETH
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 h-[508px] items-center justify-end pt-[352px] w-[100%]"
                        style={{ backgroundImage: "url('images/img_03.svg')" }}
                      >
                        <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Img
                              src="images/img_close_gray_400.svg"
                              className="h-[36px] w-[auto]"
                              alt="close Five"
                            />
                            <div className="flex flex-row items-end justify-between w-[100%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body6"
                                >
                                  “The Monkey sad ”
                                </Text>
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  @SolvadorDali
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  Current bid
                                </Text>
                                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                  1.56 wETH
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 h-[508px] items-center justify-end pt-[352px] w-[100%]"
                        style={{ backgroundImage: "url('images/img_03.svg')" }}
                      >
                        <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Img
                              src="images/img_close_gray_400.svg"
                              className="h-[36px] w-[auto]"
                              alt="close One One"
                            />
                            <div className="flex flex-row items-end justify-between w-[100%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body6"
                                >
                                  “The Monkey sad ”
                                </Text>
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  @SolvadorDali
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  Current bid
                                </Text>
                                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                  1.56 wETH
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-1 h-[508px] items-center justify-end pt-[352px] w-[100%]"
                        style={{ backgroundImage: "url('images/img_03.svg')" }}
                      >
                        <div className="bg-black_900_26 flex items-center justify-start p-[24px] sm:px-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Img
                              src="images/img_close_gray_400.svg"
                              className="h-[36px] w-[auto]"
                              alt="close Two One"
                            />
                            <div className="flex flex-row items-end justify-between w-[100%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body6"
                                >
                                  “The Monkey sad ”
                                </Text>
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  @SolvadorDali
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                                <Text
                                  className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                                  variant="body10"
                                >
                                  Current bid
                                </Text>
                                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                                  1.56 wETH
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="absolute flex flex-col gap-[8px] inset-x-[0] justify-start mx-[auto] top-[0] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] mr-[45px] w-[100%]">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[16px] items-center justify-center md:w-[100%] w-[auto]">
                      <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[1.40px] uppercase w-[auto]">
                        3D model{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[151px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        Anime/manga{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[131px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        Cyber Punk{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[112px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        pixel art{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[84px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        music{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        abstract{" "}
                      </Button>
                      <Button className="bg-gray_901 border-[1px] border-gray_700 border-solid cursor-pointer font-bold min-w-[99px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_700 tracking-[1.40px] uppercase w-[auto]">
                        2D Arts{" "}
                      </Button>
                    </div>
                    <Button
                      className="bg-gray_901 border-[1px] border-gray_700 border-solid flex items-center justify-center pl-[20px] pr-[16px] py-[9px] rounded-[21px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="text-center"
                          alt="arrow_down"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                        Recently create
                      </div>
                    </Button>
                  </div>
                  <div className="flex items-start justify-start md:ml-[0] ml-[1233px] w-[auto]">
                    <div className="h-[342px] relative w-[100%]">
                      <div className="bg-gray_901 border-[1px] border-gray_700 border-solid h-[342px] m-[auto] rounded-[16px] shadow-bs3 w-[100%]"></div>
                      <div className="absolute flex flex-col gap-[11px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[95%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[12px] text-gray_700 text-left w-[auto]"
                            variant="body8"
                          >
                            Sort by
                          </Text>
                          <div className="flex flex-col gap-[2px] items-start justify-start mt-[4px] w-[auto]">
                            <CheckBox
                              className="font-bold text-[14px] text-left text-white_A700"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              label="Recently added"
                              name="Recentlyadded"
                            ></CheckBox>
                            <div className="flex h-[38px] md:h-[auto] items-center justify-start pl-[12px] pr-[8px] py-[6px] w-[210px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Price: Low to Hight
                              </Text>
                            </div>
                            <Input
                              className="font-bold pl-[12px] pr-[8px] py-[6px] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                              wrapClassName="bg-gray_700 md:h-[auto] rounded-[6px] sm:h-[auto] w-[210px]"
                              name="PriceHight"
                              placeholder="Price: Hight to Low"
                            ></Input>
                            <div className="flex h-[38px] md:h-[auto] items-center justify-start pl-[12px] pr-[8px] py-[6px] w-[210px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Auction ending soon
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[89%]">
                          <Text
                            className="font-bold text-gray_700 text-left w-[auto]"
                            variant="body8"
                          >
                            Option
                          </Text>
                          <div className="flex flex-col gap-[2px] items-start justify-start mt-[4px] w-[186px]">
                            <div className="flex flex-row gap-[24px] h-[38px] md:h-[auto] items-center justify-between w-[186px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Show lazy minted
                              </Text>
                              <Switch
                                onColor="#3749e8"
                                offColor="#e5e5e5"
                                onHandleColor="#ffffff"
                                offHandleColor="#3749e8"
                                value={true}
                                className="w-[auto]"
                              />
                            </div>
                            <div className="flex flex-row h-[38px] md:h-[auto] items-center justify-between w-[186px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Verified only
                              </Text>
                              <Switch
                                onColor="#3749e8"
                                offColor="#e5e5e5"
                                onHandleColor="#ffffff"
                                offHandleColor="#3749e8"
                                value={false}
                                className="w-[auto]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient24  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient24  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[99%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Popular collection
              </Text>
              <div className="sm:h-[1497px] h-[343px] md:h-[751px] mt-[35px] relative w-[100%]">
                <List
                  className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-start m-[auto] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_img_gray_700_154x282.svg"
                        className="h-[154px] w-[auto]"
                        alt="IMG Twenty"
                      />
                      <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="h-[44px] relative w-[32%]">
                            <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                            <Img
                              src="images/img_checkmark_green_500_20x20.svg"
                              className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                              alt="checkmark Twelve"
                            />
                          </div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Moonbirds
                          </Text>
                        </div>
                        <Text
                          className="font-bold text-center text-green_500 w-[auto]"
                          variant="body11"
                        >
                          26 Items
                        </Text>
                      </div>
                      <Line className="bg-gray_700_7e h-[1px] mt-[16px] w-[100%]" />
                      <div className="flex flex-row items-end justify-between mt-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[3px] p-[2px] rounded-[50%] w-[16px]">
                                <Img
                                  src="images/img_mail.svg"
                                  className="h-[10px] w-[auto]"
                                  alt="mail"
                                />
                              </div>
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                2.24 ETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal mt-[3px] not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              $ 3,658.00
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[7px] p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite_gray_700.svg"
                            className="h-[20px]"
                            alt="favorite Five"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_img_gray_700_154x282.svg"
                        className="h-[154px] w-[auto]"
                        alt="IMG TwentyOne"
                      />
                      <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="h-[44px] relative w-[32%]">
                            <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                            <Img
                              src="images/img_checkmark_green_500_20x20.svg"
                              className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                              alt="checkmark Thirteen"
                            />
                          </div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Moonbirds
                          </Text>
                        </div>
                        <Text
                          className="font-bold text-center text-green_500 w-[auto]"
                          variant="body11"
                        >
                          26 Items
                        </Text>
                      </div>
                      <Line className="bg-gray_700_7e h-[1px] mt-[16px] w-[100%]" />
                      <div className="flex flex-row items-end justify-between mt-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[3px] p-[2px] rounded-[50%] w-[16px]">
                                <Img
                                  src="images/img_mail.svg"
                                  className="h-[10px] w-[auto]"
                                  alt="mail One"
                                />
                              </div>
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                2.24 ETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal mt-[3px] not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              $ 3,658.00
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[7px] p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite_gray_700.svg"
                            className="h-[20px]"
                            alt="favorite Six"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_img_gray_700_154x282.svg"
                        className="h-[154px] w-[auto]"
                        alt="IMG TwentyTwo"
                      />
                      <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="h-[44px] relative w-[32%]">
                            <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                            <Img
                              src="images/img_checkmark_green_500_20x20.svg"
                              className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                              alt="checkmark Fourteen"
                            />
                          </div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Moonbirds
                          </Text>
                        </div>
                        <Text
                          className="font-bold text-center text-green_500 w-[auto]"
                          variant="body11"
                        >
                          26 Items
                        </Text>
                      </div>
                      <Line className="bg-gray_700_7e h-[1px] mt-[16px] w-[100%]" />
                      <div className="flex flex-row items-end justify-between mt-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[3px] p-[2px] rounded-[50%] w-[16px]">
                                <Img
                                  src="images/img_mail.svg"
                                  className="h-[10px] w-[auto]"
                                  alt="mail Two"
                                />
                              </div>
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                2.24 ETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal mt-[3px] not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              $ 3,658.00
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[7px] p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite_gray_700.svg"
                            className="h-[20px]"
                            alt="favorite Seven"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_img_gray_700_154x282.svg"
                        className="h-[154px] w-[auto]"
                        alt="IMG TwentyThree"
                      />
                      <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="h-[44px] relative w-[32%]">
                            <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                            <Img
                              src="images/img_checkmark_green_500_20x20.svg"
                              className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                              alt="checkmark Fifteen"
                            />
                          </div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Moonbirds
                          </Text>
                        </div>
                        <Text
                          className="font-bold text-center text-green_500 w-[auto]"
                          variant="body11"
                        >
                          26 Items
                        </Text>
                      </div>
                      <Line className="bg-gray_700_7e h-[1px] mt-[16px] w-[100%]" />
                      <div className="flex flex-row items-end justify-between mt-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[3px] p-[2px] rounded-[50%] w-[16px]">
                                <Img
                                  src="images/img_mail.svg"
                                  className="h-[10px] w-[auto]"
                                  alt="mail Three"
                                />
                              </div>
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                2.24 ETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal mt-[3px] not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              $ 3,658.00
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[7px] p-[10px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_favorite_gray_700.svg"
                            className="h-[20px]"
                            alt="favorite Eight"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
                <Img
                  src="images/img_nextpre_gray_700.svg"
                  className="absolute h-[48px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="NextPre"
                />
              </div>
              <Button className="bg-gradient24  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient24  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                    See more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[96%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize leading-[80.00px] text-black_900 text-left"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[48px] text-white_A700 text-[64px] font-dmsans font-bold">
                    Creat and Sell
                    <br />
                    Your
                  </span>
                  <span className="md:text-[48px] text-black_900 text-[64px] font-dmsans font-bold">
                    {" "}
                  </span>
                  <span className="md:text-[48px] text-indigo_A700 text-[64px] font-dmsans font-bold">
                    NFTs
                  </span>
                </Text>
                <Text
                  className="font-bold leading-[26.00px] mt-[16px] text-gray_400 text-left sm:w-[100%] w-[81%]"
                  variant="body6"
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet{" "}
                </Text>
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start mt-[40px] md:w-[100%] w-[71%]">
                  <div className="md:h-[48px] h-[56px] relative sm:w-[100%] w-[45%]">
                    <div className="absolute backdrop-opacity-[0.5] bg-gradient23  blur-[30.00px] bottom-[0] h-[48px] inset-x-[0] mx-[auto] w-[96%]"></div>
                    <Button className="absolute bg-gradient22  cursor-pointer font-bold inset-x-[0] min-w-[170px] mx-[auto] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 top-[0] w-[auto]">
                      Creat Item
                    </Button>
                  </div>
                  <Button className="border-[1px] border-solid border-white_A700 cursor-pointer font-bold min-w-[189px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                    Discover more
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_img_gray_700_815x743.svg"
                className="h-[815px] w-[auto]"
                alt="IMG TwentyFour"
              />
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center md:ml-[0] ml-[105px] mt-[80px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mb-[99px] mt-[96px] mx-[auto] w-[74%]">
              <ul className="flex flex-col items-start justify-start md:w-[100%] w-[22%] common-column-list">
                <li className="w-[63%]">
                  <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-start">
                    <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className=""
                        alt="lightbulb One"
                      />
                    </Button>
                    <Text
                      className="capitalize text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Binasea
                    </Text>
                  </div>
                </li>
                <li className="mt-[18px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal leading-[24.00px] not-italic text-[16px] text-gray_400 text-left"
                    href="javascript:"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </a>
                </li>
                <li className="mt-[24px] w-[100%]">
                  <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-between">
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate90}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate91}
                    >
                      <Img
                        src="images/img_facebook.svg"
                        className="h-[24px]"
                        alt="facebook"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img src="images/img_send.svg" className="" alt="send" />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_vector.svg"
                        className=""
                        alt="Vector"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[7px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_music.svg"
                        className="h-[24px]"
                        alt="music Two"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_user_white_a700.svg"
                        className=""
                        alt="user"
                      />
                    </Button>
                  </div>
                </li>
                <li className="mt-[33px] w-[auto]">
                  <a
                    className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_700 text-left"
                    href="javascript:"
                  >
                    Copyright © 2022 Avitex. All rights reserved.
                  </a>
                </li>
              </ul>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[65%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body7"
                  >
                    Maketplace
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_400 text-left"
                        variant="body10"
                      >
                        Explore
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        Item Detail
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        Live Auditon
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body7"
                  >
                    Stats
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_400 text-left"
                        variant="body10"
                      >
                        Ranking
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        Ativity
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        Auther
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body7"
                  >
                    Resoure
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_400 text-left"
                        variant="body10"
                      >
                        Blogs
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        Help and Center
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_400 text-left"
                        href="javascript:"
                      >
                        FaQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[104px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body7"
                  >
                    My account
                  </Text>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Profile
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      My wallet
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[34%]">
                  <Text
                    className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                    variant="body7"
                  >
                    Subscribe Us
                  </Text>
                  <Text
                    className="font-normal font-urbanist leading-[22.00px] mt-[21px] not-italic text-gray_400 text-left"
                    variant="body10"
                  >
                    Signup for our newsletter to get the latest news
                    <br />
                    in your inbox.
                  </Text>
                  <div className="flex flex-row font-dmsans items-center justify-between mt-[16px] outline outline-[1px] outline-bluegray_200_6c pl-[20px] rounded-[23px] w-[100%]">
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Info@yourgmail.com
                    </Text>
                    <div className="bg-indigo_A700 flex h-[46px] items-center justify-start outline outline-[1px] outline-indigo_A700 p-[13px] rounded-bl-[0] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[46px]">
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Homepage3DarkPage;
