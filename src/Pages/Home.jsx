import React from 'react';
import UserResults from '../Components/Users/UserResults';
import UserSearch from '../Components/Users/UserSearch';
function Home() {
	return (
		<React.Fragment>
			<UserSearch />
			<UserResults />
		</React.Fragment>
	);
}

export default Home;
