
import React from 'react';

export default function Dashboard(props) {
    return (
        <div>
            <section>
                
                <header><h1>{props.catToAdopt.name}</h1> <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription}></img></header>
                <main>
                    <dl>
                        <dt>
                            sex: {props.catToAdopt.sex}
                        </dt>
                        <dt>
                            age: {props.catToAdopt.age}
                        </dt>
                        <dt>
                            breed: {props.catToAdopt.breed}
                        </dt>
                        <dt>
                            story: {props.catToAdopt.story}
                        </dt>
                    </dl>
                    <button>Adopt</button>
                </main>
            </section>
            <section>
                <header><h1>{props.dogToAdopt.name}</h1> <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription}></img></header>
                <main>
                    <dl>
                    <dt>
                            sex: {props.dogToAdopt.sex}
                        </dt>
                        <dt>
                            age: {props.dogToAdopt.age}
                        </dt>
                        <dt>
                            breed: {props.dogToAdopt.breed}
                        </dt>
                        <dt>
                            story: {props.dogToAdopt.story}
                        </dt>
                    </dl>
                    <button>Adopt</button>
                </main>
            </section>
        </div>
    )
}