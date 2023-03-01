import React from "react";

import { Button, Img, Text, List, Line } from "components";

const ItemDetailsAuctionsHistoryDarkPage = () => {
  function handleNavigate36() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate37() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2231px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0151itemdetails.png')" }}
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
            <div className="border-bluegray_900 border-solid border-t-[1px] flex flex-1 flex-row gap-[16px] items-start justify-start max-w-[1920px] sm:px-[20px] px-[255px] md:px-[40px] py-[24px] w-[100%]">
              <Text
                className="font-bold text-gray_400 text-left w-[auto]"
                variant="body8"
              >
                Home
              </Text>
              <Img
                src="images/img_arrowleft_gray_400_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                variant="body8"
              >
                Explore
              </Text>
              <Img
                src="images/img_arrowleft_gray_400_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft One"
              />
              <Text
                className="font-bold text-indigo_A700 text-left w-[auto]"
                variant="body8"
              >
                Item Details 1
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1410px] mt-[17px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Item Details 1
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60px] items-start justify-start md:w-[100%] w-[auto]">
              <Img
                src="images/img_04.svg"
                className="h-[787px] w-[718px]"
                alt="IMG"
              />
              <div className="flex items-center justify-start md:w-[100%] w-[45%]">
                <div className="flex flex-col gap-[41px] items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[632px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <div className="bg-gray_700 h-[46px] rounded-[50%] w-[46px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Trending Arts
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <Button
                          className="flex items-center justify-center outline outline-[0.5px] outline-gray_700 px-[24px] py-[13px] rounded-[23px] sm:px-[20px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="mr-[8px] text-center"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                            68
                          </div>
                        </Button>
                        <Button className="flex h-[46px] items-center justify-center outline outline-[0.5px] outline-gray_700 p-[14px] rounded-[50%] w-[46px]">
                          <Img
                            src="images/img_overflowmenu.svg"
                            className=""
                            alt="overflowmenu"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] h-[113px] md:h-[auto] items-start justify-start max-w-[632px] mt-[18px] w-[100%]">
                      <Text
                        className="capitalize text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Wicked Cranium #4449
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[22.00px] md:max-w-[100%] max-w-[632px] not-italic text-left text-white_A700"
                        variant="body10"
                      >
                        A collection of 10,000 undead NFTs minted on the
                        Ethereum blockchain. Each unique Deadfella is randomly
                        generated from a combination.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start mt-[30px] md:w-[100%] w-[96%]">
                      <div className="bg-gray_901 flex flex-row gap-[12px] items-center justify-start p-[16px] rounded-[10px] md:w-[100%] w-[49%]">
                        <List
                          className="sm:flex-col flex-row gap-[12px] grid grid-cols-3 w-[79%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-row gap-[13px] items-center justify-between sm:ml-[0] w-[100%]">
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[44px] py-[7px] rounded-[6px] text-[20px] text-center text-white_A700 w-[auto]">
                              40
                            </Button>
                            <Img
                              src="images/img_.svg"
                              className="h-[16px] w-[auto]"
                              alt="OneHundredFiftyTwo"
                            />
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-center sm:ml-[0] w-[100%]">
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[44px] py-[7px] rounded-[6px] text-[20px] text-center text-white_A700 w-[auto]">
                              12
                            </Button>
                            <Img
                              src="images/img_.svg"
                              className="h-[16px] w-[auto]"
                              alt="OneHundredFiftyThree"
                            />
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-between sm:ml-[0] w-[100%]">
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[44px] py-[7px] rounded-[6px] text-[20px] text-center text-white_A700 w-[auto]">
                              35
                            </Button>
                            <Img
                              src="images/img_.svg"
                              className="h-[16px] w-[auto]"
                              alt="OneHundredFiftyFour"
                            />
                          </div>
                        </List>
                        <div className="flex items-center justify-start w-[17%]">
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[44px] py-[7px] rounded-[6px] text-[20px] text-center text-white_A700 w-[auto]">
                            44
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gray_901 flex flex-row gap-[20px] items-center justify-between p-[16px] rounded-[8px] md:w-[100%] w-[49%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          variant="body9"
                        >
                          Current Bid
                        </Text>
                        <div className="bg-white_A700_19 flex items-center justify-start my-[4px] p-[4px] rounded-[8px] w-[auto]">
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[93%]">
                            <Text
                              className="capitalize font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              4.89 eTH
                            </Text>
                            <Text
                              className="capitalize font-normal ml-[2px] not-italic text-gray_200 text-left w-[auto]"
                              variant="body10"
                            >
                              = $12.246
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[24px] h-[267px] md:h-[auto] items-start justify-start max-w-[632px] mt-[39px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[28px] items-start justify-center pl-[8px] pr-[12px] w-[auto]">
                          <Text
                            className="font-bold text-gray_700 text-left w-[auto]"
                            variant="body10"
                          >
                            Details
                          </Text>
                          <Text
                            className="font-bold text-gray_700 text-left w-[auto]"
                            variant="body10"
                          >
                            Bids
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            History
                          </Text>
                        </div>
                        <Line className="bg-indigo_A700 h-[2px] w-[11%]" />
                        <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                      </div>
                      <div className="flex md:flex-col flex-row gap-[40px] h-[210px] md:h-[auto] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[20px] h-[210px] md:h-[auto] items-start justify-start w-[100%]">
                          <List
                            className="flex-col gap-[20px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                                <div className="flex h-[44px] items-center justify-start w-[44px]">
                                  <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-bold text-left text-white_A700 w-[auto]"
                                      variant="body8"
                                    >
                                      Mason Woodward
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                                      variant="body11"
                                    >
                                      place a bid
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body11"
                                  >
                                    8 hours ago
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col h-[44px] md:h-[auto] items-end justify-between">
                                <Text
                                  className="font-bold text-right text-white_A700 w-[auto]"
                                  variant="body8"
                                >
                                  4.89 ET
                                </Text>
                                <Text
                                  className="font-normal not-italic text-right text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  = $12.245
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                                <div className="flex h-[44px] items-center justify-start w-[44px]">
                                  <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-bold text-left text-white_A700 w-[auto]"
                                      variant="body8"
                                    >
                                      Violet Pascall
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                                      variant="body11"
                                    >
                                      place a bid
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body11"
                                  >
                                    8 hours ago
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col h-[44px] md:h-[auto] items-end justify-between">
                                <Text
                                  className="font-bold text-right text-white_A700 w-[auto]"
                                  variant="body8"
                                >
                                  4.89 ET
                                </Text>
                                <Text
                                  className="font-normal not-italic text-right text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  = $12.245
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                                <div className="flex h-[44px] items-center justify-start w-[44px]">
                                  <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-bold text-left text-white_A700 w-[auto]"
                                      variant="body8"
                                    >
                                      Camilla Hudson
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                                      variant="body11"
                                    >
                                      place a bid
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body11"
                                  >
                                    8 hours ago
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col h-[44px] md:h-[auto] items-end justify-between">
                                <Text
                                  className="font-bold text-right text-white_A700 w-[auto]"
                                  variant="body8"
                                >
                                  4.89 ET
                                </Text>
                                <Text
                                  className="font-normal not-italic text-right text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  = $12.245
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <div className="flex items-center justify-start w-[21%]">
                                <div className="bg-gray_700 h-[18px] rounded-[4px] w-[100%]"></div>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-bold text-left text-white_A700 w-[auto]"
                                    variant="body8"
                                  >
                                    Derick Reed
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_400 text-left w-[auto]"
                                    variant="body11"
                                  >
                                    place a bid
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex h-[18px] md:h-[auto] items-end justify-between">
                              <Text
                                className="font-bold text-right text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                4.89 ET
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-row items-start justify-start w-[1%] md:w-[100%]">
                          <Line className="bg-bluegray_900 h-[208px] w-[3px]" />
                          <Line className="bg-white_A700 h-[31px] mb-[144px] mt-[33px] rounded-[1px] w-[3px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-col gap-[28px] items-start justify-start max-w-[632px] p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <div className="flex flex-row gap-[7px] items-center justify-between sm:w-[100%] w-[584px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        Top bid
                      </Text>
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                        <Button className="bg-white_A700_63 flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                          <Img
                            src="images/img_arrowdown_indigo_300.svg"
                            className="h-[16px]"
                            alt="arrowdown Three"
                          />
                        </Button>
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          3.52 ETH ($9118.1 USD)
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Text
                        className="bg-indigo_A700 font-bold justify-center px-[100px] sm:px-[20px] md:px-[40px] py-[14px] rounded-[23px] text-center text-white_A700 w-[282px]"
                        variant="body10"
                      >
                        Place your bid
                      </Text>
                      <Text
                        className="bg-white_A700_19 font-bold justify-center px-[104px] sm:px-[20px] md:px-[40px] py-[14px] rounded-[23px] text-center text-white_A700 w-[282px]"
                        variant="body10"
                      >
                        Save for later
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1410px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Explore More
            </Text>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[330px]">
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
                        alt="favorite One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{
                        backgroundImage: "url('images/img_img_23.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_21.png"
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
                        Cynthia Burke
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
                      alt="Two"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-white_A700 h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_237.svg"
                        className="h-[30px] mt-[5px] w-[100%]"
                        alt="StarThree"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                      <Img src="images/img_mail.svg" className="" alt="mail" />
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[330px]">
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
                        alt="favorite Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{
                        backgroundImage: "url('images/img_img_24.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_22.png"
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
                        Astrid Swanson
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
                      alt="Two One"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-white_A700 h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_238.svg"
                        className="h-[30px] mt-[5px] w-[100%]"
                        alt="StarThree One"
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
                        alt="mail One"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[330px]">
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
                        alt="favorite Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{
                        backgroundImage: "url('images/img_img_25.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_23.png"
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
                        Sirena May
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
                      alt="Two Two"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-white_A700 h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_239.svg"
                        className="h-[30px] mt-[5px] w-[100%]"
                        alt="StarThree Two"
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
                        alt="mail Two"
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
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[330px]">
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
                        alt="favorite Four"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{
                        backgroundImage: "url('images/img_img_25.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_23.png"
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
                        Sirena May
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
                      alt="Two Three"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-white_A700 h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_240.svg"
                        className="h-[30px] mt-[5px] w-[100%]"
                        alt="StarThree Three"
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
                        alt="mail Three"
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
            </List>
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
                      onClick={handleNavigate36}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate37}
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
                        alt="music"
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

export default ItemDetailsAuctionsHistoryDarkPage;
