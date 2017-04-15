var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function() {
        //create new instance of foundation reveal
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        // the foundation class for modal
        //data-reveal lets foundation we are using a modal
        return (
            <div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4>Some Title</h4>
                <p>Our current message</p>
                <button className="button hollow" data-close="">
                Okay
                </button>
        </div>
        );
    }
});

module.exports = ErrorModal;