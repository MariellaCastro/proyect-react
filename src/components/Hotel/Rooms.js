import React, { useState, useEffect } from "react";

export const Rooms = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const rooms = [
        { img: "HM", name: "HABITACIÓN MATRIMONIAL", descripcion: "Un espacio cómodo y elegante ideal para parejas." },
        { img: "HMS", name: "HABITACIÓN MATRIMONIAL SUPERIOR", descripcion: "Más espacio y lujo para una experiencia elegante.", },
        { img: "HD", name: "HABITACIÓN DOBLE", descripcion: "Dos camas individuales ideales para dos personas." },
        { img: "HT", name: "HABITACIÓN TRIPLE", descripcion: "Equipada con tres camas, ideal para grupos o familias pequeñas." },
        { img: "HTF", name: "HABITACIÓN TRIPLE FAMILIAR", descripcion: "Dos camas: 1 matrimonial y 1 individual." },
        { img: "HTFQ", name: "HABITACIÓN TRIPLE FAMILIAR QUEEN", descripcion: "Dos camas: 1 Queen y 1 individual." },
    ];

    const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width >= 1024) setItemsPerSlide(3);
        else if (width >= 768) setItemsPerSlide(2);
        else setItemsPerSlide(1);
    };

    useEffect(() => {
        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const nextSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex + itemsPerSlide) % Math.ceil(rooms.length / itemsPerSlide)
        );
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + Math.ceil(rooms.length / itemsPerSlide)) %
                Math.ceil(rooms.length / itemsPerSlide)
        );
    };

    const startIndex = currentIndex * itemsPerSlide;
    const visibleRooms = rooms.slice(startIndex, startIndex + itemsPerSlide);

    return (
        <section className="rooms">
            <h2>NUESTRAS HABITACIONES</h2>
            <div className="carousel-container">
                <div
                    className="carousel-inner"
                    style={{
                        gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)`,
                    }}
                >
                    {visibleRooms.map((room, index) => (
                        <div className="room-card" key={index}>
                            <img
                                src={`img/hotel/rooms/${room.img}.png`}
                                alt={room.name}
                            />
                            <h3>{room.name}</h3>
                            <p>{room.descripcion}</p>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" onClick={prevSlide}>
                    &#9664;
                </button>
                <button className="carousel-control-next" onClick={nextSlide}>
                    &#9654;
                </button>
            </div>
        </section>
    );
};

export default Rooms;