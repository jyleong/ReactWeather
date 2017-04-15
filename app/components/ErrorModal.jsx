var React = require('react');

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
        //create new instance of foundation reveal
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        var {title, message} = this.props;
        // the foundation class for modal
        //data-reveal lets foundation we are using a modal
        return (
            <div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4>{title}</h4>
                <p>Error: {message}</p>
                <button className="button hollow" data-close="">
                Okay
                </button>
        </div>
        );
    }
});

module.exports = ErrorModal;