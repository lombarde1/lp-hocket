import React, { useState, useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { WifiHigh, Battery, Signal, Camera, Flashlight } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const NotificationItem = ({ message, isNew }) => (
  <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-sm mb-3 flex items-center animate-in slide-in-from-bottom duration-300">
    <div className="bg-emerald-500 p-1.5 rounded-lg mr-3">
      <FaDollarSign className="text-white text-sm" />
    </div>
    <div>
      <div className="font-medium text-[13px] text-gray-900">Nova Venda</div>
      <div className="text-[12px] text-gray-600">{message}</div>
    </div>
  </div>
);

const PhoneModal = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState([]);

  // Atualiza o tempo a cada segundo
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Gera notificações mais rapidamente (a cada 1.5 segundos)
  useEffect(() => {
    const addNotification = () => {
      const newNotification = {
        id: Date.now(),
        message: `R$ ${(Math.random() * 1000).toFixed(2)}`,
        isNew: true
      };
      setNotifications(prev => [newNotification, ...prev.slice(0, 3)]);
    };
    const timer = setInterval(addNotification, 1500); // Reduzido para 1.5 segundos
    return () => clearInterval(timer);
  }, []);

  // Formata a data atual
  const formattedDate = format(currentTime, "EEEE',' d 'de' MMMM", { locale: ptBR });
  const formattedTime = format(currentTime, "HH:mm");

  return (
    <div className="relative w-full h-full flex justify-end items-center">
      <div className="relative w-[240px] h-[500px]">
        <div className="absolute inset-0 bg-[#1A1A1A] rounded-[45px] shadow-xl">
          <div className="absolute inset-[2px] bg-black rounded-[43px] overflow-hidden">
            {/* Status Bar */} 
            <div className="absolute top-0 w-full px-8 pt-4.0 flex justify-between items-center z-20">
              <div className="flex items-center gap-1">
                <Signal className="w-4 h-4 text-white" strokeWidth={3} />
                <span className="text-white text-xs font-medium">4G</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-[95px] h-[25px] bg-black rounded-b-3xl">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[4px] bg-black rounded-full" />
              </div>
              <div className="flex items-center gap-1.5">
                <WifiHigh className="w-4 h-4 text-white" />
                <Battery className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Wallpaper */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF1B6B] via-[#FF930F] to-[#45E3FF]" />
            </div>

            {/* Content */}
            <div className="relative h-full pt-14 flex flex-col">
              {/* Data e Hora */}
              <div className="px-6">
                <div className="text-center text-white/90">
                  <div className="text-xl font-light capitalize">
                    {formattedDate}
                  </div>
                </div>
                <div className="text-center text-white mt-1">
                  <div className="text-[72px] font-extralight tracking-tight leading-none">
                    {formattedTime}
                  </div>
                </div>
              </div>

              {/* Notificações */}
              <div className="mt-16 px-4">
                {notifications.map((notif, index) => (
                  <NotificationItem 
                    key={notif.id} 
                    {...notif}
                    isNew={index === 0}
                  />
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-auto">
                <div className="text-center text-white/90 text-sm mb-4">
                  Passe o dedo para cima
                  <br />
                  para desbloquear
                </div>

                <div className="flex justify-between px-8 mb-8">
                  <div className="w-12 h-12 bg-[#000000]/25 backdrop-blur rounded-full flex items-center justify-center">
                    <Flashlight className="w-6 h-6 text-white/90" />
                  </div>
                  <div className="w-12 h-12 bg-[#000000]/25 backdrop-blur rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white/90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;