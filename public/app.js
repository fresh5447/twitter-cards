var Tweet = React.createClass({
	render: function(){
		return (
			<div className="tweet">
				<h2 className="twitterHandle">
					{this.props.tweet}
				</h2>
				</div>
			);
	}
});

var TweetBox = React.createClass({
console.log("just before handleTweetSubmit" + tweets, this.props.url, this.props.url+tweets);

handleTweetSubmit: function(tweet){
        var tweets = this.state.data;
        $.ajax({
            url: this.props.url + tweet.twitterHandle,
            dataType: 'json',
            success: function(data){
              console.log(tweet.twitterHandle + "tweet.twitterHandle");
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="tweetBox">
        <h1>Tweets</h1>
        <TweetList data={this.props.data} />
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
      </div>
    );
  }
});

var TweetList = React.createClass({
  render: function() {
    var tweetNodes = this.state.data.map(function (tweet) {
      return (
        <Tweet tweet={tweet}/>
      );
    });
    return (
      <div className="commentList">
        {tweetNodes}
      </div>
    );
  }
});



var TweetForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var twitterHandle = React.findDOMNode(this.refs.twitterHandle).value.trim();
		if(!twitterHandle){
			console.log("no twitter handle");
			return;
		}
		console.log(twitterHandle);
		this.props.onTweetSubmit({twitterHandle: twitterHandle});
		React.findDOMNode(this.refs.twitterHandle);
	}
,
  	render: function() {
    return (
    	<form className="tweetForm" onSubmit={this.handleSubmit}>
    		<input type="text" ref="twitterHandle" placeholder="Twitter Handle" />
    		<input type="submit" value="POST" />
    	</form> 
    );
  }
});

React.render( <TweetBox url="http://localhost:3000/api/" />, document.getElementById('content'));