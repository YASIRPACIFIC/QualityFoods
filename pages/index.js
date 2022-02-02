import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Layout from "../components/layout";
import useStyles from "../utils/styles";
import {
  Toolbar,
  Typography,
  Link,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import NextLink from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

// export  function Text(props) {
// return (
// 	<div>
// 	<h1>Social Share - GeeksforGeeks</h1>
// 	<FacebookShareButton

// 		url={'http://localhost:3000'} >
// 		<FacebookIcon size={32} round />
// 	</FacebookShareButton>
// 	<PinterestShareButton

// 		url={'http://localhost:3000'} >
// 		<PinterestIcon size={32} round />
// 	</PinterestShareButton>
// 	<RedditShareButton

// 		url={'http://localhost:3000'} >
// 		<RedditIcon size={32} round />
// 	</RedditShareButton>
// 	<WhatsappShareButton
// 		// url=" https://wa.me/+919567420000?text=welcome"
// 		url="https://api.whatsapp.com/send?phone=919567420000"
//     >
// 		<WhatsappIcon size={32} round />
// 	</WhatsappShareButton>
// 	<LinkedinShareButton

// 		url={'http://localhost:3000'} >
// 		<LinkedinIcon size={32} round />
// 	</LinkedinShareButton>
//   <Button onClick={()=>{
//     window.open("https://api.whatsapp.com/send?phone=919567420000",'__blank')
//   }}>
//     <WhatsappIcon></WhatsappIcon>
//   </Button>
// 	</div>
// )
// }

export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Layout>
      {/* <div className={classes.nav} >
       
        <NextLink href="/aboutus" passHref>
          <Link style={{textDecorationLine:"none",color:"#000000"}}>
            <Typography>ABOUT US</Typography>
          </Link>
        </NextLink >
        <NextLink href="/products" passHref>
          <Link style={{textDecorationLine:"none",color:"#000000",fontWeight:5}}>
            <Typography>PRODUCTS</Typography>
          </Link>
        </NextLink>
      
        <NextLink href="/certificate" passHref>
          <Link style={{textDecorationLine:"none",color:"#000000",fontWeight:5}}>
            <Typography>CERTIFICATE</Typography>
          </Link>
        </NextLink>
        <NextLink href="/contactus" passHref>
          <Link style={{textDecorationLine:"none",color:"#000000",fontWeight:5}}>
            <Typography>CONTACT US</Typography>
          </Link>
        </NextLink>
      </div> */}
      <Grid>
        <Grid item md={12} xs={12} ms={12}>
          <div style={{ backgroundColor: "#000000" }}>
            <Container>
              {/* <Toolbar className={classes.nav} >
          <NextLink href="/aboutus" passHref>
            <Link style={{ textDecorationLine: "none" ,color:"#ffffff"}}>
              <Typography> ABOUT US </Typography>
            </Link>
          </NextLink>
          <NextLink href="/products" passHref>
            <Link style={{ textDecorationLine: "none",color:"#ffffff" }}>
              <Typography>PRODUCTS</Typography>
            </Link>
          </NextLink>
          <NextLink href="/certificate" passHref>
            <Link style={{ textDecorationLine: "none",color:"#ffffff" }}>
              <Typography>CERTIFICATE</Typography>
            </Link>
          </NextLink>
          <NextLink href="/contactus" passHref>
            <Link style={{ textDecorationLine: "none",color:"#ffffff" }}>
              {" "}
              <Typography>CONTACT US</Typography>
            </Link>
          </NextLink>
        </Toolbar> */}
            </Container>
          </div>
        </Grid>
      </Grid>

      <div className={classes.cover} style={{ fontFamily: "sans-serif" }}>
        <Container className={classes.content}>
          <h2 style={{ fontSize: "1.7rem" }}>Our High-Quality</h2>
          <h1 style={{ fontSize: "3rem" }}>Our Natural Spices</h1>
          <h3 style={{ fontSize: "1.2rem", wordSpacing: 2 }}>
            Indian spices are loved by people <br />
            across all over the globe
            <br />
            Spices are the real reason behind exotic flavours in Indian Food
          </h3>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container>
          <div className={classes.text}>
            <Typography style={{ fontSize: "4rem", fontFamily: "serif" }}>
              About us
            </Typography>
            <Typography
              style={{
                padding: "2.5rem",
                fontSize: "1.5rem",
                fontFamily: "serif",
              }}
            >
              Quality Foods is an export import company based in India.
              <br />
              The company sells numerous variants of Spices,cereal and pulses
              <br />
              in the form of both pure and blends.We also pride ourselves in our
              ability to develop
              <br /> and maintain long term client relationships
            </Typography>
          </div>
          {/* <Text></Text> */}
        </Container>
      </div>
      <footer
        className={classes.footer}
        //  position="static"
      >
        <Typography>All right reserved.quality foods</Typography>
      </footer>
    </Layout>
  );
}
