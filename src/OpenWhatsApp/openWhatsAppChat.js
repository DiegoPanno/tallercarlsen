export const phoneNumber = "+5492235898416";
export const message = "¡Hola! Necesito más info por un servicio para mi vehículo";

export const openWhatsAppChat = () => {
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
