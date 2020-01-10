import React from 'react';
import { Link } from 'react-router-dom';
import thumb1 from '../../images/uploads/thumb-449x286-1.jpg';
import thumb2 from '../../images/uploads/thumb-449x286-5.jpg';

function Blog() {
  return (
    <section id="blog" className="section section-blog">
      <div className="animate-up">
        <h2 className="section-title">From The Blog</h2>
        <div
          className="blog-grid"
          style={{ position: 'relative', height: '482.734px' }}
        >
          <div className="grid-sizer" />
          <div
            className="grid-item"
            style={{ position: 'absolute', left: '0%', top: '0px' }}
          >
            <article className="post-box">
              <div className="post-media">
                <div className="post-image">
                  <Link to="single.html">
                    <img src={thumb1} alt="" />
                  </Link>
                </div>
              </div>
              <div className="post-data">
                <time
                  className="post-datetime"
                  dateTime="2015-03-13T07:44:01+00:00"
                >
                  <span className="day">03</span>
                  <span className="month">MAY</span>
                </time>
                <div className="post-tag">
                  <Link to="/">#Photo</Link>
                  <Link to="/">#Architect</Link>
                </div>
                <h3 className="post-title">
                  <Link to="single-image.html">Image Post</Link>
                </h3>
                <div className="post-info">
                  <Link to="/">
                    <i className="rsicon rsicon-user" />
                    by admin
                  </Link>
                  <Link to="/">
                    <i className="rsicon rsicon-comments" />
                    56
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div
            className="grid-item"
            style={{ position: 'absolute', left: '50%', top: '0px' }}
          >
            <article className="post-box">
              <div className="post-media">
                <div className="post-image">
                  <Link to="single-vimeo.html">
                    <img src={thumb2} alt="" />
                    <span className="post-type-icon">
                      <i className="rsicon rsicon-play" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="post-data">
                <time
                  className="post-datetime"
                  dateTime="2015-03-13T07:44:01+00:00"
                >
                  <span className="day">03</span>
                  <span className="month">MAY</span>
                </time>
                <div className="post-tag">
                  <Link to="/">#Photo</Link>
                  <Link to="/">#Architect</Link>
                </div>
                <h3 className="post-title">
                  <Link to="single-vimeo.html">Vimeo Video Post</Link>
                </h3>
                <div className="post-info">
                  <Link to="/">
                    <i className="rsicon rsicon-user" />
                    by admin
                  </Link>
                  <Link to="/">
                    <i className="rsicon rsicon-comments" />
                    56
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
