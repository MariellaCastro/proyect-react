import React from 'react';

export const Destinos = () => {
  const destinos = [
    { img: "Pastoruri", name: "Nevado de Pastoruri", link: "#" },
    { img: "Huaylas", name: "Callejón de Huaylas", link: "#" },
    { img: "Laguna", name: "Laguna 69", link: "#" },
  ];

  const paquetesTuristicos = [
    { img: "HuarazMagico", name: "HUARAZ MÁGICO", duracion: "4D/3N", link: "#" },
    { img: "HuarazMajestuoso", name: "HUARAZ MAJESTUOSO", duracion: "3D/2N", link: "#" },
    { img: "HuarazRapidisimo", name: "HUARAZ RAPIDISIMO", duracion: "2D/1N", link: "#" },
  ];

  return (
    <>
      <div className="seccion">
        <h1>EXPLORA LOS MEJORES DESTINOS</h1>
        <section>
          {destinos.map((destino, index) => (
            <div key={index} className="seccion-destino">
              <img src={`img/home/destinos/${destino.img}.png`} alt={destino.name} />
              <div className="destino">
                <a href={destino.link}>
                  <p>{destino.name}</p>
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="seccion">
        <h1>PAQUETES TURÍSTICOS EXCLUSIVOS</h1>
        <section>
          {paquetesTuristicos.map((paquete, index) => (
            <div key={index} className="paquete-turistico">
              <img src={`img/home/paquetesTuristicos/${paquete.img}.png`} alt={paquete.name} />
              <div className="paquete">
                <div className="paquete-non">
                  <a href={paquete.link}>
                    <p>{paquete.name}</p>
                    <p className="duracion">{paquete.duracion}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      </>
  );
};

export default Destinos;