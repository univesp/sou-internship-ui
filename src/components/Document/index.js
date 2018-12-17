import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document as Pdf, Page } from 'react-pdf';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';

import {
  Image,
  Card,
  HeaderCard,
  Name,
  Icons,
  Icon,
  ContentCard,
  FooterCard,
  FileName
} from './styles';
import PdfIcon from '../../assets/imgs/pdf.svg';
import ImageIcon from '../../assets/imgs/imagem.svg';
import DownloadIcon from '../../assets/imgs/download.svg';
import OpenIcon from '../../assets/imgs/abrir.svg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Document extends Component {
  renderImage = file => <Image src={file.preview} alt={file.name} />;

  renderPdf = file => (
    <Pdf rotate={270} file={file.preview}>
      <Page width={250} pageNumber={1} />
    </Pdf>
  );

  render() {
    const { file: fileProps, name, document } = this.props;
    const file =
      JSON.stringify(fileProps) === '{}'
        ? localStorage.getItem(document)
        : fileProps;
    console.log(file);
    return (
      <Card>
        <HeaderCard>
          <Name>{name}</Name>
          <Icons>
            <a href={file.preview} target="_blank">
              <Icon icon={OpenIcon} action={true} />
            </a>
          </Icons>
        </HeaderCard>
        <ContentCard>
          {file.type === 'application/pdf'
            ? this.renderPdf(file)
            : this.renderImage(file)}
        </ContentCard>
        <FooterCard>
          <Icon icon={file.type === 'application/pdf' ? PdfIcon : ImageIcon} />
          <FileName>{file.name}</FileName>
        </FooterCard>
      </Card>
    );
  }
}

Document.propTypes = {
  file: PropTypes.shape().isRequired
};

export default Document;
