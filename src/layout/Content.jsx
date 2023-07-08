import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Registro } from "../views/Registro";
import { QuienesSomos } from "../views/QuienesSomos";
import { Contactanos } from "../views/Contactanos";
import { PerfilUsuario } from "../views/PerfilUsuario";
import { Festivales } from "../views/Festivales";
import { DetalleFestivales } from "../views/DetalleFestivales";



export const Content = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
          <Route path="/festivales" element={<Festivales />} />
          <Route path="/detalleFestivales" element={<DetalleFestivales />} />
        </Routes>
      </>
    );
  };