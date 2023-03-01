import React from "react";

import { Button, Img, Text, Line } from "components";

const LiveauctionDarkPage = () => {
  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[1980px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0113liveauctiondark.png')" }}
      >
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex flex-col items-center justify-center md:px-[20px] w-[100%]">
            <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start p-[19px] w-[100%]">
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
                      className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700 w-[auto]"
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
                      className="capitalize cursor-pointer font-bold text-[18px] text-indigo_A700 text-left w-[auto]"
                      href="javascript:"
                    >
                      Explore
                    </a>
                    <Img
                      src="images/img_arrowdown_indigo_a700.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrowdown One"
                    />
                  </div>
                </li>
                <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[12%]">
                  <div className="flex flex-row gap-[8px] items-center justify-center pt-[2px]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700 w-[auto]"
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
                    className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700"
                    href="javascript:"
                  >
                    Create
                  </a>
                </li>
                <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700"
                    href="javascript:"
                  >
                    Blog
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                  <a
                    className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700"
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
            <div className="border-bluegray_900 border-solid border-t-[1px] flex flex-1 flex-row gap-[16px] items-start justify-start max-w-[1920px] sm:px-[20px] px-[255px] md:px-[40px] py-[24px] w-[100%]">
              <Text
                className="font-bold text-gray_400 text-left w-[auto]"
                variant="body8"
              >
                Explore
              </Text>
              <Img
                src="images/img_arrowleft_gray_400_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-indigo_A700 text-left w-[auto]"
                variant="body8"
              >
                Live Auction Banner
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[28px] items-start justify-start max-w-[1410px] mt-[17px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Live Auctions
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] w-[100%]">
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
                      className="ml-[12px] text-center"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                    Recently create
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start md:w-[100%] w-[auto]">
              <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Sweet Baby #1
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
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
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_295.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          Carly Webster
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Avidlines #14843
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
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
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two One"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_296.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree One"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                    <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[158px]">
                      <div
                        className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                        style={{
                          backgroundImage: "url('images/img_img_9.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_7.png"
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
                          Vera Tomlinson
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Avidlines #14843
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
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
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Two"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_297.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Two"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          Abby Oliver
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Chimera #977
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
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Three"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_298.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Three"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          Alban Harrison
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Cool Cat 3D #2538
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
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
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Four"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_299.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Four"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          alt="Bg Four"
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
                          Alfred Vaughn
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
                          alt="close Four"
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Doodle #9972
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Five"
                      />
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                      <Img
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Five"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_300.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Five"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          alt="Bg Five"
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
                          Conrad Jarvis
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
                          alt="close Five"
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Slow Mo #127
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Six"
                      />
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                      <Img
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Six"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_301.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Six"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                          alt="Bg Six"
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
                          Ollie Wheatly
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
                          alt="close Six"
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
                <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[290px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Kick Shock #1
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Seven"
                      />
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                    style={{ backgroundImage: "url('images/img_04.svg')" }}
                  >
                    <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[88%]">
                      <Img
                        src="images/img_2.png"
                        className="h-[109px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Two Seven"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                        <Line className="bg-gradient4  h-[85px] w-[2px]" />
                        <Img
                          src="images/img_star3_302.svg"
                          className="h-[30px] mt-[5px] w-[100%]"
                          alt="StarThree Seven"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                    <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[155px]">
                      <div
                        className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                        style={{
                          backgroundImage: "url('images/img_img_9.png')",
                        }}
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
                          className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Jackson Fisher
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
                          alt="close Seven"
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
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <Button className="border-[2px] border-indigo_A700 border-solid cursor-pointer font-bold min-w-[120px] sm:px-[20px] px-[24px] py-[12px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                Load more
              </Button>
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center mt-[80px] md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate6}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate7}
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
                        alt="music One"
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

export default LiveauctionDarkPage;
