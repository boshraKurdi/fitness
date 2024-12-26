import { useDispatch } from "react-redux";
import { SetAuth } from "../Store/Auth/AuthSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import LoginScema from "../Scema/LoginScema";
import Swal from 'sweetalert2'

export default function UseLogin(){
    const nav = useNavigate();
 
     // call dispatch
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginScema),
});
// submit form login
const onSubmit = async (data) => {
  
  dispatch(SetAuth())
    nav('/fitness' , {replace: true})
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
    })
}
  return { register , handleSubmit , onSubmit , errors }
}