import React from 'react'
import { getData } from '../lib/data'

const Type = async ({ title, url }) => {
    const data = await getData(url)
    return (
        <>
            <div className='container'>
                <p>{`${title}: ${data.pokemon_species_details.length}`}</p>
            </div>
        </>
    )
}

export default Type