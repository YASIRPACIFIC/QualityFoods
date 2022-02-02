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
  Link,
  CardActions,
  CardActionArea,
  Box,
} from "@material-ui/core";
import { MdEmail } from "react-icons/md";
import Contactform from "../components/contactform";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { FaPhoneAlt } from "react-icons/fa";
import NextLink from "next/link";
import {IoMdArrowRoundBack} from "react-icons/io"

export default function Contactus() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout title="contactus">
      <div className={classes.cover2}>
        <Container style={{ paddingTop: 30 }}>
          <Contactform></Contactform>
          <div style={{ marginTop: 50 }}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Card
                  style={{
                    backgroundImage: 'url("images/address.jpg")',
                    color: "white",
                    backgroundSize: "cover",
                    width:"100%"
                  }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography variant="h3">ADDRESS</Typography>
                    <hr />
                    <Typography variant="h4">Quality Foods</Typography>
                    <Typography variant="h4">Palakkad</Typography>
                    <Typography variant="h4">679303</Typography>
                    <Typography variant="h4">Kerala</Typography>
                    <Typography variant="h4">India</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card
                  style={{
                    backgroundImage: 'url("images/connect.jpg")',
                    color: "white",
                    backgroundSize: "auto",
                    height:320
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      Connect With Us
                    </Typography>
                  </CardContent>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly",marginTop:50 }}
                  >
                    <Button
                      onClick={() => {
                        window.open(
                          "https://api.whatsapp.com/send?phone=919567420000",
                          "__blank"
                        );
                      }}
                    >
                      <WhatsappIcon
                        style={{ borderRadius: "47px", color: "#ffffff", }}
                      ></WhatsappIcon>
                    </Button>
                    <Button
                      onClick={() => {
                        window.open("tel:+919567420000");
                      }}
                    >
                      <FaPhoneAlt
                        style={{
                          // marginTop:20,
                          fontSize: "2rem",
                          color: "#ffffff",
                        

                        }}
                      ></FaPhoneAlt>
                    </Button>
                    <NextLink href="/contactus" passHref>
                      <Link>
                     
                      <MdEmail
                          style={{
                            marginBottom: -40,
                            fontSize: "2.5rem",
                            color: "#ffffff",
                          }}
                        ></MdEmail>
                      
                       
                      </Link>
                    </NextLink>
                  </div>
                </Card>
              </Grid>
              <Grid item md={12} xs={12}>
                <Card
                  style={{
                    backgroundImage: 'url("images/back.jpg")',
                    // height: 250,
                    width: "100%",
                    backgroundSize: "cover",
                    
                    
                  }}
                >
                  
                  
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
        <footer className={classes.footer}
    //  position="static"
     >
        <Typography>All right reserved.quality foods</Typography>
      </footer>
        

      </div>
    </Layout>
  );
}
