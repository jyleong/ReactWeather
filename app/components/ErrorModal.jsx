var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };  
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        var {title, message} = this.props;
        //jsx code
        var modalMarkup = (
            <div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4>{title}</h4>
                <p>Error: {message}</p>
                <button className="button hollow" data-close="">
                Okay
                </button>
            </div>
        );

        //create new instance of foundation reveal
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();

    },
    render: function() {
        // the foundation class for modal
        //data-reveal lets foundation we are using a modal

        return (
            <div>             
            </div>
        )
    }
});

module.exports = ErrorModal;