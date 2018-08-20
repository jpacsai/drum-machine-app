import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    //document.addEventListener("click", , false);
    //document.addEventListener("keyPress", , false);
  }

  componentWillUnmount() {
    //document.removeEventListener("click", , false);
    //document.removeEventListener("keyPress", , false);
  }

  render() {
    return (
      <div  id="drum-machine">
        <div id="display">
          <button className='drum-pad' id='q' >Q
            <audio className='clip' id='Q' src='#'></audio>
          </button>
          <button className='drum-pad' id='w'>W
            <audio className='clip' id='W' src='#'></audio>
            </button>
          <button className='drum-pad' id='e'>E
            <audio className='clip' id='E' src='#'></audio>
          </button>
          <button className='drum-pad' id='a'>A
            <audio className='clip' id='A' src='#'></audio>
          </button>
          <button className='drum-pad' id='s'>S
            <audio className='clip' id='S' src='#'></audio>
          </button>
          <button className='drum-pad' id='d'>D
            <audio className='clip' id='D' src='#'></audio>
          </button>
          <button className='drum-pad' id='z'>Z
            <audio className='clip' id='Z' src='#'></audio>
          </button>
          <button className='drum-pad' id='x'>X
            <audio className='clip' id='X' src='#'></audio>
          </button>
          <button className='drum-pad' id='c'>C
            <audio className='clip' id='C' src='#'></audio>
          </button>
          <span id='display-text'></span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
