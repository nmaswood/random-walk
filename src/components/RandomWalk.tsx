import React from 'react';
import { Point, isInbounds, addPoints } from '../services/Point';

export interface RandomWalkProps {
    offset: Point;
    distance: Point;
    radius: number;
    frequency: number;
}

interface State {
    history: Point[];
    intervalReference?: number;
}
/*
 * stop drawing when it has reached the end of the visible screen
 * have it recurse and split
 * make them interesting colors
 *
 */

export class RandomWalk extends React.Component<RandomWalkProps, State> {
    state: State = {
        history: [],
    };

    update = () => {
        let { history } = this.state;

        if (history.length == 0) {
            history = [
                {
                    ...this.props.offset,
                },
            ];
            this.setState({ history });
        } else {
            const last = history[history.length - 1];
            const newPoint = addPoints(last, this.props.distance);
            const { xInbound, yInbound } = isInbounds(newPoint);

            if (!xInbound || !yInbound) {
                this.setState({ history: [] });
                this.update();
                return;
            }

            history = history.concat(newPoint);

            this.setState({ history });
        }
    };

    mount = () => {
        const intervalReference = window.setInterval(this.update, this.props.frequency);
        this.setState({ intervalReference });
    };

    unmount = () => {
        const { intervalReference } = this.state;
        if (intervalReference) {
            window.clearInterval(intervalReference);
        }
    };

    componentWillMount = () => {
        this.mount();
    };

    componentWillUnmount = () => {
        this.unmount();
    };

    renderCircle = (point: Point, idx: number) => {
        const { x, y } = point;
        const { radius } = this.props;
        return <circle key={idx} cx={x} cy={y} r={radius} fill="black" />;
    };

    render() {
        const { history } = this.state;
        return (
            <div className="svg-container">
                <svg>{history.map(this.renderCircle)}</svg>
            </div>
        );
    }
}
