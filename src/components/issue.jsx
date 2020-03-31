import React, {Component} from 'react';

class Issue extends Component {
    state = {
        issueDetails: []
    }

    getData = async () => {
        const { issue_number } = this.props.match.params;
        const response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issueFromApi = await this.getData();

        this.setState({
            issueDetails: issueFromApi
        })
    }

    render() {
        const { issueDetails } = this.state;
        console.log(issueDetails)
        
        return (
            <div>
                <div>{issueDetails.title}</div>
                <div>{issueDetails.number}</div>
            </div>
        )
    }
}

export default Issue;