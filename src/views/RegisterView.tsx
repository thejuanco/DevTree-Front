import { Link } from "react-router"

const RegisterView = () => {
  return (
    <>
      <div>RegisterView</div>

      <nav>
        <Link to="/auth/login">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}

export default RegisterView