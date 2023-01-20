import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, TableRow } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import { margin } from "@mui/system";
export const ProductCard = () => {
  // state to save all products
  let [product, setProduct] = useState([]);

  // function to get all products
  useEffect(() => {
    axios.get(`http://localhost:5000/admin/getallproductnotaccepted`).then((result) => {
      setProduct(result.data);
      console.log(result.data);
    });
  }, []);

  console.log("test", product);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {product.map((element) => (
            <Grid>
              <CardContent sx={{}}>
                <Box>
                  <Avatar
                    sx={{
                      justifyContent: "center",
                      alignContent: "center",
                      height: 300,
                      width: 300,
                      borderRadius: 2,
                    }}
                    alt="Product"
                    src={element.photo_product}
                    variant="square"
                  />

                  <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                    {element.product_name}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <Divider />
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                  <Grid
                    item
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    {/* <Typography
                      color="textSecondary"
                      display="inline"
                      sx={{ pl: 1 }}
                      variant="body2"
                    >
                      <FontAwesomeIcon icon={faClock} />
                      Published at :{element.Published_at}
                    </Typography> */}
                  </Grid>
                  <Grid
                    item
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Link href={"/product/id"} as={`/product/${element.id_product}`}>
                      <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          marginRight: 15,
                          marginTop: -7,
                        }}
                        variant="body2"
                      >
                        <FontAwesomeIcon icon={faEye} /> View Detail
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
