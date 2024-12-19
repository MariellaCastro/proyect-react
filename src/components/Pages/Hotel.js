import React from 'react'
import '../Hotel/hotel.css'
import  BannerH  from '../Hotel/BannerH'
import  Rooms  from '../Hotel/Rooms'
import  Servicios from '../Hotel/Servicios'
import  Testimonios  from '../Hotel/Testimonios'

export const Hotel = () => {
  return (
    <>
    <BannerH/>
    <Rooms/>
    <Servicios/>
    <Testimonios/>
    </>
  )
}
export default Hotel;