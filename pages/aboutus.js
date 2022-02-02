import axios from "axios";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import useStyles from "../utils/styles";
import Layout from "../components/layout";

import { Container, Link, Typography } from "@material-ui/core";
export default function Aboutus() {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Layout title="aboutus">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          //   height:"100%"
        }}
      >
        <Container style={{ height: "100%" }}>
          <title>aboutus</title>
          <Typography
            component="h1"
            variant="h1"
            style={{
              color: "#000000",
              fontSize: "4rem",
              fontFamily: "serif",
              margin: "2rem",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            style={{
              padding: "2.7rem",
              fontSize: "1.5rem",
              fontFamily: "serif",
              wordSpacing: 5,
            }}
          >
            Quality Foods Pvt.Ltd is an export-import company based in India. We
            primarily trade countless varieties of spices but cereals,coffee
            beans,pulses,are also there among our trade commodities. further all
            of these products are also available in its purely powdered format.
            our company possess a world wide distribution network as we have
            acquired access to international trade through prominent ports like
            Mundra, Kochi, Mumbai and pipavav. It is our unique quality that we
            trade and deliver the products at the time and price that is
            convenient for the customer. We are doing customized packaging with
            in your brand name. For one consignment we are able to do assorted
            mixed container for 6 to 8 product. For product carton box packing
            available from our side.
          </Typography>
        </Container>
      </div>

      <footer
        className={classes.footer}
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
        //    position="fixed"
      >
        <Typography>All right reserved.quality foods</Typography>
      </footer>
    </Layout>
  );
}
