import { Link } from "react-router"

const LoginView = () => {
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>
      <nav>
        <Link to="/auth/register"
          className="text-center text-white text-lg block "
        >
          ¿No tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  )
}

export default LoginView