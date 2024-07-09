import React, { useState } from 'react';

const RegisterUser  = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica del envío del formulario
        console.log(formData);
    };

    return (
        <div className="register-form-container">
            <form method='post' action="/register_user" className="register-form">
                <h2>Registro</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">LastName:</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        value={formData.lastname} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="edad">Edad:</label>
                    <input 
                        type="number" 
                        id="edad" 
                        name="edad" 
                        value={formData.edad} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">Telefono:</label>
                    <input 
                        type="number" 
                        id="telefono" 
                        name="telefono" 
                        value={formData.telefono} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="correo">Correo:</label>
                    <input 
                        type="email" 
                        id="correo" 
                        name="correo" 
                        value={formData.correo} 
                        onChange={handleChange} 
                        required />
                </div>

                
                <div className="form-group">
                    <label htmlFor="rol">Rol del Usuario:</label>
                    <select name='rol' id='rol' className="custom-select">
                        <option value="option1">Usuario Estandar</option>
                        <option value="option2">Usuario Administrador</option>
                    </select>
                </div>
                
                <button type="submit" className="submit-button">Registrar</button>
            </form>
        </div>
    );
};

export default RegisterUser ;