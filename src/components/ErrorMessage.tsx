type ErrorMessageProps = {
    children: React.ReactNode
}

export default function ErrorMessage ({children} : ErrorMessageProps ) {
  return (
    <p className="bg-red-50 text-red-600 p-2 font-semibold text-sm rounded-md text-center">{children}</p>
  )
}