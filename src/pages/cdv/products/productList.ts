type Product = {
    name: string,
    description: string,
    image: string
}
const campamento: Product = {
    name: "Campamento de Ventas",
    description: "Potencia a tu equipo las 24 horas del día, los 7 días de la semana con acceso ilimitado a los cursos disponibles BAJO DEMANDA para ayudar a encontrar nuevos negocios en un entorno competitivo.",
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
    name: "Dragon Chat",
    description: "DragonChat revoluciona las ventas al integrar inteligencia artificial para analizar patrones de conversación, proporcionando a los equipos comerciales información valiosa para cerrar tratos más efectivos. Con funciones intuitivas y analíticas avanzadas, DragonChat impulsa el rendimiento y la eficiencia en el mundo de las ventas.",
    image: "/products/dragonChat.png"
}
const analytics: Product = {
    name: "Analytics",
    description: "Analytics transforma los datos de ventas en perspicaces visualizaciones en tiempo real, brindando a las empresas una visión clara de su rendimiento. Desde el seguimiento de leads hasta la optimización de estrategias, Analytics es la herramienta esencial para impulsar el éxito en el competitivo mundo de las ventas.",
    image: "/products/analytics.png"
}

const productsList: Product[] = [campamento, mentoriaCesar, recruitmentPack, dragonChat, analytics]
export default productsList;