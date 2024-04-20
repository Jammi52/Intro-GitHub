"use client";

import { supabaseClient } from "app/database/supabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MenuNavbar() {
  //Aquí haremos el manejo de estado para poner un encabezado
  const [encabezado, setEncabezado] = useState("");

  return (
    <Navbar expand="lg" className="bg-body-tertiary color-menu">
      <Container>
        <Image src="/images/logo.jpg" alt="Gobierno" width={100} height={100} />
        <Navbar.Brand href="#home" className="color-menu titulo-menu">
          inventario tienda deportiva
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="color-menu">
              Inicio
            </Nav.Link>
            <Nav.Link href="/registers" className="color-menu">
              Registros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
