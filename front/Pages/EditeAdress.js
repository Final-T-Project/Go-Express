import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  IconButton,
  Icon,
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  Text,
  useToast,
  Box,
} from "native-base";
let EditeAdress = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const toast = useToast();

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  return (
    <>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        marginLeft={160}
      >
        <IconButton
          icon={
            <MaterialCommunityIcons size={20} color={"#F14E24"} name="pencil" />
          }
          onPress={() => openModal("right")}
        >
          Right
        </IconButton>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          maxWidth="380"
          backgroundColor={"muted.50"}
          opacity={2}
          {...styles[placement]}
        >
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={"#F14E24"} bold>
                Adress Information
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label fontStyle={{ color: "#373E5A" }}>
                Ville
              </FormControl.Label>
              <Input backgroundColor={"muted.100"} borderColor={"muted.200"} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Adress</FormControl.Label>
              <Input backgroundColor={"muted.100"} borderColor={"muted.200"} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                backgroundColor={"#F14E24"}
                onPress={() => {
                  toast.show({
                    render: () => {
                      return (
                        <Box bg="green.500" px="2" py="1" rounded="sm" mb={2}>
                          Your Adress Is Modified Successfully
                        </Box>
                      );
                    },
                  });
                  setOpen(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
  left: {
    marginLeft: 0,
    marginRight: "auto",
  },
  right: {},
  center: {},
};

export default EditeAdress;
