import React from 'react';

class NewArticle extends React.Component {
  state = {
    title: '',
    desc: '',
    image: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:4000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
  };

  render() {
    return (
      <div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <input type="text" onChange={this.handleChange} name="title" class="form-control" placeholder="Title" />
          </div>
          <div class="form-group">
            <input type="text" onChange={this.handleChange} name="image" class="form-control" placeholder="Image URL" />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="desc"
              onChange={this.handleChange}
              placeholder="Description"
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewArticle;
