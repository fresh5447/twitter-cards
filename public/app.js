var TweetList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function (tweet) {
      return (
        <li> {tweet.text} </li>
      );
    });
    return (
      <div>
        {tweetNodes}
      </div>
    );
  }
});

var TweetBox = React.createClass({

  getInitialState: function(){
    return {data: []};
  },

	  loadTweetsFromServer: function() {
      var tweets = this.state.data;
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("inside success")
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log("broken url is " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

	componentDidMount: function(){
		this.loadTweetsFromServer();
	},

	render: function() {
    return (
    				<div>
    					<TweetList data={this.state.data}/>
    				</div>
          );
    }
});

React.render(<TweetBox url="http:localhost:4000/api/handle/just_be_dougin"/>, document.body)