import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterText: "",
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

   handleSearch = (filterText) => {
    this.setState({filterText})
  }

  render() {
    const {monsters, filterText} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(filterText.toLowerCase()));
    return (
      <div className="App">
        <SearchBox handleSearch={this.handleSearch} placeholder="Search monster"/>
        <CardList list={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
