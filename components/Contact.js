var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className='contactItem'>
                <img className='contactImage' src='http://static.zakumaj.pl/data/store/2015/10/98d0a565-4d35-88fb-5557-3977dee48380/picture_medium.jpg' />
                <p className='contactLabel'>Imię: {this.props.item.firstName}</p>
                <p className='contactLabel'>Nazwisko: {this.props.item.lastName}</p>
                <p className='contactEmail'>Email: {this.props.item.email}</p>
            </div>
        )
    },
});