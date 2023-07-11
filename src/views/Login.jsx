import { Input } from "../components/UI/Input";

export const Login = () => {
    return (
      <>
        <h1>Login</h1>
        <Input label="Nombre de Usuario" />
        <Input label="Contraseña" isPassword />
      </>
    );
  };
  