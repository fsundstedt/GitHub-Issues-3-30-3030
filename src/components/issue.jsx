import React, {Component} from 'react';

class Issue extends Component {
    render() {
        console.log(this.props)
        
        const { issue_number } = this.props.match.params;
        console.log(issue_number);
        return (
            <div>{issue_number}</div>
        )
    }
}

export default Issue;