import React from "react";

import {
  Button,
  Img,
  Text,
  List,
  Line,
  CheckBox,
  Input,
  Switch,
} from "components";

const Homepage2DarkPage = () => {
  function handleNavigate94() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate95() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[6907px] items-start justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0104homepage2dark.png')" }}
      >
        <div className="flex flex-col items-center justify-start overflow-auto md:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start md:w-[100%] w-[95%]">
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
            <div className="md:h-[1024px] h-[732px] relative md:w-[100%] w-[74%]">
              <div className="absolute backdrop-opacity-[0.5] blur-[33.00px] flex md:flex-col flex-row md:gap-[40px] gap-[90px] h-[100%] inset-y-[0] items-start justify-center my-[auto] right-[7%] w-[66%]">
                <Img
                  src="images/img_graphic_indigo_a700.svg"
                  className="h-[246px] md:mt-[0] mt-[128px] w-[auto]"
                  alt="Graphic"
                />
                <div
                  className="bg-cover bg-no-repeat h-[732px] md:h-[738px] relative md:w-[100%] w-[64%]"
                  style={{
                    backgroundImage: "url('images/img_img_732x585.png')",
                  }}
                >
                  <Img
                    src="images/img_bg_732x585.png"
                    className="absolute h-[732px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                    alt="Bg"
                  />
                  <div className="absolute bg-gray_400 h-[738px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                </div>
              </div>
              <div className="absolute bottom-[17%] flex flex-col md:gap-[40px] gap-[60px] items-start justify-start left-[0] w-[45%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <Text
                    className="font-poppins font-semibold leading-[80.00px] text-black_900 text-left w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    <span className="md:text-[48px] text-white_A700 text-[70px] font-dmsans font-bold">
                      Defind, Collect and Sell Super
                    </span>
                    <span className="md:text-[48px] text-gray_900 text-[70px] font-dmsans font-bold">
                      {" "}
                    </span>
                    <span className="md:text-[48px] text-white_A700 text-[70px] font-dmsans font-bold">
                      Rate NFT
                    </span>
                    <span className="md:text-[48px] text-black_900 text-[70px] font-dmsans font-bold">
                      {" "}
                    </span>
                  </Text>
                  <Text
                    className="font-dmsans font-normal leading-[26.00px] not-italic text-gray_400 text-left w-[100%]"
                    variant="body6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[57%]">
                  <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                    Explore now
                  </Button>
                  <Button className="border-[2px] border-solid border-white_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                    Creat
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-[12%] flex items-center justify-start right-[0] shadow-bs8 w-[32%]">
                <div className="overflow-x-auto w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[508px] md:h-[962px] relative w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_img_507x450.png')",
                    }}
                  >
                    <Img
                      src="images/img_bg.png"
                      className="h-[508px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="Bg One"
                    />
                    <div className="absolute bg-gray_700 flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[159px] sm:px-[20px] md:px-[40px] w-[100%]">
                      <div className="bg-black_900_7f flex flex-col gap-[5px] items-start justify-start mb-[69px] mt-[427px] p-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="h-[36px] md:ml-[0] ml-[12px] relative w-[17%]">
                          <div className="absolute h-[36px] inset-y-[0] left-[0] my-[auto] w-[75%]">
                            <div
                              className="absolute bg-cover bg-no-repeat h-[36px] inset-y-[0] left-[0] my-[auto] rounded-[50%] shadow-bs10 w-[36px]"
                              style={{
                                backgroundImage: "url('images/img_avatar.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_36x36.png"
                                className="h-[36px] m-[auto] rounded-[50%] w-[36px]"
                                alt="Bg Two"
                              />
                              <div className="absolute bg-gray_400 h-[36px] inset-[0] justify-center m-[auto] rounded-[50%] shadow-bs10 w-[36px]"></div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat h-[36px] inset-y-[0] my-[auto] right-[0] rounded-[50%] shadow-bs10 w-[36px]"
                              style={{
                                backgroundImage: "url('images/img_avatar.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_36x36.png"
                                className="h-[36px] m-[auto] rounded-[50%] w-[36px]"
                                alt="Bg Three"
                              />
                              <div className="absolute bg-gray_400 h-[36px] inset-[0] justify-center m-[auto] w-[36px]"></div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat h-[36px] inset-y-[0] my-[auto] right-[0] rounded-[50%] shadow-bs10 w-[36px]"
                            style={{
                              backgroundImage: "url('images/img_avatar.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_36x36.png"
                              className="h-[36px] m-[auto] rounded-[50%] w-[36px]"
                              alt="Bg Four"
                            />
                            <div className="absolute bg-gray_400 h-[36px] inset-[0] justify-center m-[auto] w-[36px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-between mb-[12px] md:ml-[0] ml-[12px] md:w-[100%] w-[95%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              “The Monkey sad ”
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              @SolvadorDali
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_90 w-[auto]"
                              variant="body10"
                            >
                              Current bid
                            </Text>
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[16px] text-[20px] text-center text-indigo_A700 w-[auto]">
                              1.56 wETH
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[35px] justify-start md:w-[100%] w-[76%]">
              <Text
                className="capitalize md:ml-[0] ml-[26px] text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                All categories
              </Text>
              <div className="h-[184px] md:h-[398px] sm:h-[826px] relative w-[100%]">
                <List
                  className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-center m-[auto] w-[98%]"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[184px] items-center justify-end pt-[127px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                      Digital art
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex h-[184px] items-center justify-end pt-[127px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                      Style
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex h-[184px] items-center justify-end pt-[127px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                      Music
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex h-[184px] items-center justify-end pt-[127px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <Button className="bg-black_900_14 cursor-pointer font-bold min-w-[330px] py-[15px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-[20px] text-center text-white_A700 w-[auto]">
                      Sport
                    </Button>
                  </div>
                </List>
                <Img
                  src="images/img_nextprev_white_a700.svg"
                  className="absolute h-[40px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="NextPrev"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start mt-[99px] md:w-[100%] w-[auto]">
            <div className="flex flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[67%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Live Auctions
              </Text>
              <div className="flex flex-row items-end justify-evenly w-[auto]">
                <Text
                  className="font-bold mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                  variant="body6"
                >
                  Explore
                </Text>
                <Img
                  src="images/img_arrowright_white_a700_40x40.svg"
                  className="h-[40px] w-[40px]"
                  alt="arrowright"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[auto]">
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
                    <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-gradient4  h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_34.svg"
                        className="h-[25px] w-[100%]"
                        alt="StarThree"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
                    >
                      <Img
                        src="images/img_bg_7.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg Five"
                      />
                      <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                        variant="body10"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Hakunamatata
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body11"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        5 ETH
                      </Text>
                      <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[2px] p-[2px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[10px] w-[auto]"
                          alt="mail"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="bg-indigo_A700 flex items-center justify-center outline outline-[1px] outline-indigo_A700 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[auto]">
                <div className="flex flex-row items-center justify-between w-[290px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Sweet Baby #1
                  </Text>
                  <Button className="bg-red_600 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_favorite_white_a700.svg"
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
                    <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-gradient4  h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_35.svg"
                        className="h-[25px] w-[100%]"
                        alt="StarThree One"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
                    >
                      <Img
                        src="images/img_bg_7.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg Six"
                      />
                      <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                        variant="body10"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Hakunamatata
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body11"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        5 ETH
                      </Text>
                      <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[2px] p-[2px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[10px] w-[auto]"
                          alt="mail One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center outline outline-[1px] outline-gray_700 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[auto]">
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
                      alt="favorite Two"
                    />
                  </Button>
                </div>
                <div
                  className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative rounded-[15px] w-[290px]"
                  style={{ backgroundImage: "url('images/img_04.svg')" }}
                >
                  <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                    <Img
                      src="images/img_2_gray_900.png"
                      className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="Two Two"
                    />
                    <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-gradient4  h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_36.svg"
                        className="h-[25px] w-[100%]"
                        alt="StarThree Two"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
                    >
                      <Img
                        src="images/img_bg_7.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg Seven"
                      />
                      <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                        variant="body10"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Hakunamatata
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body11"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        5 ETH
                      </Text>
                      <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[2px] p-[2px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[10px] w-[auto]"
                          alt="mail Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center outline outline-[1px] outline-gray_700 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[auto]">
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
                    <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-gradient4  h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_37.svg"
                        className="h-[25px] w-[100%]"
                        alt="StarThree Three"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
                    >
                      <Img
                        src="images/img_bg_7.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg Eight"
                      />
                      <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                        variant="body10"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Hakunamatata
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body11"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        5 ETH
                      </Text>
                      <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[2px] p-[2px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[10px] w-[auto]"
                          alt="mail Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center outline outline-[1px] outline-gray_700 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[auto]">
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
                      alt="favorite Four"
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
                      alt="Two Four"
                    />
                    <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-gradient4  h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_38.svg"
                        className="h-[25px] w-[100%]"
                        alt="StarThree Four"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
                    >
                      <Img
                        src="images/img_bg_7.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg Nine"
                      />
                      <div className="absolute bg-gray_700 h-[40px] inset-[0] justify-center m-[auto] rounded-[50%] w-[40px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                        variant="body10"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Hakunamatata
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body11"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row items-center justify-evenly md:w-[100%] w-[97%]">
                      <Text
                        className="capitalize font-medium text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        5 ETH
                      </Text>
                      <div className="bg-indigo_A700 flex h-[16px] items-center justify-end my-[5px] p-[2px] rounded-[50%] w-[16px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[10px] w-[auto]"
                          alt="mail Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center outline outline-[1px] outline-gray_700 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
            <Img
              src="images/img_nextpre_white_a700.svg"
              className="h-[16px] w-[148px]"
              alt="Nextpre"
            />
          </div>
          <div className="flex flex-col gap-[28px] items-center justify-start mt-[100px] md:w-[100%] w-[70%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Create and sell NFTs
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-end justify-between w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
                orientation="horizontal"
              >
                <div className="bg-gradient2  flex items-center justify-start sm:ml-[0] sm:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_volume.svg"
                          className="h-[28px]"
                          alt="volume"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Set up your wallet
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_400 w-[100%]"
                      variant="body10"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient2  border-[2px] border-indigo_A700 border-solid flex items-center justify-start mb-[12px] sm:ml-[0] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_settings.svg"
                          className="h-[28px]"
                          alt="settings"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Create Your collection
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_400 w-[100%]"
                      variant="body10"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient2  flex items-center justify-start sm:ml-[0] sm:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_user.svg"
                          className="h-[28px]"
                          alt="user"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Add Your NFTs
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_400 w-[100%]"
                      variant="body10"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-gradient2  flex md:flex-1 items-center justify-start md:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 md:w-[100%] w-[24%]">
                <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                    <div className="bg-indigo_A700 flex h-[50px] items-center justify-start p-[11px] rounded-[12px] w-[50px]">
                      <div className="flex h-[28px] items-center justify-end w-[28px]">
                        <div className="flex h-[25px] items-center justify-start w-[25px]">
                          <Img
                            src="images/img_star2_25x25.svg"
                            className="h-[25px] outline outline-[0.5px] outline-white_A700 rounded-bl-[1px] rounded-br-[1px] w-[25px]"
                            alt="StarTwo"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      List them for sale
                    </Text>
                  </div>
                  <Text
                    className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_400 w-[100%]"
                    variant="body10"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start mt-[100px] md:w-[100%] w-[74%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[99%]">
              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Hot Picks
                </Text>
                <Img
                  src="images/img_fire.svg"
                  className="h-[32px] w-[32px]"
                  alt="fire"
                />
              </div>
              <div className="md:h-[1541px] h-[1600px] mt-[23px] relative w-[100%]">
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                  <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Avidlines #14843
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Five"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_40x40.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_40x40.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Ten"
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
                              Neville Gutierrez
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Five"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_39.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Five"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Five"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Archetype #597
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Six"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_3.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_1.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Eleven"
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
                              Stuart Lawrence
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Six"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_40.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Six"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Six"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Chimera #977
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Seven"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_4.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_2.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Twelve"
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
                              Herbert Nunez
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Seven"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_41.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Seven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Seven"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Sweet Baby #1
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Eight"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_5.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_3.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Thirteen"
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
                              Heath Moody
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Eight"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_42.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Eight"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Eight"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Cool Cat 3D #2538
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Nine"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_6.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_4.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Fourteen"
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
                              Nadia Fleming
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Nine"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_43.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Nine"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Nine"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Doodle #9972
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Ten"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_7.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_5.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Fifteen"
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
                              Winthrop Hudson
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Ten"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_44.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Ten"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Ten"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Slow Mo #127
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Eleven"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_8.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_6.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Sixteen"
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
                              Jillian Parkinson
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Eleven"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_45.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Eleven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Eleven"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Kick Shock #1
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Twelve"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_9.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_7.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Seventeen"
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
                              Bryant Buckley
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Twelve"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_46.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Twelve"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Twelve"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Night ines #1243
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Thirteen"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_10.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_8.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Eighteen"
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
                              Louie Jackson
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Thirteen"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_47.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Thirteen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Thirteen"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Archetype #597
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Fourteen"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_11.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_9.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Nineteen"
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
                              Dennis Rhodes
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Fourteen"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_48.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Fourteen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Fourteen"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Militaire Elec #527
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Fifteen"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_12.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_10.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg Twenty"
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
                              Max Robinson
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Fifteen"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_49.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Fifteen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Fifteen"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Sweet Baby #1
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center p-[10px] rounded-[50%] w-[44px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite Sixteen"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                            style={{
                              backgroundImage: "url('images/img_img_13.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_11.png"
                              className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                              alt="Bg TwentyOne"
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
                              Harding Cobb
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                        style={{ backgroundImage: "url('images/img_04.svg')" }}
                      >
                        <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                          <Img
                            src="images/img_02.svg"
                            className="h-[109px] w-[auto]"
                            alt="Two Sixteen"
                          />
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                            <Line className="bg-white_A700 h-[85px] w-[2px]" />
                            <Img
                              src="images/img_star3_50.svg"
                              className="h-[30px] mt-[5px] w-[100%]"
                              alt="StarThree Sixteen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail Sixteen"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              ETH
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              0.0041
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                          Purchase
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[8px] inset-x-[0] justify-start mx-[auto] top-[0] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] mr-[49px] w-[100%]">
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
                    <div className="bg-gray_901 border-[1px] border-gray_700 border-solid flex flex-col gap-[11px] items-center justify-center p-[8px] rounded-[16px] shadow-bs3 w-[100%]">
                      <div className="flex flex-col justify-start mt-[14px] w-[100%]">
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
                      <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] w-[89%]">
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
              <Button className="bg-gradient3  items-center justify-center md:ml-[0] ml-[638px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient3  items-center justify-center md:ml-[0] ml-[638px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[35px] items-center justify-start md:w-[100%] w-[99%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Popular collection
                </Text>
                <div className="flex flex-row items-end justify-evenly sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold mb-[3px] mt-[9px] text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Explore
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[39px] w-[40px]"
                    alt="arrowright One"
                  />
                </div>
              </div>
              <div className="sm:h-[1462px] h-[343px] md:h-[716px] relative w-[100%]">
                <List
                  className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-start m-[auto] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_img_gray_700.svg"
                          className="h-[154px] w-[auto]"
                          alt="IMG TwentyOne"
                        />
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="h-[44px] relative w-[30%]">
                              <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                                alt="checkmark"
                              />
                            </div>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Fabian Terry
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-green_500 w-[auto]"
                            variant="body11"
                          >
                            26 Items
                          </Text>
                        </div>
                        <Line className="bg-gray_700_7e h-[1px] w-[100%]" />
                        <div className="flex flex-row items-end justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_close.svg"
                                className="h-[16px] w-[15px]"
                                alt="close"
                              />
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                33.2 wETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400_a2 text-right w-[auto]"
                              variant="body10"
                            >
                              $ 92,025
                            </Text>
                          </div>
                          <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[8px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_favorite_gray_700.svg"
                              className="h-[20px]"
                              alt="favorite Seventeen"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_img_gray_700.svg"
                          className="h-[154px] w-[auto]"
                          alt="IMG TwentyTwo"
                        />
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="h-[44px] relative w-[32%]">
                              <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                                alt="checkmark One"
                              />
                            </div>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Cassandra
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-green_500 w-[auto]"
                            variant="body11"
                          >
                            26 Items
                          </Text>
                        </div>
                        <Line className="bg-gray_700_7e h-[1px] w-[100%]" />
                        <div className="flex flex-row items-end justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_close.svg"
                                className="h-[16px] w-[15px]"
                                alt="close One"
                              />
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                33.2 wETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400_a2 text-right w-[auto]"
                              variant="body10"
                            >
                              $ 92,025
                            </Text>
                          </div>
                          <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[8px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_favorite_gray_700.svg"
                              className="h-[20px]"
                              alt="favorite Eighteen"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_img_gray_700.svg"
                          className="h-[154px] w-[auto]"
                          alt="IMG TwentyThree"
                        />
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="h-[44px] relative w-[27%]">
                              <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                                alt="checkmark Two"
                              />
                            </div>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Quinn Herrera
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-green_500 w-[auto]"
                            variant="body11"
                          >
                            26 Items
                          </Text>
                        </div>
                        <Line className="bg-gray_700_7e h-[1px] w-[100%]" />
                        <div className="flex flex-row items-end justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_close.svg"
                                className="h-[16px] w-[15px]"
                                alt="close Two"
                              />
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                33.2 wETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400_a2 text-right w-[auto]"
                              variant="body10"
                            >
                              $ 92,025
                            </Text>
                          </div>
                          <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[8px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_favorite_gray_700.svg"
                              className="h-[20px]"
                              alt="favorite Nineteen"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="bg-gray_900 border-[1px] border-solid border-white_A700_19 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_img_gray_700.svg"
                          className="h-[154px] w-[auto]"
                          alt="IMG TwentyFour"
                        />
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="h-[44px] relative w-[26%]">
                              <div className="absolute bg-gray_700 h-[44px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44px]"></div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="absolute bottom-[0] h-[16px] right-[0] w-[16px]"
                                alt="checkmark Three"
                              />
                            </div>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Humbert Watts
                            </Text>
                          </div>
                          <Text
                            className="font-bold text-center text-green_500 w-[auto]"
                            variant="body11"
                          >
                            26 Items
                          </Text>
                        </div>
                        <Line className="bg-gray_700_7e h-[1px] w-[100%]" />
                        <div className="flex flex-row items-end justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_close.svg"
                                className="h-[16px] w-[15px]"
                                alt="close Three"
                              />
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                33.2 wETH
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400_a2 text-right w-[auto]"
                              variant="body10"
                            >
                              $ 92,025
                            </Text>
                          </div>
                          <Button className="border-[1px] border-gray_700 border-solid flex h-[40px] items-center justify-center mt-[8px] p-[10px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_favorite_gray_700.svg"
                              className="h-[20px]"
                              alt="favorite Twenty"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <Img
                  src="images/img_nextpre.svg"
                  className="absolute h-[47px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="NextPre One"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start mt-[100px] md:w-[100%] w-[70%]">
            <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Top seller
                </Text>
              </div>
              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[66%]">
                      <div className="md:h-[50px] h-[52px] relative w-[28%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyTwo"
                          />
                          <div className="absolute bg-gray_700 h-[50px] inset-[0] justify-center m-[auto] rounded-[50%] w-[50px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
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
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                  <div className="bg-gradient2  hover:border-[1px] border-[1px] hover:border-indigo_A700 border-indigo_A700 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[58%]">
                      <div className="h-[52px] md:h-[64px] relative w-[32%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[64px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyThree"
                          />
                          <div className="absolute bg-gray_700 h-[64px] inset-[0] justify-center m-[auto] rounded-[50%] w-[64px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Five"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Winifred Clem
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #2
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[68%]">
                      <div className="h-[52px] md:h-[66px] relative w-[27%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyFour"
                          />
                          <div className="absolute bg-gray_700 h-[66px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Six"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Angelica Sherman
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #3
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[56%]">
                      <div className="md:h-[50px] h-[52px] relative w-[33%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyFive"
                          />
                          <div className="absolute bg-gray_700 h-[50px] inset-[0] justify-center m-[auto] rounded-[50%] w-[50px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Seven"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Hayden Yates
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #4
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[58%]">
                      <div className="h-[52px] md:h-[96px] relative w-[32%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[96px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentySix"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[96px] inset-x-[0] mx-[auto] w-[100%]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Eight"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Rowena Tillery
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #5
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="h-[52px] md:h-[64px] relative w-[28%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[64px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentySeven"
                          />
                          <div className="absolute bg-gray_700 h-[64px] inset-[0] justify-center m-[auto] rounded-[50%] w-[64px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Nine"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Roderick Norman
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="font-bold text-gray_400 text-right w-[auto]"
                        variant="body10"
                      >
                        #6
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="h-[52px] md:h-[66px] relative w-[29%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyEight"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[66px] inset-x-[0] mx-[auto] w-[100%]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Ten"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Virginia Richards
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #7
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="h-[52px] md:h-[68px] relative w-[31%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[68px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg TwentyNine"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[68px] inset-x-[0] mx-[auto] rounded-[50%] w-[68px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Eleven"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Barbara Moore
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #8
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="h-[52px] md:h-[84px] relative w-[29%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[84px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg Thirty"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[84px] inset-x-[0] mx-[auto] rounded-[50%] w-[84px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Twelve"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Virginia Richards
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #9
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="h-[52px] md:h-[54px] relative w-[30%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[54px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg ThirtyOne"
                          />
                          <div className="absolute bg-gray_700 h-[54px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[54px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Thirteen"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Colin Fennimore
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #10
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[72%]">
                      <div className="h-[52px] md:h-[66px] relative w-[26%]">
                        <div
                          className="absolute bg-cover bg-no-repeat h-[50px] md:h-[66px] inset-y-[0] left-[0] my-[auto] w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg ThirtyTwo"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[66px] inset-x-[0] mx-[auto] w-[100%]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[20px]"
                          alt="checkmark Fourteen"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Ebenezer Anderson
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #11
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs2 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-start w-[auto]">
                        <div
                          className="bg-cover bg-no-repeat h-[50px] md:h-[60px] relative w-[50px]"
                          style={{
                            backgroundImage: "url('images/img_img_50x50.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_50x50.png"
                            className="h-[50px] m-[auto] rounded-[50%] w-[50px]"
                            alt="Bg ThirtyThree"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[60px] inset-x-[0] mx-[auto] w-[60px]"></div>
                        </div>
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Fifteen"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Simona Davidson
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          1.56 wETH
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
                        #12
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Explore
              </Text>
              <div className="flex items-start justify-start mt-[19px] md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-center md:w-[100%] w-[auto]">
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
              </div>
              <div className="flex items-start justify-start mt-[40px] md:w-[100%] w-[auto]">
                <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-start pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row gap-[21px] inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
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
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Four"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-start pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            “Phyllis Lowe”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            @Samson Hartley
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Five"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-start pt-[260px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                      <Button className="bg-white_A700 cursor-pointer font-normal min-w-[120px] md:ml-[0] ml-[14px] mr-[196px] not-italic px-[12px] py-[6px] rounded-[8px] shadow-bs4 text-[12px] text-center text-gray_900 w-[auto]">
                        Creator: Solvador
                      </Button>
                      <div className="md:h-[110px] h-[128px] relative w-[100%]">
                        <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              “Camille Rogers”
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body10"
                            >
                              @SolvadorDali
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body10"
                            >
                              Current bid
                            </Text>
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                              1.56wETH
                            </Button>
                          </div>
                        </div>
                        <Img
                          src="images/img_close_gray_400.svg"
                          className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                          alt="close Six"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-start pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            “Skye Carter”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            @Russell Loxley
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Seven"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-end pt-[260px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                      <Button className="bg-white_A700 cursor-pointer font-normal min-w-[136px] md:ml-[0] ml-[13px] mr-[180px] not-italic px-[12px] py-[6px] rounded-[8px] shadow-bs4 text-[12px] text-center text-gray_900 w-[auto]">
                        Creator: Daniel Rose
                      </Button>
                      <div className="md:h-[110px] h-[128px] relative w-[100%]">
                        <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              “Herbert Little”
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body10"
                            >
                              @Sidney Hall
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body10"
                            >
                              Current bid
                            </Text>
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                              1.56wETH
                            </Button>
                          </div>
                        </div>
                        <Img
                          src="images/img_close_gray_400.svg"
                          className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                          alt="close Eight"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-end pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row gap-[12px] inset-x-[0] items-center justify-start mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            “Valentine Romero”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            @IrisHayward
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Nine"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-end pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row gap-[36px] inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            “Julia Tomlinson”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            @ZoePeay
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Ten"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 h-[428px] items-center justify-end pt-[300px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            “Herbert Nunez”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            @JuliaTomlinson
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body10"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_400.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close Eleven"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient3  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient3  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center mt-[80px] w-[100%]">
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
                      onClick={handleNavigate94}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate95}
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
                        alt="music Three"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_user_white_a700.svg"
                        className=""
                        alt="user One"
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
                        alt="arrowright Two"
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

export default Homepage2DarkPage;
