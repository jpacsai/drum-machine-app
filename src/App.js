import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clickAction from './actions/clickAction';
import keyAction from './actions/keyAction';

class App extends Component {

	componentDidMount() {
		document.addEventListener("keydown", (event) => this.props.keyAction(event), false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", (event) => this.props.keyAction(event), false);
	}

	render() {

		let displayText = '';
		switch(this.props.text){
			case 'q':
				displayText = 'Cow';
				break;
			case 'w':
				displayText = 'Rooster';
				break;
			case 'e':
				displayText = 'Dog';
				break;
			case 'a':
				displayText = 'Cat';
				break;
			case 's':
				displayText = 'Duck';
				break;
			case 'd':
				displayText = 'Goat';
				break;
			case 'z':
				displayText = 'Sheep';
				break;
			case 'x':
				displayText = 'Pig';
				break;
			case 'c':
				displayText = 'Owl';
				break;
			default:
				displayText = '';
		};

		return (
			<div  id="drum-machine">
				<h1>Animal Drum Machine</h1>
				<div id="display">
					<div className='button-container'>
						<button
							className='drum-pad'
							id='q'
							onClick={(event) => this.props.clickAction(event) }>Q
							<audio className='clip' id='Q' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='w'
							onClick={(event) => this.props.clickAction(event) }>W
							<audio className='clip' id='W' src='#'></audio>
							</button>
						<button
							className='drum-pad'
							id='e'
							onClick={(event) => this.props.clickAction(event) }>E
							<audio className='clip' id='E' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='a'
							onClick={(event) => this.props.clickAction(event) }>A
							<audio className='clip' id='A' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='s'
							onClick={(event) => this.props.clickAction(event) }>S
							<audio className='clip' id='S' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='d'
							onClick={(event) => this.props.clickAction(event) }>D
							<audio className='clip' id='D' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='z'
							onClick={(event) => this.props.clickAction(event) }>Z
							<audio className='clip' id='Z' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='x'
							onClick={(event) => this.props.clickAction(event) }>X
							<audio className='clip' id='X' src='#'></audio>
						</button>
						<button
							className='drum-pad'
							id='c'
							onClick={(event) => this.props.clickAction(event) }>C
							<audio className='clip' id='C' src='#'></audio>
						</button>
					</div>
					<div id='display-text'>{ displayText }</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		text: state.clicked
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		clickAction,
		keyAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
