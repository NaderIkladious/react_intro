import React from 'react';

class Article extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    fetch(`http://localhost:4000/articles/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          article: result
        });
      });
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        <img class="w-100" src={article.image} style={{ height: 'auto' }} alt="" />
        <h1>{article.title}</h1>
        <p>{article.desc}</p>
      </div>
    );
  }
}

export default Article;
