import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
class ForgetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'demo@example.com'
    }
  }
  render() {
    const {
      email
    } = this.state;
    const {showMessage, loader, alertMessage} = this.props;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">

        <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/GssLogo.png")} alt="Gss" title="Global Services and Solutions"/>
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h3 style={{color:'gray'}}>Forgot password</h3>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email"/>}
                    fullWidth
                    onChange={(event) => this.setState({email: event.target.value})}
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button variant="contained" color="primary">
                      Send
                    </Button>
                  </div>

                  <Link to="/signin">
                        Back to login
                      </Link>

                </fieldset>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress/>
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer/>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
})(ForgetPassword);
