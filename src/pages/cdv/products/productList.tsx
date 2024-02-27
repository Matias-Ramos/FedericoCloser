
const niceAndEasyTitle = "Rápido, simple, fácil."
const niceAndEasyImg = "/products/analytics.png";
const NiceAndEasyText = () => (
    <div>
        <span className="mb-3 d-block">Entendimos que el vendedor promedio no suele tener estudios avanzados, por eso procuramos hacer algo tan simple que funcione con un jovencito de secundaria (Como nuestro director de ventas al comenzar).</span>
        <span className="mb-3 d-block">Las estructuras sofisticadas, los textos complejos, las fórmulas matemáticas...Los vendedores NO LAS ENTIENDEN, Y POR ESO NO LAS RECUERDAN, NI MUCHO MENOS APLICAN.</span>
        <span className="mb-3 d-block">Por eso, nuestro producto es para cualquier vendedor, no es requisito ser "Director ejecutivo del área de Finanzas Internacionales con un IQ de 182" de la Harvard University, no.</span>
        <span className="mb-3 d-block">Enseñamos a vender en un idioma que se entienda, entretenga, emocione, se recuerde, que motive, y sobre todo que lo SE APLIQUE. </span>
        <span>Ya no dejes tus facturación librada al azar, apaga las velas a tus santos y deja que nosotros nos hagamos cargo de la situación. Llegó la hora de que todo potencial cliente deje de ser potencial y cierre el trato de una buena vez. </span>
    </div>
)

const niceAndEasy = {
    title: niceAndEasyTitle,
    img: niceAndEasyImg,
    description: NiceAndEasyText,
}

/********************* */
/********************* */



const hiringMTitle = "Apertura a nuevos modelos de contratación."
const hiringImg = "/products/people.svg"; // free comercial license: https://www.reshot.com/free-vector-illustrations/item/business-people-with-charts-Q4APUFRTWE/
const HiringMText = () => (
    <span className="mb-3">
        <i>Formar parte de nuestra comunidad de expertos te dará la posibilidad de "independizarte" de tus vendedores y poder generar competitividad gracias a nuestro sistema compensatorio que incentiva la rotación constante y promueve la meritocracia del equipo al 100%. Olvídate de sueldos fijos, indemnizaciones o vacaciones pagas. Los vendedores de la nueva era comprenden que las posibilidades de crecimiento son exclusivamente su responsabilidad.</i>
    </span>
)

const hiringModels = {
    title: hiringMTitle,
    img: hiringImg,
    description: HiringMText,
}

/********************* */
/********************* */

const softwareTitle = "Herramientas de masividad"
const softwareImg = "/products/dragonChat.png";
const SoftwareText = () => (
    <>
        <span className="mb-3"><i>El dinero importante está en la masividad, por eso desarrollamos un software que respalda nuestro sistema de contacto masivo anti-bloqueos. Para que tus bases de datos sean exprimidas al 100%.</i>
        </span>
        <span><i> Optimiza tus seguimientos, aumenta el ciclo de vida de tus clientes y mantén el contacto permanente con toda tu base de datos (en el tiempo que te lleva escribir un solo mensaje).</i>
        </span>
    </>
)

const software = {
    title: softwareTitle,
    img: softwareImg,
    description: SoftwareText,
}

/********************* */
/********************* */

const products = [ niceAndEasy, hiringModels, software ]
export default products;
