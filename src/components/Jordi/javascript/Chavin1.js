import React, { useEffect, useRef, useState } from 'react';
import '../estilos/chavin.css';

const Chavin1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [runNextAuto, setRunNextAuto] = useState(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);
    const carouselRef = useRef(null);

    const items = [
        {
            id: 1,
            img: 'img/chavin/imagen-01.jpg',
            author: 'Visita Perú',
            title: 'CHAVIN DE HUANTAR',
            topic: 'templo de chavin de Huantar',
            description: '',
        },
        {
            id: 2,
            img: 'img/chavin/imagen-02.jpg',
            author: 'Visita Perú',
            title: 'Chavin de Huantar',
            topic: 'coliseo de los dioses',
            description: 'Nos desplazamos hacia el sur paralelo al río santa en el corazón del callejón de Huaylas en ascenso por la vía asfaltada visitando centros poblados acompañados de bosques rivereños de eucalipto que perfuman el ambiente.',
        },
        {
            id: 3,
            img: 'img/chavin/museo-02.jpg',
            author: 'Visita Perú',
            title: 'Chavin de Huantar',
            topic: 'Museo',
            description: 'Nuestros Servicios Incluyen: » Transporte turístico. » Recojo del hotel. » Guiado en español. Otros idiomas consultar. » Impuestos. » Asistencia permanente.',
        },
        {
            id: 4,
            img: 'img/chavin/museo-02.jpg',
            author: 'Lugares hermosos',
            title: 'Museo Nacional de Chavin de Huantar',
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

        const timeoutId = setTimeout(autoNext, timeAutoNext);
        setRunNextAuto(timeoutId);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentIndex]);

    return (
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
            <div className="thumbnail" ref={thumbnailRef}>
                {items.map((item, index) => (
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
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Chavin1