import React from "react";

import {
  Img,
  Text,
  Button,
  Line,
  List,
  CheckBox,
  Input,
  Switch,
} from "components";

const Homepage7DarkPage = () => {
  function handleNavigate100() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate101() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_902 flex flex-col font-dmsans gap-[100px] sm:gap-[40px] md:gap-[40px] items-end justify-start mx-[auto] w-[100%]">
        <div className="flex items-start md:px-[20px] w-[100%]">
          <div className="h-[2396px] relative w-[100%]">
            <div className="flex items-center justify-start mb-[-43px] ml-[auto] md:w-[100%] w-[95%] z-[1]">
              <div className="h-[1002px] md:h-[1330px] sm:h-[871px] relative w-[100%]">
                <div className="h-[1013px] md:h-[1330px] sm:h-[871px] m-[auto] w-[100%]">
                  <div className="h-[1013px] md:h-[1330px] sm:h-[871px] m-[auto] w-[100%]">
                    <div className="h-[1013px] md:h-[1330px] sm:h-[871px] m-[auto] w-[100%]">
                      <div className="absolute flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[0] w-[100%]">
                        <div className="h-[871px] relative md:w-[100%] w-[58%]">
                          <div className="absolute h-[871px] inset-y-[0] left-[0] my-[auto] md:w-[100%] w-[93%]">
                            <Img
                              src="images/img_ellipse46.png"
                              className="h-[871px] m-[auto] object-cover w-[100%]"
                              alt="EllipseFortySix"
                            />
                            <Img
                              src="images/img_star10.svg"
                              className="absolute bg-gradient5  bottom-[27%] h-[30px] right-[0] w-[3%]"
                              alt="StarTen"
                            />
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-gradient6  blur-[20.00px] h-[201px] right-[0] rotate-[-26deg] rounded-[100px] top-[23%] w-[201px]"></div>
                        </div>
                        <div className="h-[419px] relative md:w-[100%] w-[34%]">
                          <Img
                            src="images/img_ellipse48.png"
                            className="h-[419px] m-[auto] object-cover rotate-[-101deg] w-[100%]"
                            alt="EllipseFortyEight"
                          />
                          <Img
                            src="images/img_star9.svg"
                            className="absolute bg-gradient7  bottom-[35%] h-[50px] left-[4%] w-[8%]"
                            alt="StarNine"
                          />
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient8  blur-[150.00px] bottom-[0] flex h-[531px] sm:h-[auto] items-start justify-end p-[162px] sm:px-[20px] md:px-[40px] right-[0] rounded-[265px] w-[531px]">
                        <Img
                          src="images/img_star11.svg"
                          className="bg-gradient9  h-[50px] mb-[53px] mt-[104px] w-[23%]"
                          alt="StarEleven"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_vector148.png"
                      className="absolute bottom-[38%] h-[193px] object-cover right-[10%] w-[auto]"
                      alt="Vector148"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[40px] h-[max-content] inset-y-[0] items-start justify-start left-[13%] my-[auto] w-[45%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[auto]">
                      <Text
                        className="capitalize leading-[96.00px] text-black_900 text-left"
                        as="h1"
                        variant="h1"
                      >
                        <span className="md:text-[48px] text-white_A700 text-[80px] font-dmsans font-bold">
                          Discover Best
                          <br />A Universe and collect{" "}
                        </span>
                        <span className="md:text-[48px] text-deep_purple_A400 text-[80px] font-dmsans font-bold">
                          NFT.{" "}
                        </span>
                      </Text>
                      <Text
                        className="capitalize font-bold leading-[32.00px] text-gray_400 text-left sm:w-[100%] w-[73%]"
                        variant="body5"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[43%]">
                      <div className="flex items-center justify-start w-[48%]">
                        <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                          Discover now
                        </Button>
                      </div>
                      <Button className="bg-gradient10  items-center justify-center p-[2px] rounded-[24px] text-center">
                        <div className="bg-gray_901 cursor-pointer font-bold outline py-[13px] rounded-[24px] text-[16px] text-center text-white_A700">
                          <div className="bg-gradient10  items-center justify-center p-[2px] rounded-[24px] text-center">
                            Creat NFT
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute md:h-[479px] h-[607px] inset-y-[0] my-[auto] right-[9%] md:w-[100%] w-[39%]">
                  <div className="absolute bg-gradient11  bottom-[0] flex h-[479px] md:h-[auto] items-center justify-start left-[0] p-[20px] rotate-[15deg] rounded-[15px] shadow-bs5 sm:w-[100%] w-[492px]">
                    <div className="bg-gray_901 flex flex-col justify-start p-[19px] rounded-[15px] w-[100%]">
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[5px] w-[300px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Galaxy #1612
                        </Text>
                        <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex items-start justify-start p-[10px] rounded-[19px] w-[auto]">
                          <Img
                            src="images/img_favorite_gray_400.svg"
                            className="h-[19px] w-[25px]"
                            alt="favorite One"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start mt-[8px] mx-[auto] md:w-[100%] w-[90%]">
                        <div
                          className="bg-cover bg-no-repeat h-[286px] relative w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_img_286x369.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_286x369.png"
                            className="h-[286px] m-[auto] object-cover w-[100%]"
                            alt="Bg Ten"
                          />
                          <div className="absolute bg-gray_700 md:h-[220px] h-[286px] inset-[0] justify-center m-[auto] p-[24px] sm:px-[20px] w-[100%]">
                            <div className="absolute flex flex-col h-[max-content] inset-[0] justify-center m-[auto] w-[87%]">
                              <Img
                                src="images/img_2_white_a700.png"
                                className="h-[105px] md:h-[auto] mr-[274px] object-cover sm:w-[100%] w-[auto]"
                                alt="Two Six"
                              />
                              <div className="flex flex-col gap-[10px] justify-start md:ml-[0] ml-[274px] md:w-[100%] w-[14%]">
                                <Line className="bg-gradient4  h-[2px] rotate-[-90deg] w-[54%]" />
                                <Img
                                  src="images/img_star3_24x27.svg"
                                  className="h-[24px] md:ml-[0] ml-[15px] w-[63%]"
                                  alt="StarThree Six"
                                />
                              </div>
                            </div>
                            <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[37px] md:h-[auto] items-center justify-center p-[10px] right-[21%] rounded-[18px] w-[auto]">
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
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A700 flex items-center justify-center md:ml-[0] ml-[104px] mr-[5px] mt-[8px] px-[16px] py-[12px] rounded-[26px] sm:ml-[0] text-center w-[303px]"
                        leftIcon={
                          <Img
                            src="images/img_bag_white_a700.svg"
                            className="mr-[5px] text-center"
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
                  <div className="absolute bg-gray_900_7f flex h-[479px] md:h-[auto] items-center justify-end p-[20px] right-[0] rotate-[-15deg] rounded-[20px] shadow-bs6 top-[0] sm:w-[100%] w-[496px]">
                    <div className="bg-gray_901 flex flex-col justify-end p-[19px] rounded-[15px] w-[100%]">
                      <div className="flex items-center justify-start md:ml-[0] ml-[40px] mr-[6px] md:w-[100%] w-[89%]">
                        <div
                          className="bg-cover bg-no-repeat h-[279px] relative w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_img_279x368.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_279x368.png"
                            className="h-[279px] m-[auto] object-cover w-[100%]"
                            alt="Bg Eleven"
                          />
                          <div className="absolute bg-gray_700 md:h-[227px] h-[279px] inset-[0] justify-center m-[auto] p-[21px] sm:px-[20px] w-[100%]">
                            <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] justify-center m-[auto] w-[66%]">
                              <Img
                                src="images/img_02_white_a700.png"
                                className="h-[104px] md:h-[auto] mr-[197px] object-cover sm:w-[100%] w-[auto]"
                                alt="Two Seven"
                              />
                              <div className="flex flex-col gap-[10px] justify-start md:ml-[0] ml-[198px] md:w-[100%] w-[18%]">
                                <Line className="bg-gradient4  h-[2px] md:ml-[0] ml-[19px] rotate-[-90deg] w-[53%]" />
                                <Img
                                  src="images/img_star3_21.svg"
                                  className="h-[24px] mr-[14px] w-[65%]"
                                  alt="StarThree Seven"
                                />
                              </div>
                            </div>
                            <div className="absolute bg-white_A700_b2 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[33px] md:h-[auto] items-center justify-center left-[21%] p-[10px] rounded-[16px] w-[auto]">
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
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[23px] mr-[auto] mt-[15px] w-[302px]">
                        <div className="flex flex-row items-center justify-end w-[55%]">
                          <div
                            className="bg-cover bg-no-repeat h-[38px] md:h-[42px] my-[2px] relative w-[31%]"
                            style={{
                              backgroundImage:
                                "url('images/img_img_38x50.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_38x50.png"
                              className="h-[38px] m-[auto] rounded-[50%] w-[100%]"
                              alt="Bg Twelve"
                            />
                            <div className="absolute bg-gray_700 h-[38px] inset-[0] justify-center m-[auto] rounded-[25px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start ml-[3px] my-[2px] w-[auto]">
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
                        <div className="flex flex-col items-end justify-start w-[24%]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row items-start justify-evenly mr-[4px] mt-[3px] md:w-[100%] w-[94%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-medium text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                5 ETH
                              </Text>
                            </div>
                            <div className="h-[15px] md:h-[18px] mt-[3px] relative w-[30%]">
                              <div className="bg-indigo_A700 h-[15px] m-[auto] rounded-[10px] w-[100%]"></div>
                              <Img
                                src="images/img_offer.svg"
                                className="absolute h-[10px] inset-[0] justify-center m-[auto] w-[9px]"
                                alt="offer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A700 flex items-center justify-center md:ml-[0] ml-[6px] mr-[105px] mt-[15px] px-[16px] py-[12px] rounded-[23px] sm:ml-[0] text-center w-[302px]"
                        leftIcon={
                          <Img
                            src="images/img_bag_white_a700_17x25.svg"
                            className="mr-[6px] text-center"
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
                <header className="absolute flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
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
              </div>
            </div>
            <div className="h-[1437px] mt-[auto] mx-[auto] overflow-auto w-[100%]">
              <div className="md:h-[783px] h-[830px] mb-[-5.94px] ml-[auto] md:w-[100%] w-[83%] z-[1]">
                <div className="absolute bottom-[0] h-[788px] right-[0] md:w-[100%] w-[86%]">
                  <div className="absolute h-[788px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[94%]">
                    <div className="absolute flex flex-col gap-[40px] inset-x-[0] justify-start mx-[auto] top-[9%] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-start justify-start ml-[auto] w-[auto]">
                        <div className="flex h-[40px] items-center justify-start w-[40px]">
                          <Button className="bg-gray_901 flex h-[40px] items-center justify-center outline outline-[0.5px] outline-bluegray_900 p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[24px]"
                              alt="arrowleft"
                            />
                          </Button>
                        </div>
                        <div className="flex h-[40px] items-center justify-start rotate-[180deg] w-[40px]">
                          <Button className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_arrowright_gray_901.svg"
                              className="h-[24px]"
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="backdrop-opacity-[0.5] bg-gradient12  blur-[4.00px] flex items-start justify-start p-[73px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[99px] md:ml-[0] ml-[246px] sm:w-[100%] w-[auto]">
                          <Text
                            className="capitalize text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hakunamatata
                          </Text>
                          <Text
                            className="capitalize text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            100 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_graphic_788x986.png"
                      className="absolute h-[788px] inset-y-[0] my-[auto] object-cover right-[11%] w-[auto]"
                      alt="Graphic"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat h-[447px] left-[0] top-[10%] w-[24%]"
                    style={{
                      backgroundImage: "url('images/img_img_447x329.png')",
                    }}
                  >
                    <Img
                      src="images/img_bg_447x329.png"
                      className="h-[447px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[200px] rounded-tr-[200px] w-[100%]"
                      alt="Bg Six"
                    />
                    <div className="absolute bg-gray_700 h-[447px] inset-[0] justify-center m-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[200px] rounded-tr-[200px] w-[100%]"></div>
                  </div>
                </div>
                <div className="absolute bottom-[13%] flex md:flex-col flex-row gap-[30px] items-start justify-center right-[21%] w-[53%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[38%]">
                    <div
                      className="bg-cover bg-no-repeat h-[303px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_303x330.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_303x330.png"
                        className="h-[303px] m-[auto] object-cover rounded-[20px] w-[100%]"
                        alt="Bg Seven"
                      />
                      <div className="absolute bg-gray_700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[21px] sm:px-[20px] rounded-[20px] shadow-bs7 w-[100%]">
                        <Button className="bg-gray_500_4c border-[1px] border-solid border-white_A700_99 cursor-pointer font-bold mt-[211px] p-[10px] rounded-[25px] text-[20px] text-center text-white_A700 w-[174px]">
                          Hologloball
                        </Button>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:mt-[0] mt-[52px] md:w-[100%] w-[59%]"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat h-[237px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_2_237x240.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_237x240.png"
                        className="h-[237px] m-[auto] object-cover rounded-[20px] w-[100%]"
                        alt="Bg Eight"
                      />
                      <div className="absolute bg-gray_700 h-[237px] inset-[0] justify-center m-[auto] rounded-[20px] w-[100%]"></div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat h-[237px] relative w-[100%]"
                      style={{ backgroundImage: "url('images/img_3.png')" }}
                    >
                      <Img
                        src="images/img_bg_14.png"
                        className="h-[237px] m-[auto] object-cover rounded-[20px] w-[100%]"
                        alt="Bg Nine"
                      />
                      <div className="absolute bg-gray_700 h-[237px] inset-[0] justify-center m-[auto] rounded-[20px] w-[100%]"></div>
                    </div>
                  </List>
                </div>
                <div className="absolute flex flex-row gap-[1098px] md:gap-[40px] items-center justify-between left-[0] top-[0] w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-center w-[auto]">
                    <Text
                      className="capitalize text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Best Aritst
                    </Text>
                    <Line className="bg-gradient13  h-[2px] rotate-[-180deg] w-[100%]" />
                  </div>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body10"
                  >
                    EXPLORE MORE
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[38px] items-center justify-start ml-[auto] mt-[auto] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] w-[100%]">
                  <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex items-center justify-start sm:w-[100%] w-[395px]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Live Auditon
                      </Text>
                    </div>
                    <Line className="bg-gradient14  h-[2px] mt-[4px] rotate-[-180deg] w-[93%]" />
                  </div>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body10"
                  >
                    EXPLORE MORE
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Rice #1612
                      </Text>
                      <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_checkmark_gray_300.svg"
                          className="h-[20px]"
                          alt="checkmark"
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
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_25x21.svg"
                            className="h-[25px] w-[100%]"
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
                            backgroundImage: "url('images/img_img_14.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_12.png"
                            className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                            alt="Bg"
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
                            Frank Stevens
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                      className="flex items-center justify-center outline outline-[1px] outline-bluegray_900 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Rice #1612
                      </Text>
                      <Button className="bg-red_600 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_white_a700.svg"
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
                          alt="Two One"
                        />
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_16.svg"
                            className="h-[25px] w-[100%]"
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
                      <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                        <div
                          className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                          style={{
                            backgroundImage: "url('images/img_img_15.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_13.png"
                            className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                            alt="Bg One"
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
                            Buck Morrison
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Rice #1612
                      </Text>
                      <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_checkmark_gray_300.svg"
                          className="h-[20px]"
                          alt="checkmark One"
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
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_17.svg"
                            className="h-[25px] w-[100%]"
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
                            backgroundImage: "url('images/img_img_14.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_12.png"
                            className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                            alt="Bg Two"
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
                            Buck Morrison
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                      className="flex items-center justify-center outline outline-[1px] outline-bluegray_900 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Laysie #1612
                      </Text>
                      <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_checkmark_gray_400.svg"
                          className="h-[20px]"
                          alt="checkmark Two"
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
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_18.svg"
                            className="h-[25px] w-[100%]"
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
                      <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[164px]">
                        <div
                          className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                          style={{
                            backgroundImage: "url('images/img_img_15.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_13.png"
                            className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                            alt="Bg Three"
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
                            Samantha Keller
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                      className="flex items-center justify-center outline outline-[1px] outline-bluegray_900 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Bubble #1612
                      </Text>
                      <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_checkmark_gray_400.svg"
                          className="h-[20px]"
                          alt="checkmark Three"
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
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_19.svg"
                            className="h-[25px] w-[100%]"
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
                      <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[170px]">
                        <div
                          className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                          style={{
                            backgroundImage: "url('images/img_img_15.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_13.png"
                            className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                            alt="Bg Four"
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
                            Theodore Woods
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                              alt="mail Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center outline outline-[1px] outline-bluegray_900 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
                  <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[290px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Rice #1612
                      </Text>
                      <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_checkmark_gray_400.svg"
                          className="h-[20px]"
                          alt="checkmark Four"
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
                        <div className="flex flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-gradient4  h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_20.svg"
                            className="h-[25px] w-[100%]"
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
                            backgroundImage: "url('images/img_img_15.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_13.png"
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
                            Lionel Romero
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left w-[auto]"
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
                              alt="mail Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center outline outline-[1px] outline-bluegray_900 px-[16px] py-[12px] rounded-[24px] text-center w-[290px]"
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
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[100px] md:gap-[40px] items-center pl-[105px] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[38px] items-center justify-start md:w-[100%] w-[79%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between max-w-[1410px] w-[100%]">
              <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex items-center justify-start w-[355px]">
                  <Text
                    className="capitalize text-center text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Popular Collection
                  </Text>
                </div>
                <Line className="bg-gradient14  h-[2px] mt-[4px] rotate-[-180deg] w-[100%]" />
              </div>
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                variant="body10"
              >
                EXPLORE MORE
              </Text>
            </div>
            <div className="sm:h-[1143px] h-[360px] md:h-[752px] relative w-[100%]">
              <List
                className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-start m-[auto] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-gradient2  flex flex-col gap-[12px] items-start justify-center p-[20px] rounded-[20px] shadow-bs8 sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="md:h-[57px] h-[59px] relative w-[16%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="qrcode"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark Five"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-justify w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-justify text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Grient Phahn
                      </Text>
                    </div>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Two"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_img_gray_700_211x410.svg"
                    className="h-[211px] w-[410px]"
                    alt="IMG Ten"
                  />
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-justify text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Art Collection
                    </Text>
                    <Text
                      className="font-bold text-indigo_A700 text-justify w-[auto]"
                      variant="body10"
                    >
                      25 Items
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient2  flex flex-col gap-[12px] items-start justify-center p-[20px] rounded-[20px] shadow-bs8 sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="md:h-[57px] h-[59px] relative w-[16%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="qrcode One"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8_18x18.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight One"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark Six"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-justify w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-justify text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Neil Rice
                      </Text>
                    </div>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Three"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_img_gray_700_211x410.svg"
                    className="h-[211px] w-[410px]"
                    alt="IMG Eleven"
                  />
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-justify text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Art Collection
                    </Text>
                    <Text
                      className="font-bold text-indigo_A700 text-justify w-[auto]"
                      variant="body10"
                    >
                      25 Items
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient2  flex flex-col gap-[12px] items-start justify-center p-[20px] rounded-[20px] shadow-bs8 sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="md:h-[57px] h-[59px] relative w-[16%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="qrcode Two"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8_1.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight Two"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark Seven"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-justify w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-justify text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Grant Sowle
                      </Text>
                    </div>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Four"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_img_gray_700_211x410.svg"
                    className="h-[211px] w-[410px]"
                    alt="IMG Twelve"
                  />
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-justify text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Art Collection
                    </Text>
                    <Text
                      className="font-bold text-indigo_A700 text-justify w-[auto]"
                      variant="body10"
                    >
                      25 Items
                    </Text>
                  </div>
                </div>
              </List>
              <Img
                src="images/img_nextprev_gray_901.svg"
                className="absolute h-[40px] inset-[0] justify-center m-[auto] w-[auto]"
                alt="NextPrev"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start md:w-[100%] w-[76%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Hot Picks
                </Text>
              </div>
              <div className="md:h-[1541px] h-[1599px] mt-[23px] relative w-[100%]">
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[97%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Frank Stevens
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_22.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                src="images/img_favorite_white_a700.svg"
                                className="h-[24px]"
                                alt="favorite Six"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                            <div
                              className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                              style={{
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Buck Morrison
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_23.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Henrietta Collins
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_24.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Samantha Keller
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_25.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Theodore Woods
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_26.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Lionel Romero
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_27.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Bryant Carpenter
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_28.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Bailey Quinn
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_29.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
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
                                Roy Marshman
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
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
                                src="images/img_star3_30.svg"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
                                className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                                alt="Bg TwentyTwo"
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
                                Polly Graves
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                            <Img
                              src="images/img_02.svg"
                              className="h-[109px] w-[auto]"
                              alt="Two Seventeen"
                            />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                              <Line className="bg-white_A700 h-[85px] w-[2px]" />
                              <Img
                                src="images/img_star3_31.svg"
                                className="h-[30px] mt-[5px] w-[100%]"
                                alt="StarThree Seventeen"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
                                className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                                alt="Bg TwentyThree"
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
                                Kenneth Bailey
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                            <Img
                              src="images/img_02.svg"
                              className="h-[109px] w-[auto]"
                              alt="Two Eighteen"
                            />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                              <Line className="bg-white_A700 h-[85px] w-[2px]" />
                              <Img
                                src="images/img_star3_32.svg"
                                className="h-[30px] mt-[5px] w-[100%]"
                                alt="StarThree Eighteen"
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
                                4.53
                              </Text>
                            </div>
                          </div>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
                            Purchase
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] shadow-bs8 w-[100%]">
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
                                backgroundImage: "url('images/img_img_16.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_15.png"
                                className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                                alt="Bg TwentyFour"
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
                                Sophia Sandoval
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[290px] items-center justify-start p-[18px] w-[290px]"
                          style={{
                            backgroundImage: "url('images/img_04.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[8px] justify-start mb-[13px] mt-[4px] w-[100%]">
                            <Img
                              src="images/img_02.svg"
                              className="h-[109px] w-[auto]"
                              alt="Two Nineteen"
                            />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                              <Line className="bg-white_A700 h-[85px] w-[2px]" />
                              <Img
                                src="images/img_star3_33.svg"
                                className="h-[30px] mt-[5px] w-[100%]"
                                alt="StarThree Nineteen"
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
                                alt="mail Seventeen"
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
                                4.53
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
              <Button className="bg-gradient3  items-center justify-center md:ml-[0] ml-[637px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                <div className="bg-gray_902 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient3  items-center justify-center md:ml-[0] ml-[637px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[45px] items-center justify-start md:w-[100%] w-[97%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between max-w-[1410px] w-[100%]">
                <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start w-[368px]">
                    <Text
                      className="capitalize text-center text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Top Creator of day
                    </Text>
                  </div>
                  <Line className="bg-gradient14  h-[2px] mt-[4px] rotate-[-180deg] w-[100%]" />
                </div>
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body10"
                >
                  EXPLORE MORE
                </Text>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-end p-[13px] rounded-[10px] hover:shadow-bs9 shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[25px] items-center justify-start mr-[auto] md:w-[100%] w-[66%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[85%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_2.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Three"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Eight"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Jonny
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[23px] items-center justify-start md:w-[100%] w-[66%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_3.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Four"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Nine"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Vera Mills
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[23px] items-center justify-start md:w-[100%] w-[76%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            3
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[86%]">
                          <div className="md:h-[50px] h-[52px] relative w-[28%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_4.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Five"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Ten"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Winifred Lynch
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[71%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[85%]">
                          <div className="md:h-[50px] h-[52px] relative w-[31%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_5.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Six"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Eleven"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Cade Castillo
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[66%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_6.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Seven"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Twelve"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Alma Dunn
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[23px] items-center justify-start md:w-[100%] w-[67%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            5
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_7.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Eight"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Thirteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Kayla Henry
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[66%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            6
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_8.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Nine"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Fourteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Joey Cress
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[13px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[23px] items-center justify-start md:w-[100%] w-[66%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            7
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[33%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_9.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Ten"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Fifteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Emily Peay
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[12px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[72%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            9
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[85%]">
                          <div className="md:h-[50px] h-[52px] relative w-[30%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_10.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Eleven"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Sixteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Damon Lynch
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[9px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[19px] items-center justify-start my-[4px] md:w-[100%] w-[72%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            10
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[30%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_11.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Twelve"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Seventeen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Terence Cobb
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[11px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[22px] items-center justify-start my-[2px] md:w-[100%] w-[69%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            11
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[84%]">
                          <div className="md:h-[50px] h-[52px] relative w-[31%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_12.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Thirteen"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Eighteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Clive Schultz
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 hover:border-[0] border-[1px] border-bluegray_900 border-solid hover:cursor-pointer flex flex-1 items-start justify-start p-[10px] rounded-[10px] hover:shadow-bs9 hover:w-[100%] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-start my-[3px] md:w-[100%] w-[75%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-center text-gray_400 w-[auto]"
                            variant="body8"
                          >
                            12
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-between w-[85%]">
                          <div className="md:h-[50px] h-[52px] relative w-[29%]">
                            <div className="absolute bg-gray_700 h-[50px] left-[0] rounded-[50%] top-[0] w-[50px]"></div>
                            <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                              <Img
                                src="images/img_star8_13.svg"
                                className="h-[18px] m-[auto] w-[18px]"
                                alt="StarEight Fourteen"
                              />
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="absolute h-[6px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="checkmark Nineteen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-bold text-center text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Happy Parsons
                            </Text>
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              214.2 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="flex items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[52px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-end justify-start md:mt-[0] mt-[92px] md:w-[100%] w-[44%]">
                  <div className="flex md:flex-col flex-row gap-[12px] items-start justify-between w-[100%]">
                    <div className="backdrop-opacity-[0.5] bg-gradient15  blur-[20.00px] flex h-[201px] items-end justify-start p-[16px] rounded-[100px] w-[201px]">
                      <Img
                        src="images/img_star12.svg"
                        className="bg-gradient16  h-[50px] mb-[41px] mt-[77px] w-[28%]"
                        alt="StarTwelve"
                      />
                    </div>
                    <div className="flex h-[288px] sm:h-[356px] justify-end md:mt-[0] mt-[57px] relative md:w-[100%] w-[74%]">
                      <div className="backdrop-opacity-[0.5] bg-gradient15  blur-[53.00px] h-[96px] mb-[25px] ml-[139px] mt-[auto] rotate-[141deg] rounded-[50%] w-[96px]"></div>
                      <div className="absolute flex flex-col gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                        <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                          <Text
                            className="capitalize leading-[68.00px] text-left text-white_A700"
                            as="h5"
                            variant="h5"
                          >
                            <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-dmsans font-bold">
                              Creat and Sell <br />
                              Your{" "}
                            </span>
                            <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-dmsans font-bold">
                              N
                            </span>
                            <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-dmsans font-bold">
                              FTs with
                            </span>
                            <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-dmsans font-bold">
                              {" "}
                            </span>
                            <span className="md:text-[48px] sm:text-[42px] text-indigo_A700 text-[56px] font-dmsans font-bold">
                              Cesea
                            </span>
                          </Text>
                          <Text
                            className="font-bold leading-[26.00px] text-gray_401 text-left w-[100%]"
                            variant="body6"
                          >
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet Lorem ipsum dolor sit amet{" "}
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start md:w-[100%] w-[65%]">
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                            Creat Item
                          </Button>
                          <Button className="cursor-pointer font-bold min-w-[189px] outline outline-[1px] outline-gray_700 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                            Discover more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_star11_50x47.svg"
                    className="backdrop-opacity-[0.5] bg-gradient16  blur-[10.00px] h-[50px] w-[6%]"
                    alt="StarEleven One"
                  />
                </div>
                <div className="md:h-[464px] h-[556px] sm:pl-[20px] md:pl-[40px] pl-[66px] relative rotate-[-15deg] md:w-[100%] w-[51%]">
                  <div className="md:h-[464px] h-[556px] ml-[auto] my-[auto] md:w-[100%] w-[93%]">
                    <div className="md:h-[464px] h-[556px] m-[auto] w-[100%]">
                      <div className="absolute md:h-[464px] h-[556px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="absolute md:h-[464px] h-[556px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[58%]">
                          <div className="absolute md:h-[429px] h-[556px] inset-y-[0] left-[0] my-[auto] w-[72%]">
                            <div
                              className="absolute bg-cover bg-no-repeat h-[342px] md:h-[429px] right-[0] top-[0] w-[77%]"
                              style={{
                                backgroundImage: "url('images/img_10.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_429x273.png"
                                className="h-[429px] mx-[auto] object-cover rounded-[6px] w-[100%]"
                                alt="Bg TwentyFive"
                              />
                              <div className="absolute bg-gray_700 h-[429px] inset-x-[0] mx-[auto] rounded-[6px] top-[0] w-[100%]"></div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[242px] md:h-[342px] justify-end left-[0] w-[71%]"
                              style={{
                                backgroundImage: "url('images/img_09.png')",
                              }}
                            >
                              <Img
                                src="images/img_bg_342x250.png"
                                className="h-[342px] mt-[auto] mx-[auto] object-cover rounded-[6px] w-[100%]"
                                alt="Bg TwentySix"
                              />
                              <div className="absolute bg-gray_700 bottom-[0] h-[342px] inset-x-[0] mx-[auto] rounded-[6px] w-[100%]"></div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[415px] md:h-[464px] justify-end right-[0] w-[57%]"
                            style={{
                              backgroundImage: "url('images/img_08.png')",
                            }}
                          >
                            <Img
                              src="images/img_bg_464x283.png"
                              className="h-[464px] mt-[auto] mx-[auto] object-cover rounded-[6px] w-[100%]"
                              alt="Bg TwentySeven"
                            />
                            <div className="absolute bg-gray_700 bottom-[0] h-[464px] inset-x-[0] mx-[auto] rounded-[6px] w-[100%]"></div>
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat h-[171px] md:h-[464px] right-[29%] top-[0] w-[33%]"
                          style={{
                            backgroundImage: "url('images/img_07.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_16.png"
                            className="h-[464px] mx-[auto] object-cover rounded-[6px] w-[100%]"
                            alt="Bg TwentyEight"
                          />
                          <div className="absolute bg-gray_700 h-[464px] inset-x-[0] mx-[auto] rounded-[6px] top-[0] w-[100%]"></div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[291px] md:h-[370px] justify-end right-[0] w-[30%]"
                          style={{
                            backgroundImage: "url('images/img_06.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_370x257.png"
                            className="h-[370px] mt-[auto] mx-[auto] object-cover rounded-[6px] w-[100%]"
                            alt="Bg TwentyNine"
                          />
                          <div className="absolute bg-gray_700 bottom-[0] h-[370px] inset-x-[0] mx-[auto] rounded-[6px] w-[100%]"></div>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat h-[296px] md:h-[362px] right-[0] top-[0] w-[20%]"
                        style={{
                          backgroundImage: "url('images/img_04_296x173.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_362x173.png"
                          className="h-[362px] mx-[auto] object-cover rounded-[6px] w-[100%]"
                          alt="Bg Thirty"
                        />
                        <Img
                          src="images/img_img_362x173.png"
                          className="absolute h-[362px] inset-x-[0] mx-[auto] object-cover rounded-[6px] top-[0] w-[100%]"
                          alt="Img FortyTwo"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat h-[380px] inset-y-[0] my-[auto] right-[18%] w-[30%]"
                      style={{
                        backgroundImage: "url('images/img_03_380x260.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_380x260.png"
                        className="h-[380px] m-[auto] object-cover rounded-[6px] w-[100%]"
                        alt="Bg ThirtyOne"
                      />
                      <div className="absolute bg-gray_700 h-[380px] inset-[0] justify-center m-[auto] rounded-[6px] w-[100%]"></div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[120px] md:h-[321px] justify-end right-[27%] w-[26%]"
                    style={{
                      backgroundImage: "url('images/img_02_120x244.png')",
                    }}
                  >
                    <Img
                      src="images/img_bg_321x244.png"
                      className="h-[321px] mt-[auto] mx-[auto] object-cover rounded-[6px] w-[100%]"
                      alt="Bg ThirtyTwo"
                    />
                    <div className="absolute bg-gray_700 bottom-[0] h-[321px] inset-x-[0] mx-[auto] rounded-[6px] w-[100%]"></div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat h-[118px] md:h-[321px] right-[9%] top-[0] w-[26%]"
                    style={{
                      backgroundImage: "url('images/img_01_118x244.png')",
                    }}
                  >
                    <Img
                      src="images/img_bg_17.png"
                      className="h-[321px] mx-[auto] object-cover rounded-[6px] w-[100%]"
                      alt="Bg ThirtyThree"
                    />
                    <div className="absolute bg-gray_700 h-[321px] inset-x-[0] mx-[auto] rounded-[6px] top-[0] w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray_700_63 flex items-center justify-center w-[100%]">
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
                        onClick={handleNavigate100}
                      >
                        <Img
                          src="images/img_twitter.svg"
                          className="h-[24px]"
                          alt="twitter"
                        />
                      </Button>
                      <Button
                        className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                        onClick={handleNavigate101}
                      >
                        <Img
                          src="images/img_facebook.svg"
                          className="h-[24px]"
                          alt="facebook"
                        />
                      </Button>
                      <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                        <Img
                          src="images/img_send.svg"
                          className=""
                          alt="send"
                        />
                      </Button>
                      <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                        <Img
                          src="images/img_vector.svg"
                          className=""
                          alt="Vector One"
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
                          alt="arrowright One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage7DarkPage;
