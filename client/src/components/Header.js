import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { FaGoogle } from 'react-icons/fa';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li className="landing__header__list">
                            <a className="landing__header__signin" href="/auth/google">
                                Sign in with <FaGoogle />
                            </a>
                        </li>;
            default:
                return [
                    <div className="header__payments__container">
                        <li key="1">
                            <Payments />
                        </li>
                        <li key="3" className="header__payments__credits">
                            Credits: {4}
                        </li>
                        <li key="2">
                            <a href="/api/logout" className="header__payments__logout">Logout</a>
                        </li>
                    </div>
                ];
        }
    }


    render() {
        return (
            <section className="section-header">
                <div className="header">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="header__logo"
                    >
                        Emaily
                    </Link>
                    {/* {this.renderContent()} */}
                    <div className="header__payments__container">
                        <li key="1">
                            <Payments />
                        </li>
                        <li key="3" className="header__payments__credits">
                            Credits: {4}
                        </li>
                        <li key="2">
                            <a href="/api/logout" className="header__payments__logout">Logout</a>
                        </li>
                    </div>
                </div>
            </section>
        );
    }
}

//maps app state from reducer to Header props:
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);