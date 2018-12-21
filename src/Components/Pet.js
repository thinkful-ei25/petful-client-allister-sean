import React from 'react';
import '../styles/pet.css'; 

export default function Pet(props) {
    if (!props.petToAdopt){ 
        return <p>Loading...</p>
    }
    return (
        <section className="pet">
            <header><h1 className="petName">{props.petToAdopt.name}</h1> 
                <img 
                    className="petImage" 
                    src={props.petToAdopt.imageURL} 
                    alt={props.petToAdopt.imageDescription}>
                </img>
            </header>
            <main>
                <dl className="petDescr">
                    <dt>
                        sex: 
                    </dt>
                    <dd>
                    {props.petToAdopt.sex}
                    </dd>
                    <dt>
                        age: 
                    </dt>
                    <dd>
                    {props.petToAdopt.age}
                    </dd>
                    <dt>
                        breed: 
                    </dt>
                    <dd>
                    {props.petToAdopt.breed}
                    </dd>
                    <br></br>
                    <dt>
                        story: 
                    </dt>
                    <dd>
                    {props.petToAdopt.story}
                    </dd>
                </dl>
                <button className="adopt" onClick={() => props.onAdoptPet()}>Adopt</button>
            </main>
        </section>
        

    )
}