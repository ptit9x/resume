/*
 * HomePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';
import References from './References';
import Prices from './Prices';
import Blog from './Blog';
import TextSection from './TextSection';
import Interests from './Interests';
import Calendar from './Calendar';
import Contact from './Contact';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Trang chu" />
      </Helmet>
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <References />
      <Prices />
      <Blog />
      <TextSection />
      <Interests />
      <Calendar />
      <Contact />
    </div>
  );
}
