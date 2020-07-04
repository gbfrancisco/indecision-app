// const app = document.getElementById('app');

// let buttonName = 'Show details';
// let details = '';

// const showDetails = () => {
//     buttonName = buttonName === 'Show details' ? 'Hide details' : 'Show details';
//     details = details ? '' : 'Hey. These are some details you can now see!';
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{buttonName}</button>
//             {(details) && <p>{details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, app);
// };

// render();


// const app = document.getElementById('app');

// let visibility = false;

// const reveal = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility</h1>
//             <button onClick={reveal}>{visibility ? 'Show content' : 'Hide content'}</button>
//             {visibility && <p>Some content right here!</p>}
//         </div>
//     );
//     ReactDOM.render(template, app);
// }

// render();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // this.visibility = false;
        this.state = {
            visibility: false,
        };
    };
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {
                        this.state.visibility ? 'Hide details' : 'Show details'
                    }
                </button>
                {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));















