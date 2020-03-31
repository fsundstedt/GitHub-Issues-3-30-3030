import React, {Component} from 'react';

export default class IssueList extends Component {
    state = {
        issues: []
    }

    getData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issuesFromApi = await this.getData();

        this.setState({
            issues: issuesFromApi
        })
    }

    render() {
        const { issues } = this.state;

        return (
            <div>
                {issues.map(issue => (
                    <div>
                        <div>{issue.title}</div>
                        <a href="issue/:issue_number?">{issue.number}</a>
                    </div>
                ))}
            </div>
        );
    }
}