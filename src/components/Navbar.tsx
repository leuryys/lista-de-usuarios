import { Box, Typography, Link, Button } from "@mui/material"
import { FaUser } from 'react-icons/fa'
import { useAuth } from "../hooks/useAuth"

export const Navbar = (props: any) => {
	const { user, logout } = useAuth()

	return (
		<Box
			sx={{
				width: '100vw',
				backgroundColor: '#0b986a',
				height: '95px',
				boxShadow: '5px 5px 5px 1px rgba(0, 0, 0, 0.2)',
				marginBottom: '100px'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'end',
					height: '60%'
				}}
			>
				<Link 
					href='/home' 
					sx={{ 
						textDecoration: 'none', 
						color: 'black', 
						'&:hover': { 
							color: 'black' 
						},
						display: 'flex',
						justifyContent: 'center',
						alignItems: "center",
						gap: '10px'
					}}
				>
					<Box>
						<Typography sx={{ fontWeight: 'bold', color: 'white' }}>LISTA DE USUÁRIOS</Typography>
					</Box>
				</Link>
			</Box>
			{user && (
				<Box 
					sx={{
						marginRight: '10px',
					}}
				>
					<Typography textAlign='center' sx={{ color: 'white' }}>
							<Button 
								variant='text'
								sx={{
									marginLeft: '5px',
									marginBottom: '3px',
									color: 'white'
								}}
								onClick={logout}
							>
								Deslogar
							</Button>
						de {user?.name}
					</Typography>
				</Box>
			)}
		</Box>
	)
}