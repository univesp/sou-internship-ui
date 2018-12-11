import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Document extends Component {
  renderImage = file => (
    <img
      src={file.preview}
      style={{ width: '100%', height: '200px' }}
      alt="Documento"
    />
  );

  renderPdf = file => <PdfPreview src={file.preview} scale="1" />;

  render() {
    const { file } = this.props;
    return file.type === 'application/pdf'
      ? this.renderPdf(file)
      : this.renderImage(file);
  }
}

Document.propTypes = {
  file: PropTypes.shape().isRequired
};

export default Document;
