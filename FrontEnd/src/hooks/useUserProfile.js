// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { SaveAddress, getAllAddressService, deleteAddressService, SavePatient ,deletePatientService , getAllPatientService } from '../service/userService';

export const useUserProfile = () => {
  // useState
  const [loading, setLoading] = useState(false);

  const addAddress = async (data) => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await SaveAddress(data, customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Adding Address: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  const deleteAddress = async (address_id) => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await deleteAddressService(address_id, customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Fetching Addresses: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  const getAllAddress = async () => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await getAllAddressService(customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Fetching Addresses: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  const addPatient = async (data) => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await SavePatient(data, customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Adding Patient: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  const deletePatient = async (patient_id) => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await deletePatientService(patient_id, customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Fetching Addresses: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  const getAllPatients = async () => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const res = await getAllPatientService(customerId);
        return res;

      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error Fetching Patients: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, addAddress, deleteAddress, getAllAddress, addPatient, deletePatient, getAllPatients };
}