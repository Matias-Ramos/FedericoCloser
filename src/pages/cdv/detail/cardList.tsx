// Types
import { ReactNode } from 'react';
// Icons
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export interface Card_T {
    icon: ReactNode,
    hightlight: string,
    description: string,
}

export const cardList: Card_T[] = [
    {
        icon: <FaMoneyBillTrendUp />,
        hightlight: "Multiplica tus ventas ",
        description: "sin invertir más en publicidad, sin bajar precios y aumentándolos."
    },
    {
        icon: <FaCheckCircle />,
        hightlight: "Fideliza un equipo, ",
        description: "disminuye la rotación y ahorra tiempo ganando mas dinero."
    },
    {
        icon: <FaShieldAlt />,
        hightlight: "Implementa un proceso anticrisis ",
        description: "(validado en el mercado internacional) y consérvalo de por vida."
    },
]
