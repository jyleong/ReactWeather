var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

// only use stateless function components 
// on methods with only render

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About:</h1>
            <p>Learning React.js by making a weather app!</p>
            <p>
            I am building this following along The Complete React Web App
            Developer Course by Andrew Mead
            </p>
            <ul>
                <li>
                    <a href="https://github.com/jyleong">My github</a>
                </li>
                <li>
                    <a href="https://facebook.github.io/react">ReactM</a> - This was the 
                    JavaScript framework used.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;