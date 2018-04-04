<p align="center">
  <a href="https://navitia.io" rel="noopener" target="_blank"><img width="400" src="/static/logo.png" alt="GraphQL overlay for Navitia"></a></p>
</p>

<h1 align="center">GraphQL overlay for Navitia</h1>

<div align="center">

<a href="https://graphql.org/" rel="noopener" target="_blank">GraphQL</a> overlay for <a href="https://navitia.io" rel="noopener" target="_blank">Navitia</a>

</div>

## Installation

Install dependencies using <a href="https://github.com/yarnpkg/yarn" rel="noopener" target="_blank">Yarn</a>.

```sh
yarn
```

## Prerequisite

Sign up to <a href="https://navitia.io/register" rel="noopener" target="_blank">Navitia.io</a> and get started with your free plan.

Create an application to get a token.

## Usage

```sh
yarn start
```

And fetch your <a href="http://localhost:4000/graphql" rel="noopener" target="_blank">local API</a> with the following headers:

```sh
Authorization: Basic <base64(token + ':')>
X-Navitia-Coverage: <coverage>
```

## Let's play!

You can use <a href="https://github.com/graphql/graphiql" rel="noopener" target="_blank">GraphiQL</a> to build your own requests.

You have 2 choices, using the <a href="https://navitia-graphiql.herokuapp.com/graphiql">demo</a> or running it locally:

```sh
NODE_ENV=debug yarn start
```

And start playing <a href="http://localhost:4000/graphql" rel="noopener" target="_blank">in the browser IDE</a>.

## Request example

```
{
  autocompletion(q: "Paris", types: [stop_area]) {
    stop_area {
      id,
      label,
      lines {
        name,
        color,
        code
      }
    }
  }
}
```

## What is Navitia?

Navitia is an open-source web API, initially built to provide traveler information on urban transportation networks. Its main purpose is to provide day-to-day informations to travelers. Over time, Navitia has been able to do way more, sometimes for technical and debuging purpose or because other functional needs fit quite well in what Navitia can do or just because it was quite easy and super cool.

You can find further informations in official <a href="https://github.com/CanalTP/Navitia" rel="noopener" target="_blank">Navitia repository</a> or the <a href="http://doc.navitia.io/" rel="noopener" target="_blank">API documentation</a>.

## Contributing

Feel free to contribute :) but don't forget to run:

```sh
yarn test
```
