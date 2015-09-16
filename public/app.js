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
  render: function() {
    return (
      <div className="tweetList">
        <h1 Tweet author="Just_be_dougin"> This guys an author</h1>
        <h1 Tweet author="Don't be douging"> This guys another author </h1> 
      </div>
    );
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
				<TweetList />
				<TweetForm />
			</div>
			);
	}
});

React.render( <TweetBox />, document.getElementById('content'));


// TweetBox

// 	TweetInfo
// 		TweetBody
// 		TweetDate