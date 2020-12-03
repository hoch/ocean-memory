import React, { useState } from 'react';
import * as d3 from 'd3';
import halfmoon from 'halfmoon';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions';

const handleUpload = (action, ref) => async e => {
  if (e.target.files.length) {
    const url = URL.createObjectURL(e.target.files[0]);
    const csv = await d3.csv(url);
    action({ name: e.target.files[0].name, csv });
    e.target.value = '';
    ref.current.click();
  }
};

const Toolbar = ({ uploadFile }) => {
  const file = React.createRef();
  const edit = React.createRef();
  const view = React.createRef();
  const [state, setState] = useState({ sidebar: true, dark: halfmoon.darkModeOn });
  return (
    <nav className="navbar">
      <a href="#!" className="navbar-brand">Workstation</a>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" id="nav-dropdown-file" href="#!" ref={ file }>File</a>
          <div className="dropdown-menu" aria-labelledby="nav-dropdown-file">
            <label htmlFor="upload" className="dropdown-item">
              <input type="file" id="upload" className="d-none" accept="text/csv" onChange={ handleUpload(uploadFile, file) } />
              <i className="fa fa-folder-open"/>
              &emsp;Open
            </label>
            <a href="#!" className="dropdown-item" onClick={ () => file.current.click() }>
              <i className="fa fa-file-export"/>
              &emsp;Export
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" id="nav-dropdown-file" href="#!" ref={ edit }>Edit</a>
          <div className="dropdown-menu" aria-labelledby="nav-dropdown-file">
            <a href="#!" className="dropdown-item" onClick={ () => edit.current.click() }>
              <i className="fa fa-folder-open"/>
              &emsp;Open
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" id="nav-dropdown-file" href="#!" ref={ view }>View</a>
          <div className="dropdown-menu" aria-labelledby="nav-dropdown-file">
            <a
              href="#!"
              className="dropdown-item"
              onClick={ () => {
                view.current.click();
                halfmoon.toggleSidebar();
                setState({ ...state, sidebar: !state.sidebar });
              } }
            >
              <i className={ `fa fa-toggle-${ state.sidebar ? 'off' : 'on' }` } />
              &emsp;{ state.sidebar ? 'Close' : 'Open' } file browser
            </a>
            <a
              href="#!"
              className="dropdown-item"
              onClick={ () => {
                view.current.click();
                halfmoon.toggleDarkMode();
                setState({ ...state, dark: !state.dark });
              } }
            >
              <i className={ `fa fa-${ state.dark ? 'sun' : 'moon' }` } />
              &emsp;Toggle { state.dark ? 'light' : 'dark' } mode
            </a>
          </div>
        </li>
      </ul>
      <div className="navbar-content ml-auto">
        <Link to="/" className="btn btn-danger">
          <i className="fa fa-sign-out-alt" />
          &emsp;Exit Workstation
        </Link>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  uploadFile: file => dispatch(uploadFile(file))
});

export default connect(null, mapDispatchToProps)(Toolbar);