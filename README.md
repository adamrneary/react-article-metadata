# react-article-metadata

A simple React component to insert Readability-style article metadata

## Introduction

See [https://www.readability.com/developers/guidelines](https://www.readability.com/developers/guidelines) for an explanation of article publishing guidelines.

This component simply inserts the author and publication date fields, but
future versions could include other relevant data.

## Getting started

Install via npm:

```bash
npm install --save react-article-metadata
```

Then simply require and pass a gistId.

```js
var ArticleMetadata = require('react-article-metadata');

<ArticleMetadata author='Adam Neary' dateTimeString='2014-02-03'/>
```
