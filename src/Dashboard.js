
import React from 'react';
import Pet from './Components/Pet';

export default function Dashboard(props) {
    return (
        <div>
            <Pet petToAdopt={props.catToAdopt} onAdoptPet={() => console.log('Cat Adopted')}></Pet> 
            <Pet petToAdopt={props.dogToAdopt} onAdoptPet={() => console.log('Dog Adopted')}></Pet>
        </div>
            
    )
}