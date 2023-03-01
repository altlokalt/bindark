import React from "react";

import { Button, Img, Text, Input, SelectBox, Switch, Line } from "components";

const AddNewNFTDarkPage = () => {
  function handleNavigate47() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate48() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_900 bg-no-repeat flex font-dmsans h-[2724px] items-center justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0155addnewnftdark.png')" }}
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
                    className="capitalize cursor-pointer font-bold text-[18px] text-indigo_A700 text-left"
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
                className="font-bold text-indigo_A700 text-left w-[auto]"
                variant="body8"
              >
                Create
              </Text>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1410px] mt-[17px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                Add New NFT
              </Text>
              <div className="flex flex-col gap-[36px] items-end justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[24px] items-start justify-start max-w-[929px] w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start max-w-[929px] w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Choose blockchain
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      Connect with one of our available wallet providers or
                      create a new one.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start md:w-[100%] w-[auto]">
                      <Button
                        className="flex items-center justify-center outline outline-[0.5px] outline-bluegray_900 px-[35px] py-[13px] rounded-[23px] sm:px-[20px] text-center w-[100%]"
                        leftIcon={
                          <Img
                            src="images/img_airplane_lime_901.svg"
                            className="mr-[8px] text-center w-[100%]"
                            alt="airplane"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700 w-[100%]">
                          MetaMask
                        </div>
                      </Button>
                      <div className="flex items-center justify-start outline outline-[0.5px] outline-bluegray_900 p-[12px] rounded-[23px] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                          <div className="bg-blue_A701 h-[16px] w-[16px]"></div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Coinbase
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center outline outline-[0.5px] outline-bluegray_900 px-[35px] py-[13px] rounded-[23px] sm:px-[20px] text-center w-[100%]"
                        leftIcon={
                          <Img
                            src="images/img_bookmark_blue_a200.svg"
                            className="mr-[8px] text-center w-[100%]"
                            alt="bookmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700 w-[100%]">
                          Torus
                        </div>
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                      <Button
                        className="flex items-center justify-center outline outline-[0.5px] outline-bluegray_900 px-[35px] py-[13px] rounded-[23px] sm:px-[20px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_television.svg"
                            className="mr-[8px] text-center"
                            alt="television"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                          Fortmatic
                        </div>
                      </Button>
                      <div className="flex items-center justify-start outline outline-[0.5px] outline-bluegray_900 p-[12px] rounded-[23px] md:w-[100%] w-[50%]">
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Show more options
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start max-w-[930px] w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Select item type
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      They all serve the same purpose, but each one takes.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                    <Input
                      className="flex-1 font-bold p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="bg-gray_901 flex flex-1 p-[12px] rounded-[10px] sm:w-[100%] w-[450px]"
                      name="Createsingleitem"
                      placeholder="Create single item"
                      prefix={
                        <div className="mr-[24px] sm:px-[20px] w-[auto] bg-white_A700_63 rounded-[10px] py-[12px] px-[24px] flex justify-center items-center">
                          <Img
                            src="images/img_user_white_a700_24x24.svg"
                            className="rounded-[10px] my-[auto]"
                            alt="user"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      className="flex-1 font-bold p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_900 border-solid flex flex-1 p-[12px] rounded-[10px] sm:w-[100%] w-[450px]"
                      name="Createcollection"
                      placeholder="Create collection"
                      prefix={
                        <div className="mr-[24px] pl-[23px] pr-[24px] sm:px-[20px] w-[auto] bg-white_A700_63 rounded-[10px] py-[12px] flex justify-center items-center">
                          <Img
                            src="images/img_car_white_a700_24x24.svg"
                            className="rounded-[10px] my-[auto]"
                            alt="car"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start max-w-[930px] w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Upload an item
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      But each one takes a different approach and makes
                      different tradeoffs.
                    </Text>
                  </div>
                  <div className="bg-gray_901 flex items-start justify-start outline outline-[0.5px] outline-gray_901 px-[186px] sm:px-[20px] md:px-[40px] py-[79px] rounded-[12px] md:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[16px] items-center justify-start sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_upload.svg"
                        className="h-[96px] w-[108px]"
                        alt="upload"
                      />
                      <div className="flex flex-col gap-[4px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          variant="body8"
                        >
                          Drag your item to upload
                        </Text>
                        <Text
                          className="capitalize font-normal not-italic text-center text-gray_400 w-[auto]"
                          variant="body10"
                        >
                          PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start max-w-[929px] w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Upload an item
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      But each one takes a different approach and makes
                      different tradeoffs.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Name your item
                      </Text>
                      <Input
                        className="capitalize font-normal not-italic px-[20px] py-[12px] text-[14px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                        wrapClassName="border-[1px] border-bluegray_900 border-solid max-w-[929px] rounded-[23px] w-[100%]"
                        name="language One"
                        placeholder="e.g. Redeemable  T-Shirt with Logo "
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Enter short description
                      </Text>
                      <Input
                        className="capitalize font-normal not-italic px-[20px] py-[12px] text-[14px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                        wrapClassName="border-[1px] border-bluegray_900 border-solid max-w-[929px] rounded-[23px] w-[100%]"
                        name="language Two"
                        placeholder="e.g. After purchase you will get a  T-Shirt"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body10"
                      >
                        Add properties
                      </Text>
                      <div className="border-[1px] border-bluegray_900 border-solid flex flex-row gap-[6px] items-start justify-start p-[6px] rounded-[24px] w-[100%]">
                        <Button
                          className="bg-gray_901 flex items-center justify-center outline outline-[0.5px] outline-gray_700 pl-[16px] pr-[18px] py-[10px] rounded-[18px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="ml-[10px] text-center"
                              alt="close"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-bold text-[12px] text-left text-white_A700">
                            Art
                          </div>
                        </Button>
                        <Button
                          className="bg-gray_901 flex items-center justify-center outline outline-[0.5px] outline-gray_700 pl-[16px] pr-[18px] py-[10px] rounded-[18px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="ml-[10px] text-center"
                              alt="close"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-bold text-[12px] text-left text-white_A700">
                            Body type
                          </div>
                        </Button>
                        <Button
                          className="bg-gray_901 flex items-center justify-center outline outline-[0.5px] outline-gray_700 pl-[16px] pr-[18px] py-[10px] rounded-[18px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="ml-[10px] text-center"
                              alt="close"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-bold text-[12px] text-left text-white_A700">
                            Face color
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Set item price or starting bid
                        </Text>
                        <Input
                          className="capitalize font-normal not-italic px-[20px] py-[12px] text-[14px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                          wrapClassName="border-[1px] border-bluegray_900 border-solid rounded-[23px] sm:w-[100%] w-[449px]"
                          name="Box"
                          placeholder="e.g. 0,01 Eth"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Select royalties amount, %
                        </Text>
                        <SelectBox
                          className="border-[1px] border-bluegray_900 border-solid capitalize font-normal not-italic pl-[20px] py-[13px] rounded-[23px] text-[14px] text-gray_700 text-left w-[100%]"
                          placeholderClassName="text-gray_700"
                          name="Box One"
                          placeholder="Select desired amount"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_upload.svg"
                              className="h-[18px] mr-[28px] w-[11px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-end justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start max-w-[929px] w-[100%]">
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Choose collection
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      They all serve the same purpose.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-[100%]">
                    <div className="bg-gray_901 flex flex-1 flex-row gap-[20px] items-center justify-start p-[12px] rounded-[10px] w-[100%]">
                      <div className="bg-white_A700_63 flex items-center justify-start p-[13px] rounded-[10px] w-[17%]">
                        <Img
                          src="images/img_upload.svg"
                          className="h-[22px] w-[22px]"
                          alt="plus"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Create new collection
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body11"
                        >
                          Type to create
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-bluegray_900 border-solid flex flex-1 flex-row gap-[20px] items-center justify-start p-[12px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="h-[48px] w-[71px]"
                        alt="qrcode"
                      />
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body10"
                        >
                          Battle for Digital
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_400 text-left w-[auto]"
                          variant="body11"
                        >
                          56 items
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[1px] items-start justify-start max-w-[929px] w-[100%]">
                    <Text
                      className="font-extrabold text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Choose collection
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_400 text-left w-[auto]"
                      variant="body10"
                    >
                      They all serve the same purpose.
                    </Text>
                  </div>
                  <div className="flex flex-col font-dmsans gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                        <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Product updates
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Receive messages from our platform
                          </Text>
                        </div>
                        <Switch
                          onColor="#3749e8"
                          offColor="#3749e8"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[5%]"
                        />
                      </div>
                      <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Reminders
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Receive booking reminders, pricing notices
                          </Text>
                        </div>
                        <Img
                          src="images/img_toggle.svg"
                          className="h-[22px] w-[40px]"
                          alt="Toggle One"
                        />
                      </div>
                      <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                        <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Promotions and tips
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Receive coupons, promotions, surveys
                          </Text>
                        </div>
                        <Switch
                          onColor="#3749e8"
                          offColor="#3749e8"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[5%]"
                        />
                      </div>
                      <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-col gap-[2px] items-start justify-start sm:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_400 text-left w-[auto]"
                            variant="body11"
                          >
                            Account support
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Receive messages about your account, your trips,
                            legal alerts
                          </Text>
                        </div>
                        <Img
                          src="images/img_toggle.svg"
                          className="h-[22px] w-[40px]"
                          alt="Toggle Three"
                        />
                      </div>
                      <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start sm:w-[100%] w-[auto]">
                <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[250px] px-[100px] sm:px-[20px] md:px-[40px] py-[14px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                  Publish
                </Button>
                <Button className="bg-bluegray_50_19 cursor-pointer font-bold min-w-[271px] px-[100px] sm:px-[20px] md:px-[40px] py-[14px] rounded-[23px] text-[14px] text-center text-white_A700 w-[auto]">
                  Discard all
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:mt-[0] mt-[86px] md:w-[100%] w-[24%]">
              <Text
                className="capitalize text-left text-white_A700 w-[auto]"
                variant="body4"
              >
                Item Preview
              </Text>
              <div className="bg-gradient2  flex flex-col gap-[16px] items-start justify-start p-[20px] rounded-[15px] w-[330px]">
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
                        alt="favorite"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[40px] relative w-[40px]"
                      style={{
                        backgroundImage: "url('images/img_img_25.png')",
                      }}
                    >
                      <Img
                        src="images/img_bg_23.png"
                        className="h-[40px] m-[auto] rounded-[50%] w-[40px]"
                        alt="Bg"
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
                        Sirena May
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
                      alt="Two"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[233px] md:w-[100%] w-[9%]">
                      <Line className="bg-white_A700 h-[85px] w-[2px]" />
                      <Img
                        src="images/img_star3_232.svg"
                        className="h-[30px] mt-[5px] w-[100%]"
                        alt="StarThree"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Button className="bg-indigo_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                      <Img src="images/img_mail.svg" className="" alt="mail" />
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
                      onClick={handleNavigate47}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_900 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate48}
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
    </>
  );
};

export default AddNewNFTDarkPage;
