var TweetList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function (tweet) {
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