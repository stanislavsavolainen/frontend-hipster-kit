// Disable prop type checking in modules
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import Button from 'material-ui/Button';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from 'material-ui/Table';

import Icon from 'material-ui/Icon';

import { DialogContentText } from 'material-ui/Dialog';
import DialogWithButtons from '../components/DialogWithButtons';

import rest from '../utils/rest';

// Here we 'connect' the component to the Redux store. This means that the component will receive
// parts of the Redux store as its props. Exactly which parts is chosen by mapStateToProps.

// We should map only necessary values as props, in order to avoid unnecessary re-renders. In this
// case we need the list of users, as returned by the REST API. The component will be able to access
// the users list via `this.props.users`. Additionally, we need details about the selected user,
// which will be available as `this.props.userDetails`.

// The second function (mapDispatchToProps) allows us to 'make changes' to the Redux store, by
// dispatching Redux actions. The functions we define here will be available to the component as
// props, so in our example the component will be able to call `this.props.refresh()` in order to
// refresh the users list, and `this.props.refreshUser(user)` to fetch more info about a specific
// user.

// More details: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// The injectIntl decorator makes this.props.intl.formatMessage available to the component, which
// is used for localization.

const mapStateToProps = state => ({
  users: state.users,
  userDetails: state.userDetails,
});

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    dispatch(rest.actions.users());
  },
  refreshUser: (user) => {
    dispatch(rest.actions.userDetails({ userId: user.id }));
  },
});

@injectIntl
@connect(mapStateToProps, mapDispatchToProps)
export default class Users extends React.Component {
  // Component initial state.
  // Here we keep track of whether the user details dialog is open.
  state = {
    dialogOpen: false,
  };

  // Refresh user list when component is first mounted
  componentDidMount() {
    const { refresh } = this.props;

    refresh();
  }

  render() {
    const { users, refreshUser, userDetails, intl: { formatMessage } } = this.props;
    const { dialogOpen } = this.state;

    // Show the following user details in the dialog
    const userDetailsDescription = (
      <div>
        <DialogContentText>
          <b>{ formatMessage({ id: 'userId' })}</b>{`: ${userDetails.data.id}` }
        </DialogContentText>
        <DialogContentText>
          <b>{ formatMessage({ id: 'email' })}</b>{`: ${userDetails.data.email}` }
        </DialogContentText>
        <DialogContentText>
          <b>{ formatMessage({ id: 'description' })}</b>{`: ${userDetails.data.description}` }
        </DialogContentText>
      </div>
    );

    return (
      <div>
        <DialogWithButtons
          title={formatMessage({ id: 'userDetails' })}
          description={userDetailsDescription}
          submitAction={formatMessage({ id: 'close' })}
          isOpen={dialogOpen}
          loading={userDetails.loading}
          submit={() => this.setState({ dialogOpen: false })}
          close={() => this.setState({ dialogOpen: false })}
        />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{formatMessage({ id: 'userId' })}</TableCell>
              <TableCell>{formatMessage({ id: 'email' })}</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // Loop over each user and render a <TableRow>
              users.data.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell numeric>
                    <Button
                      primary
                      onClick={() => {
                        refreshUser(user);
                        this.setState({ dialogOpen: true });
                      }}
                    >
                      <Icon style={{ paddingRight: 10 }}>list</Icon>
                      {formatMessage({ id: 'showUserDetails' })}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}
