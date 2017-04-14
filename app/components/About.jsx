var React = require('react');

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
        <h3>About component</h3>
    );
};

module.exports = About;