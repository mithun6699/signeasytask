import React, { Component } from 'react';
import './SearchImage.css'
export default class SearchImage extends Component {
    state={
        searchedData:''
    }
    onchangeInput =(e)=>{
        this.setState({
            searchedData:e.target.value
        })

    }
    onFormSubmit = (e)=>{
        e.preventDefault()
        this.props.userSubmit(this.state.searchedData)
       
    }
  render() {
    return (
      <div> 
          
          <form className="searchbar" onSubmit={this.onFormSubmit}>
              <input 
              className="searchbar__input"
               type="text"
               placeholder="Search Images"
               value={this.state.searchedData}
               onChange={this.onchangeInput}/>
              </form> </div>
    );
  }
}
