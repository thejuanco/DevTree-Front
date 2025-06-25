import { Link } from "react-router"
import { useForm } from "react-hook-form"
import axios, { isAxiosError } from "axios"
import ErrorMessage from "../components/ErrorMessage"
import type { RegisterForm } from "../types"

const RegisterView = () => {

  const initialValues : RegisterForm = {
    name: '',
    email: '',
    handle: '',
    password: '',
    password_confirmation: ''
  }

  const { register, watch, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleRegister = async (formData : RegisterForm) => {
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData)
      console.log(data.message)
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        console.log(error.response.data.error)
      }
    }
  }

  const password = watch('password')

  return (
    <>
      <h1 className="text-3xl text-white font-bold">Crear cuenta</h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-10 rounded-lg space-y-6 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-xl text-slate-500">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es obligatorio"
              }
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-xl text-slate-500">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: {
                value: true,
                message: "El correo es obligatorio"
              },
              pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-xl text-slate-500">Handle</label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", {
              required: {
                value: true,
                message: "El handle es obligatorio"
              }
            })}
          />
          {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-xl text-slate-500">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: {
                value: true,
                message: "El password es obligatorio"
              },
              minLength: {
                value: 8,
                message: "El password debe de ser minimo de 8 caracteres"
              }
            })}
          />
        </div>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password_confirmation" className="text-xl text-slate-500">Repetir Password</label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", {
              required: {
                value: true,
                message: "El password es obligatorio"
              },
              validate: (value) => value === password || "Las contraseñas no son iguales"
            })}
          />
        </div>
        {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
        <input
          type="submit"
          className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-md font-bold cursor-pointer"
          value='Crear Cuenta'
        />
      </form>

      <nav className="mt-10">
        <Link to="/auth/login" className="text-center text-white text-lg block ">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}

export default RegisterView