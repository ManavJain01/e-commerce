// Importing React Packages
import { useState, useEffect } from "react"

// Importing Local Components
import DeliveryDetails from './DeliveryDetails'
import PatientDetails from '../../User/pages/Profile/PatientDetails'
import AddressDetails from '../../User/pages/Profile/AddressDetails'

export default function ModalSetting({ setOpenModal }) {
  // useState
    // Modal Settings
  const [flag, setFlag] = useState(false);
  const [details, setDetails] = useState(true);
  const [addPatient, setAddPatient] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
    // Address and Patient Settings
  const [createMYSELF, setCreateMYSELF] = useState(true);
  const [editMYSELF, setEditMYSELF] = useState(false);
  const [addressData, setAddressData] = useState({
    pincode: "",
    houseNumber: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    saveas: "Other"
  });
  const [patientData, setPatientData] = useState({
    name: "",
    age: 0,
    gender: ""
  });

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
    <DeliveryDetails openModel={details} setOpenModel={setDetails} handleModal={handleModal} setCreateMYSELF={setCreateMYSELF} setEditMYSELF={setEditMYSELF} addressData={addressData} setAddressData={setAddressData} patientData={patientData} setPatientData={setPatientData} />
  )
  else if(!details && !addAddress && addPatient) return (
    <PatientDetails openModel={addPatient} setOpenModel={setAddPatient} createMYSELF={createMYSELF} editMYSELF={editMYSELF} formData={patientData} setFormData={setPatientData} />
  )
  else if(!details && addAddress && !addPatient) return (
    <AddressDetails openModel={addAddress} setOpenModel={setAddAddress} formData={addressData} setFormData={setAddressData} />
  )
  else if(flag){
    setDetails(true);
  }
  else{
    return;
  }
}