import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clickAction from './actions/clickAction';
import keyAction from './actions/keyAction';

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
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>Q
							<audio className='clip' id='Q' src='https://res.cloudinary.com/jutzee/video/upload/v1534835087/cow.mp3' preload="auto"></audio>
						</button>
						<button
							className='drum-pad'
							id='w'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>W
							<audio className='clip' id='W' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/rooster.mp3'></audio>
							</button>
						<button
							className='drum-pad'
							id='e'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>E
							<audio className='clip' id='E' src='https://res.cloudinary.com/jutzee/video/upload/v1534836203/dog.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='a'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>A
							<audio className='clip' id='A' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/cat.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='s'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>S
							<audio className='clip' id='S' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/duck.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='d'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>D
							<audio className='clip' id='D' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/goat.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='z'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>Z
							<audio className='clip' id='Z' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/sheep.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='x'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>X
							<audio className='clip' id='X' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/pig.mp3'></audio>
						</button>
						<button
							className='drum-pad'
							id='c'
							onClick={(event) => {
								const sound = document.getElementById(event.target.id.toUpperCase());
								const s = new Audio (sound.src);
								s.currentTime = 0;
								s.play();
								this.props.clickAction(event);
							} }>C
							<audio className='clip' id='C' src='https://res.cloudinary.com/jutzee/video/upload/v1534836204/owl.mp3'></audio>
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
