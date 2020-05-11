import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import PageHeader from 'components/page-header';
import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';
import Site from 'components/site';
import {Inner} from 'components/system';

const ProfilePage = ({data}) => {
  const meta = data.site.siteMetadata;
  return (
    <Site>
      <main>
        <Helmet title={`Profile - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`Profile - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Profile" />
        <Inner>
          <img style={{marginBottom: '20px'}} width="100%" src="/static/IMG_20191001_080900_885.jpg"></img>
          <Section>
            <P>
            Hello! I’m Toto, a software engineer. I like coding, especially using Javascript. I hope to contribute to developing Javascript code from some small things that I can make. I also like to explore new technology and make some notes about it in order to try to understand it. 
            </P>
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            <P fontWeight={500}>Pedihelp (2018 - 2019)</P>
            <P>
            I have to understand about the newly founded startup, in which we work tirelessly day and night without payment to finish our product. Now, Pedihelp.id has been funded, so we can build our tech stack infrastructure.
            </P>
            <P fontWeight={500}>Emago (2018 - 2019)</P>
            <P>
              A startup with cloud gaming service which enables everyone to play games without  installing it first on their PC (they play it directly from the server).
              https://www.gameqoo.id
            </P>

            <P fontWeight={500}>Omnicreativora (2017 - 2018)</P>
            <P>
            In Omnicreativora I learned a lot about SCRUM project management to design and code a  project of a University’s website. This project’s features is an online library, in which the  user can borrow and read the digital book.
            </P>
          </Section>

          <Section>
            <SectionTitle>Personal projects</SectionTitle>
            <Text>
              <a href="https://github.com/totorubianto">
                Awesome Design Systems - A collection of design systems
              </a>
            </Text>
            <Text>
              <a href="https://inward.audio">
                Inward Audio - Realtime techno/giphy visualisation
              </a>
            </Text>
            <Text>
              <a href="https://github.com/totorubianto">
                Flymark - On the fly markdown conversion microservice
              </a>
            </Text>
          </Section>

          {/* <Section>
            <SectionTitle>Writing</SectionTitle>
            <Text>Net mag - side project of the month: JuniorJobs (2017)</Text>
            <Text>
              Net mag - How to get started with pattern libraries (2016)
            </Text>
            <Text>Net mag - Design Challenge (2014)</Text>
            <Text>WebDesignerMag - Spotlight Interview (2014)</Text>
          </Section> */}
          <Section>
            <SectionTitle>Resume</SectionTitle>
            <Text>
              <a href="https://drive.google.com/file/d/1EMIH2JWmjLn3ZMamEDwE_kqBRLXnhhkD/view?usp=sharing">
                Download as PDF
              </a>
            </Text>
          </Section>
        </Inner>
      </main>
    </Site>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProfileQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
      }
    `}
    render={data => <ProfilePage data={data} />}
  />
);
