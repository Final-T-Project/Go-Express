import { useState } from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

import React from 'react';
import {
  IconButton,
  Icon,
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Text,
  Image
} from 'native-base';
import axios from 'axios'

const IPADRESS = `192.168.43.203`;


const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    // console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };
let EditeProfil = ({id}) => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const [name,setName]=useState("")
  const [ville,setVille]=useState("")
  const [adress,setAdress]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const saveUpdate=()=>{
    axios.put(`http://${IPADRESS}:5000/users/updateUser/${id}`,{"photo":"https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png","name":name,"ville":ville,"adress":adress,"phoneNumber":phoneNumber})
    .then(()=>{
      alert("profile updated")
      setOpen(false);
    })
    .catch((error)=>{
      alert(name)
    })
  }

  return (
    <>
      <Stack 
        direction={{
          base: 'column',
          md: 'row',
        }}
        marginLeft={270}
      >
        <IconButton
          icon={
            <MaterialCommunityIcons size={25} color={'#F14E24'} name="pencil" />
          }
          onPress={() => openModal('right')}
        >
          Right
        </IconButton>
      </Stack>
      <Modal  isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true} >
        <Modal.Content maxWidth="380" backgroundColor={"muted.50"} opacity={2}{...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={'#F14E24'} bold fontSize={"20"}>Personal Information</Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
          <FormControl>
            
              <FormControl.Label >Image</FormControl.Label>
              <Button backgroundColor={"#373E5A"} onPress={pickImage} >Pick image</Button>
                {image && <Image source={{ uri: image }} />}
            </FormControl>
          <FormControl>
            
              <FormControl.Label fontStyle={{color :"#373E5A"}}>Name</FormControl.Label>
              <Input backgroundColor={'muted.100'} borderColor={'muted.200'} fontSize={'20'} onChangeText={(changed)=>{setName(changed)}}/>
            </FormControl>
            <FormControl>
            <FormControl>
              <FormControl.Label>ville</FormControl.Label>
              <Input backgroundColor={'muted.100'} borderColor={'muted.200'} fontSize={'20'} onChangeText={(changed)=>{setVille(changed)}}/>
            </FormControl>
              <FormControl.Label>Adress</FormControl.Label>
              <Input backgroundColor={'muted.100'} borderColor={'muted.200'} fontSize={'20'} onChangeText={(changed)=>{setAdress(changed)}}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Phone number </FormControl.Label>
              <Input backgroundColor={'muted.100'} borderColor={'muted.200'} fontSize={'20'} onChangeText={(changed)=>{setPhoneNumber(changed)}}/>
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
                backgroundColor={'#F14E24'}
                onPress={() => {
                  saveUpdate()
                  
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
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {},
  center: {},
};

export default EditeProfil;