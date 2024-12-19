// Componente React
import React from "react";

const Movilidades = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="vehicles">
                    <h2>NUESTRAS MOVILIDADES</h2>
                    <img src="img/somos/movilidad.png" alt="Flota de vehículos" className="vehicle-image"
                    />
                </div>
                <div className="visit">
                    <h2>VISÍTANOS</h2>
                    <p>De 07:30 AM a 01:00 PM, De 04:00 PM a 09:30 PM</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.6297941388807!2d-77.5282150812144!3d-9.528474513737583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90d104736ea09%3A0x88033ca5dbd7b63b!2sAv.%20Mariscal%20Toribio%20de%20Luzuriaga%20651%2C%20Huaraz%2002001!5e0!3m2!1sen!2spe!4v1734125051555!5m2!1sen!2spe" loading="lazy" title="Ubicación"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Movilidades;