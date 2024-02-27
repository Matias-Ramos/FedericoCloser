import { ReactNode } from "react"

type Product = {
    name: string,
    description: ReactNode,
    image: string
}

/********************* */
/********************* */

const lineBreak = `${<br/>}${<br/>}`;
const descriptionCdv = `
Entendimos que el vendedor promedio no suele tener estudios avanzados, por eso procuramos hacer algo tan simple que funcione con un jovencito de secundaria (Como nuestro director de ventas al comenzar).
${lineBreak}
Las estructuras sofisticadas, los textos complejos, las fórmulas matemáticas...
Los vendedores NO LAS ENTIENDEN, Y POR ESO NO LAS RECUERDAN, NI MUCHO MENOS APLICAN.
${lineBreak}
Por eso, nuestro producto es para cualquier vendedor, no es requisito ser "Director ejecutivo del área de Finanzas Internacionales con un IQ de 182" de la Harvard University, no.
${lineBreak}
Enseñamos a vender en un idioma que se entienda, entretenga, emocione, se recuerde, que motive, y sobre todo que lo SE APLIQUE. 
${lineBreak}
Ya no dejes tus facturación librada al azar, apaga las velas a tus santos y deja que nosotros nos hagamos cargo de la situación. Llegó la hora de que todo potencial cliente deje de ser potencial y cierre el trato de una buena vez. 
`;
const campamento: Product = {
    name: "Rápido, simple, fácil.",
    description: descriptionCdv,
    image: "/products/logo.png"
}


/********************* */
/********************* */

const descriptionRecruitmentP = `
${<i>"Formar parte de nuestra comunidad de expertos te dará laposibilidad de independizarte de tus vendedores y poder generarcompetitividad gracias a nuestro sistema compensatorio queincentiva la rotación constante y promueve la meritocracia delequipo al 100%. Olvídate de sueldos fijos, indemnizaciones ovacaciones pagas. Los vendedores de la nueva era comprenden quelas posibilidades de crecimiento son exclusivamente suresponsabilidad."</i>}
`;
const recruitmentPack: Product = {
    name: "Recruitment Pack",
    description: descriptionRecruitmentP,
    image: "/products/recruitmentPack.jpeg"
}


/********************* */
/********************* */

const mentoriaCesar: Product = {
    name: "Mentoría con Cesar",
    description: `asasdasd`,
    image: "/products/mentoria.png"
}


const dragonChat: Product = {
    name: "DragonChat",
    description: "Software que te permite incrementar las ventas de tu negocio mediante automatizaciones de Whatsapp. Poder escribir a +100 personas al mismo tiempo, esto es lo que te permitirá el DragonChat.",
    image: "/products/dragonChat.png"
}
const analytics: Product = {
    name: "Analytics",
    description: "Accede a 20 llamadas reales de venta analizadas y conoce el paso a paso que usan los closers profesionales para llevar a un prospecto de 'Solo quiero información' a 'Dónde pago'.",
    image: "/products/analytics.png"
}

const productsList: Product[] = [campamento, mentoriaCesar, recruitmentPack, dragonChat, analytics]
export default productsList;