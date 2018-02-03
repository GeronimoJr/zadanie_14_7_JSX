var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://static.zakumaj.pl/data/store/2015/10/98d0a565-4d35-88fb-5557-3977dee48380/picture_medium.jpg',
                }),
                React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('p', {className: 'contactEmail'}, 'Email: ' + this.props.item.email)

            )
        )
    },
});