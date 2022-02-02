import React from "react";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import useStyles from "../utils/styles";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  createTheme,
} from "@material-ui/core";
import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Contactform() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [toSend, setToSend] = useState({
    full_Name: "",
    Phone_Number: "",
    Enter_Email: "",
    Message: "",
  });
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "service_ioc3o2s",
      "template_3xx8muz",
      toSend,
      "user_yyJBgIgJ2vhW0POy7mBFA"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          full_Name: "",
          Phone_Number: "",
          Enter_Email: "",
          Message: "",
        });
        // setToSend({ ...toSend, [e.target.name]: e.target.value });

        alert("Mail Sent successfully !");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed ! Try Again");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const theme = {
    palette: {
      primary: {
        main: "#2ECC71",
      },
    },
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classes.form}
      style={{
        borderRadius: "5px",
        backgroundImage: 'url("images/cover4.jpg")',
      }}
    >
      <Typography
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "serif",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Feel free to write to us
      </Typography>
      <List>
        <ListItem>
          <TextField
            className={classes.textfieldfocus}
            variant="outlined"
            fullWidth
            name="full_Name"
            label="Full Name"
            inputProps={{ type: "text" }}
            value={toSend.full_Name}
            onChange={handleChange}
            defaultValue=""
            required
            style={{ color: "#ffffff" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            className={classes.textfieldfocus}
            variant="outlined"
            fullWidth
            name="Phone_Number"
            label="Phone Number"
            inputProps={{ type: "text" }}
            value={toSend.Phone_Number}
            onChange={handleChange}
            defaultValue=""
            required
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            className={classes.textfieldfocus}
            variant="outlined"
            fullWidth
            name="Enter_Email"
            label="Email"
            inputProps={{ type: "email" }}
            value={toSend.Enter_Email}
            onChange={handleChange}
            defaultValue=""
            required
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            className={classes.textfieldfocus}
            multiline
            variant="outlined"
            fullWidth
            name="Message"
            label="Enter Message"
            inputProps={{ type: "text" }}
            value={toSend.Message}
            onChange={handleChange}
            defaultValue=""
            required
          ></TextField>
        </ListItem>
        <ListItem>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#189AB4"
            className={classes.formbutton2}
          >
            Submit
          </Button>
        </ListItem>
      </List>
    </form>
    //       <div>
    //         <form onSubmit={onSubmit}>
    //   <input
    //     type='text'
    //     name='full_Name'
    //     placeholder='Full Name'
    //     value={toSend. full_Name}
    //     onChange={handleChange}
    //     defaultValue=""
    //    required

    //   />
    //   <input
    //     type='number'
    //     name='Phone_Number'
    //     placeholder='Phone Number'
    //     value={toSend.Phone_Number}
    //     onChange={handleChange}
    //     defaultValue=""
    //     required
    //   />
    //   <input
    //     type='text'
    //     name='Enter_Email'
    //     placeholder='Email'
    //     value={toSend.Enter_Email}
    //     onChange={handleChange}
    //     defaultValue=""
    //    required
    //   />
    //   <input
    //     type='text'
    //     name='Message'
    //     placeholder='Enter Message'
    //     value={toSend.Message}
    //     onChange={handleChange}
    //     defaultValue=""
    //     required
    //   />
    //   <button type='submit'>Submit</button>
    // </form>
    //       </div>
  );
}
