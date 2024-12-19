import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Oferta = () => {
    const [timeLeft, setTimeLeft] = useState(1000000);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const dias = Math.floor(seconds / 86400);
        const horas = Math.floor((seconds % 86400) / 3600);
        const minutos = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${dias}d ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    };

    return (
        <section className='Oferta'>
            <p id="PLANES">¿SIN PLANES PARA AÑO NUEVO?</p>
            <p id="oferta">20% EN NUESTROS TOURS</p>
            <p id="PLANES">Por tiempo limitado</p>
            <div id="Hora_limite" className="timer">
                {timeLeft > 0 ? formatTime(timeLeft) : '¡Tiempo terminado!'}
            </div>
            <Link to="/reservas">
            <button>RESERVA YA</button>
            </Link>
        </section>
    );
};

export default Oferta;