import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import SignUpScema  from '../Scema/SignUpScema'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetAuth } from "../Store/Auth/AuthSlice";
import Swal from 'sweetalert2'
const UseSignUp = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {
      register, 
      handleSubmit,
      formState: { errors },
  } = useForm({
      mode: "onBlur",
      resolver: zodResolver(SignUpScema),
  });
  // submit form sign up
  const onSubmit = async (data) => {
    dispatch(SetAuth())
     nav("/fitness") 
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
    return { onSubmit , errors , handleSubmit , register }
}
export default UseSignUp