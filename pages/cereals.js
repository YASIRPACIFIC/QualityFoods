import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
} from "@material-ui/core";

import NextLink from "next/link";
import dataC from "../utils/dataC";

export default function Cereals() {
  const router = useRouter();
  return (
    <Layout title="cereals">
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h2" style={{ fontFamily: "serif" }}>
          Cereals
        </Typography>
        <Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Card>
              <CardContent
                style={{
                  display: "inline-flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  backgroundImage:'url("images/fun.jpg")',
                  backgroundSize:"cover"
                }}
              >
                <NextLink href="/spices" passHref>
                <Link  style={{color:"whitesmoke"}}>
                    <Typography variant="h7">Spices</Typography>
                  </Link>
                </NextLink>
                
                <NextLink href="/pulses" passHref>
                  <Link  style={{color:"whitesmoke"}}>
                    <Typography variant="h7">Pulses&Grains</Typography>
                  </Link>
                </NextLink>
                <NextLink href="/more" passHref>
                  <Link style={{color:"whitesmoke"}}>
                    <Typography variant="h7">More +</Typography>
                  </Link>
                </NextLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item md={3} sm={12} xs={12}>
            <Card style={{ marginTop: 10 }}>
              <h1 style={{ textAlign: "center", fontFamily: "serif" }}>
                Products
              </h1>

              <div
                style={{
                  textAlign: "center",
                  paddingBottom: 10,
                  color: "#ffffff",
                  backgroundColor: "#F4D03F",
                }}
              >
                <Typography>Ponni Rice</Typography>
                <Typography>Idaly Rice</Typography>
                <Typography>Kuruva Rice</Typography>
                <Typography>Double Matta Rice</Typography>
                <Typography>Oratty Powder (Rice Powder)</Typography>
                <Typography>Basmathi Rice</Typography>
                <Typography>White Rice</Typography>
                <Typography>Red Rice Powder (Matta Avil)</Typography>
                <Typography>Steam Rice Powder (Puttu Avil)</Typography>
                <Typography>Sorghum Yellow</Typography>
                <Typography>Wheat</Typography>
                <Typography>Sattu</Typography>
                <Typography>Sorghum</Typography>
                <Typography>Matta Broken Rice</Typography>
                <Typography>Matta Kalapthi</Typography>
                <Typography>Yellow Bajra</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item md={9} xs={12} sm={12}>
            <Grid container spacing={2}>
              {dataC.products.map((product) => (
                <Grid item md={4} xs={12} sm={6} key={product.name}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      width={250}
                      height={250}
                      Layout="responsive"
                    ></CardMedia>
                    <CardContent>
                      <Typography>
                        <strong>{product.name}</strong>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
