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


// staggeredFadeIn
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}
const item = {
    hidden: { opacity: 0, y: -25 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.4,
        }
    }
}
export const staggerFadeIn = { container, item }