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

const Homepage6DarkPage = () => {
  function handleNavigate88() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate89() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_902 bg-no-repeat flex font-dmsans h-[6287px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0110homepage6dark.png')" }}
      >
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
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
          <div className="flex flex-col gap-[40px] items-center justify-start mt-[112px] p-[13px] w-[100%]">
            <div className="md:h-[282px] h-[308px] md:px-[20px] relative md:w-[100%] w-[57%]">
              <div className="absolute bottom-[0] flex flex-col gap-[24px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                <Text
                  className="capitalize font-bold leading-[80.00px] text-center text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  <span className="md:text-[48px] text-white_A700 text-[70px] font-dmsans">
                    Defind, Collect and Sell
                    <br />
                    Super Rate{" "}
                  </span>
                  <span className="md:text-[48px] text-indigo_A700 text-[70px] font-dmsans">
                    NFT{" "}
                  </span>
                </Text>
                <Text
                  className="capitalize font-bold leading-[32.00px] text-center text-gray_300 sm:w-[100%] w-[91%]"
                  variant="body5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Text>
              </div>
              <div className="absolute flex flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[0] w-[100%]">
                <div className="md:h-[257px] h-[85px] mb-[197px] relative w-[86px]">
                  <Img
                    src="images/img_star1.svg"
                    className="absolute h-[60px] left-[0] top-[0] w-[60px]"
                    alt="StarOne"
                  />
                  <Img
                    src="images/img_star3_33x33.svg"
                    className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
                    alt="StarThree"
                  />
                </div>
                <Img
                  src="images/img_star4_33x33.svg"
                  className="h-[33px] mt-[249px] w-[33px]"
                  alt="StarFour"
                />
                <Img
                  src="images/img_star2_57x57.svg"
                  className="h-[57px] mb-[32px] mt-[193px] w-[57px]"
                  alt="StarTwo"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-start justify-center md:px-[20px] md:w-[100%] w-[20%]">
              <Button className="bg-gray_901 cursor-pointer font-bold mb-[6px] min-w-[170px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                Explore now
              </Button>
              <div className="md:h-[48px] h-[54px] relative w-[48%]">
                <div className="absolute backdrop-opacity-[0.5] bg-indigo_A700 blur-[33.00px] bottom-[0] h-[18px] inset-x-[0] mx-[auto] rounded-[9px] w-[100%]"></div>
                <Button className="absolute bg-indigo_A700 cursor-pointer font-bold inset-x-[0] min-w-[170px] mx-[auto] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 top-[0] w-[auto]">
                  Creat
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[69px] items-start justify-start mt-[43px] sm:px-[20px] px-[310px] md:px-[40px] w-[100%]">
            <div className="h-[559px] relative md:w-[100%] w-[44%]">
              <div className="absolute flex flex-col h-[max-content] inset-[0] justify-center m-[auto] w-[99%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-[129px] md:gap-[40px] h-[481px] justify-start p-[32px] sm:px-[20px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group68.png')" }}
                >
                  <Img
                    src="images/img_star5.svg"
                    className="h-[33px] mr-[465px] mt-[15px] w-[33px]"
                    alt="StarFive"
                  />
                  <Img
                    src="images/img_star6.svg"
                    className="h-[33px] mb-[207px] md:ml-[0] ml-[472px] mr-[4px] w-[5%]"
                    alt="StarSix"
                  />
                </div>
                <Img
                  src="images/img_star7.svg"
                  className="h-[27px] md:ml-[0] ml-[105px] mr-[435px] w-[4%]"
                  alt="StarSeven"
                />
                <div className="backdrop-opacity-[0.5] bg-gray_903 blur-[20.00px] h-[19px] md:ml-[0] ml-[198px] mr-[131px] mt-[26px] rounded-[116px] w-[42%]"></div>
              </div>
              <Img
                src="images/img_img_gray_700_559x559.svg"
                className="absolute h-[559px] inset-[0] justify-center m-[auto] w-[559px]"
                alt="IMG"
              />
            </div>
            <div className="h-[441px] md:mt-[0] mt-[78px] relative md:w-[100%] w-[39%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="bg-gradient21  p-[1px] rounded-[20px] w-[100%] ">
                  <div className="bg-gray_902 border-solid h-[441px] rounded-[20px]"></div>
                </div>
              </div>
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="capitalize text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Planezi #2442
                      </Text>
                      <Text
                        className="capitalize font-bold text-center text-gray_100 w-[auto]"
                        variant="body5"
                      >
                        Limitted Edittion
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between mt-[8px] w-[18%]">
                      <div className="flex h-[32px] items-center justify-start w-[32px]">
                        <Button className="bg-gray_901 flex h-[32px] items-center justify-center outline outline-[0.5px] outline-bluegray_200 p-[4px] rounded-[50%] w-[32px]">
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[24px]"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <div className="flex h-[32px] items-center justify-start rotate-[180deg] w-[32px]">
                        <Button className="bg-gray_901 flex h-[32px] items-center justify-center outline outline-[0.5px] outline-bluegray_200 p-[4px] rounded-[50%] w-[32px]">
                          <Img
                            src="images/img_arrowright_white_a700_32x32.svg"
                            className="h-[24px]"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-center justify-start mt-[12px] md:w-[100%] w-[63%]">
                    <div
                      className="bg-cover bg-no-repeat h-[79px] relative w-[79px]"
                      style={{
                        backgroundImage: "url('images/img_img_15.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_79x79.png"
                        className="h-[79px] m-[auto] rounded-[50%] w-[79px]"
                        alt="Bg"
                      />
                      <div className="absolute bg-gray_700 h-[79px] inset-[0] justify-center m-[auto] rounded-[39px] w-[79px]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-center text-gray_400 w-[auto]"
                        variant="body6"
                      >
                        creator
                      </Text>
                      <Text
                        className="capitalize font-bold mt-[2px] text-center text-indigo_A700 w-[auto]"
                        variant="body5"
                      >
                        @Grient Phahn
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[23px] md:w-[100%] w-[99%]">
                    <div className="flex flex-col items-start justify-start sm:w-[100%] w-[40%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[2px] text-center text-gray_400 w-[auto]"
                        variant="body6"
                      >
                        Current Bid
                      </Text>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_close.svg"
                            className="h-[42px] w-[42px]"
                            alt="close"
                          />
                          <Text
                            className="capitalize text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                      <Text
                        className="font-bold md:ml-[0] ml-[4px] text-center text-gray_400 w-[auto]"
                        variant="body6"
                      >
                        Audition end in
                      </Text>
                      <Text
                        className="capitalize text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        12 : 30 : 15
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start mt-[29px] md:w-[100%] w-[86%]">
                    <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                      Place bid
                    </Button>
                    <Button className="bg-gray_901 cursor-pointer font-bold min-w-[189px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1410px] mt-[115px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[28%]">
                <div className="flex items-center justify-start sm:w-[100%] w-[388px]">
                  <Text
                    className="capitalize text-center text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Live Auctions
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                <div className="flex h-[40px] items-center justify-start w-[40px]">
                  <Button className="bg-gray_901 flex h-[40px] items-center justify-center outline outline-[0.5px] outline-bluegray_900 p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowleft_gray_400.svg"
                      className="h-[24px]"
                      alt="arrowleft One"
                    />
                  </Button>
                </div>
                <div className="flex h-[40px] items-center justify-start rotate-[180deg] w-[40px]">
                  <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowright_white_a700_32x32.svg"
                      className="h-[24px]"
                      alt="arrowright One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[44px] w-[100%]"
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
                        src="images/img_star3_67.svg"
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
                  <div className="flex flex-row gap-[14px] h-[46px] md:h-[auto] items-center justify-start w-[154px]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
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
              <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                <div className="flex flex-row items-center justify-between w-[290px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Rice #1612
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
                        src="images/img_star3_68.svg"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
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
              <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                <div className="flex flex-row items-center justify-between w-[290px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Rice #1612
                  </Text>
                  <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_favorite_gray_400_40x40.svg"
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
                        src="images/img_star3_69.svg"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
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
              <div className="bg-gradient2  hover:cursor-pointer flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] hover:w-[100%] w-[auto]">
                <div className="flex flex-row items-center justify-between w-[290px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Rice #1612
                  </Text>
                  <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_favorite_gray_400_40x40.svg"
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
                        src="images/img_star3_70.svg"
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
                      style={{ backgroundImage: "url('images/img_img_9.png')" }}
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
            </List>
            <Button className="bg-gray_901 cursor-pointer font-bold min-w-[189px] mt-[40px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
              View more
            </Button>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1410px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1410px] w-[100%]">
              <div className="flex flex-1 items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[4px] items-start justify-center w-[auto]">
                  <Text
                    className="capitalize text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    <span className="md:text-[38px] sm:text-[36px] text-white_A700 text-[40px] font-dmsans font-bold">
                      Top Creator of{" "}
                    </span>
                    <span className="md:text-[38px] sm:text-[36px] text-white_A700 text-[40px] font-dmsans font-bold">
                      day
                    </span>
                  </Text>
                  <Line className="bg-gradient13  h-[2px] rotate-[-180deg] w-[90%]" />
                </div>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                <div className="flex h-[40px] items-center justify-start w-[40px]">
                  <Button className="bg-gray_902 flex h-[40px] items-center justify-center outline outline-[0.5px] outline-bluegray_900 p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowleft_gray_400.svg"
                      className="h-[24px]"
                      alt="arrowleft Two"
                    />
                  </Button>
                </div>
                <div className="flex h-[40px] items-center justify-start rotate-[180deg] w-[40px]">
                  <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowright_white_a700_32x32.svg"
                      className="h-[24px]"
                      alt="arrowright Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-[40px] gap-[60px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-[98%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Six"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Wren Clark
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_30x30.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        1
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Seven"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Madge Dennis
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_14.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight One"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        2
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Eight"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Alfred Mitchell
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_15.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight Two"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        3
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Nine"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Wren Clark
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_16.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight Three"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        4
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Ten"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Troy Sharp
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_17.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight Four"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        5
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_img_gray_700_180x180.svg"
                  className="h-[180px] w-[180px]"
                  alt="IMG Eleven"
                />
                <div className="flex flex-col gap-[2px] items-center justify-start w-[auto]">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-[auto]"
                    variant="body5"
                  >
                    Len Davis
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        src="images/img_star8_18.svg"
                        className="h-[30px] m-[auto] w-[30px]"
                        alt="StarEight Five"
                      />
                      <Text
                        className="absolute capitalize font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body7"
                      >
                        6
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      100 ETH
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button className="bg-gray_901 cursor-pointer font-bold min-w-[189px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
              Ranking
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1460px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
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
                            alt="favorite Four"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                          style={{
                            backgroundImage: "url('images/img_img_40x40.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_40x40.png"
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
                          alt="Two Four"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_71.svg"
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
                            alt="mail"
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
                            alt="favorite Five"
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
                          alt="Two Five"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_72.svg"
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
                            alt="favorite Six"
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
                          alt="Two Six"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_73.svg"
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
                          Sweet Baby #1
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
                            backgroundImage: "url('images/img_img_5.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_3.png"
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
                          alt="Two Seven"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_74.svg"
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
                          Cool Cat 3D #2538
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
                            backgroundImage: "url('images/img_img_6.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_4.png"
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
                          alt="Two Eight"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_75.svg"
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
                          Doodle #9972
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
                            backgroundImage: "url('images/img_img_7.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_5.png"
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
                          alt="Two Nine"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_76.svg"
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
                          Slow Mo #127
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
                            backgroundImage: "url('images/img_img_8.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_6.png"
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
                          alt="Two Ten"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_77.svg"
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
                          Kick Shock #1
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
                            backgroundImage: "url('images/img_img_9.png')",
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
                          alt="Two Eleven"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_78.svg"
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
                          Night ines #1243
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
                            backgroundImage: "url('images/img_img_10.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_8.png"
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
                          alt="Two Twelve"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_79.svg"
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
                          Archetype #597
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
                            backgroundImage: "url('images/img_img_11.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_9.png"
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
                          alt="Two Thirteen"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_80.svg"
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
                          Militaire Elec #527
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
                            backgroundImage: "url('images/img_img_12.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_10.png"
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
                          alt="Two Fourteen"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_81.svg"
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
                            backgroundImage: "url('images/img_img_13.png')",
                          }}
                        >
                          <Img
                            src="images/img_bg_11.png"
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
                          alt="Two Fifteen"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                          <Line className="bg-white_A700 h-[85px] w-[2px]" />
                          <Img
                            src="images/img_star3_82.svg"
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
              <div className="bg-gray_902 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                <div className="bg-gradient3  items-center justify-center md:ml-[0] ml-[638px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                  Load more
                </div>
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1410px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[4px] items-center justify-start max-w-[1410px] w-[100%]">
              <div className="flex flex-1 items-start justify-start w-[100%]">
                <div className="flex items-start justify-center w-[auto]">
                  <Text
                    className="capitalize text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    popular Collection
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                <div className="flex h-[40px] items-center justify-start w-[40px]">
                  <Button className="bg-gray_901 flex h-[40px] items-center justify-center outline outline-[0.5px] outline-bluegray_900 p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowleft_gray_400.svg"
                      className="h-[24px]"
                      alt="arrowleft Three"
                    />
                  </Button>
                </div>
                <div className="flex h-[40px] items-center justify-start rotate-[180deg] w-[40px]">
                  <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_arrowright_white_a700_32x32.svg"
                      className="h-[24px]"
                      alt="arrowright Three"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="bg-gradient2  flex flex-col gap-[10px] items-start justify-center p-[20px] rounded-[20px] shadow-bs8 sm:w-[100%] w-[449px]">
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Art Collection
                    </Text>
                    <Button className="border-[1px] border-gray_300 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Sixteen"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col relative w-[100%]">
                    <Img
                      src="images/img_img_gray_700_201x410.svg"
                      className="h-[201px] mx-[auto] w-[auto]"
                      alt="IMGcollect"
                    />
                    <div className="md:h-[39px] h-[59px] mt-[-18px] mx-[auto] w-[16%] z-[1]">
                      <Img
                        src="images/img_clock.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="clock"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8_19.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight Six"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-left w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Grient Phahn
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-indigo_A700 text-left w-[auto]"
                      variant="body10"
                    >
                      + Follow
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="bg-gradient2  flex flex-col gap-[10px] items-start justify-center p-[20px] rounded-[20px] shadow-bs8 sm:w-[100%] w-[448px]">
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Game Collection
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Seventeen"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col relative w-[100%]">
                    <Img
                      src="images/img_img_gray_700_201x410.svg"
                      className="h-[201px] mx-[auto] w-[auto]"
                      alt="IMGcollect One"
                    />
                    <div className="md:h-[39px] h-[59px] mt-[-18px] mx-[auto] w-[16%] z-[1]">
                      <Img
                        src="images/img_clock.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="clock One"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8_20.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight Seven"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-left w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Grient Phahn
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-indigo_A700 text-left w-[auto]"
                      variant="body10"
                    >
                      + Follow
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="bg-gradient2  flex flex-col gap-[10px] items-start justify-center p-[20px] rounded-[20px] shadow-bs9 sm:w-[100%] w-[449px]">
                  <div className="flex flex-row items-center justify-between sm:w-[100%] w-[410px]">
                    <Text
                      className="flex-1 font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Art Collection
                    </Text>
                    <Button className="border-[1px] border-gray_400 border-solid flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[20px]"
                        alt="favorite Eighteen"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col relative w-[100%]">
                    <Img
                      src="images/img_img_gray_700_201x410.svg"
                      className="h-[201px] mx-[auto] w-[auto]"
                      alt="IMGcollect Two"
                    />
                    <div className="md:h-[39px] h-[59px] mt-[-18px] mx-[auto] w-[16%] z-[1]">
                      <Img
                        src="images/img_clock.svg"
                        className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] w-[57px]"
                        alt="clock Two"
                      />
                      <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                        <Img
                          src="images/img_star8_21.svg"
                          className="h-[18px] m-[auto] w-[18px]"
                          alt="StarEight Eight"
                        />
                        <Img
                          src="images/img_checkmark_white_a700.svg"
                          className="absolute bottom-[28%] h-[6px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="checkmark Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[410px]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-left w-[auto]"
                        variant="body11"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-bold mt-[3px] text-left text-white_A700 w-[auto]"
                        variant="body8"
                      >
                        @Grient Phahn
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-indigo_A700 text-left w-[auto]"
                      variant="body10"
                    >
                      + Follow
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button className="bg-gray_901 cursor-pointer font-bold min-w-[189px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
              View more
            </Button>
          </div>
          <div className="h-[571px] md:h-[619px] mt-[100px] px-[142px] md:px-[20px] relative w-[100%]">
            <div className="absolute bottom-[0] flex items-center justify-start left-[25%] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[82px] justify-start md:w-[100%] w-[45%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                    <div className="backdrop-opacity-[0.5] bg-gradient20  blur-[20.00px] h-[35px] md:mt-[0] mt-[262px] rounded-[16px] w-[6%]"></div>
                    <div className="md:h-[41px] h-[53px] md:ml-[0] ml-[6px] relative w-[53px]">
                      <Img
                        src="images/img_star1_41x42.svg"
                        className="absolute h-[41px] left-[0] top-[0] w-[42px]"
                        alt="StarOne One"
                      />
                      <Img
                        src="images/img_star3_23x23.svg"
                        className="absolute bottom-[0] h-[23px] right-[0] w-[23px]"
                        alt="StarThree Seventeen"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[49px] md:mt-[0] mt-[38px] md:w-[100%] w-[79%]">
                      <Text
                        className="capitalize leading-[68.00px] text-black_900 text-left"
                        as="h5"
                        variant="h5"
                      >
                        <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-dmsans font-bold">
                          Creat and Sell
                          <br />
                          Your
                        </span>
                        <span className="md:text-[48px] sm:text-[42px] text-black_900 text-[56px] font-dmsans font-bold">
                          {" "}
                        </span>
                        <span className="md:text-[48px] sm:text-[42px] text-indigo_A700 text-[56px] font-dmsans font-bold">
                          NFTs
                        </span>
                      </Text>
                      <Text
                        className="font-bold leading-[26.00px] mt-[12px] text-gray_400 text-left sm:w-[100%] w-[81%]"
                        variant="body6"
                      >
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start mt-[40px] md:w-[100%] w-[71%]">
                        <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                          Creat Item
                        </Button>
                        <Button className="cursor-pointer font-bold min-w-[189px] outline outline-[1px] outline-bluegray_200 py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                          Discover more
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="backdrop-opacity-[0.5] bg-amber_400_90 blur-[20.00px] h-[28px] md:ml-[0] ml-[498px] mr-[163px] rounded-[2px] w-[5%]"></div>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:w-[100%] w-[48%]">
                  <div className="backdrop-opacity-[0.5] bg-green_500_90 blur-[20.00px] h-[18px] md:ml-[0] ml-[498px] mr-[225px] rounded-[2px] w-[3%]"></div>
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[56px] w-[100%]">
                    <div className="backdrop-opacity-[0.5] bg-gradient20  blur-[12.00px] h-[73px] mt-[111px] rounded-[16px] w-[12%]"></div>
                    <div className="backdrop-opacity-[0.5] bg-indigo_A700_87 blur-[70.00px] h-[238px] rounded-[16px] w-[237px]"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[118px] mt-[11px] md:w-[100%] w-[60%]">
                    <div className="flex flex-col gap-[139px] md:gap-[40px] justify-start w-[auto]">
                      <div className="backdrop-opacity-[0.5] bg-amber_400_90 blur-[20.00px] h-[28px] mr-[19px] rounded-[2px] w-[63%]"></div>
                      <div className="backdrop-opacity-[0.5] bg-green_500_90 blur-[20.00px] h-[29px] md:ml-[0] ml-[18px] rounded-[2px] w-[65%]"></div>
                    </div>
                    <div className="backdrop-opacity-[0.5] bg-amber_400_90 blur-[20.00px] h-[47px] my-[74px] rounded-[2px] w-[12%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex right-[13%] top-[0] md:w-[100%] w-[35%]">
              <div className="md:h-[369px] h-[548px] my-[auto] sm:w-[100%] w-[67%]">
                <div
                  className="absolute bg-cover bg-no-repeat h-[282px] left-[0] top-[0] w-[67%]"
                  style={{ backgroundImage: "url('images/img_1.png')" }}
                >
                  <Img
                    src="images/img_bg_282x290.png"
                    className="h-[282px] m-[auto] object-cover rounded-[20px] w-[100%]"
                    alt="Bg Seventeen"
                  />
                  <div className="absolute bg-gray_700 h-[282px] inset-[0] justify-center m-[auto] rounded-[20px] w-[100%]"></div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] h-[369px] right-[0] w-[72%]"
                  style={{ backgroundImage: "url('images/img_2_369x311.png')" }}
                >
                  <Img
                    src="images/img_bg_369x311.png"
                    className="h-[369px] m-[auto] object-cover rounded-[20px] w-[100%]"
                    alt="Bg Eighteen"
                  />
                  <div className="absolute bg-gray_700 h-[369px] inset-[0] justify-center m-[auto] rounded-[20px] w-[100%]"></div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat h-[237px] md:h-[337px] ml-[-20px] mt-[100px] w-[37%] z-[1]"
                style={{ backgroundImage: "url('images/img_3_237x244.png')" }}
              >
                <Img
                  src="images/img_bg_237x244.png"
                  className="h-[237px] m-[auto] object-cover rounded-[20px] w-[100%]"
                  alt="Bg Nineteen"
                />
                <div className="absolute bg-gray_700 h-[237px] inset-[0] justify-center m-[auto] rounded-[20px] w-[100%]"></div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center mt-[57px] md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate88}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate89}
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
                        alt="arrowright Four"
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

export default Homepage6DarkPage;
