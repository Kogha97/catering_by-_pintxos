import Image from "next/image";
import './style.css'
import {NAME} from "./constants.js"

export default function Home() {
  return (
    <div><h1>Welcome to {NAME}</h1></div>
  )
}
