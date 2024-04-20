"use client";

import { supabaseClient } from "app/database/supabase";
import React, { useState, useEffect } from "react";

const RegisterProduct = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('productos')
      .insert([
        { nombre, precio, descripcion, cantidad, categoria }
      ]);

    if (error) console.error("Error al registrar el producto:", error);
    else console.log("Producto registrado:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registrar Producto</h1>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <button type="submit">Registrar Producto</button>
    </form>
  );
};

export default RegisterProduct;