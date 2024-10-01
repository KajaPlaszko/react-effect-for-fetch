import ArtListItem from "./ArtListItem"

export default function ArtList({arts}) {

    return(
        <ul className="arts-list">
            {arts.map((art, index) => (
                <ArtListItem key={index} art={art} />
            ))}
        </ul>
    );
}