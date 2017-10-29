import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const muiTheme = getMuiTheme({});

export default class AddContentPanel extends React.Component {
  constructor(props) {
    super(props);
  }


  

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
      />,
    ];

    return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <RaisedButton label="Add a new Content" onClick={this.props.handleOpen} />
        <Dialog
          title="Add a new Content"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <h5>Title</h5>
          <TextField
            id="title"
            hintText="Choose title"
            fullWidth={true}
            onChange={this.props.handleChangeTitle}
          />
          <h5>Content Type</h5>
          <SelectField
            value={this.props.value}
            onChange={this.props.handleChangeType}
          >
            <MenuItem value="img" primaryText="img" />
            <MenuItem value="img_url" primaryText="img_url" />
            <MenuItem value="video" primaryText="video" />
            <MenuItem value="web" primaryText="web" />
          </SelectField>
          <h5>URL</h5>
          <TextField
            id="url"
            hintText="Copy URL"
            fullWidth={true}
            onChange={this.props.handleChangeUrl}
          />


        </Dialog>
      </MuiThemeProvider>
      </div>
    );
  }
}