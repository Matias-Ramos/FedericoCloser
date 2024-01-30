const h1Style = { fontSize: "1.1rem" };

interface Props {
    url: string, targetPaths: string[], text: string
}

const InnerTag = ({ url, targetPaths, text }: Props) => (
    <>
        {
            targetPaths.includes(url) ?
                <h1 style={h1Style}> {text} </h1>
                :
                <span style={h1Style}> {text}</span>
        }
    </>
)
export default InnerTag