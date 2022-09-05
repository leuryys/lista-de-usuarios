import { useState, useEffect } from "react";
import { Post, } from "../@types/types";
import { 
	Alert, 
	Avatar, 
	Box, 
	Card, 
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
import { useParams, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Posts = (props: any) => {
	const params = useParams()
	const [searchParams, setSearchParams] = useSearchParams()

	const id = params.id
	const name = searchParams.get('name')

	const [posts, setPosts] = useState<Post[]>([]);

	const queryData = () => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
			.then((response) => response.json())
			.then((json) => {
				setPosts(json);
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
					height: '100%',
					display: "flex",
					justifyContent: 'center',
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				
				<Box>
					<Typography variant="h3" sx={{ marginBottom: '20px', textAlign: 'center' }}>{`Posts de ${name}`}</Typography>
					<Box className="card">						
						<Box>
							<Link href='/home' sx={{ textAlign: 'center', display: 'block', marginBottom: '30px' }}>Voltar</Link>

							<Stack sx={{ maxWidth: '800px', gap: '15px' }}>
								{posts.map(post => (
									<Card
										sx={{
											padding: '15px'
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
											<Typography sx={{ fontWeight: 'bold', marginLeft: '15px' }}>{post.title}</Typography>
										</Box>
										<Box>
											<Typography sx={{ marginLeft: '15px', marginTop: '15px' }}>{post.body}</Typography>
										</Box>
									</Card>
								))}
							</Stack>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};