import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const EmployerListResults = (props) => {
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox  "></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>

                <TableCell>gender</TableCell>
                <TableCell>Curriculum Vitae </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.employer.map((element) => (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={element.photo} sx={{ mr: 2 }}></Avatar>
                      <Typography color="textPrimary" variant="body1">
                        element.name
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>element.email</TableCell>
                  <TableCell>element.adress</TableCell>
                  <TableCell>element.phone_number</TableCell>
                  <TableCell>element.gender</TableCell>
                  <TableCell>element.Registration</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};
