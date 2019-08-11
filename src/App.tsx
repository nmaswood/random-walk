import React from 'react';
import './App.scss';
import { RandomWalk, RandomWalkProps } from './components/RandomWalk';

const FREQUENCY = 10; // seconds

const RANDOM_WALK_DEFAULT = {
    offset: {
        x: 10,
        y: Math.ceil(window.innerHeight / 2),
    },
    distance: {
        x: 6,
        y: 6,
    },
    radius: 3,
    frequency: 500,
};

const App: React.FC = () => {
    return (
        <div className="container">
            <RandomWalk {...RANDOM_WALK_DEFAULT} />
        </div>
    );
};

export default App;
