import React, { Component } from 'react';

export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuItems: [],
            modalContents: null
        };
    }

    componentDidMount() {
        let menuItems = [
            { url: 'home', label: 'Home' },
            { url: 'jobsBoard', label: 'Job Board' },
            { url: 'mentoring', label: 'Mentorship' },
            { url: 'login', label: 'Sign Up/Login' },
        ];
        this.setState({
            menuItems,
            currentLabel: 'Home',
        });
    }

    openSignup = () =>{
        this.setState({
            modalContents: this._getSignup()
        });
    }

    clickHandler = (item) => {
        this.props.pageLoader(item.url);
        this.setState({
            currentLabel: item.label
        });
    }

    render() {
        const { menuItems, modalContents } = this.state;
        return (
            <header id="main-header">
                    <nav id="navbar">
                        <ul>
                            {this.state.menuItems.map(item => {
                                const cssClass =
                                    this.state.currentLabel ===
                                    item.label
                                        ? 'current'
                                        : '';
                                    let onclickHandler = item.onclick || null;
                                return (
                                    <li
                                        key={item.label}
                                        className={cssClass}
                                    >
                                        <a href='#' onClick={this.clickHandler.bind(this, item)} value={item.url}>
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                            <li>
                                <input
                                    type="search"
                                    placeholder="Search codingDIVA"
                                    id="searchBar"
                                />
                            </li>
                        </ul>
                    </nav>
        <div>{ modalContents }</div>
            </header>
        );
    }
}
