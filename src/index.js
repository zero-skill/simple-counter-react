import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.scss';
function SimpleCounter(props) {
    return (
        <div className="counter">
            <div className="calendar">
                <i className="fa fa-clock-o"></i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
}
SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number
}
let counter = 0;
setInterval(function () {
    const one = Math.floor(counter / 1);
    const two = Math.floor(counter / 10);
    const three = Math.floor(counter / 100);
    const four = Math.floor(counter / 1000);
    counter++;
    ReactDOM.render(<SimpleCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four} />, document.querySelector("#root"));
}, 1000);