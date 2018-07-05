import React, { component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.atate = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: enent.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
    })
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <searchBox searchChange={this.onSearchCahange}/>
        <CardList robots={filterRobots} />
      </div>
    );
  }
}