export default function UserListItem({user}) {
    const {firstName, lastName, 
        favouriteColour, email} = user;

    return(
        <>
        <li style={{background: 
favouriteColour}}>
        <img
          src={`https://www.gravatar.com/avatar/${email}?s=120&d=identicon`}
          alt={firstName}
        />
        <h3>Name: {firstName} {lastName}</h3>
        <p>Email: {email}</p>
      </li>
    </>
    );
}