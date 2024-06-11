import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {

  const contextHome = useContext(Context);

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Hola Bienvenid@ <strong>{contextHome.user.username}</strong> a mi tienda!!</p>
    </div>
  )
}