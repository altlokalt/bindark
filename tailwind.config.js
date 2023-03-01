module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green_300: "#92cd97",
        black_900_7f: "#0000007f",
        indigo_900_7e: "#00407b7e",
        blue_A400: "#2c7df7",
        gray_700_6c: "#55555f6c",
        gray_800_87: "#41414187",
        gray_900_19: "#0b112619",
        gray_900_0c: "#0b11260c",
        black_900_00: "#09090900",
        yellow_A400: "#f8e00b",
        yellow_800: "#eb8f35",
        yellow_801: "#e88f35",
        purple_A201: "#c036f1",
        purple_700: "#7310c1",
        purple_A200: "#f638fa",
        deep_purple_A200: "#6851ff",
        gray_900_0f: "#0421340f",
        red_400_0f: "#eb59590f",
        gray_600_66: "#70707166",
        white_A700_4c: "#ffffff4c",
        gray_402: "#c4c4c4",
        gray_403: "#b8b8bf",
        gray_400: "#b9b8bb",
        gray_900_26: "#0b112626",
        gray_401: "#bbbac2",
        gray_500_4c: "#9494944c",
        amber_400_90: "#f6ca2a90",
        gray_800: "#393939",
        gray_404: "#cdbdb2",
        gray_700_7e: "#55555f7e",
        white_A700_63: "#ffffff63",
        indigo_A700: "#3749e8",
        gray_600_5a: "#7070715a",
        bluegray_400: "#8989a0",
        black_900_14: "#00000014",
        indigo_600: "#2926cf",
        blue_A701: "#2d65f8",
        bluegray_200_6c: "#a8a8c26c",
        gray_900_33: "#0b112633",
        gray_900_cc: "#19181fcc",
        blue_A700: "#0052ff",
        red_300: "#b7738a",
        teal_A400_93: "#3af4bc93",
        indigo_A700_19: "#3749e819",
        white_A700_33: "#ffffff33",
        yellow_901: "#e8821e",
        gray_700_19: "#64617119",
        yellow_900: "#d87c30",
        pink_800: "#a64371",
        gray_903: "#151111",
        deep_orange_400: "#ea8d3a",
        pink_400: "#e41b9f",
        purple_400: "#9a55d3",
        purple_A400_87: "#fa10ff87",
        gray_901: "#1f1f2c",
        amber_400: "#f6c92a",
        gray_902: "#151527",
        gray_900: "#19181f",
        green_50: "#e1eee3",
        purple_A400_83: "#c400c883",
        gray_100: "#f7f7f7",
        indigo_300: "#6b8cef",
        bluegray_100_26: "#cfdbd526",
        indigo_A700_cc: "#3749e8cc",
        indigo_A700_33: "#3749e833",
        indigo_A400: "#5042fb",
        blue_400: "#3b99fc",
        indigo_A400_d6: "#4249fbd6",
        white_A700_b2: "#ffffffb2",
        white_A700_7e: "#ffffff7e",
        red_600: "#e23a3a",
        red_200: "#dfab85",
        white_A700_90: "#ffffff90",
        green_900: "#1c4b1d",
        light_blue_500: "#0097ff",
        blue_A200: "#3d92ef",
        gray_600_36: "#70707136",
        green_500: "#48bc65",
        green_900_19: "#2c4e2f19",
        white_A700_99: "#ffffff99",
        indigo_A700_87: "#3749e887",
        black_900_44: "#00000044",
        light_blue_A400_90: "#0abcf990",
        indigo_A700_00: "#3749e800",
        pink_200_7f: "#f299b47f",
        deep_orange_300: "#d9a162",
        purple_900: "#560f6f",
        white_A700_19: "#ffffff19",
        deep_purple_A400: "#5d35ff",
        purple_600_7e: "#8c43a57e",
        gray_700_36: "#64617136",
        gray_600: "#628363",
        gray_601: "#887955",
        orange_A201: "#ea8e3a",
        indigo_A700_7e: "#3749e87e",
        orange_A200: "#f89d35",
        lime_900: "#8e5a30",
        bluegray_50_19: "#ebf0f019",
        orange_400: "#f89c35",
        gray_200: "#ebebeb",
        bluegray_200: "#a8a8c2",
        indigo_A700_b7: "#182fffb7",
        purple_A200_6c: "#f638fa6c",
        indigo_A700_b8: "#0019ffb7",
        white_A701: "#fefefe",
        white_A700: "#ffffff",
        deep_orange_50: "#f5e6d5",
        purple_A400_33: "#ff00c633",
        gray_400_a2: "#b9b8bba2",
        bluegray_900_88: "#282f3e87",
        gray_600_19: "#70707119",
        blue_A100: "#81bfff",
        bluegray_900_87: "#2d2d2d87",
        blue_700_90: "#2c69d190",
        black_900_1e: "#0000001e",
        green_A400: "#03db80",
        purple_400_83: "#c82ecc83",
        white_A700_77: "#ffffff77",
        bluegray_900_90: "#282f3e90",
        black_900: "#000000",
        gray_900_83: "#17171783",
        gray_400_75: "#b9b8bb75",
        gray_900_84: "#39003a83",
        lime_900_19: "#8b500d19",
        black_900_24: "#00000024",
        purple_600: "#8c43a5",
        black_900_26: "#00000026",
        pink_200: "#f299b4",
        gray_700: "#55555f",
        white_A700_a2: "#ffffffa2",
        blue_600: "#1787ef",
        bluegray_100: "#dfcec3",
        gray_500_2d: "#999ba82d",
        gray_700_5a: "#6461715a",
        gray_300: "#e5e5e5",
        bluegray_900: "#282f3e",
        white_A700_00: "#ffffff00",
        gray_300_7e: "#ece3e37e",
        indigo_A700_75: "#3749e875",
        black_900_33: "#00000033",
        gray_900_7f: "#1515157f",
        green_500_90: "#48bc6590",
        bluegray_101: "#cfdbd5",
        indigo_900: "#00407b",
        gray_700_63: "#55555f63",
        bluegray_905: "#362e41",
        indigo_901: "#11156c",
        black_900_35: "#00000035",
        gray_700_66: "#64617166",
        pink_900_6c: "#4f09506c",
        black_900_38: "#00000038",
        bluegray_901: "#272739",
      },
      fontFamily: {
        dmsans: "DM Sans",
        poppins: "Poppins",
        urbanist: "Urbanist",
        lato: "Lato",
        inter: "Inter",
        rubik: "Rubik",
      },
      backgroundImage: {
        gradient: "linear-gradient(132deg ,#00000024,#00000024,#00000024)",
        gradient1: "linear-gradient(133deg ,#ffffff77,#ffffff77)",
        gradient2: "linear-gradient(135deg ,#70707166,#64617166)",
        gradient3: "linear-gradient(148deg ,#d9a162,#92cd97)",
        gradient4: "linear-gradient(270deg ,#ffffff,#ffffff00)",
        gradient5: "linear-gradient(180deg ,#f638fa,#182fffb7)",
        gradient6: "linear-gradient(97deg ,#c82ecc83,#17171783)",
        gradient7: "linear-gradient(180deg ,#f638fa,#0019ffb7)",
        gradient8: "linear-gradient(233deg ,#fa10ff87,#41414187,#2d2d2d87)",
        gradient9: "linear-gradient(180deg ,#f638fa,#3749e8cc)",
        gradient10: "linear-gradient(132deg ,#5d35ff,#1787ef,#3af4bc93)",
        gradient11: "linear-gradient(322deg ,#b9b8bb75,#b9b8bb75)",
        gradient12: "linear-gradient(252deg ,#f638fa6c,#4f09506c)",
        gradient13: "linear-gradient(270deg ,#5d35ff,#09090900)",
        gradient14: "linear-gradient(270deg ,#5d35ff,#ffffff00)",
        gradient15: "linear-gradient(97deg ,#c400c883,#39003a83)",
        gradient16: "linear-gradient(180deg ,#f638fa,#3749e800)",
        gradient17: "linear-gradient(225deg ,#ffffff7e,#ece3e37e)",
        gradient18: "linear-gradient(225deg ,#4249fbd6,#eb59590f)",
        gradient19: "linear-gradient(135deg ,#7070715a,#6461715a)",
        gradient20: "linear-gradient(135deg ,#2c69d190,#0abcf990)",
        gradient21: "linear-gradient(144deg ,#ffffff,#ffffff00)",
        gradient22: "linear-gradient(147deg ,#8c43a5,#00407b)",
        gradient23: "linear-gradient(147deg ,#8c43a57e,#00407b7e)",
        gradient24: "linear-gradient(143deg ,#a64371,#1787ef)",
        gradient25: "linear-gradient(135deg ,#70707136,#64617136)",
        gradient26: "linear-gradient(147deg ,#560f6f,#11156c)",
        gradient27: "linear-gradient(135deg ,#70707119,#64617119)",
      },
      boxShadow: {
        bs13: "0px 20px  24px 0px #999ba82d",
        bs7: "0px 70px  59px -22px #ff00c633",
        bs2: "0px 7px  40px 0px #0421340f",
        bs9: "0px 12px  32px 12px #0b11260c",
        bs11: "0px 14px  40px -1px #0000001e",
        bs1: "-16px 20px  60px 0px #2c4e2f19",
        bs10: "-2px 0px  2px 0px #00000038",
        bs3: "0px 8px  29px 1px #00000026",
        bs8: "0px 15px  40px -10px #0b112619",
        bs: "-16px 20px  60px 0px #8b500d19",
        bs12: "0px 16px  60px 3px #00000035",
        bs5: "0px 45px  75px -10px #0b112633",
        bs4: "5px 8px  20px 0px #00000044",
        bs6: "-39px 54px  100px -10px #0b112626",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
