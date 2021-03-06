import { useEffect } from 'react';
import Toolbar from './workstation/Toolbar';
import FileBrowser from './workstation/FileBrowser';
import Main from './workstation/Main';
import AddTrack from './workstation/windows/AddTrack';
import Sonification from './workstation/windows/Sonification';
import Controls from './workstation/Controls';
import { connect } from 'react-redux';
import { setGlobalSettings } from '../actions';

let dark;

const Workstation = ({ files, tracks, setGlobalSettings }) => {
  const keyPress = keys => {
    if (keys.length === 2 && keys[0] === 'shift' && keys[1] === 'd') {
      dark = !dark;
      setGlobalSettings({ dark });
    }
  };

  useEffect(() => {
    let keys = [];

    document.addEventListener('keydown', e => {
      if (!(document.querySelector('input:focus') || document.querySelector('textarea:focus') || document.querySelector('select:focus'))) {
        keys.push(e.key.toLowerCase());
        keyPress(keys);
      }
    });
    document.addEventListener('keyup', e => {
      if (!(document.querySelector('input:focus') || document.querySelector('textarea:focus') || document.querySelector('select:focus'))) {
        keys.splice(keys.indexOf(e.key.toLowerCase()), 1);
        keyPress(keys);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom">
      <div className="sticky-alerts" />
      { files.map(({ name }) => <AddTrack key={ `modal-${ name }` } anchor={ `modal-${ name }` } track={ name } />) }
      { tracks.map(({ file, name }, i) => <Sonification key={ `sonification-${ name }-${ i }` } anchor={ `sonification-${ name.replace(/\s/g, '-') }-${ i }` } trackno={ i } />) }
      <Toolbar />
      <FileBrowser />
      <Main />
      <Controls />
    </div>
  );
};

const mapStateToProps = state => {
  dark = state.globalSettings.dark;
  return ({
    files: state.files,
    tracks: state.tracks
  })
};

const mapDispatchToProps = dispatch => ({
  setGlobalSettings: payload => dispatch(setGlobalSettings(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Workstation);
