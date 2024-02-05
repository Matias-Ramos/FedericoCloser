type Product = {
    name: string,
    description: string,
    image: string
}
const campamento: Product = {
    name: "Campamento de Ventas",
    description: "Duplica tu cierre de ventas y facturación en 21 días (o menos) con la metodología de 5 pasos.",
    image: "/products/logo.png"
}
const mentoriaCesar: Product = {
    name: "Mentoría con Cesar",
    description: "Desata tu potencial en ventas con las mentorías personalizadas de un experto. Aprende estrategias probadas, perfecciona tus habilidades y acelera tu éxito en el mundo de las ventas.",
    image: "/products/mentoria.png"
}
const recruitmentPack: Product = {
    name: "Recruitment Pack",
    description: "Impulsa el crecimiento de tu empresa con nuestro 'Recruitment Pack'. Ya sea que necesites un equipo de ventas experto o busques transformar a tu personal en profesionales altamente capacitados, ofrecemos estrategias personalizadas para destacar en tu industria. ¡Potencia tus ventas de manera única y efectiva con nosotros!",
    image: "/products/recruitmentPack.jpeg"
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