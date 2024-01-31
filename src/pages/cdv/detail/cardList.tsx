// Types
import { ReactNode } from 'react';
// Icons
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export interface Card_T {
    icon: ReactNode,
    title: string,
    description: string,
}

export const cardList: Card_T[] = [
    {
        icon: <FaMoneyBillTrendUp />,
        title:"Beneficio 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos nesciunt! Nobis, necessitatibus maxime."
    },
    {
        icon: <FaCheckCircle />,
        title:"Beneficio 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos nesciunt! Nobis, necessitatibus maxime."
    },
    {
        icon: <FaShieldAlt />,
        title:"Beneficio 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos nesciunt! Nobis, necessitatibus maxime."
    },
]
