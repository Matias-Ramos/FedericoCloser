export const fadeIn = (direction: string) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'tween',
                duration: 1,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.9,
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
            staggerChildren: 0.5,
        }
    }
}

const item = (direction: string, type: string) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 25 : direction === 'down' ? -25 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: type,
                duration: 0.3,
                damping: 7, // spring only
            }
        }
    }
}
export const staggerFadeIn = { container, item }

const pulse = {
    hidden: {
         scale: 1 
    },
    visible: {
        scale: [1, 1.02, 1, 1.02, 1] ,
        transition: {
            delay: 1.2, duration: 0.90, ease: "easeInOut" 
        }
    },
}
export { pulse }