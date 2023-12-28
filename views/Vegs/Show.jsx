const React = require('react');
class Show extends React.Component {
    render () {
        const Veg = this.props.fruit;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The {Veg.name} is {Veg.color}</p>
                {Veg.readyToEat ? 'It is ready to eat' : "NOT READY!"}
            </div>

        )
    }
}

module.exports = Show;