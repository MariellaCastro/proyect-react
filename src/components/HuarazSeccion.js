import React from 'react'

const seccion1 = [
  { img: "1", title: "EXPERTOS EN VIAJES", text: "Más de 36 años de experiencia como líder en turismo, brindando servicios de calidad que hará que tu experiencia de viaje sea inolvidable." },
  { img: "2", title: "LOS MEJORES GUÍAS", text: "Contamos con los mejores guías turísticos, expertos en cada destino, quienes te acompañarán durante el recorrido brindándote información detallada, recomendaciones locales y asegurando una experiencia única y enriquecedora." },
  { img: "3", title: "MOVILIDAD", text: "En nuestra agencia, ofrecemos movilidad cómoda y segura para garantizarles un traslado eficiente y placentero durante todo su viaje." },
];
const seccion2 = [
  { img: "4", title: "PRECIOS MÁS ACCESIBLES", text: "Aprovecha nuestros descuentos promociones y ofertas seleccionadas que tenemos para ti." },
  { img: "5", title: "TE RECOGEMOS", text: "Nuestra agencia brinda el servicio de recojo a tu hotel para ofrecerte comodidad y puntualidad, asegurando un traslado seguro y sin preocupaciones hacia tu próximo destino." },
  { img: "6", title: "SEGURIDAD Y CALIDAD", text: "Viaje totalmente seguro y disfrute de su estadía, además que nuestra mayor prioridad es brindarle el mejor servicio." },
];
export const HuarazSeccion = () => {
  return (
    <div className="huaraz-section">
      <h1 className="title">DESCUBRE HUARAZ DE LA MANO DE LOS MEJORES</h1>
      <div className="content">
        <div className="image-container">
          <img src="/img/home/GrupoPersonas.png" alt="Grupo de personas en Huaraz" className="main-image" />
        </div>
        <div className="info-container">
          <div className="info-container-sec">
            {seccion1.map((secc, index) => (
              <div key={index} className="info-item">
                <img src={`img/home/sectionHuaraz/${secc.img}.png`} alt={secc.title} />
                <div className='info-item-sec'>
                  <h2>{secc.title}</h2>
                  <p>{secc.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='info-container-sec'>
            {seccion2.map((secc, index) => (
              <div key={index} className="info-item">
                <img src={`img/home/sectionHuaraz/${secc.img}.png`} alt={secc.title} />
                <div className='info-item-sec'>
                  <h2>{secc.title}</h2>
                  <p>{secc.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HuarazSeccion;