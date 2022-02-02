import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../utils/styles";
import Image from "next/image";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ width: "100%" }}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={classes.brand}>
                    QUALITY FOODS
                  </Typography>
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NextLink href="/aboutus" passHref>
                <Link>
                  <Typography className={classes.brand}>About us</Typography>
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NextLink href="/products" passHref>
                <Link>
                  <Typography className={classes.brand}>Products</Typography>
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NextLink href="/certificate" passHref>
                <Link>
                  <Typography className={classes.brand}>Certificate</Typography>
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NextLink href="/contactus" passHref>
                <Link>
                  <Typography className={classes.brand}>Contact us</Typography>
                </Link>
              </NextLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
        <Typography
          style={{
            fontSize: "2rem",
            color: "#000000",
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
            marginLeft: "1.5rem",
          }}
        >
          {" "}
          <Image
            src="/images/QualityFoods.jpg"
            alt="QualityFoods"
            width={150}
            height={70}
          ></Image>
        </Typography>
      </IconButton>
    </>
  );
};
export default DrawerComponent;
