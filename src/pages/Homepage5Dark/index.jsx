import React from "react";

import { Img, Text, Button, SelectBox, Line, List } from "components";

const Homepage5DarkPage = () => {
  function handleNavigate96() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate97() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_902 flex flex-col font-dmsans gap-[41px] items-start justify-end mx-[auto] w-[100%]">
        <div className="flex items-center w-[100%]">
          <div className="sm:h-[4515px] md:h-[5028px] h-[6622px] md:px-[20px] relative w-[100%]">
            <div className="flex sm:h-[4515px] md:h-[5028px] h-[6622px] justify-end m-[auto] w-[100%]">
              <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-start justify-between left-[0] top-[0] w-[91%]">
                <Img
                  src="images/img_ellipse62.png"
                  className="h-[606px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                  alt="EllipseSixtyTwo"
                />
                <div className="md:h-[483px] h-[954px] md:mt-[0] mt-[81px] relative md:w-[100%] w-[54%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-indigo_A700_75 blur-[200.00px] h-[483px] left-[0] rounded-[255px] top-[0] w-[56%]"></div>
                  <div className="absolute bottom-[0] h-[483px] right-[0] sm:w-[100%] w-[56%]">
                    <div className="backdrop-opacity-[0.5] bg-pink_200_7f blur-[200.00px] h-[483px] m-[auto] rounded-[255px] w-[100%]"></div>
                    <Img
                      src="images/img_carouselspot.svg"
                      className="absolute h-[339px] right-[27%] top-[1%] w-[19px]"
                      alt="carouselspot"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_bg_pink_200.svg"
                className="h-[1173px] mb-[2102px] mt-[auto] mx-[auto] w-[auto]"
                alt="bg"
              />
              <div className="absolute flex flex-col gap-[100px] md:gap-[40px] h-[max-content] inset-[0] items-center justify-start m-[auto] max-w-[1920px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start pt-[40px] sm:px-[20px] px-[40px] w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[212px] md:w-[100%] w-[32%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="capitalize leading-[68.00px] text-left text-white_A700 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        Defind, Collect and Sell Super Rate NFT{" "}
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[90%]"
                        variant="body7"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio sum dolor sit amet
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[40px] md:w-[100%] w-[94%]">
                      <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-row gap-[10px] h-[58px] md:h-[auto] items-center justify-start p-[20px] rounded-[29px] sm:w-[100%] w-[520px]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Button className="bg-indigo_A700 flex h-[25px] items-center justify-center p-[4px] rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_mail.svg"
                                className=""
                                alt="mail"
                              />
                            </Button>
                            <SelectBox
                              className="font-bold text-[16px] text-left text-white_A700 sm:w-[100%] w-[63%]"
                              placeholderClassName="text-white_A700"
                              name="Group256"
                              placeholder="ETH"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown_gray_900_16x16.svg"
                                  className="h-[16px] mr-[0] w-[16px]"
                                  alt="arrow_down"
                                />
                              }
                            ></SelectBox>
                          </div>
                          <Line className="bg-gray_400 h-[20px] w-[1px]" />
                          <Text
                            className="flex-1 font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body8"
                          >
                            Search keyword...
                          </Text>
                          <Img
                            src="images/img_search.svg"
                            className="h-[20px] w-[20px]"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="border-[1px] border-indigo_A700 border-solid flex items-center justify-center mt-[32px] px-[16px] py-[12px] rounded-[24px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrow_1.svg"
                          className="ml-[10px] text-center"
                          alt="Arrow 1"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                        Explore
                      </div>
                    </Button>
                  </div>
                  <div className="flex h-[753px] md:h-[811px] justify-end relative md:w-[100%] w-[43%]">
                    <div className="bg-gradient17  border-[4px] border-indigo_A700_7e border-solid h-[604px] mt-[auto] mx-[auto] rounded-[57px] w-[73%]"></div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[811px] inset-x-[0] items-end justify-start mx-[auto] p-[17px] w-[100%]"
                      style={{ backgroundImage: "url('images/img_04.svg')" }}
                    >
                      <div className="flex flex-col gap-[126px] md:gap-[40px] justify-start mb-[94px] mr-[12px] md:w-[100%] w-[87%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                          <div className="h-[171px] mb-[233px] relative md:w-[100%] w-[14%]">
                            <Img
                              src="images/img_vector10.svg"
                              className="h-[40px] mb-[-3px] ml-[auto] mr-[23px] w-[auto] z-[1]"
                              alt="VectorTen"
                            />
                            <Img
                              src="images/img_vector11_indigo_a700.svg"
                              className="h-[134px] mt-[auto] mx-[auto] w-[auto]"
                              alt="VectorEleven"
                            />
                          </div>
                          <Img
                            src="images/img_star3_55x31.svg"
                            className="h-[55px] md:ml-[0] ml-[421px] md:mt-[0] mt-[350px] w-[5%]"
                            alt="StarThree"
                          />
                          <Img
                            src="images/img_vector12_red_600.svg"
                            className="h-[134px] md:ml-[0] ml-[17px] md:mt-[0] mt-[232px] w-[auto]"
                            alt="VectorTwelve"
                          />
                        </div>
                        <div className="bg-gradient18  flex flex-col gap-[12px] items-start justify-start md:ml-[0] ml-[65px] p-[20px] rounded-[20px] sm:w-[100%] w-[auto]">
                          <Text
                            className="capitalize text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Auction ending in:
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="capitalize text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              13h
                            </Text>
                            <Text
                              className="capitalize text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              :
                            </Text>
                            <Text
                              className="capitalize text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              45min
                            </Text>
                            <Text
                              className="capitalize text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              :
                            </Text>
                            <Text
                              className="capitalize text-left text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              56s
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-center justify-start sm:px-[20px] px-[255px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
                    <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Top Creators
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                        variant="body7"
                      >
                        The most creative creator - Based on the last 30 days{" "}
                      </Text>
                    </div>
                    <Button className="bg-gray_901 border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold min-w-[111px] md:mt-[0] mt-[50px] pl-[20px] pr-[16px] py-[8px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[1.40px] uppercase w-[auto]">
                      view all
                    </Button>
                  </div>
                  <div className="flex items-center justify-start pb-[3px] w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            1.
                          </Text>
                          <div className="bg-gray_901 border-[2px] border-indigo_A700 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            4.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_14x14.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour One"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark One"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            7.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_1.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Two"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Two"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            10.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_2.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Three"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Three"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            2.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_3.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Four"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Four"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            5.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_4.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Five"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Five"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            8.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_5.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Six"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Six"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            11.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_6.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Seven"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Seven"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            3.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_7.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Eight"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Eight"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            6.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_8.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Nine"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Nine"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            9.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[15px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_9.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Ten"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Ten"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            12.
                          </Text>
                          <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[15px] items-center justify-start pl-[16px] pr-[10px] py-[16px] rounded-[12px] w-[100%]">
                            <div className="bg-gray_700 flex h-[45px] items-end justify-end pl-[2px] py-[2px] rounded-[22px] w-[45px]">
                              <div className="h-[14px] md:h-[41px] mt-[27px] relative w-[14px]">
                                <Img
                                  src="images/img_star4_10.svg"
                                  className="h-[14px] m-[auto] w-[14px]"
                                  alt="StarFour Eleven"
                                />
                                <Img
                                  src="images/img_checkmark_gray_900.svg"
                                  className="absolute h-[8px] inset-[0] justify-center m-[auto] w-[8px]"
                                  alt="checkmark Eleven"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                hakumamatata
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                $124.135
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[8px] px-[8px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[247px] sm:w-[100%] w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Hot Auction
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      variant="body7"
                    >
                      The most creative creator - Based on the last 30 days{" "}
                    </Text>
                  </div>
                  <div className="md:h-[1075px] h-[1126px] md:ml-[0] ml-[247px] mt-[27px] relative md:w-[100%] w-[77%]">
                    <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_51.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree One"
                                />
                              </div>
                            </div>
                            <div className="absolute bg-black_900_33 border-[1px] border-solid border-white_A700_99 bottom-[8%] flex flex-row gap-[4px] h-[35px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] p-[10px] rounded-[17px] w-[auto]">
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                                alt="favorite One"
                              />
                            </Button>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat md:h-[237px] h-[290px] p-[18px] relative w-[290px]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_52.svg"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_53.svg"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_54.svg"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_55.svg"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_56.svg"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
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
                                  Hakunamatata
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_57.svg"
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
                            <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                              <div
                                className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
                                }}
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
                                  className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
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
                              Sweet Baby #1
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
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
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
                                  src="images/img_star3_58.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Eight"
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
                                  backgroundImage:
                                    "url('images/img_img_9.png')",
                                }}
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
                                  className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
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
                    <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] pb-[49px] sm:pr-[20px] md:pr-[40px] pr-[49px] top-[0] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] mb-[301px] w-[100%]">
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
                    </div>
                  </div>
                  <Button
                    className="border-[1px] border-bluegray_900 border-solid flex items-center justify-center md:ml-[0] ml-[849px] mt-[40px] px-[16px] py-[12px] rounded-[24px] sm:ml-[0] text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrow_1.svg"
                        className="ml-[10px] text-center"
                        alt="Arrow 1"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                      Explore More
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-[36px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] w-[74%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start pr-[5px] pt-[5px] w-[100%]">
                        <Text
                          className="capitalize text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Top Collection
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                        variant="body7"
                      >
                        The most well-known Collection - Based on the last 30
                        days{" "}
                      </Text>
                    </div>
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
                  </div>
                  <List
                    className="flex-col gap-[29px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start overflow-auto md:w-[100%] w-[auto]">
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-white_A700 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Eight"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG One"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-gray_100 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite One"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Three"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-white_A700 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Two"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Five"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-gray_900 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Three"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Seven"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start overflow-auto md:w-[100%] w-[auto]">
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-white_A700 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Nine"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG One One"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-white_A700 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite One One"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Three One"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-white_A700 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Two One"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Five One"
                          />
                        </div>
                        <div className="bg-gradient2  border-[1px] border-bluegray_900 border-solid flex flex-col gap-[10px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end pl-[3px] py-[3px] w-[100%]">
                            <div className="bg-gray_700 h-[49px] sm:mt-[0] mt-[7px] rounded-[24px] w-[49px]"></div>
                            <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                SweetGirlofCandy
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body11"
                              >
                                created by MariaBrownie@1123
                              </Text>
                            </div>
                            <Button className="bg-gray_900 border-[1px] border-gray_400 border-solid flex h-[44px] items-center justify-center sm:ml-[0] ml-[124px] sm:mt-[0] my-[6px] p-[10px] rounded-[50%] w-[44px]">
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px]"
                                alt="favorite Three One"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_img_gray_700_201x410.svg"
                            className="h-[201px] w-[100%]"
                            alt="IMG Seven One"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-lato relative w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[154px] md:gap-[40px] items-start justify-start mx-[auto] sm:px-[20px] px-[249px] md:px-[40px] w-[100%]">
                    <div className="md:h-[736px] h-[957px] relative md:w-[100%] w-[49%]">
                      <div className="absolute bg-gradient20  bottom-[13%] mb-[129px] mt-[92px] p-[6px] rounded-[57px] top-[10%] w-[100%] ">
                        <div className="absolute bg-gradient19  bg-gray_902 border-solid h-[736px] inset-[0] justify-center m-[auto] rounded-[57px]"></div>
                      </div>
                      <div className="absolute md:h-[697px] h-[957px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[82%]">
                        <Img
                          src="images/img_04.svg"
                          className="absolute h-[697px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="IMG Ten"
                        />
                        <div className="absolute flex flex-col gap-[409px] md:gap-[40px] h-[100%] inset-y-[0] justify-start my-[auto] right-[0] w-[93%]">
                          <Img
                            src="images/img_2_indigo_a700.svg"
                            className="h-[255px] w-[auto]"
                            alt="Two Eight"
                          />
                          <div className="flex flex-col gap-[13px] items-center justify-start md:ml-[0] ml-[482px] md:w-[100%] w-[8%]">
                            <div className="flex flex-col items-start justify-start md:w-[100%] w-[18%]">
                              <div className="bg-red_600 h-[7px] rounded-[3px] w-[7px]"></div>
                              <div className="bg-red_600 h-[7px] mt-[17px] rounded-[3px] w-[7px]"></div>
                              <Line className="bg-red_600 h-[152px] md:ml-[0] ml-[2px] mt-[34px] w-[2px]" />
                            </div>
                            <Img
                              src="images/img_star3_63x41.svg"
                              className="h-[63px] w-[100%]"
                              alt="StarThree Nine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[471px] sm:h-[549px] md:mt-[0] mt-[192px] relative md:w-[100%] w-[41%]">
                      <div className="absolute flex flex-row gap-[18px] items-start justify-between right-[0] rotate-[-1deg] top-[13%] w-[31%]">
                        <div className="h-[125px] mb-[15px] relative w-[45%]">
                          <Img
                            src="images/img_volume_indigo_a700.svg"
                            className="h-[29px] mb-[-3.02px] ml-[auto] mr-[18px] w-[auto] z-[1]"
                            alt="volume"
                          />
                          <Img
                            src="images/img_vector11.svg"
                            className="h-[99px] mt-[auto] mx-[auto] w-[auto]"
                            alt="VectorEleven One"
                          />
                        </div>
                        <div className="md:h-[114px] h-[125px] mt-[15px] relative w-[45%]">
                          <Img
                            src="images/img_vector12.svg"
                            className="absolute h-[99px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                            alt="VectorTwelve One"
                          />
                          <Img
                            src="images/img_star3_40x26.svg"
                            className="absolute bottom-[0] h-[40px] left-[0] w-[34%]"
                            alt="StarThree Ten"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
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
                            variant="body3"
                          >
                            cesea
                          </Text>
                        </div>
                        <div className="flex flex-col font-dmsans gap-[36px] items-center justify-start mt-[41px] w-[100%]">
                          <Text
                            className="capitalize leading-[80.00px] text-left text-white_A700 w-[100%]"
                            as="h3"
                            variant="h3"
                          >
                            Create and Sell nFT with Cesea
                          </Text>
                          <Text
                            className="font-normal leading-[26.00px] not-italic text-bluegray_200 text-left w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor
                            purus non enim praesent elementum facilisis leo, vel
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-dmsans gap-[30px] items-center justify-start mt-[64px] md:w-[100%] w-[79%]">
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[210px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                            Create Item
                          </Button>
                          <Button className="border-[2px] border-solid border-white_A700 cursor-pointer font-bold min-w-[210px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                            Sell Item
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-dmsans gap-[48px] justify-start mt-[-245px] w-[94%] z-[1]">
                    <div className="md:h-[1020px] h-[1485px] relative md:w-[100%] w-[93%]">
                      <Img
                        src="images/img_graphic_gray_601.png"
                        className="absolute h-[878px] left-[0] object-cover top-[0] w-[auto]"
                        alt="Graphic"
                      />
                      <div className="absolute bottom-[0] flex items-center justify-start right-[0] w-[auto]">
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
                                    alt="favorite Ten"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_59.svg"
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
                              <Button className="bg-indigo_A700 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[20px] text-[16px] text-center text-white_A700 w-[167px]">
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
                                    alt="favorite Eleven"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_60.svg"
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
                                    alt="favorite Twelve"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_61.svg"
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
                                    alt="favorite Thirteen"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_62.svg"
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
                                    alt="mail Four"
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
                                    alt="favorite Fourteen"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_63.svg"
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
                                  Sweet Baby #1
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
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_64.svg"
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
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
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
                                    Hakunamatata
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
                                    src="images/img_star3_65.svg"
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
                                    alt="favorite Seventeen"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_img_9.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_bg_7.png"
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
                                    Hakunamatata
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
                                    src="images/img_star3_66.svg"
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
                        </div>
                      </div>
                      <div className="absolute flex items-center justify-start right-[0] top-[26%] w-[85%]">
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
                      <div className="absolute flex flex-col gap-[8px] items-start justify-start left-[15%] top-[18%] w-[auto]">
                        <div className="flex items-start justify-start w-[100%]">
                          <Text
                            className="capitalize text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            Hot Sales
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body7"
                        >
                          The most creative creator - Based on the last 30 days{" "}
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="border-[1px] border-indigo_A700 border-solid flex items-center justify-center md:ml-[0] ml-[855px] px-[16px] py-[12px] rounded-[24px] sm:ml-[0] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrow_1.svg"
                          className="ml-[10px] text-center"
                          alt="Arrow 1"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[16px] text-center text-white_A700">
                        Explore
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray_700_63 flex font-dmsans items-center justify-start p-[96px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mb-[3px] ml-[158px] w-[82%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[22%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
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
                      <Text
                        className="font-normal leading-[24.00px] mt-[18px] not-italic text-gray_400 text-left w-[100%]"
                        variant="body8"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </Text>
                      <div className="flex flex-row gap-[12px] items-center justify-between mt-[24px] w-[100%]">
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate96}
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[24px]"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate97}
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
                            alt="music Three"
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
                      <Text
                        className="capitalize font-normal mt-[33px] not-italic text-gray_700 text-left w-[auto]"
                        variant="body10"
                      >
                        Copyright © 2022 Avitex. All rights reserved.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:mt-[0] mt-[64px] md:w-[100%] w-[65%]">
                      <List
                        className="sm:flex-col flex-row md:gap-[40px] gap-[60px] grid grid-cols-3 md:w-[100%] w-[42%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Maketplace
                          </Text>
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Explore
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Item Detail
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Live Auditon
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Stats
                          </Text>
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Ranking
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Ativity
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Auther
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body7"
                          >
                            Resoure
                          </Text>
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Blogs
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Help and Center
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              FaQs
                            </Text>
                          </div>
                        </div>
                      </List>
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
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] p-[19px] top-[0] w-[100%]">
              <div className="flex items-center justify-start md:ml-[0] ml-[235px] w-[auto]">
                <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                  <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className=""
                      alt="lightbulb Two"
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
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[40px] items-center justify-start md:ml-[0] ml-[220px] sm:w-[100%] w-[auto]">
                <SelectBox
                  className="capitalize font-bold text-[18px] text-left text-white_A700 sm:w-[100%] w-[12%]"
                  placeholderClassName="text-white_A700"
                  name="Home"
                  placeholder="Home"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="capitalize font-bold pt-[2px] text-[18px] text-left text-white_A700 sm:w-[100%] w-[15%]"
                  placeholderClassName="text-white_A700"
                  name="Explore Three"
                  placeholder="Explore"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="capitalize font-bold pt-[2px] text-[18px] text-left text-white_A700 sm:w-[100%] w-[12%]"
                  placeholderClassName="text-white_A700"
                  name="Explore Four"
                  placeholder="Pages"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body7"
                >
                  Create
                </Text>
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body7"
                >
                  Blog
                </Text>
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body7"
                >
                  Contact
                </Text>
              </div>
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
          </div>
        </div>
        <Img
          src="images/img_ellipse59.png"
          className="h-[560px] md:h-[auto] object-cover w-[20%]"
          alt="EllipseFiftyNine"
        />
      </div>
    </>
  );
};

export default Homepage5DarkPage;
