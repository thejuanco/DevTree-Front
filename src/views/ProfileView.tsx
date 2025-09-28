import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import ErrorMessage from "../components/ErrorMessage"
import type { User, ProfileForm } from "../types"
import { updateProfile, uploadImage } from "../api/DevTreeAPI"

export default function ProfileView() {
    const queryClient = useQueryClient()
    const data: User = queryClient.getQueryData(['user'])!

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            handle: data.handle,
            description: data.description
        }
    })

    //Mutacion: datos de la api
    const updateProfileMutation = useMutation({
        mutationFn: updateProfile,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            //Invalidar el query
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    })

    const uploadImageMutation = useMutation({
        mutationFn: uploadImage,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            //queryClient.invalidateQueries({queryKey: ['user']})
            //Recupera el state, y cambia la respuesta del servidor
            queryClient.setQueryData(['user'], (prevData: User) => {
                return {
                    ...prevData,
                    image: data.image
                }
            })
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            uploadImageMutation.mutate(e.target.files[0])
        }
    }

    //Mutacion para subir la imagen al servidor
    const handleUserProfile = (formData: ProfileForm) => {
        const user: User = queryClient.getQueryData(['user'])! //se agrega un ! para decirle a ts que ese valor siempre va a existir
        user.description = formData.description
        user.handle = formData.handle
        updateProfileMutation.mutate(user)
    }

    return (
        <>
            <form
                className="bg-white p-10 rounded-lg space-y-5"
                onSubmit={handleSubmit(handleUserProfile)}
            >
                <legend className="text-2xl text-slate-800 text-center">Editar Información</legend>
                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="handle"
                    >Handle:</label>
                    <input
                        type="text"
                        className="border-none bg-slate-100 rounded-lg p-2"
                        placeholder="handle o Nombre de Usuario"
                        {...register('handle', {
                            required: 'El nombre de usuario es obligatorio'
                        })}
                    />
                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="description"
                    >Descripción:</label>
                    <textarea
                        className="border-none bg-slate-100 rounded-lg p-2"
                        placeholder="Tu Descripción"
                        {...register('description', {
                            required: 'La descripción es obligatoria'
                        })}
                    />
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="handle"
                    >Imagen:</label>
                    <input
                        id="image"
                        type="file"
                        name="handle"
                        className="border-none bg-slate-100 rounded-lg p-2"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Guardar Cambios'
                />
            </form>
        </>
    )
}