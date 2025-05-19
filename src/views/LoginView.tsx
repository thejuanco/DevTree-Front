import { Link } from "react-router"

const LoginView = () => {
  return (
    <>
      <div>LoginView</div>

      <nav>
        <Link to="/auth/register">
          ¿No tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  )
}

export default LoginView