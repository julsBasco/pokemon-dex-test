import React from 'react'
import { getData } from '../lib/data'


const List = async ({ title, subtitle, url }) => {
    const data = await getData(url)

    return (
        <div className='container'>
            <h1>{title ? title : null}</h1>
            <h3>{subtitle}</h3>
            <ul>{data.results.map((color, idx) => (<li key={`color_${idx}`}> <div className='color-box'></div> {color.name}</li>))}</ul>
        </div>
    )
}

export default List