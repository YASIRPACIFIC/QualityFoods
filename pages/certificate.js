import React from "react";
import { useRouter } from "next/router";
import useStyles from "../utils/styles";
import Layout from "../components/layout";
import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import data2 from "../utils/data2";

export default function Certificate() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout title="certificate">
      <div
        style={{
          backgroundImage: 'url("/images/cover3.jpg")',
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",

          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <Container
        // style={{height:"100%",overflowY:"auto"}}
        >
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Grid container spacing={1}>
              {data2.matter.map((item) => (
                <Grid item md={6} xs={12} sm={6} key={item.slug}>
                  <Card>
                    <CardMedia
                      component="img"
                      title={item.slug}
                      image={item.image}
                      Layout="responsive"
                    ></CardMedia>
                  </Card>
                </Grid>
              ))}
              {/* <Grid item md={6} xs={6}>
        <h1>2</h1>
      </Grid> */}
            </Grid>
          </div>
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
