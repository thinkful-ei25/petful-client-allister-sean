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
                        sex: {props.petToAdopt.sex}
                    </dt>
                    <dt>
                        age: {props.petToAdopt.age}
                    </dt>
                    <dt>
                        breed: {props.petToAdopt.breed}
                    </dt>
                    <dt>
                        story: {props.petToAdopt.story}
                    </dt>
                </dl>
                <button onClick={() => props.onAdoptPet()}>Adopt</button>
            </main>
        </section>
        

    )
}