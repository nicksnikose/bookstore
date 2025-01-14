/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardBody,
  Navbar,
  Button,
  Input,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import img1 from "../Images/img1 - Copy.png";
import img2 from "../Images/img2 - Copy.png";
import img3 from "../Images/img3 - Copy.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png"
import img7 from "../Images/img7.png"
import img8 from "../Images/img8.png"
import img9 from "../Images/img9.png"
import img10 from "../Images/img10.png"
import img11 from "../Images/img11.png"
import img12 from "../Images/img12.png"
import img13 from "../Images/img13.webp"
import img14 from "../Images/img14.png"
import img15 from "../Images/img15.webp"
import img16 from "../Images/img16.png"




import { TbShoppingCart } from "react-icons/tb";
import Footer from "./Fotter";

export default function Example() {
  return (
    <div>
  
      <Navbar className="mx-auto max-w-screen-sm px-2 py-2 text-black my-3">
        <div className="flex  items-center justify-between gap-y-4 ">
          <div className="relative flex w-full lg:w-full ">
            <Input type="search" color="green" label="Search..."  />
            <Button
              size="sm"
              className="!absolute right-1  top-1 px-6 rounded bg-[#81A356] flex "
            >
              <BsSearch className=" text-[20px]" />
            </Button>
          </div>
        </div>
      </Navbar>

      {/* card row 1 */}
      <div className="bg-[#DDDDDD] mt-3 p-5"> 
        <strong className="lg:ms-14 text-[22px] text-[blue] m-14 ">Competitive Book's</strong>

        <div className="  grid lg:grid-cols-4 md:grid-cols-2 mt-3 sm:grid-cols-1 ">
          {/* card one */}
          <Card className="w-64 bg-[#FFFFFF] item-center mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img1} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                  Shortcut s in Reasoning ( verbal <br />, non-verbal
                  analytical)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 140{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 70 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 2 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img2} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-center text-[14px]">
                  Current Affair’s verbal  (for  competitive)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  
                  <strike>₹ 180{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 90 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 3 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img3} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                  General Science ( non-verbal <br /> analytical )
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 120{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 60 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 4 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img4} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                  General Awareness (verbal, <br /> competitive book’s )
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 210{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 105 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* card row 2 */}
      <div className="bg-[#DDDDDD] mt-3 p-5"> 
        <strong className="lg:ms-14 text-[22px] text-[blue] m-14 ">Educational Book's</strong>

        <div className="  grid lg:grid-cols-4  mt-3 md:grid-cols-2 sm:grid-cols-1">
          {/* card one */}
          <Card className="w-64 bg-[#FFFFFF] item-center mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img5} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                Gate Tutor ( Civil Engineering)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 140{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 70 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 2 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img6} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-center text-[14px]">
                Basic’s Electrtical (for B-tech)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  
                  <strike>₹ 180{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 90 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 3 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img7} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                Physics ( simplified NCERT )
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 120{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 60 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 4 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img8} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                Mechanical Engineering (objective type)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 210{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 105 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* card row 3 */}
      <div className="bg-[#DDDDDD] mt-3 p-5"> 
        <strong className="lg:ms-14 text-[22px] text-[blue] m-14 ">Novel's Book's</strong>

        <div className="  grid lg:grid-cols-4  mt-3 md:grid-cols-2 sm:grid-cols-1 ">
          {/* card one */}
          <Card className="w-64 bg-[#FFFFFF] item-center mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img9} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                Dusar Vadad ( Novel Marathi)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 220{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 110 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 2 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img10} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-center text-[14px]">
                Hirava Chapha (Novel marathi)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  
                  <strike>₹ 150{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 70 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 3 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img11} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                91-storey ( treehouse )
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 120{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 60 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 4 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img12} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                SUCCESS   THROUGH     (napoleon hill )
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 210{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 105 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* card row 4 */}
      <div className="bg-[#DDDDDD] mt-3 p-5"> 
        <strong className="lg:ms-14 text-[22px] text-[blue] m-14 ">Comic's Book's</strong>

        <div className="  grid lg:grid-cols-4  mt-3 md:grid-cols-2 sm:grid-cols-1 ">
          {/* card one */}
          <Card className="w-64 bg-[#FFFFFF] item-center mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img13} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                Marvel ( Encyclopedia)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 220{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 110 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 2 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img14} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-center text-[14px]">
                Harry Potter (JK ROWLING)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  
                  <strike>₹ 180{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 90 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 3 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img15} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                DIARY of a Wimpy Kid ( old school)
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 120{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 60 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>

          {/*  cart 4 */}
          <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5 ">
            <CardHeader shadow={false} floated={false}>
              <center>
                <img src={img16} className="w-[120px] h-[188px] " alt="img" />
              </center>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between mb-2">
                <Typography  className="font-medium text-[14px]">
                SUCBATMAN (YEAR ONE) frank miller
                </Typography>
              </div>
              <Typography className="font-medium text-center">
                <span className="text-[#503E3E] text-[14px] pe-[20px]">
                  <strike>₹ 210{" "}</strike>
                </span>
                <span className="text-black text-[18px]">₹ 105 </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
              >
                <center>
                  <TbShoppingCart className="text text-[22px]" />
                </center>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer/>
      </div>

    </div>
  );
}
