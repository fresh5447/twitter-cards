var TweetBox = React.createClass({
	render: function(){
		return(
			<div clasName="tweetBox">
				Hello, world! I am a TweetBox.
			</div>
			);
	}
});

React.render( <TweetBox />, document.getElementById('content'));


// TweetBox

// 	TweetInfo
// 		TweetBody
// 		TweetDate