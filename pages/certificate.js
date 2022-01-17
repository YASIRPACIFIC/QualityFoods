import React from "react";
import { useRouter } from "next/router";
import useStyles from "../utils/styles";
import Layout from "../components/layout";
import { Card, CardMedia, Container, Grid } from "@material-ui/core";
import data2 from "../utils/data2";


export default function Certificate() {
  const classes = useStyles();
  const router = useRouter();
 
  return(
    <div style={{backgroundImage:'url("/images/cover3.jpg")',backgroundSize:"cover",minHeight:1000}}>
    <Layout title="certificate">
    <Container>
    <div style={{display:"flex",justifyContent:"center",
  marginTop:10}}>
    <Grid container spacing={2}>
      {data2.matter.map((item)=>(
      <Grid item md={6} xs={12} key={item.slug} >
        <Card>
        <CardMedia
        component="img"
        title={item.slug}
        image={item.images}
      
        Layout="responsive"

        >

        </CardMedia>
        </Card>
        
      </Grid>

      ))}
      {/* <Grid item md={6} xs={6}>
        <h1>2</h1>
      </Grid> */}
    </Grid>
</div>
    </Container>
    


  </Layout>
    </div>
  );
}

