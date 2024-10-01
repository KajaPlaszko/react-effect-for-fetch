import UserListItem from "./UsersListItem";

export default function UserList({users}) {

    return(
        <ul className="users-list">
            {users.map((user, index) => (
                <UserListItem key={index} user={user} />
            ))}
        </ul>
    );
}