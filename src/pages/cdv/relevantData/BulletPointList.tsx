import { ReactNode } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";

export type BulletPoint_T = {
    icon: ReactNode,
    title?: string,
    description: string,
}

export const PossitiveBulletPoints = [
    {
        icon: 
            <IconContext.Provider value={{ color: "green" }}>
                <FaCheckSquare />
            </IconContext.Provider>,
        title: "Teoría simple: ",
        description: "en menos de 3 horas comprendes el proceso de ventas de principio a fin, tienes una estructura lista para reaplicar en cualquier interacción con un prospecto.",
    },
    {
        icon: 
        <IconContext.Provider value={{ color: "green" }}>
            <FaCheckSquare />
        </IconContext.Provider>,
        title: "Práctica furiosa: ",
        description: "nuestros instructores se ocupan de acompañar, supervisar, y calificar el proceso del vendedor desde su inicio hasta su exitoso desarrollo.",
    },
    {
        icon: 
        <IconContext.Provider value={{ color: "green" }}>
            <FaCheckSquare />
        </IconContext.Provider>,
        title: "Mentalidad constante: ",
        description: "sembramos ambición y gatillos mentales que mantienen a los alumnos motivados aún después de finalizar el programa, transformamos su mentalidad.",
    },
]
export const NegativeBulletPoints = [
    {
        icon: 
        <IconContext.Provider value={{ color: "red" }}>
            <IoMdClose />
        </IconContext.Provider>,
        description: 'No vas a necesitar libros de refierzo, imprimir cientos de hojas, ni salir a buscar "ese dato que falta" para completar la rueda y hacerla girar.',
    },
    {
        icon: 
        <IconContext.Provider value={{ color: "red" }}>
            <IoMdClose />
        </IconContext.Provider>,
        description: "No contiene información cruzada, inconclusa, o contradictoria. Nuestros instructores han sido formados integralmente bajo nuestra filosofía de ventas desde sus inicios.",
    },
    
]
