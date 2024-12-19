import React from 'react'

const somos = [
    { titulo: "¿QUIÉNES SOMOS?", parrafo: "Alpaquito Tours, somos una empresa de turismo con más de 20 años de experiencia. Estos años nos han permitido posicionarnos en un mercado competitivo y consolidarnos como líderes en nuestra región, ya que contamos con personal altamente calificado para la atención que se requiere en el sector turístico. Lo más importante es la atención personalizada, que nos da una ventaja competitiva y nos diferencia de los demás.", img: "somos" },
    { titulo: "MISIÓN", parrafo: "En Alpaquito nos comprometemos a ofrecer experiencias de viaje excepcionales, conectando a nuestros clientes con la riqueza cultural, histórica y natural de la ciudad de Huaraz. Con más de dos décadas de experiencia, nos esforzamos por garantizar un servicio de calidad, destacando la autenticidad y preservando el balance de las experiencias memorables. Mantenemos un fuerte compromiso con la sostenibilidad y el respeto por la diversidad local.", img: "mision" },
    { titulo: "VISIÓN", parrafo: "Superar todas las expectativas de calidad en servicios turísticos, elevando la atención al cliente más allá de un estándar profesional. Queremos ser un referente en el ámbito nacional e internacional, con propuestas que preserven la riqueza natural y cultural de nuestra región", img: "vision" },
]
export const AboutUs = () => {
    return (
        <section className="about-us">
                {somos.map((soy, index) => (
                    <div key={index} className="section">
                        <div className="image-background"></div>
                                <img src={`img/somos/aboutus/${soy.img}.png`} alt={soy.img} className="section-image" />
                        <div className="section-content">
                            <p>{soy.parrafo}</p>
                            <div className="image-wrapper">
                                <h2 className="section-title">{soy.titulo}</h2>
                                
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    )
}
export default AboutUs;