import { Route, Routes } from "react-router-dom";
import { Error404 } from "./screen/Error404";
import { Home } from './screen/Home'
import { Login } from "./screen/Login";
import { Posts } from "./screen/Posts";
import { Tasks } from "./screen/Tasks";

const App = (props: any) => {

	return (
		<Routes>
			<Route path="/home" element={(<Home />)} />
			<Route path="/tasks/:id" element={(<Tasks />)} />
			<Route path="/posts/:id" element={(<Posts />)} />
			<Route path="/" element={<Login />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default App;