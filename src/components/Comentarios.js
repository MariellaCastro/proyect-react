import React from 'react'

export const Comentarios = () => {
    const testimonials = [
        { name: "Isaac Salas", opinion: "La agencia cumplió con el horario y visitamos los lugares indicados, el guía también demostró conocimiento de lugar, por ello sí recomiendo tomar está agencia para el tour a la laguna de Llanganuco, otro servicio no llegué a tomar por el corto tiempo de mi visita.", rating: 5 },
        { name: "Ángela U", opinion: "Hice tres recorridos: Llanguanuco, Chavin de Huantar y Nevado de Pastoruri, acompañada de la guía Nilda. Excelente información y acompañamiento. Al viajar sola siempre prefiero tener personas a mi alrededor que me den confianza y seguridad y eso lo obtuve en Huaraz.", rating: 5 },
        { name: "Brisegc", opinion: "Tomamos el tour a el nevado Pastoruri. Desde las oficinas, la señora que nos atendió fue muy cordial y la guía que se llamaba Nilda excelente, buena información y servicio.", rating: 5 },
        { name: "SG_hiker", opinion: "Tomé con ellos el tour al sitio arqueológico de Chavin de Huantar. Nuestro guía fue Jorge Vasquez que hizo un trabajo estupendo. Explicó con mucho detalle todo lo relacionado con la cultura Chavin durante el viaje, en las ruinas y en el museo. Además tuvo el detalle de indicarme unas galerías apartadas del recorrido principal para que pudiese dedicar más tiempo a explorar las ruinas. La única pega que le pongo al tour es que la hora de la comida se me hizo muy larga y la visita posterior al museo se me hizo bastante corta. Hubiese estado bien acortar el tiempo dedicado al almuerzo y añadirle ese tiempo a la visita del museo.", rating: 5 },
        { name: "Suzette C", opinion: "Tienen varias opciones de tours, a precios bastante razonables y sus buses se encuentran en buenas condiciones. Me pareció una de las agencias más formales en Huaraz.", rating: 4 },
        { name: "Escarlet Lucano", opinion: "Te recogen desde los hoteles entre las 9 a 9:30 AM los recorridos muy bonitos, guías calificados con mucho conocimientos del destino y cultura.", rating: 5 },
        { name: "Sean T", opinion: "El hotel (Atusparia) organizó un par individual para nosotros excursiones diarias a corto plazo (de uno a Chavin y la otra a la laguna de Llanganuco)./Yangay Las visitas fueron en cómodas furgonetas Mercedes sprinter, calidad. Los conductores eran excelentes y lo más importante, seguro. Guías eran entusiastas y bien informados.", rating: 5 },
    ];
    const renderStars = (rating) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };
    return (
        <section className="comentarios">
            <h2>EXPERIENCIAS QUE DEJAN HUELLA</h2>
            <div className="comentarios-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="comentarios-item" key={index}>
                        <div className="comentarios-header">
                            <h3>
                                {testimonial.name}
                                <span className="rating">{renderStars(testimonial.rating)}</span>
                            </h3>
                        </div>
                        <p>{testimonial.opinion}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Comentarios;