import { useState } from 'react';
import tiktok from '../assets/icon-tiktok.png';
import facebook from '../assets/icon-facebook.png';
import instagram from '../assets/icon-instagram.png';
import youtube from '../assets/icon-youtube.png';
import pinterest from '../assets/icon-pinterest.png';
import stores from '../assets/stores.png';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import service from '../assets/service.png';
import chat from '../assets/chat.png';

const contacts = [
    {name: 'Tiendas', image: stores},
    {name: 'tusamigos@cemaco.com', image: email},
    {name: 'Compra por WhatsApp', image: whatsapp},
    {name: '(502) 2499-9990', image: service},
    {name: 'Chat en linea', image: chat}
    
]

const options = [
    { name: 'Servicios', select: [{name: 'Instalaciones'}, {name: 'Blog'}, {name: 'Tiendas'}, {name: 'Privilegio'}, {name: 'Servicio a empresas'}, {name: 'Bodas'}, {name: 'Actividades'}] },
    { name: 'Nuestros valores', select: [{name: 'Sostenibilidad'}, {name: 'Garantia total'}, {name: 'Sistema B'}] },
    { name: 'Venta en linea', select: [{name: 'Retirar en tienda'}, {name: 'Metodos de pago'}, {name: 'Preguntas frecuentes'}, {name: 'Descargar aplicacion'}] },
    { name: 'Grupo Cemaco', select: [{name: 'Unete a nosotros'}, {name: 'Sobre nosotros'}, {name: 'Deseas ser proveedor'}, {name: 'Jugueton'}, {name: 'Bebe Jugueton'}] }
];

const socialMedia = [
  { name: 'TikTok', href: 'https://www.tiktok.com/@cemacogt_oficial?_t=8nYaIo29LN8&amp;_r=1', icon: tiktok },
  { name: 'Facebook', href: 'https://www.facebook.com/cemacogt', icon: facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/cemacoguate/', icon: instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/user/cemacogt', icon: youtube },
  { name: 'Pinterest', href: 'https://www.pinterest.com.mx/cemacoguatemala/_created/', icon: pinterest }
];

export default function Footer() {
    const [open, setOpen] = useState(null);

    const toggle = (name) => {
        setOpen(open === name ? null : name);
    };

    return (
        <footer className="bg-gray-100 text-gray-700 py-10">
            <div className="w-screen py-4 grid grid-cols-1 md:grid-cols-5 gap-8 bg-blue-500 px-25">
                {contacts.map((contact) => (
                    <span key={contact.name} className="content-center">
                        <a href="#"
                        className="text-white text-base font-bold flex items-center gap-2"
                        >
                            <img 
                                className="size-6"
                                title={contact.name}
                                alt={contact.name}
                                src={contact.image}
                            />
                            {contact.name} 
                        </a>
                    </span>
                ))}
            </div>
            <div className="w-screen max-w-6xl mx-auto my-6">
              {/*mobile*/}
                <div className="block md:hidden">
                    {options.map((option) => (
                    <div key={option.name} className="bg-gray-100 py-3">
                        <button
                        onClick={() => toggle(option.name)}
                        className="w-full flex justify-between items-center text-left bg-gray-100 hover:bg-gray-200 px-3 py-2"
                        >
                        <span className="font-bold text-lg">{option.name}</span>
                        <span>{open === option.name ? "▲" : "▼"}</span>
                        </button>

                        {open === option.name && (
                        <ul className="mt-3 ml-2 space-y-2">
                            {option.select.map((item) => (
                            <li key={item.name}>
                                <a href="#" className="hover:text-blue-500">{item.name}</a>
                            </li>
                            ))}
                        </ul>
                        )}
                    </div>
                    ))}
                </div>
                {/*desktop*/}
                <div className="w-screen max-w-6xl mx-auto hidden md:grid grid-cols-1 md:grid-cols-5 gap-8 text-left my-6">
                    
                    {options.map((option) => (
                        <div key={option.name}>
                            <h4 className="font-bold text-lg mb-4">{option.name}</h4>
                            <ul className="space-y-2">
                            {option.select.map((item) => (
                                <li key={item.name}>
                                    <a href="#" className="hover:text-blue-500">{item.name}</a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                
                </div>
            </div>
            <div className="w-screen flex space-x-2 mt0 mb0 -ml-10 pt0 pb0 justify-end vtex-flex-layout-0-x-flexRowContent vtex-flex-layout-0-x-flexRowContent--footerSocialNetworks items-stretch w-100">
                    {socialMedia.map((network) => (
                        <div key={network.name} className="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth flex">
                            <a target="_blank" href={network.href} title="" rel="noopener" className="vtex-store-components-3-x-imageElementLink vtex-store-components-3-x-imageElementLink--footerSocialNetwork">
                                <img
                                    title={network.name}
                                    alt={network.name}
                                    className="vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--footerSocialNetwork vtex-render-runtime-8-x-lazyload ls-is-cached lazyloaded"
                                    loading="lazy"
                                    src={network.icon}
                                />
                            </a>
                        </div>
                    ))};
            </div>
        </footer>
    );
}

