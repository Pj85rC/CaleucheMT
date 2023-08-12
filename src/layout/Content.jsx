import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";
import { Registro } from "../views/auth/Registro";
import { AboutUs } from "../views/QuienesSomos";
import { Contact } from "../views/Contactanos";
import { PerfilUsuario } from "../views/PerfilUsuario";
import { Festivales } from "../views/festivals/Festivales";
import { DetalleFestivales } from "../views/festivals/DetalleFestivales";
import { AddArtist } from "../views/admin/AddArtist";
import { AdminMenu } from "../views/admin/AdminMenu";
import { AddFestival } from "../views/admin/AddFestival";
import RouteGuard from "./RouteGuard";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/quienesSomos" element={<AboutUs />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <RouteGuard requiredRoles={["user"]}>
              <PerfilUsuario />
            </RouteGuard>
          }
        />

        <Route path="/festivales" element={<Festivales />} />

        <Route
          path="/festival/:id"
          element={
            <RouteGuard requiredRoles={["admin", "user"]}>
              <DetalleFestivales />
            </RouteGuard>
          }
        />

        <Route
          path="/admin"
          element={
            <RouteGuard requiredRoles={["admin"]}>
              <AdminMenu />
            </RouteGuard>
          }
        />

        <Route
          path="/admin/artists"
          element={
            <RouteGuard requiredRoles={["admin"]}>
              <AddArtist />
            </RouteGuard>
          }
        />

        <Route
          path="/admin/festivals"
          element={
            <RouteGuard requiredRoles={["admin"]}>
              <AddFestival />
            </RouteGuard>
          }
        />
      </Routes>
    </>
  );
};
