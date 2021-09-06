// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunadb = require("faunadb");
q = faunadb.query;

//require("dotenv").config;

const handler = async (event) => {
  try {
    const client = new faunadb.Client({
      secret: "fnAESd2OZpACTMenvs0bXUZyTrmV9f1SaikDnJID",
    });
    const result = await client.query(
      q.Get(q.Ref(q.Collection("posts"), "309021613848789580"))
    );
    console.log(
      "Document retrived from Container in Database: " + result.data.title
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
