import react from "react";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import useStyles from "../utils/styles";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import NextLink from "next/link";
export default function Products() {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Layout title="products">
      <div style={{
         display:"flex",
         flexDirection:"column",
         
         paddingTop: "1rem",
       paddingBottom: "2rem",
       
      }}>

     
      <Container>
        
        <Grid container spacing={2} style={{ marginTop: 30 }}>
          <Grid item md={4} xs={6}>
            <Card style={{ marginTop: 20}}>
              <CardContent  className={classes.formbutton}>
                <NextLink href="/spices" passHref >
                  <Link
                    style={{ textDecorationLine: "none", color: "#ffffff" }}
                   
                  >
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      Spices
                    </Typography>
                  </Link>
                </NextLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={6}>
            <Card
              style={{
                marginTop: 20,
            
                color: "#ffffff",
              }}
            >
              <CardContent  className={classes.formbutton} >
                <NextLink href="/cereals" passHref>
                  <Link  style={{ textDecorationLine: "none", color: "#ffffff" }}>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      Cereals
                    </Typography>
                  </Link>
                </NextLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              style={{
                marginTop: 20,
          
                color: "#ffffff",
              }}
            >
              <CardContent  className={classes.formbutton}>
                <NextLink href="/pulses" passHref>
                  <Link  style={{ textDecorationLine: "none", color: "#ffffff" }}>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      Pulses & Grains
                    </Typography>
                  </Link>
                </NextLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}></Grid>
          <Grid item md={6} xs={12}>
            <Card
              style={{
                marginTop: 15,
          
                color: "#ffffff",
              }}
            >
              <CardContent  className={classes.formbutton}>
                <NextLink href="/more" passHref>
                  <Link  style={{ textDecorationLine: "none", color: "#ffffff" }}>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                      More +
                    </Typography>
                  </Link>
                </NextLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <Card
            style={{
              backgroundImage:'url("images/fun3.jpg")',
              backgroundSize:"cover",
              marginTop: "2rem",
              height: 150,
              color: "#ffffff",
            }}
          >
            <CardContent>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                The products procured from its pristine origins 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* <div style={{backgroundColor:"#212F3D",marginTop:"2rem",height:230,color:"#ffffff"}}>
          <CardContent>

          <Typography variant="h4" style={{textAlign:"center",marginTop:25}}>
            " The product procured from its pristine origins "
          </Typography>
          </CardContent>
       </div> */}
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
