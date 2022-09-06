import React, { useState, useEffect } from 'react';
import './Buscar.css';
import { Usuarios } from '../usuarios';
import Tabla from '../components/Tabla';
import axios from 'axios';

const Buscar = () => {
	const [query, setQuery] = useState('');
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		const recupera = async () => {
			if (query.length === 0) {
				const res = await axios.get(`http://localhost:5000/api/cursos`);
				setDatos(res.data.cursos);
			} else {
				const res = await axios.get(
					`http://localhost:5000/api/cursos/buscar/${query}`
				);
				setDatos(res.data.cursos);
			}
		};
		recupera();
	}, [query]);

	const gestorBusca = (e) => {
		setQuery(e.target.value);
	};

	const gestorTecla = (e) => {
		const tecla = e.target.value;
		console.log(datos);
	};
	return (
		<div className='searchSeccion'>
			<div className='search'>
				<input
					type='text'
					name='busca'
					placeholder='Buscar...'
					onChange={gestorBusca}
					onKeyDown={gestorTecla}
				/>
				<Tabla datos={datos} />
			</div>
		</div>
	);
};

export default Buscar;
