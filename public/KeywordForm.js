var KeywordForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var keyword = React.findDOMNode(this.refs.keyword).value.trim();
    if(!keyword){
      console.log("no keyword entered");
      return;
    }
    console.log(keyword);
    this.props.onKeywordSubmit({keyword: keyword});
    React.findDOMNode(this.refs.keyword);
  }
,
    render: function() {
    return (
      <form className="keywordForm" onSubmit={this.handleSubmit}>
        <h3> search by keyword </h3>
        <input type="text" ref="keyword" placeholder="search by keyword" />
        <input type="submit" value="POST" />
      </form>
    );
  }
});