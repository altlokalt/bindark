import React from "react";

import { Button, Img, Text, List, Input } from "components";
import { CloseSVG } from "../../assets/images";

const ProfileEditprofileDarkPage = () => {
  function handleNavigate55() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate62() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate63() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate64() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

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
              className="font-bold text-left text-white_A700 w-[auto]"
              variant="body8"
            >
              Profile
            </Text>
            <Img
              src="images/img_arrowleft_gray_400_24x24.svg"
              className="h-[24px] w-[24px]"
              alt="arrowleft One"
            />
            <Text
              className="font-bold text-indigo_A700 text-left w-[auto]"
              variant="body8"
            >
              History
            </Text>
          </div>
        </header>
        <div className="md:h-[1492px] h-[1902px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[80px] justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[615px] md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  History
                </Text>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <List
                        className="md:flex-1 flex-col gap-[12px] grid items-start md:w-[100%] w-[auto]"
                        orientation="vertical"
                      >
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex flex-row gap-[17px] items-start justify-start w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Kayle Jr. Brown
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  started following{" "}
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Grey Peep
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[99px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_user_20x20.svg"
                                className="mr-[4px] text-center"
                                alt="user"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Following
                            </div>
                          </Button>
                        </div>
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[17px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe One"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Baby Girl 3D Model
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  purchased by{" "}
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Monica Johnson{" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  for 4.00 ETH{" "}
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[99px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark_white_a700_20x20.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Purchase
                            </div>
                          </Button>
                        </div>
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[17px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe Two"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Cyber Punk Gaming
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  bidded by{" "}
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Monica Johnson{" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  for 4.00 ETH{" "}
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[72px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_fire_white_a700.svg"
                                className="mr-[4px] text-center"
                                alt="fire"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Bids
                            </div>
                          </Button>
                        </div>
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[17px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe Three"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Cyber Punk Gaming
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Monica Johnson{" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  offered
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  {" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  for 4.00 ETH{" "}
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[83px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_reply.svg"
                                className="mr-[4px] text-center"
                                alt="reply"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Offers
                            </div>
                          </Button>
                        </div>
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[17px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe Four"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Cyber Punk Gaming
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  liked by{" "}
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Monica Johnson{" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  for 4.00 ETH{" "}
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[76px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_favorite_white_a700.svg"
                                className="mr-[4px] text-center"
                                alt="favorite"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Likes
                            </div>
                          </Button>
                        </div>
                        <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[17px] items-start justify-between max-w-[680px] my-[0] p-[16px] rounded-[15px] w-[100%]">
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[17px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_globe.svg"
                              className="h-[90px] w-[90px]"
                              alt="globe Five"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                Cyber Punk Gaming
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  bidded by{" "}
                                </span>
                                <span className="text-indigo_A700 text-[18px] font-dmsans">
                                  Monica Johnson{" "}
                                </span>
                                <span className="text-white_A700 text-[18px] font-dmsans">
                                  for 4.00 ETH{" "}
                                </span>
                              </Text>
                              <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  16:24
                                </Text>
                                <div className="bg-gray_700 h-[4px] rounded-[50%] w-[4px]"></div>
                                <Text
                                  className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                                  variant="body10"
                                >
                                  20/05/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex items-center justify-center min-w-[76px] px-[12px] py-[4px] rounded-[14px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_fire_white_a700.svg"
                                className="mr-[8px] text-center"
                                alt="fire"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-center text-white_A700">
                              Bids
                            </div>
                          </Button>
                        </div>
                      </List>
                      <div className="flex flex-col gap-[28px] items-start justify-start w-[auto]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="capitalize font-normal gap-[10px] not-italic p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                          wrapClassName="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex pl-[20px] pr-[12px] py-[12px] rounded-[23px] w-[100%]"
                          name="search"
                          placeholder="Search keyword..."
                          suffix={
                            inputvalue?.length > 0 ? (
                              <CloseSVG
                                className="cursor-pointer ml-[35px] my-[auto]"
                                onClick={() => setInputvalue("")}
                                color="#b9b8bb"
                              />
                            ) : (
                              <Img
                                src="images/img_search_gray_400.svg"
                                className="cursor-pointer ml-[35px] my-[auto]"
                                alt="search"
                              />
                            )
                          }
                        ></Input>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <div className="flex flex-row items-start justify-between w-[330px]">
                            <Text
                              className="font-bold text-gray_400 text-left w-[auto]"
                              variant="body10"
                            >
                              Filter
                            </Text>
                            <Text
                              className="font-bold text-indigo_A700 text-right w-[auto]"
                              variant="body10"
                            >
                              Reset
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[20px] items-start justify-start w-[330px]">
                            <div className="flex flex-col gap-[12px] items-start justify-start w-[155px]">
                              <div className="bg-indigo_A700 flex flex-row gap-[8px] items-center justify-start px-[16px] py-[12px] rounded-[22px] w-[155px]">
                                <Img
                                  src="images/img_checkmark_white_a700_20x20.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="checkmark"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Purchase
                                </Text>
                              </div>
                              <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-row gap-[8px] items-center justify-start px-[16px] py-[12px] rounded-[22px] w-[155px]">
                                <Img
                                  src="images/img_fire_white_a700.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="fire"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Bids
                                </Text>
                              </div>
                              <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-row gap-[8px] items-center justify-start px-[16px] py-[12px] rounded-[22px] w-[155px]">
                                <Img
                                  src="images/img_reply.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="reply"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Offers
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[12px] items-start justify-start w-[155px]">
                              <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-row gap-[8px] items-center justify-start px-[16px] py-[12px] rounded-[22px] w-[100%]">
                                <Img
                                  src="images/img_favorite_white_a700.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="favorite"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Likes
                                </Text>
                              </div>
                              <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-row gap-[8px] items-center justify-start px-[16px] py-[12px] rounded-[22px] w-[100%]">
                                <Img
                                  src="images/img_user_20x20.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="user"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Following
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="border-[2px] border-indigo_A700 border-solid cursor-pointer font-bold min-w-[120px] md:ml-[0] ml-[285px] sm:px-[20px] px-[24px] py-[12px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                      Load more
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
                          onClick={handleNavigate62}
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[24px]"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                          onClick={handleNavigate63}
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
                            alt="user One"
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
                        onClick={handleNavigate64}
                        alt="facebook One"
                      />
                    </div>
                    <div className="flex items-center justify-start p-[3px] w-[41%]">
                      <Img
                        src="images/img_twitter_white_a700.svg"
                        className="common-pointer h-[16px] w-[16px]"
                        onClick={handleNavigate55}
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
                <Input
                  className="font-bold p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-indigo_A700_19 flex outline outline-[0.5px] outline-indigo_A700 px-[20px] py-[17px] rounded-[16px] w-[100%]"
                  name="AccountDetails"
                  placeholder="History"
                  prefix={
                    <Img
                      src="images/img_lightbulb_white_a700.svg"
                      className="mr-[12px] my-[auto]"
                      alt="light_bulb"
                    />
                  }
                ></Input>
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

export default ProfileEditprofileDarkPage;
