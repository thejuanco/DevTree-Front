import { Link } from "react-router"

const LoginView = () => {
  return (
    <>
      <nav>
        <Link to="/auth/register">
          ¿No tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  )
}

export default LoginView