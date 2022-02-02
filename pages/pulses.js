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
import dataPG from "../utils/dataPG";

export default function Pulses() {
  const router = useRouter();
  return (
    <Layout title="pulses">
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h2" style={{ fontFamily: "serif" }}>
          Pulses & Grains
        </Typography>
        <Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Card>
              <CardContent
                style={{
                  display: "inline-flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  backgroundImage: 'url("images/fun.jpg")',
                  backgroundSize: "cover",
                }}
              >
                <NextLink href="/spices" passHref>
                  <Link style={{ color: "whitesmoke" }}>
                    <Typography variant="h7">Spices</Typography>
                  </Link>
                </NextLink>
                <NextLink href="/cereals" passHref>
                  <Link style={{ color: "whitesmoke" }}>
                    <Typography>Cereals</Typography>
                  </Link>
                </NextLink>

                <NextLink href="/more" passHref>
                  <Link style={{ color: "whitesmoke" }}>
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
                <Typography>Roasted Chana</Typography>
                <Typography>Chana Dal</Typography>
                <Typography>Roasted Dal</Typography>
                <Typography>Masoor Dal</Typography>
                <Typography>Moong Dal Fry </Typography>
                <Typography>Toovar Dal</Typography>
                <Typography>Urad Dal</Typography>
                <Typography>Sesame Seeds</Typography>
                <Typography>Yellow Mustard</Typography>
                <Typography>Peanut</Typography>
                <Typography>Avil</Typography>
                <Typography>Besan/Chickpeas Flour</Typography>
                <Typography>Malka Masur</Typography>
                <Typography>Masur Sabut</Typography>
                <Typography>Ragi</Typography>
                <Typography>Cumin</Typography>
                <Typography>Moong Sabut</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item md={9} xs={12} sm={12}>
            <Grid container spacing={2}>
              {dataPG.products.map((product) => (
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
