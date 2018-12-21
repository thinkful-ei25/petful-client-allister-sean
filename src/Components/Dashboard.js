
import React from 'react';
import Pet from './Pet';
import {connect} from 'react-redux'; 
import {fetchCat, adoptCat} from '../actions/cat.action'; 
import {fetchDog, adoptDog} from '../actions/dog.action'; 

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCat()); 
        this.props.dispatch(fetchDog()); 
    }

    render() { 
        if (this.props.isDogLoading || this.props.isCatLoading) { 
            return <p>Loading...</p>
        }

        return (
            <div>
                {/* CAT */}
                <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())}></Pet> 
                {/* DOG */}
                <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())}></Pet>
            </div>
        )
    }
} 
const mapStateToProps = state => ({    
    dogToAdopt : state.dog.dog.data,  
    catToAdopt : state.cat.cat.data, 
    isDogLoading : state.dog.dog.loading, 
    isCatLoading : state.cat.cat.loading,
    isDogError : state.dog.dog.error, 
    isCatEror : state.cat.cat.error
  }); 
  
export default connect(mapStateToProps)(Dashboard);