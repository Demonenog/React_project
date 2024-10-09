import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { data } from './Data';
import './Search.css';

const Search = () => {
	const [search, setSearch] = useState('');
	// console.log(search);

	return (
		<div className='app'>
			<Container>
				<h1 className='text-center mt-4'>Contact Keeper</h1>
				<Form>
					<InputGroup className='mt-3'> </InputGroup>
					<Form.Control
						placeholder='Search contact'
						onChange={e => setSearch(e.target.value)}
					/>
				</Form>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>phone</th>
						</tr>
					</thead>
					<tbody>
						{data
							.filter(item => {
								return search.toLowerCase() === ''
									? item
									: item.first_name.toLowerCase().includes(search);
							})
							.map(item => (
								<tr key={item.id}>
									<td>{item.first_name}</td>
									<td>{item.last_name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default Search;
