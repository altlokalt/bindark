import React from "react";

import { Button, Img, Text, List, Input } from "components";

const ProfileDashboardDarkPage = () => {
  function handleNavigate61() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate67() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate68() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate69() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-dmsans gap-[20px] items-center justify-start mx-[auto] w-[100%]">
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
                <Img src="images/img_car.svg" className="h-[24px]" alt="car" />
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
              className="font-bold text-indigo_A700 text-left w-[auto]"
              variant="body8"
            >
              Profile
            </Text>
          </div>
        </header>
        <div className="md:h-[1678px] h-[2086px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[80px] justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[615px] md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Connect Wallet
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                  <List
                    className="flex-col gap-[30px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1050px] my-[0] w-[100%]">
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Img
                            src="images/img_airplane.svg"
                            className="h-[80px] w-[80px]"
                            alt="airplane"
                          />
                          <Button className="bg-white_A700_19 cursor-pointer font-bold min-w-[71px] px-[16px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            BETA
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Meta Mask
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[80px] w-[80px]"
                          alt="location"
                        />
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Bitski
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Img
                            src="images/img_offer_blue_400.svg"
                            className="h-[80px] w-[80px]"
                            alt="offer"
                          />
                          <Button className="bg-white_A700_19 cursor-pointer font-bold min-w-[71px] px-[16px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            BETA
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Wallet connect
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1050px] my-[0] w-[100%]">
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <Img
                          src="images/img_logotag.svg"
                          className="h-[80px] w-[100%]"
                          alt="LogoTag"
                        />
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Coin Base
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex h-[80px] items-center justify-start w-[80px]">
                            <Img
                              src="images/img_authereum1.png"
                              className="h-[77px] md:h-[auto] object-cover w-[87%]"
                              alt="authereumOne"
                            />
                          </div>
                          <Button className="bg-white_A700_19 cursor-pointer font-bold min-w-[71px] px-[16px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            BETA
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Authereum
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Img
                            src="images/img_image19066.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="image19066"
                          />
                          <Button className="bg-white_A700_19 cursor-pointer font-bold min-w-[71px] px-[16px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            BETA
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-center text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Kaikas
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                            variant="body8"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[690px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                      <Img
                        src="images/img_logotag_light_blue_500.svg"
                        className="h-[80px] w-[100%]"
                        alt="LogoTag One"
                      />
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="capitalize text-center text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Torus
                        </Text>
                        <Text
                          className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                          variant="body8"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_901 flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                      <Img
                        src="images/img_computer_deep_purple_a200.svg"
                        className="h-[80px] w-[80px]"
                        alt="computer"
                      />
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="capitalize text-center text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Fortmatic
                        </Text>
                        <Text
                          className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[250px] not-italic text-gray_100 text-left"
                          variant="body8"
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </Text>
                      </div>
                    </div>
                  </List>
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
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </a>
                    </li>
                    <li className="mt-[24px] w-[100%]">
                      <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-between">
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate67}
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[24px]"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate68}
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
          <div className="absolute flex flex-col inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div
              className="bg-cover bg-no-repeat h-[360px] mx-[auto] w-[100%]"
              style={{ backgroundImage: "url('images/img_slider.png')" }}
            >
              <Img
                src="images/img_bg_360x1920.png"
                className="h-[360px] m-[auto] object-cover w-[100%]"
                alt="bg"
              />
              <div className="absolute bg-gray_700 h-[360px] inset-[0] justify-center m-[auto] w-[100%]"></div>
            </div>
            <div className="bg-gray_901 flex flex-col gap-[32px] items-center justify-center ml-[255px] mt-[-80px] sm:px-[20px] px-[24px] py-[40px] rounded-[18px] w-[auto] z-[1]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[120px] w-[120px]"
                  alt="IMG One"
                />
                <div className="flex flex-col gap-[5px] items-center justify-start mt-[11px] w-[auto]">
                  <Text
                    className="capitalize font-bold text-center text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Francisco Maia
                  </Text>
                  <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_arrowdown_indigo_300.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Three"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body10"
                    >
                      0x59485…82590
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start mt-[24px] w-[auto]">
                  <Text
                    className="capitalize font-normal leading-[22.00px] md:max-w-[100%] max-w-[282px] not-italic text-center text-gray_400"
                    variant="body10"
                  >
                    8,888 NFTs of beautiful, Asian women painstakingly-crafted
                    where even the most intricate
                  </Text>
                  <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                    <div className="flex items-center justify-start p-[3px] w-[41%]">
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className="common-pointer h-[16px] w-[16px]"
                        onClick={handleNavigate69}
                        alt="facebook One"
                      />
                    </div>
                    <div className="flex items-center justify-start p-[3px] w-[41%]">
                      <Img
                        src="images/img_twitter_white_a700.svg"
                        className="common-pointer h-[16px] w-[16px]"
                        onClick={handleNavigate61}
                        alt="twitter One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[282px]">
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_folder_gray_400.svg"
                      className="h-[20px] w-[20px]"
                      alt="folder"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Inventory
                    </Text>
                  </div>
                </div>
                <Input
                  className="font-bold p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-indigo_A700_19 flex outline outline-[0.5px] outline-indigo_A700 px-[20px] py-[17px] rounded-[16px] w-[100%]"
                  name="AccountDetails"
                  placeholder="Wallet"
                  prefix={
                    <Img
                      src="images/img_car_white_a700.svg"
                      className="mr-[12px] my-[auto]"
                      alt="car"
                    />
                  }
                ></Input>
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_close_gray_400_20x20.svg"
                      className="h-[20px] w-[20px]"
                      alt="close"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      History
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_settings_gray_400.svg"
                      className="h-[20px] w-[20px]"
                      alt="settings"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Following
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_computer_gray_400.svg"
                      className="h-[20px] w-[20px]"
                      alt="computer One"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Favorites
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_settings_gray_400_20x20.svg"
                      className="h-[20px] w-[20px]"
                      alt="settings One"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Account Setting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDashboardDarkPage;
