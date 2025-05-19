import { Link } from "react-router"

const RegisterView = () => {
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Crear cuenta</h1>

      <nav className="mt-10">
        <Link to="/auth/login" className="text-center text-white text-lg block ">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}

export default RegisterView