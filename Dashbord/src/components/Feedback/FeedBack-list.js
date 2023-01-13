import { Avatar, Box, Card, CardContent, Typography, Rating, Item } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export const FeedBack = (props) => {
  let [value, setValue] = useState(0);

  // adress: null;
  // details: "hi test the service";
  // email: "ahmed@gmail.com";
  // etoile: "1";
  // gender: null;
  // id_feedback: 9;
  // id_user: "A";
  // name: "ahmed";
  // phone_number: null;
  // photo: null;
  // serves_id_serves: null;
  // user_id_user: "A";
  // ville: "Tunis";

  return (
    <>
      {props.feedback.map((element) => (
        <Card container spacing={3}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
              width: "100%",
            }}
          >
            <Box>
              <Avatar
                sx={{
                  justifyContent: "center",
                  height: 80,
                  width: 80,
                  marginLeft: 2,
                  borderRadius: 50,
                }}
                alt="p=user"
                // src="https://www.adobe.com/fr/express/create/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium"
                src={{ uri: element.photo }}
                variant="square"
              />
            </Box>
            <Typography align="center" color="textPrimary" gutterBottom variant="h6">
              {element.name}
            </Typography>

            <Typography align="center" color="textPrimary" gutterBottom variant="h6">
              Service name
            </Typography>

            <Rating name="read-only" value={3} readOnly />
            <Typography align="center" color="textPrimary" variant="body1">
              Detail: {element.details}
            </Typography>
          </Box>
        </Card>
      ))}
    </>
  );
};
