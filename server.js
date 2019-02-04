const jsf = require('json-schema-faker');

var articleSchema = {
  type: 'objects',
  properties: {
    articles: {
      type: 'array',
      minItems: 6,
      maxItems: 10,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            faker: 'random.uuid'
          },
          title: {
            type: 'string',
            faker: 'company.companyName'
          },
          description: {
            type: 'string',
            faker: 'lorem.paragraphs'
          }
        }
      },
      required: ['id', 'title', 'description']
    }
  }
};

jsf.extend('faker', () => require('faker'));
function generateData() {
  const articles = jsf(articleSchema).articles;

  return { articles };
}
module.exports = generateData;
