var carouselImages = ['http://placekitten.com/g/600/400', 'http://placebear.com/600/400', 'http://placehold.it/600x400'];

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'main' },
			React.createElement(Carousel, { images: carouselImages })
		);
	}
});

var Carousel = React.createClass({
	displayName: 'Carousel',


	propTypes: {
		images: React.PropTypes.arrayOf([React.PropTypes.string]).isRequired,
		showThumbnails: React.PropTypes.bool,
		slideshowActive: React.PropTypes.bool,
		slideshowDelay: React.PropTypes.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			defaultSelectedIndex: 0,
			showThumbnails: true,
			slideshowActive: true,
			slideshowDelay: 4000
		};
	},

	getInitialState: function getInitialState() {
		return {
			animationDirection: 'previous',
			selectedIndex: this.props.defaultSelectedIndex
		};
	},

	componentDidMount: function componentDidMount() {
		if (this.props.slideshowActive) {
			this.progressSlideshow();
		}
	},

	render: function render() {
		var Animation = React.addons.CSSTransitionGroup;

		return React.createElement(
			'div',
			this.getProps(),
			React.createElement(
				'div',
				{ className: 'carousel--image' },
				this.renderArrow('previous'),
				React.createElement(
					Animation,
					{ transitionName: 'animation--' + this.state.animationDirection },
					this.renderCurrentImage()
				),
				this.renderArrow('next')
			),
			this.renderThumbs()
		);
	},

	renderCurrentImage: function renderCurrentImage() {
		var selected = this.state.selectedIndex;
		var props = {
			key: selected,
			src: this.props.images[selected]
		};

		return React.createElement('img', props);
	},

	renderArrow: function renderArrow(direction) {
		var props = {
			className: 'carousel--arrow-' + direction,
			onClick: this.goInDirection.bind(null, direction)
		};

		return React.createElement('div', props);
	},

	renderThumbs: function renderThumbs() {
		var thumbnails = null;

		if (this.props.showThumbnails) {
			thumbnails = React.createElement(
				'div',
				{ className: 'carousel--thumbs' },
				this.props.images.map(this.renderThumb)
			);
		}

		return thumbnails;
	},

	renderThumb: function renderThumb(src, index) {
		var selected = index === this.state.selectedIndex ? ' carousel--selected' : '';
		var props = {
			className: 'carousel--thumb' + selected,
			key: index,
			onClick: this.handleThumbClick.bind(null, index),
			src: src
		};
		return React.createElement('img', props);
	},

	getProps: function getProps() {
		var props = {
			className: 'carousel',
			onKeyDown: this.handleKeyDown,
			tabIndex: '0'
		};

		if (this.props.slideshowActive) {
			props.onMouseEnter = this.handleMouseEnter;
			props.onMouseLeave = this.handleMouseLeave;
		}

		return props;
	},

	handleKeyDown: function handleKeyDown(event) {
		var left = 37;
		var up = 38;
		var right = 39;
		var down = 40;
		var key = event.which;

		if (key === down || key === left) {
			this.goInDirection('previous');
		} else if (key === up || key === right) {
			this.goInDirection('next');
		}
	},

	handleMouseEnter: function handleMouseEnter() {
		clearTimeout(this.timeout);
	},

	handleMouseLeave: function handleMouseLeave() {
		this.progressSlideshow();
	},

	handleThumbClick: function handleThumbClick(index) {
		this.goToIndex(index);
	},

	progressSlideshow: function progressSlideshow() {
		this.setState({ animationDirection: 'next' });

		this.timeout = setTimeout(function () {
			this.goInDirection('next');
			this.progressSlideshow();
		}.bind(this), this.props.slideshowDelay);
	},

	goToIndex: function goToIndex(index) {
		var direction = this.state.selectedIndex > index ? 'previous' : 'next';

		this.setState({
			animationDirection: direction,
			selectedIndex: index
		});
	},

	goInDirection: function goInDirection(direction) {
		var totalImages = this.props.images.length;
		var modifier = direction === 'next' ? 1 : -1;
		var newIndex = this.state.selectedIndex + modifier;

		if (newIndex === totalImages) {
			newIndex = 0;
		} else if (newIndex === -1) {
			newIndex = totalImages - 1;
		}

		this.setState({
			animationDirection: direction,
			selectedIndex: newIndex
		});
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));