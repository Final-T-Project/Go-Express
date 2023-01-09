import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { DashboardLayout } from "../../components/dashboard-layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import {
  CardContent,
  Card,
  Divider,
  CardActions,
  CardMedia,
  CardHeader,
  TextField,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";

import { useRouter } from "next/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "100%",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: "2%",
  //   // marginLeft: -50,
  //   // marginTop: 50,
  // },
  media: {
    width: "100%",
    height: 400,
    width: 400,
    objectFit: "cover",
    borderRadius: 12,
  },
  content: {
    width: "100%",
    margin: theme.spacing(0),
  },
  actions: {
    justifyContent: "center",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },

  response: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#544ce4",
    borderRadius: 25,
    marginLeft: "35%",
    marginTop: "2%",
    width: "30%",
  },
}));

function Page() {
  const classes = useStyles();
  const router = useRouter();

  //State to handlle the response of change state, Delete Product , and update price
  const [submitState, setSubmitState] = useState(false);
  const [submitDelete, setSubmitDelete] = useState(false);
  const [submitUpdate, setSubmitUpdate] = useState(false);
  const [submitupdateResponse, setSubmitupdateResponse] = useState(false);

  // state to store oneproduct
  const [oneproduct, setOneproduct] = useState([]);

  // state to store the new price
  const [newPrice, setNewPrice] = useState("");

  // function to get one product
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:5000/admin/getoneproduct/${router.query.id}`)
        .then((res) => setOneproduct(res.data))
        .catch((err) => console.log(err));
    }
  }, [router.isReady]);

  // function to update the state of the product (not_accepted ==> accepted )
  let ChangeState = () => {
    axios
      .put(`http://localhost:5000/admin/updateproductstate/${router.query.id}`, {
        productStatus: "Accepted",
      })
      .catch((err) => console.log(err));
  };

  // function to delete product (not_accepted)
  let DeleteProduct = () => {
    axios
      .delete(`http://localhost:5000/admin/deleteproduct/${router.query.id}`)
      .catch((err) => console.log(err));
  };

  // function to update the price of product
  let ChangePrice = () => {
    axios
      .put(`http://localhost:5000/admin/updateproductprice/${router.query.id}`, {
        price: newPrice,
      })
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  };

  // function to set time befor change the page
  let TimeToChangePage = () => {
    setTimeout(() => {
      router.push("../products");
    }, "1500");
  };

  console.log("hay", oneproduct);
  return (
    <>
      <Head>
        <title>One Product </title>
      </Head>
      {/* Response of updating Product price */}
      <div>
        {submitupdateResponse ? (
          <div className={classes.response}>
            <strong>Success!</strong> Price Updated.
          </div>
        ) : null}{" "}
      </div>
      {/* Response of accepting Product */}
      <div>
        {submitState ? (
          <div className={classes.response}>
            <strong>Success!</strong> This product is posted on the shop.
          </div>
        ) : null}{" "}
      </div>
      {/* Response of deleting Product */}
      <div>
        {submitDelete ? (
          <div className={classes.response}>
            <strong>Success!</strong> This product is Deleted .
          </div>
        ) : null}{" "}
      </div>
      {oneproduct.map((element) => (
        <Grid item lg={8} md={6} xs={12}>
          {/* <CardHeader subheader="The Price can be edited" title="Product Details" /> */}
          <Divider />
          <Grid>
            <Grid item lg={8} md={2} xs={20}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={element.photo_product}
                      title="product.name"
                    />
                  </Box>
                </CardContent>
                <Divider />
              </Card>
            </Grid>
          </Grid>
          <form autoComplete="off" noValidate>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Product Name: {element.product_name}
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Price :{element.price} dt {""}
                      <FontAwesomeIcon
                        onClick={() => setSubmitUpdate(!submitUpdate)}
                        icon={faPenToSquare}
                      />
                    </Typography>
                    {/* update Price  Start */}

                    <div>
                      {submitUpdate ? (
                        <Grid item md={6} xs={12}>
                          <TextField
                            onChange={(event) => {
                              setNewPrice(event.target.value);
                            }}
                            helperText="Set The New Price"
                            name="Price"
                            required
                            variant="outlined"
                            // ✅
                            InputProps={{
                              endAdornment: (
                                <span
                                  onClick={() => {
                                    ChangePrice();
                                    setSubmitupdateResponse(true);
                                  }}
                                >
                                  ✔️
                                </span>
                              ),
                            }}
                          />
                        </Grid>
                      ) : null}{" "}
                    </div>
                  </Grid>
                  {/* update Price  End */}

                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Seller : {element.sellIerd}
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Category : {element.category}
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Quantity : {element.quantity} unit
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Description : {element.description}
                      {/* <Typography variant="body1" color="textSecondary" paragraph></Typography> */}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions className={classes.actions}>
                <Button
                  onClick={() => {
                    ChangeState();
                    setSubmitState(true);
                    TimeToChangePage();
                  }}
                  variant="contained"
                  color="primary"
                >
                  Accept Product
                </Button>
                <Button
                  onClick={() => {
                    DeleteProduct();
                    setSubmitDelete(true);
                    TimeToChangePage();
                  }}
                  variant="outlined"
                  color="primary"
                >
                  Reject Product
                </Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      ))}
    </>
  );
}
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
