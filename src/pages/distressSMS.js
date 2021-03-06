import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import  'bootstrap/dist/css/bootstrap.min.css';

const DistressSMS = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        
        axios.post('https://phoenix-server.xyz/api/sms', {
          params: {
            mobile_number: data.mobile_number,
            codeword: data.codeword 
          }
           
    
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(errors);
    }
   

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input type="tel" placeholder="Mobile number" name="mobile_number" ref={register({required: true, minLength: 6, maxLength: 12})} />

      <input type="text" placeholder="Your codeword" name="codeword" ref={register({required: true})} />


      <input type="submit" />
    </form>

    )


}

export default DistressSMS;