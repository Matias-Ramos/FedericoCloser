export const ariaLabel = "Navegador entre secciones Campamento de Ventas y Federico Santos";

export const getButtonStyle = (pathname: string, targetPaths: string[]) => {
    if (targetPaths.includes(pathname)) {
        return {
            backgroundColor: '#dee2e6',
            color: "#4254bc",
            textDecoration: "underline",
            height: "100%",
            '&:hover': {
                backgroundColor: '#dee2e6',
                textDecoration: "underline",
            },
        };
    } else {
        return {
            backgroundColor: 'white',
            color: "#4254bc",
            textDecoration: "",
            height: "100%",
            '&:hover': {
                backgroundColor: '#dee2e6',
                textDecoration: "",
            },
        };
    }
};