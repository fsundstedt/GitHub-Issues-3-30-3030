import React, {Component} from 'react';
import Issue from './issue';

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
        const info = this.state.issues;

        return (
                <div>
                    <Issue data={info}/>
                </div>
        );
    }
}