
import React from 'react';
import Pet from './Pet';
import {connect} from 'react-redux'; 
import {fetchCat} from '../actions/cat.action'; 
import {fetchDog} from '../actions/dog.action'; 

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
                <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => console.log('Cat Adopted')}></Pet> 
                {/* DOG */}
                <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => console.log('Dog Adopted')}></Pet>
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