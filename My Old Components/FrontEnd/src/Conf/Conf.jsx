// Firebase Otp Auth. Components

const conf = {
  api_Key: String(import.meta.env.VITE_REACT_APP_api_Key),
  project_Id: String(import.meta.env.VITE_REACT_APP_auth_Domain),
  auth_Domain: String(import.meta.env.VITE_REACT_APP_project_Id),
  storage_Bucket: String(import.meta.env.VITE_REACT_APP_storage_Bucket),
  messaging_Sender_Id: String(import.meta.env.VITE_REACT_APP_messaging_Sender_Id),
  app_Id: String(import.meta.env.VITE_REACT_APP_app_Id)
}

export default conf