type CtaProps = {
    text: string;
    handleClick: () => void;
};

const CtaBtn = ({ text, handleClick }: CtaProps) => (
    <div className="ctaBtnContainer">
        <button className="ctaBtn w-100" onClick={handleClick}>
            <span>{text}</span>
        </button>
    </div>
)
export default CtaBtn