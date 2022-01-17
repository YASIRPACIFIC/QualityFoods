import React, { useRef } from "react";
import { useRouter } from "next/router";
import useStyles from "../utils/styles";
import Layout from "../components/layout";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import { MdEmail } from "react-icons/md";
import Contactform from "../components/contactform";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import {FaPhoneAlt} from "react-icons/fa";
import NextLink from "next/link"

export default function Contactus() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout title="contactus">
      <div className={classes.cover2}>
        <Container style={{paddingTop:30}}>
          <Contactform></Contactform>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "1rem",
              color: "#ffffff",
              backgroundColor: "white",
              justifyContent:"space-evenly",
              minHeight:300,
              borderRadius:"3px",
              backgroundImage:'url("/images/cover4.jpg")',
              backgroundSize:"cover",
              marginTop:50
            }}
          >
            <div style={{marginTop:30,fontFamily:"serif"}}>
              
              {/* <Typography style={{fontSize:"1.3rem",fontFamily:"serif"}}>
                Contact us:<a href="tel:+919567420000">9567420000</a>
              </Typography> */}
           <h1>Address:</h1>
           <h2>Quality Foods Pvt ltd</h2>
           <h2>Palakkad</h2>
           <h2>Pincode:679303 </h2>
           <h2>Kerala</h2>
           <h2>India</h2>
            
            </div>
            <div style={{marginTop:30}}>
           <h1 style={{fontFamily:"serif"}}>Connect us:</h1>
           <Button onClick={()=>{
    window.open("https://api.whatsapp.com/send?phone=919567420000",'__blank')
  }}>
    <WhatsappIcon style={{borderRadius:"50px"}}></WhatsappIcon>
  </Button>
  
  <div>
      
    <Button onClick={()=>{
      window.open("tel:+919567420000")
      }}>
      <FaPhoneAlt style={{marginTop:20,fontSize:"2rem",color:"#ffffff"}} >
        
  </FaPhoneAlt>
        </Button>


  </div>
  <div>
  <NextLink href="/contactus" passHref >
    <Link>
  <MdEmail style={{marginTop:20,fontSize:"2.5rem",color:"#ffffff"}}></MdEmail>
    </Link>
  </NextLink>
  </div>
  
            </div>
            
          </div>
        </Container>
      </div>
    </Layout>
  );
}
