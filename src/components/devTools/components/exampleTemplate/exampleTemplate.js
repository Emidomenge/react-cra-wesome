import { Button, Well } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

const ExampleTemplate = (props) => {
  const {
    codeAsString, prismLanguageType, children, linkToDoc, title, importLibString,
  } = props;
  return (
    <Well bsSize="large">
      <span className="f1 b mr3">
        {title}
        {' '}
-
      </span>
      <Button bsStyle="primary" href={linkToDoc} target="_blank">More info</Button>
      <p>
        {'Example:'}
      </p>
      {children}
      <p className="mt3">
        {'Code:'}
      </p>
      <pre>
        <code className={prismLanguageType}>
          {importLibString && `\n${importLibString} \n\n\n`}
          {codeAsString}
        </code>
      </pre>
    </Well>
  );
};


ExampleTemplate.propTypes = {
  children: PropTypes.object,
  codeAsString: PropTypes.string,
  prismLanguageType: PropTypes.string,
  linkToDoc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  importLibString: PropTypes.string,
};

ExampleTemplate.defaultProps = {
  codeAsString: '',
  prismLanguageType: 'language-markup',
  importLibString: undefined,
};

export default ExampleTemplate;
