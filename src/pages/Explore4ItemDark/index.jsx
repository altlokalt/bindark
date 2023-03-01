import React from "react";

import {
  Button,
  Img,
  Text,
  Input,
  CheckBox,
  Line,
  SeekBar,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const Explore4ItemDarkPage = () => {
  function handleNavigate24() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate25() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2286px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0135explore4.svg')" }}
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
                      className="capitalize cursor-pointer font-bold text-[18px] text-indigo_A700 text-left w-[auto]"
                      href="javascript:"
                    >
                      Explore
                    </a>
                    <Img
                      src="images/img_arrowdown_indigo_a700.svg"
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
                    className="capitalize cursor-pointer font-bold text-[18px] hover:text-indigo_A700 text-left text-white_A700"
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
                Explore
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
                Explore 4 Item
              </Text>
            </div>
          </header>
          <div className="flex items-center justify-start max-w-[1410px] mt-[21px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[34px] items-start justify-start w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  explore 4 Item
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[286px]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Search
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                      wrapClassName="border-[1px] border-gray_700 border-solid flex pl-[20px] pr-[16px] py-[12px] rounded-[6px] w-[100%]"
                      name="Frame2121"
                      placeholder="Search NFT"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#55555f"
                          />
                        ) : (
                          <Img
                            src="images/img_search.svg"
                            className="cursor-pointer ml-[35px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-col font-rubik gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Status
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowdown Three"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="bg-indigo_A700 h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Buy Now"
                        name="BuyNow"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="On Auctions"
                        name="OnAuctions"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Has Offers"
                        name="HasOffers"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-bluegray_905 h-[1px] w-[100%]" />
                  <div className="flex flex-col font-rubik gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Categories
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[24px] w-[22px]"
                        alt="arrowdown Four"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Art"
                        name="Art"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Music"
                        name="Music"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="bg-indigo_A700 h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Domain Names"
                        name="DomainNames"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Virtual Worlds"
                        name="VirtualWorlds"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Trading  Cards"
                        name="TradingCards"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="bg-indigo_A700 h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Collectibles"
                        name="Collectibles"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Sports"
                        name="Sports"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-[16px] text-left text-white_A700"
                        inputClassName="border-[1px] border-gray_700 border-solid h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                        label="Utility"
                        name="Utility"
                      ></CheckBox>
                    </div>
                  </div>
                  <Line className="bg-bluegray_905 h-[1px] w-[100%]" />
                  <div className="flex flex-col font-dmsans gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[206px] items-center justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowdown Five"
                      />
                    </div>
                    <div className="flex flex-col font-rubik gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_frame2119.svg"
                        className="h-[84px] w-[100%]"
                        alt="Frame2119"
                      />
                      <SeekBar
                        inputValue={[18.42, 83.33]}
                        trackColors={["#55555f", "#3749e8", "#55555f"]}
                        thumbClassName="h-[7px] bg-white_A700 w-[7px] flex justify-center items-center rounded-[50%] outline-none"
                        thumbChildren={
                          <>
                            <div className="h-[15px] bg-indigo_A700 w-[15px] rounded-[50%]" />
                          </>
                        }
                        className="flex h-[15px] rounded-[2px] w-[100%]"
                        trackClassName="h-[4px] flex rounded-[2px] w-[100%]"
                      />{" "}
                      <div className="flex flex-row items-center justify-between w-[233px]">
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          $15.700
                        </Text>
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          $38.990
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-bluegray_905 h-[1px] w-[100%]" />
                  <div className="flex flex-col font-dmsans gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body6"
                    >
                      Chains
                    </Text>
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <SelectBox
                        className="bg-gradient25  border-[1px] border-gray_700_6c border-solid font-normal not-italic py-[13px] rounded-[8px] text-[16px] text-left text-white_A700 w-[100%]"
                        placeholderClassName="text-white_A700"
                        name="Select"
                        placeholder="Ethereum (ETH)"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[24px] mr-[12px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <div className="bg-gradient25  border-[1px] border-gray_700_6c border-solid flex flex-col gap-[14px] justify-start rounded-[8px] shadow-bs8 w-[100%]">
                        <div className="flex flex-row gap-[12px] items-start justify-start md:ml-[0] ml-[16px] mt-[12px] md:w-[100%] w-[53%]">
                          <Button className="bg-gray_700 flex h-[20px] items-center justify-center p-[3px] rounded-[50%] w-[20px]">
                            <Img
                              src="images/img_mail.svg"
                              className=""
                              alt="mail"
                            />
                          </Button>
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body8"
                            >
                              Ethereum (ETH)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[12px] w-[100%]">
                          <Line className="bg-gray_700_6c h-[1px] w-[100%]" />
                          <div className="flex flex-row gap-[12px] items-start justify-start md:ml-[0] ml-[16px] mt-[12px] md:w-[100%] w-[80%]">
                            <Button className="bg-gray_700 flex h-[20px] items-center justify-center p-[4px] rounded-[50%] w-[20px]">
                              <Img
                                src="images/img_bag_white_a700_20x20.svg"
                                className=""
                                alt="bag"
                              />
                            </Button>
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                United States Dollar (USD)
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_700_6c h-[1px] mt-[13px] w-[100%]" />
                          <div className="flex flex-row gap-[12px] items-start justify-start md:ml-[0] ml-[16px] mt-[12px] md:w-[100%] w-[46%]">
                            <Button className="bg-gray_700 flex h-[20px] items-center justify-center p-[4px] rounded-[50%] w-[20px]">
                              <Img
                                src="images/img_volume_white_a700.svg"
                                className="h-[12px]"
                                alt="volume"
                              />
                            </Button>
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body8"
                              >
                                Solana (SOL)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[1412px] h-[1492px] relative md:w-[100%] w-[75%]">
                  <div className="absolute bottom-[0] flex flex-col gap-[40px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                    <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                      <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                EVOLs #6905
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Astrid Swanson
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_263.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                FatPens#123
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite One"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Oliver Shaw
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two One"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_264.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree One"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="bg-indigo_A700 border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                FAJC #2405
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Two"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Celeste Turner
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Two"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_265.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                Azuka Ape #3..
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Three"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Angela Watkins
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Three"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_266.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                Hybrid Ape#721
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Four"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Violet Wells{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Four"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_267.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Four"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                Okay Apes #6811
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Five"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Tyler Meskill
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Five"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_268.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Five"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                FAJC #2553
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Six"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Nicholas Reese
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Six"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_269.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Six"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                EtherBear #2098
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Seven"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Roberta Nash
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Seven"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_270.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Seven"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                Azuka Ape #3...
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Eight"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Randolph Tyler
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Eight"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_271.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Eight"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                BitFox #4538
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Nine"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Harley Hines
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Nine"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_272.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Nine"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                S&#39;PEOPLE#999
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Ten"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Ella Kim
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Ten"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_273.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Ten"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex flex-1 flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                                variant="body7"
                              >
                                NFTRex #2746
                              </Text>
                              <Button className="border-[1px] border-gray_400 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[16px]"
                                  alt="favorite Eleven"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[200px]">
                              <div className="bg-gray_700 h-[36px] rounded-[50%] w-[36px]"></div>
                              <div className="flex flex-col gap-[-2px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                  variant="body11"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body10"
                                >
                                  Damian Barlow
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex h-[238px] items-center justify-start p-[18px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_04.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between my-[4px] w-[100%]">
                              <Img
                                src="images/img_02.svg"
                                className="h-[109px] w-[auto]"
                                alt="Two Eleven"
                              />
                              <div className="flex flex-col items-center justify-start mt-[74px] w-[auto]">
                                <Line className="bg-white_A700 h-[85px] w-[2px]" />
                                <Img
                                  src="images/img_star3_274.svg"
                                  className="h-[30px] mt-[5px] w-[100%]"
                                  alt="StarThree Eleven"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] h-[40px] md:h-[auto] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                              <Button className="bg-indigo_A700 flex h-[28px] items-center justify-center p-[4px] rounded-[50%] w-[28px]">
                                <Img
                                  src="images/img_mail.svg"
                                  className=""
                                  alt="mail Twelve"
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
                            <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-bold sm:px-[20px] px-[24px] py-[8px] rounded-[18px] text-[12px] text-center text-white_A700 w-[97px]">
                              Purchase
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="border-[2px] border-indigo_A700 border-solid cursor-pointer font-bold min-w-[120px] sm:px-[20px] px-[24px] py-[12px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                      Load more
                    </Button>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] pr-[2px] top-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body8"
                    >
                      Showing 1–9 of 144 results
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[343px] md:w-[100%] w-[19%]">
                      <SelectBox
                        className="bg-gray_901 border-[1px] border-gray_700 border-solid font-bold pl-[20px] pr-[16px] py-[8px] rounded-[20px] text-[14px] text-center text-white_A700 w-[100%]"
                        placeholderClassName="text-white_A700"
                        name="SingleItems"
                        placeholder="Single Items"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <div className="bg-gray_901 border-[1px] border-gray_700 border-solid flex flex-col gap-[21px] items-start justify-start p-[20px] rounded-[16px] shadow-bs3 w-[100%]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            All Items
                          </Text>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Bundles
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[19%]">
                      <Button
                        className="bg-gray_901 border-[1px] border-gray_700 border-solid flex items-center justify-center pl-[20px] pr-[16px] py-[8px] rounded-[20px] text-center"
                        rightIcon={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="ml-[20px] text-center"
                            alt="arrow_down"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[14px] text-center text-white_A700">
                          Recently Created
                        </div>
                      </Button>
                      <div className="bg-gray_901 border-[1px] border-gray_700 border-solid flex items-center justify-start p-[8px] rounded-[16px] shadow-bs3 md:w-[100%] w-[99%]">
                        <div className="flex flex-col h-[320px] md:h-[auto] items-start justify-start my-[3px] w-[auto]">
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Listed
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Created
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Sold
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Received
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Soon
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Low to Hight
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Recently Last Sale
                            </Text>
                          </div>
                          <div className="flex items-start justify-start px-[12px] py-[9px] w-[180px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              Oldest
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_menu_indigo_a700.svg"
                      className="h-[40px] md:ml-[0] ml-[13px] w-[auto]"
                      alt="menu"
                    />
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
                      onClick={handleNavigate24}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate25}
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

export default Explore4ItemDarkPage;
