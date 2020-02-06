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
import Blog from './Blog';
import Interests from './Interests';
import CalendarSection from './CalendarSection';
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
      <Blog />
      <Interests />
      <CalendarSection />
      <Contact />
    </div>
  );
}
