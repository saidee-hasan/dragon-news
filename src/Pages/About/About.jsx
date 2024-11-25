import React from 'react';
import Header from '../ShereAble/Header';
import Navbar from '../ShereAble/Navbar';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div>
            <Helmet>
        <title>About | The Dragon News</title>
      </Helmet>
        <Header/>
        <Navbar />
      <div className="container mx-auto px-8 my-12">
        <article className='text-justify flex flex-col gap-4'>
          <p className='text-3xl'>
            <strong>HISTORY</strong>
          </p>
          <p>
            The Dragon News established its place in the media scene of Bangladesh on January 14, 1991. It started its journey with a sense of challenge and a feeling of humility to serve this nation as a truly independent newspaper.
          </p>
          <p>
            The newspaper made its debut at a historic time when, with the fall of an autocratic regime, the country was well set to begin a new era towards establishing a democratic system of government which eluded Bangladesh for too long.
          </p>
          <p className='text-3xl'>
            <strong>OBJECTIVE</strong>
          </p>
          <p>
            The Dragon News carries on with the long-term responsibility is to strengthen public opinion on how the democratic system should work and how to sustain and nurture democratic norms effectively.
          </p>
          <p>
            It was a privilege for The Dragon News to be part of a changing scene after the fall of the military autocrat in the early 1990s. With that privilege came an enormous responsibility of upholding the duties of a free press. The newspaper is proud to pursue that policy without relenting for the past 23 years.
          </p>
          <p className='text-3xl'>
            <strong>VALUES</strong>
          </p>
          <p>
            The uniqueness of The Dragon News lies in its non-partisan position, in the freedom it enjoys from any influence of political parties or vested groups. Its strength is in taking a position of neutrality in conflicts between good and evil, justice and injustice, right and wrong, regardless of positions held by any group or alliance.
          </p>
          <p>
            The paper believes in reporting events objectively, as they are, and without any fear or favor. It is committed to serving the people. That's why people — whether in power or in opposition — respect The Dragon News.
          </p>
          <p>
            The Dragon News advocates the rule of law, human rights, gender issues, national interests, press freedom, transparency, and accountability of people in the administration and in the world of trade and industry on which the newspaper has never compromised, whatever the costs. No political powers can take it for granted, and no one is given cause to doubt its fairness.
          </p>
          <p className='text-3xl'>
            <strong>SOCIAL AND ECONOMIC COMMITMENT</strong>
          </p>
          <p>
            Being well aware of its social responsibilities and duties, the newspaper works to ensure human rights for all, remove gender discrimination, advocate the rule of law, press freedom, transparency, and accountability in the administration and in the world of trade and industry, and above all, uphold national interests. While working for these ends, The Dragon News always maintains utmost sincerity and accountability to serve the nation as it is bound by its norms and values.
          </p>
          <p>
            Besides running news reports on these issues, The Dragon News carries special reports, human-interest stories, features, articles, and essays written by its staff and other professionals and talents from across the country and abroad.
          </p>
          <p>
            During different national crises, the newspaper played an important role in solving those to stop people's sufferings. As it remains alert to its social duties, The Dragon News frequently organizes roundtables, seminars, and discussions on the issues. It also works closely with civil society for this end.
          </p>
          <p>
            To promote young talents, The Dragon News organizes debates and different competitions at school and college levels and awards those who show excellence in different fields.
          </p>
          <p className='text-3xl'>
            <strong>GOVERNING BODY</strong>
          </p>
          <p>
            The newspaper is run by a Board of Directors comprising six members. The head of the body is called Chairman while other members are Directors.
          </p>
          <p>
            The Board of Directors only deals with the income and investment of the newspaper but has nothing to do with policymaking.
          </p>
          <p>
            The responsibility of policymaking lies with the Editor, who is also one of the Directors.
          </p>
          <p>
            ...
            {/* Rest of the content */}
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
