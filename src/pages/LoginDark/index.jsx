import React from "react";

import { Button, Img, Text, Line, Input, CheckBox } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const LoginDarkPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[1646px] items-center justify-start mx-[auto] w-[100%]"
        style={{
          backgroundImage: "url('images/img_0139explorebannerdark.png')",
        }}
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
                className="font-bold text-indigo_A700 text-left w-[auto]"
                variant="body8"
              >
                Login
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[40px] items-center justify-start mt-[20px] md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Creat, sell or collect digital item
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[570px] not-italic text-center text-gray_100"
                variant="body7"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </div>
            <div className="flex flex-col gap-[32px] items-end justify-start max-w-[690px] w-[100%]">
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start md:w-[100%] w-[auto]">
                <div className="bg-gray_901 flex flex-col gap-[28px] h-[210px] md:h-[auto] items-center justify-between p-[32px] sm:px-[20px] rounded-[12px] w-[210px]">
                  <Img
                    src="images/img_close_gray_700.svg"
                    className="h-[24px] w-[24px]"
                    alt="close"
                  />
                  <div className="flex flex-col gap-[42px] items-center justify-start md:w-[100%] w-[auto]">
                    <div className="bg-gray_402 flex h-[80px] items-center justify-start rounded-[50%] w-[80px]">
                      <div className="bg-gray_700 h-[80px] rounded-[50%] w-[80px]"></div>
                    </div>
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body8"
                    >
                      Len Simon
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo_A700 flex flex-col gap-[28px] h-[210px] md:h-[auto] items-center justify-between p-[32px] sm:px-[20px] rounded-[12px] w-[210px]">
                  <Img
                    src="images/img_close_white_a700.svg"
                    className="h-[24px] w-[24px]"
                    alt="close One"
                  />
                  <div className="bg-gray_402 flex h-[80px] items-center justify-start rounded-[50%] w-[80px]">
                    <div className="bg-gray_700 h-[80px] rounded-[50%] w-[80px]"></div>
                  </div>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    Dexter Silva
                  </Text>
                </div>
                <div className="bg-gray_901 flex flex-col gap-[28px] h-[210px] md:h-[auto] items-center justify-between pb-[32px] pt-[60px] sm:px-[20px] px-[32px] rounded-[12px] w-[210px]">
                  <Img
                    src="images/img_plus_indigo_a700.svg"
                    className="h-[40px] w-[40px]"
                    alt="plus"
                  />
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    Add account
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Line className="bg-bluegray_900 h-[1px] w-[36%]" />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body8"
                >
                  Or login with account
                </Text>
                <Line className="bg-bluegray_900 h-[1px] w-[36%]" />
              </div>
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Input
                    className="font-normal not-italic px-[20px] py-[16px] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_900 border-solid rounded-[8px] w-[100%]"
                    type="text"
                    name="Frame1936"
                    placeholder="User name"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_900 border-solid flex px-[20px] py-[16px] rounded-[8px] w-[100%]"
                    type="password"
                    name="Frame1937"
                    placeholder="Password"
                    suffix={
                      <Img
                        src="images/img_checkmark_gray_700_20x20.svg"
                        className="ml-[35px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <CheckBox
                    className="font-normal not-italic text-[16px] text-left text-white_A700"
                    inputClassName="border-[1px] border-bluegray_900 border-solid h-[20px] mr-[5px] rounded-[4px] w-[20px]"
                    label="Remember for 30 days"
                    name="RememberforThirty"
                  ></CheckBox>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    Fogot password?
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Line className="bg-bluegray_900 h-[1px] w-[37%]" />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body8"
                >
                  Or login with social
                </Text>
                <Line className="bg-bluegray_900 h-[1px] w-[37%]" />
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Button
                  className="bg-gray_901 flex items-center justify-center px-[20px] py-[16px] rounded-[8px] text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_facebook_negative.svg"
                      className="mr-[20px] text-center"
                      alt="Facebook - Negative"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[16px] text-left text-white_A700">
                    Facebook
                  </div>
                </Button>
                <Button
                  className="bg-gray_901 flex items-center justify-center px-[20px] py-[16px] rounded-[8px] text-center w-[100%]"
                  onClick={() => googleSignIn()}
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mr-[20px] text-center"
                      alt="google"
                    />
                  }
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-bold text-[16px] text-left text-white_A700">
                    Google
                  </div>
                </Button>
              </div>
              <Button className="bg-indigo_A700 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[17px] rounded-[29px] text-[16px] text-center text-white_A700 w-[100%]">
                Log in
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
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
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

export default LoginDarkPage;
