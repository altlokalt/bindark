import React from "react";

import { Button, Img, Text, List, Input, Line } from "components";

const Blog2DarkPage = () => {
  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate9() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2758px] items-center justify-start mx-[auto] w-[100%]"
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
                Blog 2
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[28px] items-start justify-start max-w-[1410px] mt-[20px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="capitalize text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              Blog 2
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-start justify-start max-w-[1410px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[auto]">
                <List
                  className="flex-col gap-[30px] grid items-start md:w-[100%] w-[auto]"
                  orientation="vertical"
                >
                  <div className="bg-gradient2  flex flex-col gap-[28px] h-[610px] md:h-[auto] items-start justify-start max-w-[880px] my-[0] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[16px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[378px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[378px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg"
                      />
                      <div className="absolute bg-gray_700 h-[378px] inset-[0] justify-center m-[auto] rounded-[16px] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
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
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[832px] not-italic text-gray_100 text-left"
                        variant="body8"
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
                  <div className="bg-gradient2  flex flex-col gap-[28px] h-[610px] md:h-[auto] items-start justify-start max-w-[880px] my-[0] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[16px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[378px] md:h-[436px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[378px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg One"
                      />
                      <div className="absolute bg-gray_700 bottom-[0] h-[436px] inset-x-[0] mx-[auto] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Decentraland and Meta Verse
                        </Text>
                        <Button className="bg-indigo_A700 cursor-pointer font-normal min-w-[109px] not-italic px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-gray_100 w-[auto]">
                          Application
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[832px] not-italic text-gray_100 text-left"
                        variant="body8"
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
                  <div className="bg-gradient2  flex flex-col gap-[28px] h-[610px] md:h-[auto] items-start justify-start max-w-[880px] my-[0] pb-[32px] pt-[24px] sm:px-[20px] px-[24px] rounded-[16px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[378px] md:h-[436px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_img_378x832.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_378x832.png"
                        className="h-[378px] m-[auto] object-cover rounded-[16px] w-[100%]"
                        alt="Bg Two"
                      />
                      <div className="absolute bg-gray_700 bottom-[0] h-[436px] inset-x-[0] mx-[auto] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
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
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[832px] not-italic text-gray_100 text-left"
                        variant="body8"
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
                </List>
                <Button className="border-[2px] border-indigo_A700 border-solid cursor-pointer font-bold min-w-[120px] sm:px-[20px] px-[24px] py-[12px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                  Load more
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="bg-gray_901 flex flex-col gap-[32px] items-start justify-start p-[24px] sm:px-[20px] rounded-[16px] sm:w-[100%] w-[450px]">
                  <Input
                    className="capitalize font-bold p-[16px] sm:text-[20px] md:text-[22px] text-[24px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="bg-indigo_A700_33 rounded-[12px] w-[100%]"
                    name="Heading"
                    placeholder="Category"
                  ></Input>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        Music NFT’s
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        300
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        NFT Creators
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        23
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        Rare Products
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        12
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        Rare Vedios
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        76
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-indigo_A700 text-left w-[auto]"
                        variant="body7"
                      >
                        Digital Arts
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        123
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        App Music NFT’s
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        64
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        Application
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        108
                      </Text>
                    </div>
                    <Line className="bg-bluegray_900_90 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[26px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        Art
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_100 text-left w-[auto]"
                        variant="body7"
                      >
                        67
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_901 flex flex-col gap-[32px] items-start justify-start p-[24px] sm:px-[20px] rounded-[16px] sm:w-[100%] w-[450px]">
                  <Input
                    className="capitalize font-bold p-[16px] sm:text-[20px] md:text-[22px] text-[24px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="bg-indigo_A700_33 rounded-[12px] w-[100%]"
                    name="Heading One"
                    placeholder="Recent Post"
                  ></Input>
                  <List
                    className="flex-col gap-[20px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat h-[56px] relative w-[56px]"
                        style={{
                          backgroundImage: "url('images/img_img_56x56.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_56x56.png"
                          className="h-[56px] m-[auto] object-cover rounded-[8px] w-[56px]"
                          alt="Bg Three"
                        />
                        <div className="absolute bg-gray_700 h-[56px] inset-[0] justify-center m-[auto] rounded-[8px] w-[56px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold leading-[26.00px] md:max-w-[100%] max-w-[330px] text-gray_100 text-left"
                          variant="body7"
                        >
                          Best Corporate Tips You Will Read This Year.
                        </Text>
                        <Text
                          className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body10"
                        >
                          Music NFT’s
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_900_90 w-[100%]" />
                    <div className="flex flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat h-[56px] relative w-[56px]"
                        style={{
                          backgroundImage: "url('images/img_img_56x56.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_56x56.png"
                          className="h-[56px] m-[auto] object-cover rounded-[8px] w-[56px]"
                          alt="Bg Four"
                        />
                        <div className="absolute bg-gray_700 h-[56px] inset-[0] justify-center m-[auto] rounded-[8px] w-[56px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold leading-[26.00px] md:max-w-[100%] max-w-[330px] text-gray_100 text-left"
                          variant="body7"
                        >
                          Should Fixing Corporate Take 100 Steps.
                        </Text>
                        <Text
                          className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body10"
                        >
                          Music NFT’s
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_900_90 w-[100%]" />
                    <div className="flex flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat h-[56px] relative w-[56px]"
                        style={{
                          backgroundImage: "url('images/img_img_56x56.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_56x56.png"
                          className="h-[56px] m-[auto] object-cover rounded-[8px] w-[56px]"
                          alt="Bg Five"
                        />
                        <div className="absolute bg-gray_700 h-[56px] inset-[0] justify-center m-[auto] rounded-[8px] w-[56px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold leading-[26.00px] md:max-w-[100%] max-w-[330px] text-gray_100 text-left"
                          variant="body7"
                        >
                          The Next 100 Things To Immediately Do About
                        </Text>
                        <Text
                          className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body10"
                        >
                          Music NFT’s
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_900_90 w-[100%]" />
                    <div className="flex flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start my-[0] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat h-[56px] relative w-[56px]"
                        style={{
                          backgroundImage: "url('images/img_img_56x56.png')",
                        }}
                      >
                        <Img
                          src="images/img_bg_56x56.png"
                          className="h-[56px] m-[auto] object-cover rounded-[8px] w-[56px]"
                          alt="Bg Six"
                        />
                        <div className="absolute bg-gray_700 h-[56px] inset-[0] justify-center m-[auto] rounded-[8px] w-[56px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold leading-[26.00px] md:max-w-[100%] max-w-[330px] text-gray_100 text-left"
                          variant="body7"
                        >
                          Top 5 Lessons About Corporate To Learn
                        </Text>
                        <Text
                          className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body10"
                        >
                          Music NFT’s
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="bg-gray_901 flex flex-col gap-[32px] items-start justify-start p-[24px] sm:px-[20px] rounded-[16px] sm:w-[100%] w-[450px]">
                  <Input
                    className="capitalize font-bold p-[16px] sm:text-[20px] md:text-[22px] text-[24px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="bg-indigo_A700_33 rounded-[12px] w-[100%]"
                    name="Heading Two"
                    placeholder="Popular tags"
                  ></Input>
                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[402px]">
                    <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold min-w-[79px] px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Bitcoin
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        NFT
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Bids
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Digital
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Arts
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold min-w-[115px] px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Maketplace
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Token
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Wallet
                      </Button>
                      <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer flex-1 font-bold px-[12px] py-[6px] rounded-[18px] text-[16px] text-center text-white_A700 w-[100%]">
                        Crypto
                      </Button>
                    </div>
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
                      onClick={handleNavigate8}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate9}
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
                        alt="user Three"
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

export default Blog2DarkPage;
