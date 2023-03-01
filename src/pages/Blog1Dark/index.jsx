import React from "react";

import { Button, Img, Text } from "components";

const Blog1DarkPage = () => {
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2122px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_group70.svg')" }}
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
                      className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700 w-[auto]"
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
                    className="capitalize cursor-pointer font-bold text-[18px] text-indigo_A700 text-left"
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
                BLog 1
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[28px] items-start justify-start max-w-[1410px] mt-[20px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Blog 1
            </Text>
            <div className="flex flex-col gap-[40px] items-center justify-start md:w-[100%] w-[auto]">
              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-gradient27  flex flex-1 flex-col gap-[28px] h-[612px] md:h-[auto] items-start justify-start max-w-[690px] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[20px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[342px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[342px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg"
                      />
                      <div className="absolute bg-gray_700 h-[342px] inset-[0] justify-center m-[auto] rounded-[16px] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          The next big trend in crypto
                        </Text>
                        <Button className="bg-indigo_A700 cursor-pointer font-normal min-w-[112px] not-italic px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-gray_100 w-[auto]">
                          Music NFT’s
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[642px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters...
                      </Text>
                      <div className="flex flex-row gap-[28px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_user_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="user"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            {" "}
                            By SalvadorDali
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_clock_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="clock"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            Feb 19, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient27  flex flex-1 flex-col gap-[28px] h-[612px] md:h-[auto] items-start justify-start max-w-[690px] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[20px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[342px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[342px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg One"
                      />
                      <div className="absolute bg-gray_700 h-[342px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Decentraland and Meta Verse
                        </Text>
                        <Button className="bg-indigo_A700 cursor-pointer font-normal min-w-[112px] not-italic px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-gray_100 w-[auto]">
                          Music NFT’s
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[642px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters...
                      </Text>
                      <div className="flex flex-row gap-[28px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_user_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="user One"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            {" "}
                            By SalvadorDali
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_clock_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="clock One"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            Feb 19, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient27  flex flex-1 flex-col gap-[28px] h-[612px] md:h-[auto] items-start justify-start max-w-[690px] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[20px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[342px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[342px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg Two"
                      />
                      <div className="absolute bg-gray_700 h-[342px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Beeple Everydays The First 10 Days
                        </Text>
                        <Button className="bg-indigo_A700 cursor-pointer font-normal min-w-[112px] not-italic px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-gray_100 w-[auto]">
                          Music NFT’s
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[642px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters...
                      </Text>
                      <div className="flex flex-row gap-[28px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_user_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="user Two"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            {" "}
                            By SalvadorDali
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_clock_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="clock Two"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            Feb 19, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient27  flex flex-1 flex-col gap-[28px] h-[612px] md:h-[auto] items-start justify-start max-w-[690px] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[20px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[342px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[342px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg Three"
                      />
                      <div className="absolute bg-gray_700 h-[342px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Videos releases Car drive
                        </Text>
                        <Button className="bg-indigo_A700 cursor-pointer font-normal min-w-[112px] not-italic px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-gray_100 w-[auto]">
                          Music NFT’s
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[642px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters...
                      </Text>
                      <div className="flex flex-row gap-[28px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_user_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="user Three"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            {" "}
                            By SalvadorDali
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_clock_indigo_a700.svg"
                            className="h-[20px] w-[20px]"
                            alt="clock Three"
                          />
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            Feb 19, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      onClick={handleNavigate2}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate3}
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
                        alt="user Four"
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

export default Blog1DarkPage;
