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
        <h3> search by twitter handle </h3>
        <input type="text" ref="twitterHandle" placeholder="Twitter Handle" />
        <input type="submit" value="POST" />
      </form>
    );
  }
});