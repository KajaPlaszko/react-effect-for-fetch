import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem({art}) {
    const {title, artist, 
        imageURL, publicationHistory} = art;
        const fullImageURL = `https://boolean-uk-api-server.fly.dev${imageURL}`;

    return(
        <>
        <div className="frame">
        <img
          src={fullImageURL}
        />
       
      </div>
      <h3>{title}</h3>
                <p>Artist: {artist}</p>
        <PublicationHistoryList history={publicationHistory}/>
    </>
    );
}