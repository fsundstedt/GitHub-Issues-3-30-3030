import React, {Component} from 'react';

export default class IssueList extends Component {
    state = {
        issues: []
    }

    getData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        console.log(data);
        return data;
    }

    async componentDidMount() {
        const issuesFromApi = await this.getData();

        this.setState({
            issues: issuesFromApi
        })
    }

    render() {
        const printList = this.state.issues.map((item) => {
            return <li>
                <div>{item.title}</div>
                <div>#{item.number} opened by {item.user.login}</div>
                </li>
        }

        )

        return (
            <div>{printList}</div>
        )
    }
}