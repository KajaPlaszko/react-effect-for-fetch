export default function PublicationHistoryList({ history }) {
    return (
        <>
        <h4>Publication History:</h4>
             <ul>
                {history.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
             </ul>
        </>
    );
}
