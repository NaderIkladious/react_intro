import React from 'react';
import { Link } from 'react-router-dom';
class Articles extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch('http://localhost:4000/articles')
      .then(res => res.json())
      .then(result => {
        this.setState({
          articles: result
        });
      });
  }

  render() {
    return (
      <div className="articles">
        <div className="row justify-content-between">
          <h1>Articles</h1>
          <div>
            <Link className="btn btn-primary" to="/articles/new">
              New Article
            </Link>
          </div>
        </div>
        <div className="row">
          {this.state.articles.map(article => {
            return (
              <div class="col-4">
                <div class="card">
                  <img src={article.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </h5>
                    <p class="card-text">{article.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
