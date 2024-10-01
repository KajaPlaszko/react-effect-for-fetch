export default function FavouriteSlipsList({favorites}) {
    
    return(
        <>
    <h3>Favourite Advice Slips</h3>
    <ul>
      {favorites.map((slip, index) => (
        <li key={index}>{slip}</li>
      ))}
    </ul>
    </>
    );
}