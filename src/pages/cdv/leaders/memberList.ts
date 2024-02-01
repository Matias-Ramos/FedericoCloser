import { Member_T } from "../../../components/socMediaMapper/MembersType";

const cesar: Member_T = {
    name: "Cesar Jorquera",
    picture: "/leaders/cesar.jpg",
    exp: "César, con un historial comprobado, ascendió a liderar gracias a una historia de superar consistentemente las metas de ventas. Su enfoque estratégico y centrado en el cliente lo convierten en una fuerza orientadora en el ámbito de las ventas.",
    socialMedia: {
        fb: "https://www.facebook.com",
        tiktok: "https://www.tiktok.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com"
    }
};

const tino: Member_T = {
    name: "Tino Mossu",
    picture: "/leaders/tino.jpg",
    exp: "El camino de Teo hacia el liderazgo está marcado por años perfeccionando técnicas de venta. Sus agudas percepciones sobre las tendencias del mercado y las necesidades del cliente no solo han impulsado su éxito sino que lo han convertido en un mentor invaluable.",
    socialMedia: {
        fb: "https://www.facebook.com/",
        tiktok: "https://www.tiktok.com",
    }
};

const teo: Member_T = {
    name: "Teo Tinivelli",
    picture: "/leaders/teo.jpg",
    exp: "El liderazgo de Tino en ventas tiene sus raíces en su amplia experiencia en relaciones con clientes. Su capacidad para construir conexiones duraderas, junto con un agudo sentido de los negocios, lo distingue como un pionero en el campo.",
    socialMedia: {
        tiktok: "https://www.tiktok.com",
        instagram: "https://www.instagram.com"
    }
};

const members: Member_T[] = [cesar, tino, teo];

export default members;