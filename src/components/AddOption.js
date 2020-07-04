import React from 'react';

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        let option = e.target.elements.option.value.trim();
        e.target.elements.option.focus();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" autoComplete="off" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;