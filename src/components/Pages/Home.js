import React from 'react'
import  Carrusel  from '../Carrusel'
import  Oferta  from '../Oferta'
import  Destinos  from '../Destinos'
import  HuarazSeccion  from '../HuarazSeccion'
import Comentarios from '../Comentarios'


export const Home = () => {
    return (
        <>
            <Carrusel />
            <Oferta />
            <Destinos />
            <HuarazSeccion />
            <Comentarios/>
        </>
    )
}

export default Home;