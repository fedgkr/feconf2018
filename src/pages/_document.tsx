import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class extends Document {
  public render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
