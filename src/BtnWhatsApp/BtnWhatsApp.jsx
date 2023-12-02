import './BtnWhatsApp.css'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { openWhatsAppChat } from '../OpenWhatsApp/openWhatsAppChat'

const BtnWhatsApp = () => {
  return (
    <button onClick={openWhatsAppChat} className='btn-whatsapp'>
      <IoLogoWhatsapp style={{ fontSize: 50 }}/>
    </button>
  )
}

export default BtnWhatsApp
