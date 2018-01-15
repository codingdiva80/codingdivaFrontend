import React, { Component } from 'react';
import Modal from '../../components/Lib/modal';

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
                <div className="container">
                    <div className="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" />

                        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
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
                                            placeholder="Search Coding Diva"
                                            id="searchBar"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>{ modalContents }</div>
            </header>

        );
    }
}
