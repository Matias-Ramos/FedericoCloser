import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const cardCapStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)',
    cursor: 'pointer'
};

const CustomToggle = ({ children, eventKey }: {children: React.ReactNode, eventKey: number}) => {
    
    const decoratedOnClick = useAccordionButton(eventKey.toString());
    
    return (
        <div
            onClick={decoratedOnClick}
            style={cardCapStyles}
        >
            {children}
        </div>
    );
}
export default CustomToggle;