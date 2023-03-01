import React from "react";

import { Button, Img, Text, List, Line, Input } from "components";

const ProfileFollowingDark1Page = () => {
  function handleNavigate44() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate52() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate53() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate54() {
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
        <div className="md:h-[1290px] h-[1698px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[80px] justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[645px] md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Edit Profile
                </Text>
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <List
                    className="flex-col gap-[24px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start my-[0] w-[100%]">
                      <Text
                        className="capitalize font-bold text-left text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        Account information
                      </Text>
                      <div className="bg-gray_901 flex flex-col gap-[16px] items-center justify-end p-[10px] rounded-[16px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mt-[12px] md:w-[100%] w-[96%]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Full name
                          </Text>
                          <Text
                            className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Sebastian Bennett
                          </Text>
                          <Line className="bg-bluegray_900 h-[1px] mt-[18px] w-[100%]" />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[96%]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Gender
                          </Text>
                          <Text
                            className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Female
                          </Text>
                          <Line className="bg-bluegray_900 h-[1px] mt-[18px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Date of birth
                          </Text>
                          <Text
                            className="font-bold mb-[16px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            January 24, 1983
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start my-[0] w-[100%]">
                      <Text
                        className="capitalize font-bold text-left text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        Contact details
                      </Text>
                      <div className="bg-gray_901 flex flex-col gap-[16px] items-center justify-end p-[10px] rounded-[16px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mt-[12px] md:w-[100%] w-[96%]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Email address
                          </Text>
                          <Text
                            className="font-bold mt-[5px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            seb.bennett@gmail.com
                          </Text>
                          <Line className="bg-bluegray_900 h-[1px] mt-[16px] w-[100%]" />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[96%]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Phone number
                          </Text>
                          <Text
                            className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            +995 590 558 124
                          </Text>
                          <Line className="bg-bluegray_900 h-[1px] mt-[18px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Address
                          </Text>
                          <Text
                            className="font-bold mb-[16px] text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            83222 Dicki View, South Pasqualeview, RI 79216-3100
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[165px] py-[14px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                      Update Settings
                    </Button>
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
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </a>
                    </li>
                    <li className="mt-[24px] w-[100%]">
                      <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-between">
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate52}
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[24px]"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate53}
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
                        onClick={handleNavigate54}
                        alt="facebook One"
                      />
                    </div>
                    <div className="flex items-center justify-start p-[3px] w-[41%]">
                      <Img
                        src="images/img_twitter_white_a700.svg"
                        className="common-pointer h-[16px] w-[16px]"
                        onClick={handleNavigate44}
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
                <div className="flex items-start justify-start px-[20px] py-[17px] w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_computer.svg"
                      className="h-[20px] w-[20px]"
                      alt="computer"
                    />
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Wallet
                    </Text>
                  </div>
                </div>
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
                <Input
                  className="font-bold p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-indigo_A700_19 flex outline outline-[0.5px] outline-indigo_A700 px-[20px] py-[17px] rounded-[16px] w-[100%]"
                  name="Following"
                  placeholder="Account Setting"
                  prefix={
                    <Img
                      src="images/img_mail_white_a700.svg"
                      className="mr-[12px] my-[auto]"
                      alt="mail"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFollowingDark1Page;
