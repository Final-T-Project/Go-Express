import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";

export const SalesCard = (props) => {
  return (
    <>
      {props.product.map((element) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: 3,
                width: 300,
              }}
            >
              <Avatar
                sx={{
                  justifyContent: "center",
                  height: 200,
                  width: 260,
                  pb: 5,
                }}
                alt="Product"
                src={element.photo}
                variant="square"
              />
            </Box>
            <Typography align="center" color="textPrimary" gutterBottom variant="h5">
              {element.name}
            </Typography>
            <Typography align="center" color="textPrimary" gutterBottom variant="h6">
              element.price dt
            </Typography>

            <Typography align="center" color="textPrimary" variant="body1">
              product.description
            </Typography>
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
                  Published at :
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  <FontAwesomeIcon icon={faEye} /> View Detail
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      ))}
    </>
  );
};
