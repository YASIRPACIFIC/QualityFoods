import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image"
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Link,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import DrawerComponent from "./Drawer";
export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Head>
        <title>Quality foods</title>
      </Head>
      <CssBaseline />
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          {isMobile ? (
              
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <NextLink href="/" passHref>
                <Link style={{textDecorationLine:"none"}}>
                  <Typography className={classes.brand}>
                   <Image
                  src="/images/QualityFoods.jpg"
                  alt="QualityFoods"
                  width={180}
                  height={70}
                  ></Image>
                  </Typography>
                  
                
                </Link>
              </NextLink>
              <div className={classes.grow}></div>
              <NextLink href="/aboutus" passHref>
                <Link style={{textDecorationColor:"#026670",
              textDecorationThickness:"5px"}}>
                  <Typography style={{fontSize:"20px"}}>About us</Typography>
                </Link>
              </NextLink>
              <NextLink href="/products" passHref>
                <Link style={{textDecorationColor:"#026670",
              textDecorationThickness:"5px"}}>
                  <Typography style={{fontSize:"20px"}}>Products</Typography>
                </Link>
              </NextLink>
              <NextLink href="/certificate"  passHref>
                <Link style={{textDecorationColor:"#026670",
              textDecorationThickness:"5px"}}>
                  <Typography style={{fontSize:"20px"}}>Certificate</Typography>
                </Link>
              </NextLink>
              <NextLink href="/contactus" passHref>
                <Link style={{textDecorationColor:"#026670",
              textDecorationThickness:"5px"}}>
                  <Typography style={{fontSize:"20px"}}>Contact us</Typography>
                </Link>
              </NextLink>
            </>
          )}
        </Toolbar>
      </AppBar>
      {children}
      <footer className={classes.footer} >
        <Typography>All right reserved.quality foods</Typography>
      </footer>
    </div>
  );
}
