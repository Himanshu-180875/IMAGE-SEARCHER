import React, {Component} from 'react';
import Images from './Images';
class HomePage extends Component {
    constructor(){

        super();
        this.state = { 
            photos: [],
            searchfield: '',
         }
         this.handleChange=this.handleChange.bind(this);
         this.update=this.update.bind(this);
         this.showSuggestions=this.showSuggestions.bind(this);
    }
    
     componentDidMount() {
         fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ccbb9f178ea920f9d4d2b9ee1433c6d0&format=json&nojsoncallback=1")
          .then(res => res.json())
          .then( (result) => {
            this.setState({
             
              photos: result.photos.photo
            })
            })
        }
        showSuggestions(list){
          console.log(list);

        }
        handleChange = (e) => {
         
         this.setState({
           searchfield: e.target.value
         })
        }
        update = () => {
          fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ccbb9f178ea920f9d4d2b9ee1433c6d0&tags=${this.state.searchfield}&format=json&nojsoncallback=1`)
          .then(res => res.json())
          .then( (result) => {
            this.setState({
              photos: result.photos.photo
            })
            if(!localStorage.getItem('images')) {
              localStorage.setItem('images', JSON.stringify([this.state.searchfield]));
            } else {
              const searchResults = JSON.parse(localStorage.getItem('images'));
              searchResults.push(this.state.searchfield);
              localStorage.setItem('images', JSON.stringify(searchResults));
            }
           
            
            })
        }
    render() { 
        return (
          
          
            <div>
            <div className="container">
            <div className="Heading">Search Photos</div>
            <div className="wrapper">
            <div className="search-input">
              <input type="text" list="list1"  onChange={this.handleChange} placeholder="Type to search.." />
              <datalist id="list1" className="new">
              { 
                JSON.parse(localStorage.getItem('images')) ? JSON.parse(localStorage.getItem('images')).map(data => <option>{data}</option>
               
             ) : null

           }
          
              </datalist>
              <div className="autocom-box">
            </div>
              
              <div className="icon" onClick = {this.update}><i className="fas fa-search"></i>  </div>
              
            </div>
         
          </div>
          </div>
          
          <Images  Photos={this.state.photos} />
          </div>
          );
    }
}
 
export default HomePage ;