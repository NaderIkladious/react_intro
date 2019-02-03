import React from 'react';

class Articles extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        title: 'My amazing article',
        image: 'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quia ex temporibus ab repudiandae similique voluptatibus tempore facilis, animi ullam officiis quibusdam? Provident dignissimos saepe nulla distinctio veritatis porro ducimus.'
      },
      {
        id: 2,
        title: 'My Second article',
        image: 'https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quia ex temporibus ab repudiandae similique voluptatibus tempore facilis, animi ullam officiis quibusdam? Provident dignissimos saepe nulla distinctio veritatis porro ducimus.'
      },
      {
        id: 3,
        title: 'A new movie is published',
        image: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quia ex temporibus ab repudiandae similique voluptatibus tempore facilis, animi ullam officiis quibusdam? Provident dignissimos saepe nulla distinctio veritatis porro ducimus.'
      }
    ]
  };

  render() {
    return (
      <div className="row">
        {this.state.articles.map(article => {
          return (
            <div class="col-4">
              <div class="card">
                <img src={article.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
