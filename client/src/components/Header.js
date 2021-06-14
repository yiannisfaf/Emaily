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
                    <div className="payments__container">
                        <li key="1">
                            <Payments />
                        </li>
                        <li key="3" className="payments__credits">
                            Credits: {4}
                        </li>
                        <li key="2">
                            <a href="/api/logout" className="payments__logout">Logout</a>
                        </li>
                    </div>
                ];
        }
    }


    render() {
        return (
            <section className="header">
                <div className="landing__header">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="landing__header__logo"
                    >
                        Emaily
                    </Link>
                    {this.renderContent()}
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