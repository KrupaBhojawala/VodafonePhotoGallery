import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { history } from '../../Routing/history';
import { userService } from '../Services/user.service'
// import { connect } from 'react-redux';

// import { userActions } from '../_actions';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                staffId: '',
                password: '',
                confirmPassword: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.staffId && user.password && user.confirmPassword) {
            if(user.confirmPassword === user.password){
                // console.log(user.staffId + user.password + user.confirmPassword)
                userService.register(user)
                .then(
                    user => { 
                        console.log("Success");
                        // return <Redirect to='/Login' />
                        // dispatch(success());
                        history.push('/login');
                        // dispatch(alertActions.success('Registration successful'));
                    },
                    error => {
                        console.log(error)
                        // dispatch(failure(error.toString()));
                        // dispatch(alertActions.error(error.toString()));
                    }
                );
            }
            // this.props.register(user);
        }
    }

    render() {
        // const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3" style={{color:'white', textAlign:'center'}} >
                <h2>Register</h2>
                <form name="form" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.staffId ? ' has-error' : '')}>
                        <label htmlFor="staffId" className="control-label col-md-3" >Staff ID</label>
                        <div className="col-md-9">
                        <input type="text" className="form-control" name="staffId" value={user.staffId} onChange={this.handleChange} />
                        {submitted && !user.staffId && 
                            <div className="help-block">First Name is required</div>
                        }
                        </div>
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password" className="control-label col-md-3" >Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                        </div>
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="confirmPassword" className="control-label col-md-3" >Comfirm Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="confirmPassword" value={user.confirmPassword} onChange={this.handleChange} />
                        {submitted && user.confirmPassword !== user.password &&
                            <div className="help-block">Password is not matching.</div>
                        }
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {/* {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        } */}
                        <Link to="/Login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;