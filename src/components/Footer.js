import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Footer.css"

const paginas = [
  { text: "Inicio", link:"/"}, { text: "Quienes Somos" , link:"/quienessomos"}, { text: "Tours" , link:"/tours"}, { text: "Turismo" , link:"/turismo"}, { text: "Hotel" , link:"/hotel"}, { text: "Reservas" , link:"/reservas"}
]
const contactos = [
  { img: "ubicacion", text: "Av. Luzuriaga # 651 - Huaraz - Perú", text2: "" },
  { img: "telefono", text: "+51 043-426428", text2: "976562003" },
  { img: "gmail", text: "reservas@atuspariatours.com", text2: "atusparia_tours@hotmail.com" },
]
const mediosPagos = [
  { img: "Visa" }, { img: "MasterCard" }, { img: "VisaElectron" }, { img: "Yape" }, { img: "Plin" },
]
const redesSociales = [
  { img: "Facebook", link: "https://es-la.facebook.com/AtuspariaToursHuaraz/" },
  { img: "Twiter", link: "https://x.com/AtuspariaTours" },
  { img: "Maps", link: "https://www.google.com/maps/place/Av.+Mariscal+Toribio+de+Luzuriaga+651,+Huaraz+02001/@-9.529062,-77.5316068,17z/data=!3m1!4b1!4m6!3m5!1s0x91a90d104736ea09:0x88033ca5dbd7b63b!8m2!3d-9.529062!4d-77.5290319!16s%2Fg%2F11h4kc_3jp?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { img: "Whatsapp", link: "https://api.whatsapp.com/send?phone=51976562003&text=Hola%20*Atusparia%20Tours*%20quiero%20informaci%C3%B3n%20de%20los%20tours%20%F0%9F%98%83" },
  { img: "Instragram", link: "https://www.instagram.com/atusparia_tours/" },
]
export const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <img src="../img/logotipo.png" alt="Atusparia Tours Logo" className="footer-logo" />
          <p>
            Comprometidos a ofrecer experiencias de viaje excepcionales, conectando a nuestros clientes con la
            riqueza cultural, histórica y natural de la ciudad de Huaraz.
          </p>
        </div>
        <div className="footer-column">
          <h3>TE AYUDAMOS</h3>
          {contactos.map((contacto) => (
            <div className='contacto'>
              <img src={`img/contacto/${contacto.img}.png`}></img>
              <div className='contacto-text'>
                <p>{contacto.text}</p>
                <p>{contacto.text2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-column">
          <h3>PÁGINAS</h3>
          <ul>
            {paginas.map((pagina, index) => (
              <Link className='li' to={pagina.link}>{pagina.text}</Link>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>MEDIOS DE PAGOS</h3>
          <div className="payment-icons">
            {mediosPagos.map((medioPago) => (
              <img src={`img/mediosPagos/${medioPago.img}.png`} alt="" />
            ))}
          </div>
          <h3>REDES SOCIALES</h3>
          <div className="social-icons">
            {redesSociales.map((redsocial, index) => (
              <a key={index} href={redsocial.link} target="_blank" rel="noopener noreferrer">
                <img src={`img/redesSociales/${redsocial.img}.png`}></img>
              </a>
            ))}
          </div>
          <div className="claims">
            <img src="/img/Libro.png" alt="Libro de Reclamaciones" />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footers;