import React, { useEffect, useRef, useState } from 'react';
import '../estilos/llanganuco.css';

const Llanganuco1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    const sliderRef = useRef(null);
    const carouselRef = useRef(null);
    const runNextAutoRef = useRef(null);

    const items = [
        {
            id: 1,
            img: 'img/imagen-01.jpg',
            author: 'Visita Perú',
            title: 'LAGUNA LLANGANUCO',
            topic: 'LAGUNAS',
            description: '',
        },
        {
            id: 2,
            img: 'img/imagen-02.jpg',
            author: 'Visita Perú',
            title: 'LAGUNA LLANGANUCO',
            topic: 'LAGOS',
            description: 'La segunda laguna se encuentra a mayor altitud y sus aguas penetran al vaso de la primera simbolizando un apareamiento. Por ello los nombres de laguna "macho" y de laguna "hembra".',
        },
        {
            id: 3,
            img: 'img/imagen-03.jpg',
            author: 'Visita Perú',
            title: 'CORDILLERA BLANCA',
            topic: 'NEVADOS',
            description: 'Nuestros Servicios Incluyen: » Transporte turístico. » Recojo del hotel. » Guiado en español. Otros idiomas consultar. » Impuestos. » Asistencia permanente.',
        },
        {
            id: 4,
            img: 'img/imagen-04.jpg',
            author: 'Lugares hermosos',
            title: 'LAS PAMPAS DE VICU',
            topic: 'VISITA PERÚ',
            description: 'No Incluye: » Entradas. » Almuerzos. » Otros servicios no especificados.',
        },
    ];

    const showSlider = (type) => {
        if (type === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
    };

    useEffect(() => {
        const autoNext = () => {
            showSlider('next');
        };

        runNextAutoRef.current = setTimeout(autoNext, timeAutoNext);

        return () => {
            clearTimeout(runNextAutoRef.current);
        };
    }, [currentIndex]);

    return (
        <div>
            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={sliderRef}>
                    {items.map((item, index) => (
                        <div key={item.id} className={`item ${index === currentIndex ? 'active' : ''}`}>
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.description}</div>
                                <div className="buttons">
                                    <button>VER MÁS</button>
                                    <button>SUSCRIBIRSE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button id="prev" onClick={() => showSlider('prev')} aria-label="Previous Slide">←</button>
                    <button id="next" onClick={() => showSlider('next')} aria-label="Next Slide">→</button>
                </div >

                <div className="time"></div>
            </div>
        </div>
    );
};

export default Llanganuco1;