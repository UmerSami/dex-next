import Link from 'next/link'
import {useState} from 'react'
import {data} from '../../utils/allPoke'
import { GetAssetUrl } from '../../utils/helper'

export default function Home() {
    const [pokemons, setPokemons] = useState(data);
   
    const search = (term) => setPokemons(data.filter(d => d.name.toLowerCase().includes(term.toLowerCase())))
    return (
            <main className='px-4 pt-12 pb-4' >
                <div className='flex justify-center items-center'>
                    <div className='w-12 h-12'>
                        <img src="/pokedex.png" alt="pokeball" />
                    </div>
                    <h1 className='text-4xl md:text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-2 font-pokemon-solid'>Pokédex</h1>
                    <h2 className='text-4xl md:text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-2'>{pokemons.length}</h2>
                </div>
                <div className='mt-12 block sm:flex sm:justify-end sm:items-center sm:mr-12'>
                    <div className='flex justify-between items-center rounded pl-1 pr-3 mx-4 py-1 border-b border-gray-600'>
                        <input type="text" onChange={(e)=>search(e.target.value)} className='bg-transparent outline-none' />
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(0,0,0,0.92)"/></svg>
                        </div>
                    </div>
                </div>
              
                <div className="flex justify-center items-center flex-wrap w-full mt-8">
                    {pokemons.length === 0 ? 
                        <h3 className='text-gray-800 gn'>Not found</h3>
                        :
                        pokemons.map(pokemon => {
                        const poke_id = pokemon.url.split('/')[6]
                        const padded_poke_id = poke_id.padStart(3, '0')
                        return (
                            <Link href={`/pokemon/${poke_id}`} key={poke_id}>
                                <div className='w-24 md:w-28 bg-white p-3 m-1 sm:m-2 rounded text-center cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300'>
                                    <div className='w-20 h-20 md:w-24 md:h-24 flex justify-center items-center'>
                                        <img
                                            src={GetAssetUrl('thumbnails-compressed',`${padded_poke_id}.png`)}
                                            alt="pokemon-thumbnail"
                                            className='w-full h-full'
                                            loading='lazy'
                                        />
                                    </div>
                                    <h3 className='capitalize mt-2 text-gray-600 text-center text-xs w-full sm:text-sm'>{pokemon.name}</h3>
                                </div>
                            </Link>
                        )}
                        )
                    }
                </div>
            </main>   
    )
}

