import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [cell, setCell] = useState('');
  const [rpm, setRpm] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelHour, setTravelHour] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [packageTour, setPackageTour] = useState('');
  const [message, setMessage] = useState('');
  const [totalPeople, setTotalPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(100); // Default price per person
  
  // Función para calcular el precio total basado en la cantidad de personas
  const calculatePrice = (numPeople) => {
    let pricePerPerson = 100; // Default price
    
    // Lógica de precios
    if (numPeople === 2) {
      pricePerPerson = 100;
    } else if (numPeople === 3) {
      pricePerPerson = 95;
    } else if (numPeople === 4) {
      pricePerPerson = 90;
    } else if (numPeople === 5) {
      pricePerPerson = 85;
    } else if (numPeople >= 6) {
      pricePerPerson = 75;
    }
    
    setTotalPrice(pricePerPerson * numPeople); 
  };

  
  const handlePeopleChange = (e) => {
    const numPeople = Number(e.target.value);
    setTotalPeople(numPeople);
    calculatePrice(numPeople); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva Confirmada:
      - Nombre: ${name}
      - Email: ${email}
      - Ciudad: ${city}
      - País: ${country}
      - Teléfono: ${phone}
      - Celular: ${cell}
      - RPM: ${rpm}
      - Fecha de Viaje: ${travelDate}
      - Hora de Viaje: ${travelHour}
      - Adultos: ${adults}
      - Niños: ${children}
      - Paquete Turístico: ${packageTour}
      - Mensaje: ${message}
      - Precio Total: $${totalPrice}`);
      
  
    setName('');
    setEmail('');
    setCity('');
    setCountry('');
    setPhone('');
    setCell('');
    setRpm('');
    setTravelDate('');
    setTravelHour('');
    setAdults(1);
    setChildren(0);
    setPackageTour('');
    setMessage('');
    setTotalPeople(1);
    setTotalPrice(100);
  };

  return (
    <div className="reservation-form">
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <h3>Datos Personales</h3>
        <label>
          Nombre: <span>*</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          E-mail: <span>*</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Ciudad:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          País: 
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required
          >
            <option value="">Seleccionar un país</option>
            <option value="Perú">Perú</option>
            <option value="Brasil">Brasil</option>
            <option value="Argentina">Argentina</option>
          </select>
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Celular:
          <input
            type="tel"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </label>
        <label>
          RPM:
          <input
            type="text"
            value={rpm}
            onChange={(e) => setRpm(e.target.value)}
          />
        </label>
        
        <h3>Datos de Arribo</h3>
        <label>
          Fecha de Viaje: <span>*</span>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
        </label>
        <label>
          Hora de Viaje: <span>*</span>
          <input
            type="time"
            value={travelHour}
            onChange={(e) => setTravelHour(e.target.value)}
            required
          />
        </label>
        <label>
          Nº De Personas: <span>*</span>
          <div>
            <input
              type="number"
              min="1"
              value={totalPeople}
              onChange={handlePeopleChange}
              required
            />
          </div>
        </label>
        
        <h3>Elegir Paquete</h3>
        <label>
          Paquete Turístico: <span>*</span>
          <select
            value={packageTour}
            onChange={(e) => setPackageTour(e.target.value)}
            required
          >
            <option value="">Elegir Paquete Turístico</option>
            <option value="Trekking Huaraz">Trekking Huaraz</option>
            <option value="Trekking Lima">Trekking Lima</option>
            <option value="Tour Cusco">Tour Cusco</option>
          </select>
        </label>
        
        <h3>Mensaje</h3>
        <label>
          Mensaje:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        
        <h3>Resumen de la Reserva</h3>
        <p>Total Personas: {totalPeople}</p>
        <p>Precio Total: ${totalPrice}</p>
        
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
}

export default ReservationForm;
