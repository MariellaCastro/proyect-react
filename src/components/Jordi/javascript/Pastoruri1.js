import React, { useEffect, useRef, useState } from 'react';
import '../estilos/pastoruri.css';

const Pastoruri1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    const sliderRef = useRef(null);
    const carouselRef = useRef(null);
    const runNextAutoRef = useRef(null);

    const items = [
        {
            id: 1,
            img: 'img/pastoruri/caballo.jpg',
            author: 'Visita Perú',
            title: 'PASEO A CABALLO A 4500msnm',
            topic: 'LAGUNAS',
            description: '',
        },
        {
            id: 2,
            img: 'img/pastoruri/hielo-helada.jpg',
            author: 'Visita Perú',
            title: 'HIELOS CONGELADOS',
            topic: 'LAGOS FRIOS',
            description: 'Partiendo de Huaraz con destino al distrito de "Catac", recorriendo 38 Km, nos detenemos para que el viajero tome su mate de "coca", como parte de su aclimatación. Tomanaremos el desvío de Pachacoto donde se inicia el recorrido por una trocha afirmada de unos 35 Km, acompañada de extensas áreas de pastos naturales propias de la región andina, y nos disponemos a visitar la laguna de "PATO COCHA".',
        },
        {
            id: 3,
            img: 'img/pastoruri/laguna-01.jpg',
            author: 'Visita Perú',
            title: 'LAGUNAS',
            topic: 'NEVADOS',
            description: 'Acompañada del ave Yanavico (Ave migratoria), su superficie está cubierta de una alga acuática llamada cushuro en los rincones de la laguna afloran los totorales y a su alrededor algunos rodales de Puya, ubicada a la mano izquierda las cumbres que sobresalen del nevado RAIRA. Pasando el control de vigilancia del Parque Nacional Huascarán, a unos 2 Km, se encuentra la quebrada de Pumapampa, donde se ubica la abundante fuente de AGUA MINERAL GASIFICADA DE PAMAPAMPA.',
        },
        {
            id: 4,
            img: 'img/pastoruri/puya-02.jpg',
            author: 'Lugares hermosos',
            title: 'PYA REYMONDI',
            topic: 'VISITA PERÚ',
            description: 'Junto a este atractivo natural crece la "Puya Raimondi", una "Joya de la Botánica", perteneciente al grupo de los bromeliáceos y tiene una mayor inflorescencia que se conoce en el mundo vegetal (ocho mil flores, y ofreciendo 6 millones de semilla), alcanzando una altura de promedio 11 metros, su ciclo de vida logra alcanzar los cien años.',
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
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
};

export default Pastoruri1;