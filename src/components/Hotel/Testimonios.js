import React from 'react';

export const Testimonios = () => {
  const testimonials = [
    { name: "Rodrigo", opinion: "Limpieza y buena atención. Todo el personal muy amable y siempre dispuestos a ayudar.", rating: 5 },
    { name: "Diego", opinion: "Buena atención del personal y 10/10 la comodidad y limpieza de la habitación.", rating: 5 },
    { name: "Manuel", opinion: "Excelente vista del cuarto con ventana hacia el Huascarán y otros nevados", rating: 4 },
    { name: "Warner", opinion: "Excelente ubicación. Proporciona un mirador a la Ciudad de Huaraz. Las personas que nos atendieron siempre disponibles y atentas. Es un lugar Pura vida.", rating: 5 },
    { name: "Ivette", opinion: "Una excelente estadía, desde el ingreso te hacen sentir como en casa, brindando una bonita experiencia, las habitación amplias, limpias, una maravillosa vista al despertar.", rating: 5 },
    { name: "Marcos", opinion: "Excelente vista del cuarto con ventana hacia el Huascarán y otros nevados", rating: 4 },
    { name: "Roxana", opinion: "El hotel es amplio, las habitaciones son cómodas, tienen buena decoración. Todo estaba siempre limpio. El desayuno fue variado y la atención de la señora fue de primera. El alojamiento cuenta con Tours propio, nos hicieron rebajas en los paseos. Los Tours fueron muy buenos.", rating: 5 },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="testimonials">
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-header">
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
  );
};

export default Testimonios;