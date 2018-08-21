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

		const { clickAction } = this.props;

		const animals = ['Cow', 'Rooster', 'Dog', 'Cat', 'Horse', 'Goat', 'Sheep', 'Pig', 'Owl'];
		const keyArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
		let displayText = animals[keyArr.indexOf(this.props.text)];

		let drumPadButtons = [
			{ 
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534835087/cow.mp3',
				id: 'q',
				audioId: 'Q',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/cow.png',
				alt: 'cow'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/rooster.mp3',
				id: 'w',
				audioId: 'W',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/rooster.png',
				alt: 'rooster'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836203/dog.mp3',
				id: 'e',
				audioId: 'E',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/dog.png',
				alt: 'dog'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/cat.mp3',
				id: 'a',
				audioId: 'A',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/cat.png',
				alt: 'cat'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534854346/horse.mp3',
				id: 's',
				audioId: 'S',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/horse.png',
				alt: 'horse'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/goat.mp3',
				id: 'd',
				audioId: 'D',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/goat.png',
				alt: 'goat'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/sheep.mp3',
				id: 'z',
				audioId: 'Z',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/sheep.png',
				alt: 'sheep'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/pig.mp3',
				id: 'x',
				audioId: 'X',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/pig.png',
				alt: 'pig'
			},
			{
				src: 'https://res.cloudinary.com/jutzee/video/upload/v1534836204/owl.mp3',
				id: 'c',
				audioId: 'C',
				image: 'https://res.cloudinary.com/jutzee/image/upload/v1534864766/owl.png',
				alt: 'owl'
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
								clickAction(event);
							} }>
							<img className='drum-pad-image' src={ drumPad.image } alt={ drumPad.alt }></img>
							<span>{drumPad.audioId}</span>
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

// <a href='https://www.freepik.com/free-vector/pet-animals-set_719861.htm'>Designed by Freepik</a>
// <a href='https://www.freepik.com/free-vector/mountains-animals-set_719886.htm'>Designed by Freepik</a>
// <a href='https://www.freepik.com/free-vector/farm-animals-set_719885.htm'>Designed by Freepik</a>
// <a href='https://www.freepik.com/free-vector/pattern-of-colored-dots_920282.htm'>Designed by Freepik</a>