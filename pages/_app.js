import React from "react";
import App from "next/app";
import Head from "next/head";
import '../styles/css/web.css';


export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>คอร์สเรียนภาษาซี</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
