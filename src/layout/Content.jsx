import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Registro } from "../views/Registro";
import { AboutUs } from "../views/QuienesSomos";
import { Contact } from "../views/Contactanos";
import { PerfilUsuario } from "../views/PerfilUsuario";
import { Festivales } from "../views/Festivales";
import { DetalleFestivales } from "../views/DetalleFestivales";
import { AddArtist } from '../views/AddArtist'



export const Content = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/quienesSomos" element={<AboutUs />} />
          <Route path="/contactanos" element={<Contact />} />
          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
          <Route path="/festivales" element={<Festivales />} />
          <Route path="/festival/:id" element={<DetalleFestivales />} />
          <Route path="/admin/artists" element={<AddArtist />} />
        </Routes>
      </>
    );
  };