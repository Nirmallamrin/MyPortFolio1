import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "+916282637227";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-1.5 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all transform hover:scale-110 active:scale-90 group"
        >
            <FaWhatsapp size={40} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
                Chat with me
            </span>
        </a>
    );
};

export default WhatsAppButton;
