import React, { useRef, useEffect } from "react";
import interact from "interactjs";
import img from "./img/garantia.png";
import "./StickerRedondo.css";

const StickerRedondo = () => {
  
  const angleScale = useRef({
    angle: 0,
    scale: 1,
  });

  const gestureAreaRef = useRef(null);
  const scaleElementRef = useRef(null);
  let resetTimeout;

  const dragMoveListener = (event) => {
    const { target } = event;

    // Obtén la posición actual del elemento
    let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // Limitar el movimiento verticalmente
    const minY = 0; // Establece el límite inferior
    const maxY = 600; // Establece el límite superior

    // Aplica los límites verticales
    y = Math.max(minY, Math.min(y, maxY));

    // Actualiza la posición del elemento
    target.style.transform = `translate(${x}px, ${y}px)`;

    // Guarda la posición actual en los atributos del elemento para su referencia en el próximo evento
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  };

  const reset = () => {
    scaleElementRef.current.style.transform = "scale(1)";
    angleScale.current.angle = 0;
    angleScale.current.scale = 1;
  };

  useEffect(() => {
    const gestureArea = gestureAreaRef.current;
    const scaleElement = scaleElementRef.current;

    const interactInstance = interact(gestureArea);

    interactInstance
      .gesturable({
        listeners: {
          start(event) {
            angleScale.current.angle -= event.angle;

            clearTimeout(resetTimeout);
            scaleElement.classList.remove("reset");
          },
          move(event) {
            const currentAngle = event.angle + angleScale.current.angle;
            const currentScale = event.scale * angleScale.current.scale;

            scaleElement.style.transform =
              "rotate(" + currentAngle + "deg)" + "scale(" + currentScale + ")";

            // Usa la función dragMoveListener según sea necesario
            dragMoveListener(event);
          },
          end(event) {
            angleScale.current.angle += event.angle;
            angleScale.current.scale *= event.scale;

            resetTimeout = setTimeout(reset, 1000);
            scaleElement.classList.add("reset");
          },
        },
      })
      .draggable({
        listeners: { move: dragMoveListener },
      });

    return () => {
      interactInstance.unset(); // Limpieza de la instancia de interact al desmontar el componente
    };
  }, []); // Asegúrate de que las dependencias estén correctas

  return (
    <div ref={gestureAreaRef} id="gesture-area">
      <img
        ref={scaleElementRef}
        src={img}
        alt="sample image"
        id="scale-element"
      />
    </div>
  );
};

export default StickerRedondo;

