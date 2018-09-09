import { NextContext, NextStatelessComponent } from 'next';
import App, { Container } from 'next/app';
import { RouterProps } from 'next/router';
import React from 'react';
import 'styles/main.scss';

interface MyNextContext {
  Component: NextStatelessComponent;
  router: RouterProps;
  ctx: NextContext;
}

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: MyNextContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { Component, pageProps };
  }

  public props: any;

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
