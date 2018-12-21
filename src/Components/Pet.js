import React from 'react';

export default function Pet(props) {
    if (!props.petToAdopt){ 
        return <p>Loading...</p>
    }
    return (
        <section>
            <header><h1>{props.petToAdopt.name}</h1> <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription}></img></header>
            <main>
                <dl>
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
                    <dt>
                        story: 
                    </dt>
                    <dd>
                    {props.petToAdopt.story}
                    </dd>
                </dl>
                <button onClick={() => props.onAdoptPet()}>Adopt</button>
            </main>
        </section>
        

    )
}