import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clickAction from './actions/clickAction';
import keyAction from './actions/keyAction';
import { soundClick } from './actions/soundClick';

class App extends Component {

	componentDidMount() {
		document.addEventListener("keydown", (event) => {
			const keyArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
			if (keyArr.includes(event.key)) {
				this.props.keyAction(event);
			}
		}, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", (event) => {
			const keyArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
			if (keyArr.includes(event.key)) {
				this.props.keyAction(event);
			}
		}, false);
	}

	render() {

		const { text, clickAction } = this.props;

		const animals = ['Cow', 'Rooster', 'Dog', 'Cat', 'Duck', 'Goat', 'Sheep', 'Pig', 'Owl']
		const keyArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
		let displayText = keyArr[animals.indexOf(text)];

		let drumPadButtons = [
			{ 
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534835087/cow.mp3',
				id: 'q',
				audioId: 'Q'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/rooster.mp3',
				id: 'w',
				audioId: 'W'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836203/dog.mp3',
				id: 'e',
				audioId: 'E'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/cat.mp3',
				id: 'a',
				audioId: 'A'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/duck.mp3',
				id: 's',
				audioId: 'S'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/goat.mp3',
				id: 'd',
				audioId: 'D'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/sheep.mp3',
				id: 'z',
				audioId: 'Z'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/pig.mp3',
				id: 'x',
				audioId: 'X'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/owl.mp3',
				id: 'c',
				audioId: 'C'
			}];
		
		return (
			<div  id="drum-machine">
				<h1>Animal Drum Machine</h1>
				<div id="display">
					<div className='button-container'>
					{ drumPadButtons.map((drumPad) => (
						<button
							key={ drumPad.id }
							className='drum-pad'
							id={ drumPad.id }
							onClick={(event) => {
								const upperCaseId = event.target.id.toUpperCase();
								const sound = document.getElementById(upperCaseId);
								console.log(upperCaseId)
								soundClick(sound);
								clickAction(upperCaseId);
							} }>{drumPad.audioId}
							<audio className='clip' id={drumPad.audioId} src={drumPad.src} preload="auto"></audio>
						</button>
					)) }
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
