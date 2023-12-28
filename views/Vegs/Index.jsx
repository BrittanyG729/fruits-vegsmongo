const React = require('react');

class Index extends React.Component {
    render() {
        const { vegs } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1>Vegs Index Page</h1>
                <nav>
                    <a href="/Veggies/new">Create a New Veg</a>
                </nav>
                <ul>
                    {vegs.map((Veg, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/Veggies/${Veg._id}`}>
                                    {Veg.name}
                                </a> {' '}
                                is {Veg.color} <br></br>
                                {Veg.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;