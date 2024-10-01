import { useState, useEffect } from "react";
import UserList from "./components/UsersList";

function UsersSection() {
	const url = "https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact";
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			const jsonData = await response.json();
			setUsers(jsonData);
		};
		fetchData();
	}, []);

	return (
		<section>
			<h2>Users Section</h2>
			<div className="scroll-container">
				<UserList users={users} />
			</div>
		</section>
	);
}

export default UsersSection;
