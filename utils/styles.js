import { ThemeContext } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import { fontSize, maxWidth, width } from "@mui/system";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Image from "next/image";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    "& a": {
      color: "#000000",
      marginLeft: 10,
    },
    maxHeight: 150,
    // position:"fixed"
  },
  main: {
    minHeight: "80vh",
  },
  root: {
    flexGrow: 5,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
  cover: {
    backgroundImage: 'url("images/cover1.jpg")',
    width: "100%",

    minHeight: 350,
  },

  footer: {
    textAlign: "center",

    color: "#000000",
    position: "fixed",
    // padding:10,
    bottom: 0,
    width: "100%",
    height: 25,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    // flexGrow:1,
    // marginTop: "1.5rem",
    // marginBottom: "1.5rem",
  },
  content: {
    padding: 45,
    textAlign: "center",
    color: "#ffffff",
  },
  intro: {
    // backgroundImage:'url("/images/dark.png")',
    // backgroundSize:"cover",
  },
  text: {
    color: "#000000",
    minHeight: "50vh",
  },
  spacing: {
    margin: 12,
    display: "flex",
  },
  grid1: {
    backgroundImage: 'url("images/cover2.jpeg")',
    backgroundSize: "cover",
    color: "#ffffff",
  },
  whatsappfloat: {
    position: "fixed",
    width: "60px",
    height: "60px",
    right: "40px",
    backgroundColor: "#25d366",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
  },
  whatsappicon: {
    marginTop: "16px",
  },
  link: {
    textDecorationLine: "none",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  cover2: {
    backgroundImage: 'url("images/cover4.jpg")',
    backgroundSize: "cover",
    width: "100%",
    minHeight: 1000,
  },
  // cover3:{
  //   backgroundImage:'url("images/cover3.jpg")',
  //   backgroundSize:"cover",
  //   width:"100%",
  //   minHeight:"full"
  // }
  form: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },
  formbutton: {
    backgroundColor: "#000000",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#6C7A89",
    },
    //  props => props.color,
  },
  textfieldfocus: {
    borderColor: "red",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#C52328",
      },
    },
  },
});
export default useStyles;
