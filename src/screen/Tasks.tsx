import { useState, useEffect } from "react";
import { Task, User } from "../@types/types";
import { 
	Alert, 
	Box, 
	Checkbox, 
	CircularProgress, 
	Link, 
	MenuItem, 
	Pagination, 
	Paper, 
	Stack, 
	TextField, 
	Typography 
} from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md'
import { useParams, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";


export const Tasks = (props: any) => {
	const params = useParams()
	const [searchParams, setSearchParams] = useSearchParams()

	const id = params.id
	const name = searchParams.get('name')

	const [tasks, setTasks] = useState<Task[]>([]);

	const queryData = () => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
			.then((response) => response.json())
			.then((json) => {
				setTasks(json);
			})
	}

	useEffect(() => {
		queryData()
	}, []);

	return (
		<Box
			sx={{
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: '#22a374'
			}}
		>
			<Navbar />

			<Box
				sx={{
					width: '100vw',
					display: "flex",
					height: '100%',
					justifyContent: 'center',
					alignItems: "center",
					flexDirection: "column",
				}}
			>	
				<Box>
					<Typography variant="h3" sx={{ marginBottom: '20px', textAlign: 'center' }}>{`Tarefas de ${name}`}</Typography>
					<Box className="card">						
						<Box>
							<Link href='/home' sx={{ textAlign: 'center', display: 'block', marginBottom: '30px' }}>Voltar</Link>

							<Stack sx={{ width: '100%' }}>
								{tasks.map(task => (
									<Paper sx={{
										display: 'flex',
										justifyItems: 'center',
										alignItems: 'center',
										marginTop: '5px'
									}}>
										<Checkbox defaultChecked={task.completed} />
										<Typography>{task.title}</Typography>
									</Paper>
								))}
							</Stack>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};