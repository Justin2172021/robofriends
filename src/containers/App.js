import React, { useState, useEffect } from "react";
import CardsArray from "../components/CardsArray";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {
    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setRobots(users));
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !robots.length ?
    <h1 className="tc bg-light-green dib br3 pa3 ma100">Loading....</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardsArray robots={filteredRobots} />
                </ErrorBoundry>    
            </Scroll>
        </div>
    );  
}

export default App;