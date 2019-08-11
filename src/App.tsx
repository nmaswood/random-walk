import React from 'react';
import './App.scss';
import { RandomWalk, RandomWalkProps } from './components/RandomWalk';

const FREQUENCY = 100; // seconds

const RANDOM_WALK_DEFAULT = {
    offset: {
        x: 0,
        y: Math.ceil(window.innerHeight / 2),
    },
    distance: {
        x: 10,
        y: 10,
    },
    radius: 5,
    frequency: 1000,
};

const App: React.FC = () => {
    return (
        <div className="container">
            <RandomWalk {...RANDOM_WALK_DEFAULT} />
        </div>
    );
};

export default App;
