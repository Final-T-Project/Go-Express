
import { Avatar, Box, Card, CardContent,Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const FeedBack = (props) => {
  return (
    <>
      {props.feedback.map((element) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 350,
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
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                }}
                alt="Product"
                src="https://www.adobe.com/fr/express/create/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium"
                variant="square"
              />
            </Box>
            <Typography align="center" color="textPrimary" gutterBottom variant="h6">
              element.user.name
            </Typography>
            <br />
            <Typography align="center" color="textPrimary" variant="body1">
              User missed
            </Typography>
            <Typography align="center" color="textPrimary" gutterBottom variant="h6">
              element.Service.name
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: 4,
                width: 300,
              }}
            >
              <FontAwesomeIcon align="center" color="yellow" icon={faStar} />
              <FontAwesomeIcon align="center" color="yellow" icon={faStar} />
              <FontAwesomeIcon align="center" color="grey" icon={faStar} />
              <FontAwesomeIcon align="center" color="grey" icon={faStar} />
              <FontAwesomeIcon align="center" color="grey" icon={faStar} />
            </Box>
            <Typography align="center" color="textPrimary" variant="body1">
              element.details of this FeedBack
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
