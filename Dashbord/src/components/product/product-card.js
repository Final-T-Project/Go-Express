import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, TableRow } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

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

  console.log("knhjn", product);

  return (
    <>
      {product.map((element) => (
        <Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: 300,
                flexDirection: "column",
              }}
            >
              <Avatar
                sx={{
                  justifyContent: "center",
                  alignContent: "center",
                  height: 200,
                  width: 280,
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
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  <FontAwesomeIcon icon={faClock} />
                  Published at :{element.Published_at}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Link href={"/product/id"} as={`/product/${element.id_product}`}>
                  <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                    <FontAwesomeIcon icon={faEye} /> View Detail
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
