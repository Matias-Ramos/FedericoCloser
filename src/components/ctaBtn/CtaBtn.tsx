type CtaProps = {
    text: string;
    handleClick: () => void;
};

const CtaBtn = ({ text, handleClick }: CtaProps) => (
    <button className="ctaBtn" onClick={handleClick}>
        <span>{text}</span>
    </button>
)
export default CtaBtn