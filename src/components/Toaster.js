import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export  const notifyError = () => toast.error('Please Fill The All Input Feilds', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    export  const notifySuccess = () => toast.success('👨‍💻Message Has Been Sent Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });