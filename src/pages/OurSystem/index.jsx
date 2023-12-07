import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const OurSystemPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-orange-50 flex flex-col font-montserrat gap-3.5 justify-end p-4 w-full">
          <div className="md:h-[1235px] h-[807px] sm:h-[820px] max-w-[1823px] mt-[27px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[7%] w-[41%]">
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                  <Img
                    className="h-[350px] md:h-auto rounded-[50%] w-[350px]"
                    src="images/img_ellipse29.png"
                    alt="ellipseTwentyNine"
                  />
                  <Text
                    className="mt-[15px] text-base text-gray-800"
                    size="txtMontserratRomanMedium16"
                  >
                    Engineering
                  </Text>
                  <Img
                    className="h-[350px] md:h-auto mt-[57px] rounded-[50%] w-[350px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  
                </div>
                <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[48%] md:w-full">
                  <Img
                    className="h-[350px] md:h-auto rounded-[50%] w-[350px]"
                    src="images/img_ellipse30.png"
                    alt="ellipseThirty"
                  />
                  <Text
                    className="text-base text-gray-800"
                    size="txtMontserratRomanMedium16"
                  >
                    Medical
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[21%] flex flex-col gap-2.5 items-start justify-start left-[4%]">
              <Text
                className="leading-[90.00px] md:text-5xl text-6xl text-black-900"
                size="txtMontserratRomanBold60"
              >
                <>
                  Igniting Minds, 🧠
                  <br />
                  Building Futures 🔮.
                </>
              </Text>
              <Text
                className="leading-[28.00px] text-gray-800 text-xl w-6/12"
                size="txtMontserratRomanRegular20"
              >
                Where Aspirations Soar and Success Unfolds – Discover Your Path
                to Excellence with Our Specialized Programs: Pre-Engineering,
                Pre-Medical, Pre-Foundation, and Beyond.
              </Text>
            </div>
            <Img
              className="absolute bottom-[14%] h-[152px] object-cover right-[20%] w-[152px]"
              src="images/img_image33.png"
              alt="imageThirtyThree"
            />
            <Img
              className="absolute h-[188px] inset-y-[0] my-auto object-cover right-[38%] w-[188px]"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
            <header className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-center mx-auto rounded-[20px] shadow-bs top-[0] w-full">
              <Img
                className="absolute left-10 sm:flex-1 h-[72px] md:h-auto mb-[19px] sm:ml-[0px] ml-[31px] sm:mt-0 mt-[29px] object-cover rounded-[20px] w-[10%] sm:w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <ul className="flex md:flex-1 md:flex-col flex-row gap-[30px] md:hidden items-start justify-start sm:ml-[0] ml-[488px] sm:mt-0 my-[46px] w-auto md:w-full common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">
                      About Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">
                      Our System
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">Our Programs</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">
                      E - Learning
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">
                      Blogs
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-bold text-black-700 text-xl"
                  >
                    <Text size="txtMontserratRomanRegular20Black700">
                      Student Portal
                    </Text>
                  </a>
                </li>
              </ul>
              <Button
                className="cursor-pointer leading-[normal] min-w-[187px] ml-14 sm:ml-[0] mr-[45px] sm:mt-0 my-[30px] rounded-[20px] text-center text-xl"
                size="lg"
              >
                Enquire Now
              </Button>
            </header>
          </div>
          <Text
            className="md:ml-[0] ml-[1108px] mr-[654px] text-base text-gray-800"
            size="txtMontserratRomanMedium16"
          >
            Pre Foundation
          </Text>
        </div>
        <Text
          className="mt-[79px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
          size="txtPoppinsBold50"
        >
          Our Programmes
        </Text>
        <div className="flex flex-col font-poppins items-center justify-start max-w-[1658px] mt-[49px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start w-[62%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-end pl-10 sm:pl-5 pt-10 w-full">
                <Text
                  className="leading-[60.00px] mt-[50px] sm:text-4xl md:text-[38px] text-[40px] text-blue-300"
                  size="txtPoppinsBold40"
                >
                  <>
                    Pre - <br />
                    Medical Division
                  </>
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                  size="txtPoppinsRegular24"
                >
                  <>
                    Gurukripa Institute&#39;s Pre-Medical Division offers a
                    comprehensive program combining expert faculty, advanced
                    study materials, and personalized learning to prepare
                    doctors for medical entrance exams, fostering excellence in
                    academics and character.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-[92%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-600"
                  size="txtPoppinsMedium40"
                >
                  Batches
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue-50 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-[99%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[72%] md:w-full">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="white_A700"
                        >
                          <Img
                            className="h-10"
                            src="images/img_solarshieldbold.png"
                            alt="solarshieldbold"
                          />
                        </Button>
                        <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                          <Img
                            className="h-5 md:h-auto ml-[5px] object-cover w-5"
                            src="images/img_image35.png"
                            alt="imageThirtyFive"
                          />
                          <Text
                            className="mt-1 mx-1 text-[15px] text-black-900"
                            size="txtPoppinsRegular15"
                          >
                            Scholarship available{" "}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        <span className="text-black-900 font-poppins text-left font-bold">
                          Spartan Batch -{" "}
                        </span>
                        <span className="text-yellow-900 font-poppins text-left font-bold">
                          Fresher
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900_99 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Gurukripa Career Institute offers a year-long
                        Pre-Medical Examination 2020 course for Class 12th
                        students, focusing on theory,...........
                      </Text>
                      <Button
                        className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                        shape="round"
                        size="md"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-[99%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[72%] md:w-full">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="white_A700"
                        >
                          <Img
                            className="h-10"
                            src="images/img_gameiconsspartanhelmet.png"
                            alt="gameiconssparta"
                          />
                        </Button>
                        <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                          <Img
                            className="h-5 md:h-auto ml-[5px] object-cover w-5"
                            src="images/img_image35.png"
                            alt="imageThirtyFive"
                          />
                          <Text
                            className="mt-1 mx-1 text-[15px] text-black-900"
                            size="txtPoppinsRegular15"
                          >
                            Scholarship available{" "}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        <span className="text-black-900 font-poppins text-left font-bold">
                          Spartan Batch -{" "}
                        </span>
                        <span className="text-yellow-900 font-poppins text-left font-bold">
                          Repeater
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900_99 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Gurukripa Career Institute offers a year-long
                        Pre-Medical Examination 2020 course for Class 12th
                        students, focusing on theory,...........
                      </Text>
                      <Button
                        className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                        shape="round"
                        size="md"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[790px] sm:h-auto object-cover rounded-[20px] w-[39%] md:w-full"
              src="images/img_rectangle49.png"
              alt="rectangleFortyNine"
            />
          </div>
        </div>
        <div className="flex flex-col items-end mt-[50px] md:px-10 sm:px-5 px-[120px] w-full">
          <Line className="bg-yellow-900_87 h-px w-[49%]" />
        </div>
        <div className="flex md:flex-col flex-row font-poppins gap-[30px] items-end justify-start max-w-[1697px] mt-[49px] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[790px] sm:h-auto object-cover rounded-[20px] w-[642px] md:w-full"
            src="images/img_rectangle49_790x642.png"
            alt="rectangleFortyNine_One"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start w-[59%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[60.00px] md:ml-[0] ml-[9px] sm:text-4xl md:text-[38px] text-[40px] text-blue-300"
                size="txtPoppinsBold40"
              >
                <>
                  Pre - <br />
                  Engineering Division
                </>
              </Text>
              <div className="flex flex-col items-center justify-center mt-1.5 p-[9px] w-auto md:w-full">
                <Text
                  className="max-w-[976px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                  size="txtPoppinsRegular24"
                >
                  <>
                    Gurukripa Institute provides comprehensive study materials,
                    pattern-proof teaching, air-conditioned classes, and regular
                    tests to enhance students&#39; competitive aptitude and
                    performance in engineering entrance exams, including
                    IIT-JEE, Boards, KVPY, Olympiads.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[9px] mt-2.5 w-[94%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-600"
                  size="txtPoppinsMedium40"
                >
                  Batches
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue-50 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-[99%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[72%] md:w-full">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="white_A700"
                        >
                          <Img
                            className="h-10"
                            src="images/img_solarshieldbold.png"
                            alt="solarshieldbold"
                          />
                        </Button>
                        <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                          <Img
                            className="h-5 md:h-auto ml-[5px] object-cover w-5"
                            src="images/img_image35.png"
                            alt="imageThirtyFive"
                          />
                          <Text
                            className="mt-1 mx-1 text-[15px] text-black-900"
                            size="txtPoppinsRegular15"
                          >
                            Scholarship available{" "}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mt-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        <span className="text-black-900 font-poppins text-left font-bold">
                          Samurai Batch -{" "}
                        </span>
                        <span className="text-yellow-900 font-poppins text-left font-bold">
                          Year Long
                        </span>
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-black-900_99 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Gurukripa Career Institute offers a year-long coaching
                        program for JEE students, focusing on problem-solving,
                        competence.....
                      </Text>
                      <Button
                        className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                        shape="round"
                        size="md"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-[99%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[72%] md:w-full">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="white_A700"
                        >
                          <Img
                            className="h-10"
                            src="images/img_gameiconsspartanhelmet.png"
                            alt="gameiconssparta"
                          />
                        </Button>
                        <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                          <Img
                            className="h-5 md:h-auto ml-[5px] object-cover w-5"
                            src="images/img_image35.png"
                            alt="imageThirtyFive"
                          />
                          <Text
                            className="mt-1 mx-1 text-[15px] text-black-900"
                            size="txtPoppinsRegular15"
                          >
                            Scholarship available{" "}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="mt-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        <span className="text-black-900 font-poppins text-left font-bold">
                          Samurai Batch -{" "}
                        </span>
                        <span className="text-yellow-900 font-poppins text-left font-bold">
                          Short Term
                        </span>
                      </Text>
                      <Text
                        className="mt-1.5 text-base text-black-900_99 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Gurukripa Career Institute provides a 3-5 month
                        intensive JEE coaching program, offering English and
                        Hindi medium coaching, hostel facilities,.......
                      </Text>
                      <Button
                        className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                        shape="round"
                        size="md"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[50px] md:px-10 sm:px-5 px-[130px] w-full">
          <Line className="bg-yellow-900_87 h-px w-1/2" />
        </div>
        <div className="flex flex-col font-poppins items-center justify-start max-w-[1658px] mt-[49px] mx-auto pb-[46px] md:px-5 w-full">
          <div className="flex flex-col gap-[21px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <div className="flex md:flex-1 flex-col gap-[19px] justify-start w-[62%] md:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-end pt-10 px-10 sm:px-5 w-full">
                  <Text
                    className="leading-[60.00px] mt-[50px] sm:text-4xl md:text-[38px] text-[40px] text-blue-300"
                    size="txtPoppinsBold40"
                  >
                    <>
                      XI-XII
                      <br />
                      Foundation-Division
                    </>
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                    size="txtPoppinsRegular24"
                  >
                    The Foundation Course is a top choice for 11th and
                    12th-class aspirants, focusing on developing a solid
                    foundation, sharpening analytical thinking, reasoning, and
                    problem-solving skills, and covering important subjects for
                    competitive examinations.
                  </Text>
                </div>
                <Text
                  className="ml-10 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-600"
                  size="txtPoppinsMedium40"
                >
                  Batches
                </Text>
              </div>
              <Img
                className="md:flex-1 h-[389px] sm:h-auto object-cover rounded-[20px] w-[39%] md:w-full"
                src="images/img_rectangle49_389x642.png"
                alt="rectangleFortyNine_Two"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[98%]"
              orientation="horizontal"
            >
              <div className="bg-blue-50 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[17px] w-full">
                <div className="flex flex-col items-start justify-start my-0.5 w-[99%] md:w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[81%] md:w-full">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-lg w-[51px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_simpleiconsapache.png"
                        alt="simpleiconsapac"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-[5px] p-1.5 rounded-[10px] w-[78%]">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[19px] sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-black-900"
                    size="txtPoppinsBold2055"
                  >
                    Apache Batch
                  </Text>
                  <Text
                    className="text-[13.7px] text-black-900_99 w-full"
                    size="txtPoppinsRegular137"
                  >
                    Gurukripa Career Institute offers a year-long Pre-Medical
                    Examination 2020 course for Class 12th students, focusing on
                    theory,...........
                  </Text>
                  <Button
                    className="cursor-pointer h-[42px] leading-[normal] mt-3.5 rounded-lg text-[13.7px] text-center w-[136px]"
                    shape="round"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue-50 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[17px] w-full">
                <div className="flex flex-col items-start justify-start my-0.5 w-[99%] md:w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[81%] md:w-full">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-lg w-[51px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_play.svg"
                        alt="play"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-[5px] p-1.5 rounded-[10px] w-[78%]">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[19px] sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-black-900"
                    size="txtPoppinsBold2055"
                  >
                    Ninja Batch
                  </Text>
                  <Text
                    className="mt-0.5 text-[13.7px] text-black-900_99 w-full"
                    size="txtPoppinsRegular137"
                  >
                    Gurukripa Career Institute offers a year-long Pre-Medical
                    Examination 2020 course for Class 12th students, focusing on
                    theory,...........
                  </Text>
                  <Button
                    className="cursor-pointer h-[42px] leading-[normal] mt-3.5 rounded-lg text-[13.7px] text-center w-[136px]"
                    shape="round"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue-50 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[17px] w-full">
                <div className="flex flex-col items-start justify-start my-0.5 w-[99%] md:w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[81%] md:w-full">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-lg w-[51px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_group5.png"
                        alt="groupFive"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-[5px] p-1.5 rounded-[10px] w-[78%]">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-4 sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-black-900"
                    size="txtPoppinsBold2055"
                  >
                    Marvel Batch
                  </Text>
                  <Text
                    className="mt-1 text-[13.7px] text-black-900_99 w-full"
                    size="txtPoppinsRegular137"
                  >
                    Gurukripa Career Institute offers a year-long Pre-Medical
                    Examination 2020 course for Class 12th students, focusing on
                    theory,...........
                  </Text>
                  <Button
                    className="cursor-pointer h-[42px] leading-[normal] mt-3.5 rounded-lg text-[13.7px] text-center w-[136px]"
                    shape="round"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue-50 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[17px] w-full">
                <div className="flex flex-col items-start justify-start my-0.5 w-[99%] md:w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[81%] md:w-full">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-lg w-[51px]"
                      shape="round"
                      color="white_A700"
                      size="xs"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_group6.png"
                        alt="groupSix"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-[5px] p-1.5 rounded-[10px] w-[78%]">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-4 sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-black-900"
                    size="txtPoppinsBold2055"
                  >
                    Titan Batch
                  </Text>
                  <Text
                    className="mt-1 text-[13.7px] text-black-900_99 w-full"
                    size="txtPoppinsRegular137"
                  >
                    Gurukripa Career Institute offers a year-long Pre-Medical
                    Examination 2020 course for Class 12th students, focusing on
                    theory,...........
                  </Text>
                  <Button
                    className="cursor-pointer h-[42px] leading-[normal] mt-3.5 rounded-lg text-[13.7px] text-center w-[136px]"
                    shape="round"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[50px] md:px-10 sm:px-5 px-[120px] w-full">
          <Line className="bg-yellow-900_87 h-px w-[49%]" />
        </div>
        <div className="flex flex-col font-poppins items-center justify-start max-w-[1714px] mt-[49px] mx-auto pt-6 md:px-5 w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[38%] md:w-full">
                <Img
                  className="h-[449px] sm:h-auto ml-1 md:ml-[0] object-cover rounded-[20px] w-full"
                  src="images/img_rectangle49_449x642.png"
                  alt="rectangleFortyNine_Three"
                />
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-600"
                  size="txtPoppinsMedium40"
                >
                  Batches
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-1.5 justify-start md:mt-0 mt-[90px] w-[59%] md:w-full">
                <Text
                  className="leading-[60.00px] md:ml-[0] ml-[9px] sm:text-4xl md:text-[38px] text-[40px] text-blue-300"
                  size="txtPoppinsBold40"
                >
                  <>
                    Pre - <br />
                    Foundation Division
                  </>
                </Text>
                <div className="flex flex-col items-center justify-center p-[9px] w-auto md:w-full">
                  <Text
                    className="max-w-[976px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    Gurukripa Career Institute, Sikar has established the
                    Pre-foundation Division to provide a solid foundation for
                    students in classes 8 to 10. The division aims to prepare
                    students for competitive exams and Olympiads, offering
                    seminars, workshops, motivation sessions, and
                    extra-curricular activities.
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-blue-50 flex flex-1 flex-col items-center justify-end p-[29px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-3/5 md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-10"
                        src="images/img_group9.png"
                        alt="groupNine"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Battallion Batch
                  </Text>
                  <Text
                    className="mt-1.5 text-base text-black-900_99 w-full"
                    size="txtPoppinsRegular16"
                  >
                    Gurukripa Career Institute offers English courses for Class
                    8th, 9th, and 10th, focusing on analytical skills, IQ, EQ,
                    and CQ, preparing students for competitive exams.
                  </Text>
                  <Button
                    className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                    shape="round"
                    size="md"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue-50 flex flex-1 flex-col items-start justify-end p-[29px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[61%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-10"
                        src="images/img_gameiconsvikinghelmet.png"
                        alt="gameiconsviking"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Viking Batch
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-black-900_99 w-full"
                    size="txtPoppinsRegular16"
                  >
                    Gurukripa Career Institute offers English courses for Class
                    9th and 10th students, focusing on developing scientific
                    temperament, mathematical aptitude, logical thinking,..
                  </Text>
                  <Button
                    className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                    shape="round"
                    size="md"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue-50 flex flex-1 flex-col items-center justify-end p-[29px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[59%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="round"
                      color="white_A700"
                    >
                      <Img
                        className="h-10"
                        src="images/img_gameiconsswordslice.png"
                        alt="gameiconsswords"
                      />
                    </Button>
                    <div className="bg-green-300_66 flex flex-row items-center justify-center my-2.5 p-1.5 rounded-[10px] w-3/4">
                      <Img
                        className="h-5 md:h-auto ml-[5px] object-cover w-5"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Text
                        className="mt-1 mx-1 text-[15px] text-black-900"
                        size="txtPoppinsRegular15"
                      >
                        Scholarship available{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Knight Batch
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-black-900_99 w-full"
                    size="txtPoppinsRegular16"
                  >
                    Gurukripa Career Institute offers direct admission for class
                    IX pass students, medium coaching in English, one-year
                    course focusing on analytical skills, NTSE, KVPY, and.......
                  </Text>
                  <Button
                    className="cursor-pointer h-[50px] leading-[normal] mt-[19px] text-base text-center w-40"
                    shape="round"
                    size="md"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-light_green-200_66 flex flex-col font-poppins items-start justify-end mt-[50px] p-[30px] sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1398px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[89px]">
              <Text
                className="leading-[60.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-4/5 sm:w-full"
                size="txtPoppinsBold40Black900"
              >
                Uncertain about which academic path to choose?
              </Text>
              <Text
                className="text-blue_gray-600 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <>
                  Leave your contact details, and our dedicated team will reach
                  out to you for a personalized consultation. Let&#39;s shape
                  your journey together!
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col font-montserrat gap-[30px] items-center justify-start p-[29px] sm:px-5 rounded-[9px] w-[30%] md:w-full">
              <Text
                className="leading-[14.00px] text-[11.74px] text-center text-light_blue-A700 w-[74%] sm:w-full"
                size="txtMontserratRomanBold1174"
              >
                Take the first few steps which can help you take the giant
                strides in you career
              </Text>
              <div className="flex flex-col items-start justify-start mb-2 w-[99%] md:w-full">
                <Text
                  className="text-[9.78px] text-black-900_7f text-center"
                  size="txtMontserratRomanBold978"
                >
                  Name
                </Text>
                <Input
                  name="frameFiftyThree"
                  placeholder="Enter you Full Name"
                  className="p-0 placeholder:text-blue_gray-600_7f text-[9.78px] text-center w-full"
                  wrapClassName="mt-[5px] w-full"
                  type="text"
                ></Input>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[15px] text-[9.78px] text-black-900_7f"
                  size="txtMontserratRomanBold978"
                >
                  E - Mail ID
                </Text>
                <Input
                  name="frameFiftyFour"
                  placeholder="Enter you mail address"
                  className="p-0 placeholder:text-blue_gray-600_7f text-[9.78px] text-left w-full"
                  wrapClassName="mt-1.5 w-full"
                ></Input>
                <Text
                  className="ml-0.5 md:ml-[0] mt-4 text-[9.78px] text-black-900_7f"
                  size="txtMontserratRomanBold978"
                >
                  Phone Number
                </Text>
                <div className="border border-blue_gray-600 border-solid flex flex-row gap-[5px] items-center justify-start mt-1.5 p-[5px] rounded-[9px] w-full">
                  <Button
                    className="cursor-pointer min-w-[34px] rounded text-[9.78px] text-center"
                    color="orange_50"
                    size="xs"
                  >
                    +91
                  </Button>
                  <Text
                    className="text-[9.78px] text-blue_gray-600_7f"
                    size="txtMontserratRomanRegular978"
                  >
                    Enter your phone number
                  </Text>
                </div>
                <Text
                  className="mt-[11px] text-[7.83px] text-black-900"
                  size="txtMontserratRomanRegular783"
                >
                  By clicking Register now you will agree to the terms and
                  conditions
                </Text>
                <Button
                  className="cursor-pointer min-w-[334px] md:ml-[0] ml-[5px] mt-[27px] rounded-[9px] text-[7.83px] text-center"
                  shape="round"
                  size="md"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-800_01 flex font-montserrat items-center justify-center mt-[50px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-[161px] ml-[122px] mr-[152px] mt-[57px] w-[86%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[54px] justify-start mb-[55px] w-[24%] md:w-full">
                <Img
                  className="h-[72px] md:h-auto object-cover rounded-[20px] w-[48%] sm:w-full"
                  src="images/img_image2.png"
                  alt="imageTwo_One"
                />
                <Text
                  className="ml-1.5 md:ml-[0] text-white-A700 text-xl"
                  size="txtMontserratRomanRegular20WhiteA700"
                >
                  <span className="text-white-A700 font-montserrat text-left font-bold">
                    <>
                      Address
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-montserrat text-left font-normal">
                    <>
                      Gurukripa Career Institute(GCI)
                      <br />
                      Head Office: Jyoti Nagar, Piprali Road, Sikar <br />
                      Mob.: 88751-24365
                      <br />
                      info@gurukripa.ac.in
                      <br />
                      Phone: 88751-24365
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[72%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-12 items-end justify-start w-[49%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-[11px] text-white-A700 text-xl"
                    size="txtMontserratRomanBold20WhiteA700"
                  >
                    Gurukripa Career Institute(GCI)
                  </Text>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtMontserratRomanBold30"
                  >
                    Follow us on
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <ul className="flex md:flex-1 flex-col items-start justify-start md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtMontserratRomanRegular18">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-4 text-lg text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular18">Programs</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-3.5 text-lg text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular18">
                          E - Learning
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[13px] text-lg text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular18">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-3.5 text-lg text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular18">Results</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[15px] text-lg text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular18">
                          Student Portal
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[241px] md:mt-0 mt-[7px] object-cover w-[50px]"
                    src="images/img_instagramjpeg.png"
                    alt="instagramjpeg"
                  />
                  <Img
                    className="h-[50px] md:h-auto ml-5 md:ml-[0] md:mt-0 mt-[7px] object-cover w-[50px]"
                    src="images/img_linkedinjpeg.png"
                    alt="linkedinjpeg"
                  />
                  <Img
                    className="h-[30px] md:h-auto ml-5 md:ml-[0] md:mt-0 mt-[17px] object-cover w-[30px]"
                    src="images/img_facebookjpeg.png"
                    alt="facebookjpeg"
                  />
                  <div className="bg-yellow-900 flex flex-col h-[150px] items-center justify-end mb-[47px] md:ml-[0] ml-[478px] md:mt-0 mt-[9px] p-[37px] sm:px-5 rounded-[50%] w-[150px]">
                    <Img
                      className="h-[67px] mt-[9px]"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OurSystemPage;
