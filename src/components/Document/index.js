import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document as Pdf, Page } from 'react-pdf';
import PropTypes from 'prop-types';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Document extends Component {
  renderImage = file => (
    <img
      src={file.preview}
      style={{ width: '249px', height: '193px' }}
      alt="Documento"
    />
  );

  renderPdf = file => (
    <Pdf
      rotate={270}
      file={file}
    >
      <Page
        width={250}
        pageNumber={1}
      />
    </Pdf>
  );

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
