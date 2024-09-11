// Importing React Packages
import { useState, useEffect } from "react"

// Importing Local Components
import DeliveryDetails from './DeliveryDetails'
import PatientDetails from '../../User/pages/Profile/PatientDetails'
import AddressDetails from '../../User/pages/Profile/AddressDetails'

export default function ModalSetting({ setOpenModal }) {
  // useState
  const [flag, setFlag] = useState(false);
  const [details, setDetails] = useState(true);
  const [addPatient, setAddPatient] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  // useEffect
  useEffect(() => {
    if(flag) setFlag(false);
    else if(!flag && !details && !addPatient && !addAddress){
      setOpenModal(false);
    }
  }, [details]);

  useEffect(() => {
    if(addPatient) setFlag(true);
  }, [addPatient]);

  useEffect(() => {
    if(addAddress) setFlag(true);
  }, [addAddress]);

  // functions
  const handleModal = (value) => {
    if(value === "patient"){
      setDetails(false);
      setAddPatient(true);
    }else if(value === "address"){
      setDetails(false);
      setAddAddress(true);
    }else{
      setOpenModal(false);
    }
  };

  if(details && !addAddress && !addPatient) return (
    <DeliveryDetails openModel={details} setOpenModel={setDetails} handleModal={handleModal} />
  )
  else if(!details && !addAddress && addPatient) return (
    <PatientDetails openModel={addPatient} setOpenModel={setAddPatient} />
  )
  else if(!details && addAddress && !addPatient) return (
    <AddressDetails openModel={addAddress} setOpenModel={setAddAddress} />
  )
  else if(flag){
    setDetails(true);
  }
  else{
    return;
  }
}