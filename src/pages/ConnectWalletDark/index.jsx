import React from "react";

import { Button, Img, Text, List } from "components";

const ConnectWalletDarkPage = () => {
  function handleNavigate11() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate12() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2158px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0137exploregriddark.png')" }}
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
                Pages
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
                Wallet
              </Text>
            </div>
          </header>
          <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1410px] mt-[17px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[12px] items-center justify-start sm:w-[100%] w-[auto]">
              <Text
                className="capitalize text-center text-white_A700 w-[auto]"
                variant="body2"
              >
                Connect your wallet
              </Text>
              <Text
                className="font-normal leading-[24.00px] not-italic text-center text-gray_200"
                variant="body8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati
                <br />
                dignissimos quae quo ad iste ipsum officiis deleniti asperiores
                sit.
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start md:w-[100%] w-[auto]">
              <List
                className="flex-col gap-[30px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1410px] w-[100%]">
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[412px] md:h-[auto] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Img
                        src="images/img_airplane_lime_900.svg"
                        className="h-[100px] w-[100px]"
                        alt="airplane"
                      />
                      <Button className="bg-white_A700_4c cursor-pointer font-bold min-w-[73px] px-[12px] py-[6px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                        BETA
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Meta Mask
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <Img
                      src="images/img_location.svg"
                      className="h-[100px] w-[100px]"
                      alt="location"
                    />
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Bitski
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Img
                        src="images/img_icon_blue_400.svg"
                        className="h-[120px] w-[120px]"
                        alt="Icon"
                      />
                      <Button className="bg-white_A700_4c cursor-pointer font-bold min-w-[73px] px-[12px] py-[6px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                        BETA
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Wallet connect
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1410px] w-[100%]">
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <Img
                      src="images/img_logotag.svg"
                      className="h-[120px] w-[120px]"
                      alt="Logo"
                    />
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Coin Base
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[406px] md:h-[auto] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[120px] items-center justify-start p-[2px] w-[120px]">
                        <Img
                          src="images/img_authereum1.png"
                          className="h-[116px] md:h-[auto] object-cover w-[90%]"
                          alt="authereumOne"
                        />
                      </div>
                      <Button className="bg-white_A700_4c cursor-pointer font-bold min-w-[73px] px-[12px] py-[6px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                        BETA
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Authereum
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[120px] items-center justify-start w-[120px]">
                        <Img
                          src="images/img_kaikas1.png"
                          className="h-[120px] md:h-[auto] object-cover w-[120px]"
                          alt="kaikasOne"
                        />
                      </div>
                      <Button className="bg-white_A700_4c cursor-pointer font-bold min-w-[73px] px-[12px] py-[6px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                        BETA
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize text-center text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Kaikas
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                        variant="body7"
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[930px] w-[100%]">
                <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <Img
                    src="images/img_logotag_light_blue_500.svg"
                    className="h-[120px] w-[120px]"
                    alt="Logo One"
                  />
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="capitalize text-center text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      Torus
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                      variant="body7"
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Img
                      src="images/img_icon_deep_purple_a200.svg"
                      className="h-[120px] w-[120px]"
                      alt="Icon One"
                    />
                    <Button className="bg-white_A700_4c cursor-pointer font-bold min-w-[73px] px-[12px] py-[6px] rounded-[8px] text-[20px] text-center text-white_A700 w-[auto]">
                      BETA
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="capitalize text-center text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      Fortmatic
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[370px] not-italic text-gray_100 text-left"
                      variant="body7"
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </Text>
                  </div>
                </div>
              </div>
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
                      onClick={handleNavigate11}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate12}
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

export default ConnectWalletDarkPage;
