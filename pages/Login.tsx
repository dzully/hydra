import Link from "next/link";
import * as React from "react";
// import {
//   Grid,
//   makeStyles,
//   Card,
//   CardContent,
//   MenuItem,
//   InputLabel,
//   Select,
//   CardActions,
//   Button,
//   CardHeader,
//   FormControl,
//   TextField
// } from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import HydraPict from "../public/hydra.png"
import Image from "next/image";
import type { NextPage } from "next";
import CustomCarousel from "../components/Carousel/CustomCarousel";
import LoginForm from "../components/Form/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <h1>Login</h1>
      <h2>
        <Link href="/Register">
          <a>Back to home</a>
        </Link>
      </h2>
      {/* <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <CustomCarousel />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 6 }}
        >
          <div />
          <div>
            <Grid container justify="center">
              <Image
                src={HydraPict}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </Grid>
            <LoginForm />
          </div>
          <div />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Login;
