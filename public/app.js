var data = [
  {author: "just_be_dougin", text: "This is going to be a tweet!"},
  {author: "Do_not_be_dougin", text: "This is going to be another tweet!"},
  {author: "Do_not_be_dougin", text: "This is going to be another tweet!"},
  {author: "Do_not_be_dougin", text: "This is going to be another tweet!"}
];

var Tweet = React.createClass({
	render: function(){
		return (
			<div className="tweet">
				<h2 className="tweetAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
				</div>
			);
	}
});

var TweetList = React.createClass({
	render: function(){
	var tweetNodes = this.props.data.map(function(tweet){
		return (
			<Tweet author={tweet.author}>
				{tweet.text}
			</Tweet>
			);
	});
	return (
		<div className="tweetList">
			{tweetNodes}
		</div>
		)
  }
});

var TweetForm = React.createClass({
  render: function() {
    return (
      <div className="tweetForm">
        Hello, world! I am a TweetForm.
      </div>
    );
  }
});

var TweetBox = React.createClass({
	render: function(){
		return(
			<div clasName="tweetBox">
				<h1> Tweets </h1>
				<TweetList data={this.props.data}/>
				<TweetForm />
			</div>
			);
	}
});

React.render( <TweetBox data={data}/>, document.getElementById('content'));


// TweetBox

// 	TweetInfo
// 		TweetBody
// 		TweetDate