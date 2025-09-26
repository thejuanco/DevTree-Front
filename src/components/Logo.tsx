import { Link } from "react-router"

export default function Logo() {
  return (
    <Link to="/">
        <img src="/logo.svg"  className="w-full block" alt="logo"/>
    </Link>
  )
}
