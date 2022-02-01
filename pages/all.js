import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import useStyles from "../utils/styles";
import Layout from "../components/layout";
import data from "../utils/data";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

export default function Products() {
  const router = useRouter();
  const classes = useStyles();
 
  return (
    <Layout title="products">
      <div className={classes.spacing}>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12} sm={12}>
            <Card style={{ paddingLeft: 15 }} className={classes.grid1}>
              <h1 style={{ fontFamily: "serif" }}>PRODUCTS</h1>
              <hr />
              <b>
                <Typography>Tamarind</Typography>
                <Typography>Cambodge (kudampuli)</Typography>
                <Typography>Turmeric Powder</Typography>
                <Typography>Poha</Typography>
                <Typography>Matta Broken Rice</Typography>
                <Typography>Neyapathal Powder</Typography>
                <Typography>Tayer Pathiri Powder</Typography>
                <Typography>Madras Pappadam</Typography>
                <Typography>Chilly powder</Typography>
                <Typography>kashmeeri Chilly Powder</Typography>
                <Typography>Jaggery</Typography>
                <Typography>Peanut</Typography>
                <Typography>Avil White</Typography>
                <Typography>Nannari</Typography>
                <Typography>Roasted Chana</Typography>
                <Typography>Ragi</Typography>
                <Typography>Red Rice Poha (Matta avil)</Typography>
                <Typography>Steam Rice Powder (Puttu Podi)</Typography>
                <Typography>Jathi Pathrika (Mace)</Typography>
                <Typography>Ground Nuts Raw In Shell</Typography>
                <Typography>Sorgaum Yellow</Typography>
                <Typography>Coriander Whole</Typography>
                <Typography>Sweet Jeera</Typography>
                <Typography>Kalapaci</Typography>
                <Typography>Cumin</Typography>
                <Typography>Sorgaum</Typography>
                <Typography>Chukkappam Powder</Typography>
                <Typography>Ponni Rice</Typography>
                <Typography>Idaly Rice</Typography>
                <Typography>Kuruva Rice</Typography>
                <Typography>Double Matta Rice</Typography>
                <Typography>Yellow Bajra</Typography>
                <Typography>Oratty Powder (Rice Powder)</Typography>
                <Typography>Coriander Powder</Typography>
                <Typography>Onion Powder</Typography>
                <Typography>Matta kalapathi</Typography>
                <Typography>Garlic powder</Typography>
                <Typography>Rice Basmati</Typography>
                <Typography>Desiccated Coconut</Typography>
                <Typography>Appalam ( Pappadam)</Typography>
                <Typography>White Rice</Typography>
                <Typography>Wheat</Typography>
                <Typography>Chana Dal</Typography>
                <Typography>Besan/Chickpeas Flour</Typography>
                <Typography>Roasted Dal & Chana</Typography>
                <Typography>Masoor Dal</Typography>
                <Typography>Malka Masur</Typography>
                <Typography>Masur Sabut</Typography>
                <Typography>Moong Sabut (Whole)</Typography>
                <Typography>Moong Dal Fry Quality</Typography>
                <Typography>Hara Matar</Typography>
                <Typography>Kabuli Chana</Typography>
                <Typography>Toovar Dal</Typography>
                <Typography>Urad Dal</Typography>
                <Typography>Sattu</Typography>
                <Typography>Sesame-Seeds</Typography>
                <Typography>Yellow + Mustard</Typography>
              </b>
            </Card>
          </Grid>
          <Grid item md={9} xs={12} sm={12}>
            <Grid container spacing={2}>
              {data.products.map((product) => (
                <Grid item md={3} xs={12} sm={12} key={product.name}>
                  <Card
                    style={{ backgroundColor: "#19181a", color: "#ffffff" ,}}
                  >
                   
   
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
      </div>
    </Layout>
  );
}
