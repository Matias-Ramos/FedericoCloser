export const fadeIn = (direction: string) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'tween',
                duration: 1.5,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const btnAnimation = {
    initial : {
        scale: 1 
    },

    whileInView: { 
        scale: [1, 1.03, 1, 1.03, 1] 
    },

    transition: {
        delay: 0.4,
        duration: 0.75,
        ease: "easeInOut" 
    }
}