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