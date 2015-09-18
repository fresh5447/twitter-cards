var Tweet = React.createClass({
  render: function(){
    return (
      <div className="panel panel-default">
      <div className="panel-heading ">
        <div className="row">
        <img src={this.props.tweet.user.profile_image_url} className="pull-right my-image img-thumbnail"/>

        <h2 className="twitterHandle">
          <p panel-title className="pull-left">{'@' + this.props.tweet.user.screen_name}</p>
        </h2>
        </div>
      </div>
      <div className="panel-body">
          <h2>{this.props.tweet.text}</h2>
      </div>

      </div>
      );
  }
});

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
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="tweetBox">
        <h1>Tweets</h1>
        <TweetList data={this.state.data} />
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
      </div>
    );
  }
});

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

React.render( <TweetBox url="http://localhost:4000/api/keyword/" />, document.getElementById('content'));
