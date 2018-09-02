import React from 'react';
import Head from 'next/head';
import '../styles/main.scss';
import css from '../styles/index.scss';
import {HeroSection} from "../components/HeroSection/HeroSection";
import {IntroSection} from "../components/IntroSection/IntroSection";

interface IndexPageProps {}

interface IndexPageState {}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    public render() {
        return (
            <>
                <Head>
                    <title>Welcome to FEConf 2018 - FEConf Korea</title>
                    <meta name="description" content="2018 FEConf Korea 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
                    <meta name="keywords" content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,코엑스,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,COEX"/>
                    <meta property="og:url" content="https://2018.feconf.kr/"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="2018 FEConf Korea"/>
                    <meta property="og:description" content="FEConf 2018 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
                    <meta property="og:image" content="https://2018.feconf.kr/static/img/img-og-feconf.png"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="2018 FEConf Korea"/>
                    <meta name="twitter:description" content="FEConf 2018 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
                    <meta name="twitter:creator" content="@hckrmoon"/>
                    <meta name="twitter:image" content="https://2018.feconf.kr/static/img/img-og-feconf.png"/>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="/_next/static/style.css"/>
                    <link rel="stylesheet" href="/static/styles/normalize.css"/>
                    <script dangerouslySetInnerHTML={{__html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-68676515-5', 'auto');
                        ga('send', 'pageview');
                    `}}/>
                </Head>
                <div className={css.Content}>
                    <HeroSection />
                    <IntroSection />
                </div>
            </>
        );
    }
}

export default IndexPage;
