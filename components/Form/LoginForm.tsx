import Link from "next/link";
import * as React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
  TextField,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import HydraPict from "../../public/hydra.png";
import Image from "next/image";
import type { NextPage } from "next";

  
  //Data
  const initialValues = {
    email: "",
    password: "",
  }
  

const LoginForm: React.FC = () => {


  const onSubmit = (values:any) => {
    console.log(values)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ dirty, isValid, values, handleChange, handleBlur }) => {
          return (
            <Form>
              <CardContent>
                <Grid
                  item
                  container
                  spacing={2}
                  justify="center"
                  style={{ display: "flex", flexDirection: "column" ,width:"350px" }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Field
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      // value={values.email}
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Field
                      label="Password"
                      variant="outlined"
                      fullWidth
                      name="password"
                      // value={values.password}
                      type="password"
                      component={TextField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button style={{ width: "100%" }} variant="contained">
                  Login
                </Button>
              </CardActions>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
