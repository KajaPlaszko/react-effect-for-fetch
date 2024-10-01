export default function UserListItem({user}) {
    const {firstname, lastname, 
        favouriteColour, email} = user;

    return(
        <>
        <li style={{background: 
favouriteColour}}>
        <img
          src={`https://www.gravatar.com/avatar/${email}?s=120&d=identicon`}
          alt={firstname}
        />
        <h3>Name: {firstname} {lastname}</h3>
        <p>Email: {email}</p>
      </li>
    </>
    );
}