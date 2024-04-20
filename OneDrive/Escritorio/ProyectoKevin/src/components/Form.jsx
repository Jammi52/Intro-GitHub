"use client";
import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    const precioNum = parseFloat(precio); // Convertir el precio a número

    // Intentar insertar datos en la tabla 'productos'
    const { data, error } = await supabase.from('productos').insert([
      {
        nombre: nombre,
        precio: precioNum, // Asegúrate de que 'precio' se inserte como un número
      }
    ]);

    if (error) {
      console.error("Error al insertar el producto:", error);
      alert("Error al insertar el producto: " + error.message);
    } else {
      console.log("Producto registrado con éxito:", data);
      // Opcional: limpiar los campos después de un registro exitoso
      setNombre('');
      setPrecio('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <button type="submit">Registrar Producto</button>
    </form>
  );
};

export default Form;