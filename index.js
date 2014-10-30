'use strict';

var React = require('react');
var PropTypes = require('react/lib/ReactPropTypes');
var moment = require('moment');

// https://gist.github.com/jeremiahlee/1748966
var ReactArticleMetadata = React.createClass({
  displayName: 'ReactArticleMetadata',
  propTypes: {
    dateTimeString: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  },
  render: function() {

    var time = DOM.time({
        className: 'published',
        datetime: moment(this.props.dateTimeString).format()
      },
      moment(this.props.dateTimeString).format('MMMM Do, YYYY')
    );

    var fullName = DOM.span({
      className: 'fn'
    }, this.props.author);

    var author = DOM.div({
      className: 'byline author vcard'
    }, fullName);

    var container = DOM.div({
      className: 'metadata'
    }, [time, author]);

    return container;
  }
});

module.exports = ReactArticleMetadata;
