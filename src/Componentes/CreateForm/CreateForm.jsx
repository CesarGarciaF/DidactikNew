import React from 'react';
import './CreateForm.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { Outlet } from 'react-router-dom';

export const CreateForm = () => {
    return (
        <div className='envoltura'>
            <form action=''>
                <h1>Registro </h1>
                <div className='input-box'>
                    <input type='text' placeholder='Nombre de Usuario' required/>
                    <FaRegUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Correo Electronico' required/>
                    <MdOutlineEmail className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Contraseña' required/>
                    <MdLockOutline className='icon'/>
                </div>

                <button type="submit">Crear Cuenta
                </button>
            </form>
            <Outlet/>
        </div>
    )
}
export default CreateForm;