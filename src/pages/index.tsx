import 'styles/main.scss';
import React from 'react';
import Head from 'next/head';
import Sidebar from 'react-sidebar';
import {HeroSection} from "components/HeroSection/HeroSection";
import {IntroSection} from "components/IntroSection/IntroSection";
import {SpeakersSection} from "components/SpeakersSection/SpeakersSection";
import {Speaker, speakerList} from "db/Speaker";
import {ScheduleSection} from "components/ScheduleSection/ScheduleSection";
import {EtcData} from "db/Etc";
import {WindowUtils} from "utils/WindowUtils";
import {SponsorsSection} from "components/SponsorsSection/SponsorsSection";
import {FooterSection} from "components/FooterSection/FooterSection";
import {SpeakerInfo} from "components/SpeakerInfo/SpeakerInfo";
import css from 'styles/index.scss';

interface IndexPageProps {
}

interface IndexPageState {
  appWidth: number
  selectedSpeaker?: Speaker
}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props) {
    super(props)

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.state = {appWidth: WindowUtils.getWidth()}
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({appWidth: WindowUtils.getWidth()})
    })
  }

  onSetSidebarOpen(open, speaker?: Speaker) {
    if (!open) {
      this.setState({selectedSpeaker: void 0})
    }
    if (open && speaker) {
      this.setState({selectedSpeaker: speaker})
    }
  }

  public render() {
    const {appWidth, selectedSpeaker} = this.state
    return (
      <>
        <Head>
          <title>Welcome to FEConf 2018 - FEConf Korea</title>
          <meta name="description"
                content="2018 FEConf Korea 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
          <meta name="keywords"
                content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,코엑스,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,COEX"/>
          <meta property="og:url" content="https://2018.feconf.kr/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="2018 FEConf Korea"/>
          <meta property="og:description"
                content="FEConf 2018 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
          <meta property="og:image" content="https://2017.feconf.kr/static/img/img-og-feconf.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="2018 FEConf Korea"/>
          <meta name="twitter:description"
                content="FEConf 2018 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 두번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
          <meta name="twitter:creator" content="@hckrmoon"/>
          <meta name="twitter:image" content="https://2017.feconf.kr/static/img/img-og-feconf.png"/>
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="icon" href="static/favicon.ico"/>
          <link rel="stylesheet" href="_next/static/style.css"/>
          <link rel="stylesheet" href="static/styles/normalize.css"/>
          <script dangerouslySetInnerHTML={{
            __html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-68676515-5', 'auto');
                        ga('send', 'pageview');
                    `
          }}/>
        </Head>
        <Sidebar
          sidebar={<SpeakerInfo
            speaker={selectedSpeaker}
            selectSpeaker={this.onSetSidebarOpen}
          />}
          open={!!selectedSpeaker}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
        >
          <div className={css.Content}>
            <HeroSection
              deadline={EtcData.deadline}
              appWidth={appWidth}
            />
            <IntroSection appWidth={appWidth}/>
            <SpeakersSection
              appWidth={appWidth}
              speakerList={speakerList}
              selectSpeaker={this.onSetSidebarOpen}
            />
            <ScheduleSection
              appWidth={appWidth}
              speakerList={speakerList}
            />
            <SponsorsSection
              appWidth={appWidth}
            />
            <FooterSection />
          </div>
        </Sidebar>
      </>
    );
  }
}

export default IndexPage;
