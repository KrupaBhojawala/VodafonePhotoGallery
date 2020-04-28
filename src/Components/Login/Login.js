import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../Services/user.service';
import { history } from '../../Routing/history';
// import { connect } from 'react-redux';

// import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        userService.logout();

        this.state = {
            staffId: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { staffId, password } = this.state;
        if (staffId && password) {
            // console.log(staffId + password)
            userService.login(staffId,password)
            .then(
                user => { 
                    console.log(user);
                    // dispatch(success(user));
                    history.push('/');
                },
                error => {
                    console.log(error);
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
            // this.props.login(username, password);
        }
    }

    render() {
        // const { loggingIn } = this.props;
        const { staffId, password, submitted } = this.state;
        return (
        // <div className="row">
            <div className="col-md-6 col-md-offset-3" style={{color:'white', textAlign:'center'}} >
                <h2>Login</h2>
                <form name="form" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !staffId ? ' has-error' : '')}>
                        <label htmlFor="staffId" className="control-label col-sm-3" >Username</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="staffId" value={staffId} onChange={this.handleChange} />
                            {submitted && !staffId &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password" className="control-label col-sm-3" >Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {/* {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        } */}
                        <Link to="/Register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
            // </div>
        );
    }
}

export { LoginPage as Login };