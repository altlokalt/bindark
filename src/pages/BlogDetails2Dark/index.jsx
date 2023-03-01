import React from "react";

import { Button, Img, Text, List, Line, Input, TextArea } from "components";

const BlogDetails2DarkPage = () => {
  function handleNavigate10() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate16() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[3208px] items-center justify-start mx-[auto] w-[100%]"
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
                Blog 1
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
                Blog Details 1
              </Text>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60px] items-start justify-start max-w-[1410px] mt-[19px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-1 flex-col gap-[40px] items-start justify-start max-w-[990px] w-[100%]">
              <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <Text
                    className="capitalize leading-[44.00px] md:max-w-[100%] max-w-[784px] text-center text-white_A700"
                    variant="body2"
                  >
                    I Believe everyone can be a designer as long they love to
                    create design
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <div className="flex h-[40px] items-center justify-start w-[40px]">
                      <Img
                        src="images/img_image97.png"
                        className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                        alt="imageNinetySeven"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-center text-white_A700 w-[auto]"
                      variant="body8"
                    >
                      <span className="text-gray_400 text-[16px] font-dmsans">
                        by
                      </span>
                      <span className="text-white_A700 text-[16px] font-dmsans">
                        {" "}
                      </span>
                      <span className="text-white_A700 text-[16px] font-dmsans">
                        Binasea
                      </span>
                      <span className="text-gray_400 text-[16px] font-dmsans">
                        {" "}
                      </span>
                      <span className="text-white_A700 text-[16px] font-dmsans">
                        {" "}
                        |{" "}
                      </span>
                      <span className="text-gray_400 text-[16px] font-dmsans">
                        {" "}
                        August 13, 2022
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_04.svg"
                    className="h-[574px] w-[100%]"
                    alt="IMG"
                  />
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      What is the most fun thing to become a designer?
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-gray_100 text-left"
                      variant="body7"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Cupidatat non
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Text>
                  </div>
                  <Img
                    src="images/img_listimg.svg"
                    className="h-[207px] w-[100%]"
                    alt="ListIMG"
                  />
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      How is your daily routine?
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-gray_100 text-left"
                      variant="body7"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Cupidatat non
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Text>
                  </div>
                  <Img
                    src="images/img_04.svg"
                    className="h-[333px] w-[100%]"
                    alt="IMG One"
                  />
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Middle Post Heading
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-gray_100 text-left"
                      variant="body7"
                    >
                      Middle Post Heading
                      <br />
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                      <br />
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Share:
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_brandtwitch.svg"
                        className="h-[16px] w-[16px]"
                        alt="brandtwitch"
                      />
                      <List
                        className="sm:flex-col flex-row gap-[10px] grid grid-cols-2 w-[62%]"
                        orientation="horizontal"
                      >
                        <div className="flex h-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_twitter_gray_200.svg"
                            className="h-[16px] w-[16px]"
                            alt="twitter"
                          />
                        </div>
                        <div className="flex h-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_facebook_gray_200.svg"
                            className="h-[16px] w-[16px]"
                            alt="facebook"
                          />
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Tags:{" "}
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_200 text-left w-[auto]"
                      variant="body8"
                    >
                      Bitcoin, Token, Wallet
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Leave a comment
                </Text>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                    <Input
                      className="flex-1 font-normal not-italic p-[16px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_900 border-solid flex-1 rounded-[4px] w-[100%]"
                      type="text"
                      name="Frame1889"
                      placeholder="Name"
                    ></Input>
                    <Input
                      className="flex-1 font-normal not-italic p-[16px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_900 border-solid flex-1 rounded-[4px] w-[100%]"
                      type="email"
                      name="Frame1890"
                      placeholder="Email *"
                    ></Input>
                  </div>
                  <TextArea
                    className="bg-transparent border-[1px] border-bluegray_900 border-solid font-normal gap-[4px] not-italic pb-[96px] pt-[16px] px-[16px] rounded-[4px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    name="Frame1889 One"
                    placeholder="Message"
                  ></TextArea>
                </div>
                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                  Send comment
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body5"
                >
                  Recent post
                </Text>
                <List
                  className="flex-col gap-[16px] grid items-start w-[auto]"
                  orientation="vertical"
                >
                  <div className="bg-gray_901 flex flex-row gap-[13px] items-start justify-start my-[0] px-[10px] py-[8px] rounded-[8px] w-[auto]">
                    <div className="bg-gray_700 h-[44px] rotate-[180deg] rounded-[4px] w-[44px]"></div>
                    <div className="flex items-center justify-start w-[84%]">
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          6 Make Mobile Website Faster
                        </Text>
                        <div className="flex flex-row gap-[36px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body11"
                          >
                            Lorem ipsum dolor sit amer....
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_400 text-right w-[auto]"
                            variant="body11"
                          >
                            August 10, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-row gap-[13px] items-start justify-start my-[0] px-[10px] py-[8px] rounded-[8px] w-[auto]">
                    <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                    <div className="flex items-center justify-start w-[84%]">
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          6 Make Mobile Website Faster
                        </Text>
                        <div className="flex flex-row gap-[36px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body11"
                          >
                            Lorem ipsum dolor sit amer....
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_400 text-right w-[auto]"
                            variant="body11"
                          >
                            August 10, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-row gap-[13px] items-start justify-start my-[0] px-[10px] py-[8px] rounded-[8px] w-[auto]">
                    <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                    <div className="flex items-center justify-start w-[84%]">
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          6 Make Mobile Website Faster
                        </Text>
                        <div className="flex flex-row gap-[36px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body11"
                          >
                            Lorem ipsum dolor sit amer....
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_400 text-right w-[auto]"
                            variant="body11"
                          >
                            August 10, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_901 flex flex-row gap-[13px] items-start justify-start my-[0] px-[10px] py-[8px] rounded-[8px] w-[auto]">
                    <div className="bg-gray_700 h-[44px] rounded-[4px] w-[44px]"></div>
                    <div className="flex items-center justify-start w-[84%]">
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          6 Make Mobile Website Faster
                        </Text>
                        <div className="flex flex-row gap-[36px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body11"
                          >
                            Lorem ipsum dolor sit amer....
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_400 text-right w-[auto]"
                            variant="body11"
                          >
                            August 10, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body5"
                >
                  Popular Tag
                </Text>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[360px]">
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                    <Button className="bg-gray_901 cursor-pointer font-bold min-w-[72px] px-[12px] py-[6px] rounded-[15px] text-[14px] text-center text-white_A700 w-[auto]">
                      Bitcoin
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      NFT
                    </Button>
                    <Button className="bg-indigo_A700 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Bids
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Digital
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Arts
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                    <Button className="bg-gray_901 capitalize cursor-pointer font-normal min-w-[99px] not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[auto]">
                      Maketplace
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Token
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Wallet
                    </Button>
                    <Button className="bg-gray_901 capitalize cursor-pointer flex-1 font-normal not-italic px-[12px] py-[6px] rounded-[17px] text-[14px] text-center text-white_A700 w-[100%]">
                      Crypto
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center mt-[102px] md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate16}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter One"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate10}
                    >
                      <Img
                        src="images/img_facebook.svg"
                        className="h-[24px]"
                        alt="facebook One"
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

export default BlogDetails2DarkPage;
