import React from 'react'

export const Servicios = () => {
    const servicios = [
        { img: "mapa", text: "Excelente ubicación", ratg:"4.9"},
        { img: "desayuno", text: "Desayuno incluido", ratg:"4.8"},
        { img: "recepcion", text: "Recepción 24h", ratg:"5.0"},
        { img: "wifi", text: "WiFi", ratg:"5.0"},
        { img: "limpiador", text: "Limpieza diaria", ratg:"5.0"},
        { img: "estacionamiento", text: "Estacionamiento exterior", ratg:"4.7"},
        { img: "tour", text: "Tours", ratg:"5.0"},
        { img: "traslado", text: "Traslado", ratg:"4.9"},
        { img: "equipaje", text: "Guarda equipaje", ratg:"4.8"},
    ]

    return (
        <div>
            <section className="rating-section">
                <h1 className="rating-score">5.0</h1>
                <img className='score' src='img/hotel/puntuacion.png'/>
                <p className="rating-highlight">Favorito entre huéspedes</p>
                <p className="rating-description">
                    Este alojamiento está en el <strong>1 % de los mejor valorados</strong> entre los hoteles de Huaraz, según las valoraciones, las reseñas y la confiabilidad.
                </p>
                <div className="rating-grid">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="rating-item">
                            <img src={`img/hotel/servicios/${servicio.img}.png`} />
                            <p className='rating-title'>{servicio.text}</p>
                            <p>{servicio.ratg}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Servicios;