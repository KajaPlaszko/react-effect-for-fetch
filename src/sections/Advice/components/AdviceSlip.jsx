export default function AdviceSlip({advice, fetchAdvice, saveFavourites}) {
    return(
    <>
        <h3>Some Advice</h3>
            <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveFavourites}>Save to Favourties</button>
    </>
    );
}