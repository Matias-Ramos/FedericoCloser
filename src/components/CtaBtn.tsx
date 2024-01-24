import Button from '@mui/material/Button';

type CtaProps = {
    text: string;
    variant: "contained" | "outlined";
    handleClick: () => void;
};

const CtaBtn = ({ text, variant, handleClick }: CtaProps) => (
    <Button variant={variant} onClick={handleClick}>
        {text}
    </Button>
)

export default CtaBtn