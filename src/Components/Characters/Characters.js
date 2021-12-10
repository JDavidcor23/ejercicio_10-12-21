import React from 'react';
import { endpoint } from '../../endpoint/endpoint';
import './Characters.css'

const Characters = () => {
    const [characters, setCharacter] = React.useState([])
    const [filterCharaters, setFilterCharaters] = React.useState("")
    const handleSearch =(event)=>{
        setFilterCharaters(event.target.value)
    }
    React.useEffect(() => {
        fetch(endpoint)
            .then(resp => resp.json())
            .then(data => setCharacter(data.results))
        }, [])
    const CharactersInput = characters.filter(character =>{
        return character.name.toLowerCase().includes(filterCharaters.toLocaleLowerCase())
    })
        return (
        <div className='body-characters'>
            <img src='https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png' alt='star wars logo' className='logo-star'/>
            <nav className='nav'>
                <input
                type="search"
                name="data"
                value={filterCharaters}
                onChange={handleSearch}
                placeholder='Busca tu personaje'
                />
            </nav>
            <div className='container-characters'>
                {
                    CharactersInput.map(character =>(
                        <div key={character.id} className='characters'>
                            <img src={character.image} alt={character.name}/>
                            <p>{character.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Characters;