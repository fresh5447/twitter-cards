var TweetBox = React.createClass({
handleTweetSubmit: function(tweet){
        var tweets = this.state.data;
        $.ajax({
            url: this.props.url + tweet.twitterHandle,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
      },
handleKeywordSubmit: function(tweet){
        var tweets = this.state.data;
        $.ajax({
            url: this.props.url + tweet.keyword,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
      },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="tweetBox">
        <h1>Tweets</h1>
        <TweetList data={this.state.data} />
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
        <KeywordForm onKeywordSubmit={this.handleKeywordSubmit} />
      </div>
    );
  }
});
