import React from 'react';
import portfolio1 from '../../assets/images/uploads/portfolio/portfolio-thumb-05-610x600.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="section section-portfolio">
      <div className="animate-up">
        <h2 className="section-title">Portfolio</h2>
        <div className="filter">
          <div className="filter-inner">
            <div className="filter-btn-group">
              <button data-filter="*" className="active">
                All
              </button>
              <button data-filter=".photography">Photography</button>
              <button data-filter=".nature">Nature</button>
            </div>
            <div className="filter-bar">
              <span
                className="filter-bar-line"
                style={{ left: '0px', width: '35px' }}
              />
            </div>
          </div>
        </div>
        <div
          className="grid"
          style={{ position: 'relative', height: '597.25px' }}
        >
          <div className="grid-sizer" />
          <div
            className="grid-item size22 photography"
            style={{ position: 'absolute', left: '0%', top: '0px' }}
          >
            <div className="grid-box">
              <figure className="portfolio-figure">
                <img src={portfolio1} alt="" />
                <figcaption className="portfolio-caption">
                  <div className="portfolio-caption-inner">
                    <h3 className="portfolio-title">Street Photography</h3>
                    <h4 className="portfolio-cat">Photography</h4>
                    <div className="btn-group">
                      <a
                        className="btn-link"
                        href="http://bit.ly/1YtB8he"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-link" />
                      </a>
                      <a
                        className="portfolioFancybox btn-zoom"
                        data-fancybox-group="portfolioFancybox1"
                        href="#portfolio1-inline1"
                      >
                        <i className="rsicon rsicon-eye" />
                      </a>
                      <a
                        className="portfolioFancybox hidden"
                        data-fancybox-group="portfolioFancybox1"
                        href="#portfolio1-inline2"
                      />
                      <a
                        className="portfolioFancybox hidden"
                        data-fancybox-group="portfolioFancybox1"
                        href="#portfolio1-inline3"
                      />
                    </div>
                  </div>
                </figcaption>
              </figure>
              {/* Start: Portfolio Inline Boxes */}
              <div id="portfolio1-inline1" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="image"
                  data-embed-url="../../imgages/uploads/portfolio/portfolio-thumb-05-large.jpg"
                />
                <div className="inline-cont">
                  <h2 className="inline-title">
                    Street photography is photography that features the chance
                    encounters and random accidents within public places.
                  </h2>
                  <div className="inline-text">
                    <p>
                      Street photography does not necessitate the presence of a
                      street or even the urban environment. Though people
                      usually feature directly, street photography might be
                      absent of people and can be an object or environment where
                      the image projects a decidedly human character in
                      facsimile or aesthetic.
                    </p>
                  </div>
                </div>
              </div>
              <div id="portfolio1-inline2" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="image"
                  data-embed-url="../../imgages/uploads/portfolio/portfolio-thumb-01-large.jpg"
                />
                <div className="inline-cont">
                  <div className="inline-text">
                    <h2 className="inline-title">Framing and timing</h2>
                    <p>
                      Framing and timing can be key aspects of the craft with
                      the aim of some street photography being to create images
                      at a decisive or poignant moment. Street photography can
                      focus on emotions displayed, thereby also recording
                      people's history from an emotional point of view.
                    </p>
                  </div>
                </div>
              </div>
              <div id="portfolio1-inline3" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="iframe"
                  data-embed-url="https://player.vimeo.com/video/118244244"
                />
                <div className="inline-cont">
                  <div className="inline-text">
                    <h2 className="inline-title">
                      A Look Into Documenting Street Fashion Photography
                    </h2>
                    <p>
                      HB Nam is an internationally known street fashion
                      photographer. In this Leica Camera Portrait, Nam explains
                      how he started in photography and what photography means
                      to him. For Nam, it's about documenting what's around him
                      and the concentration required to achieve a good shot.
                    </p>
                  </div>
                </div>
              </div>
              {/* End: Portfolio Inline Boxes */}
            </div>
          </div>
          {/* .grid-item */}
          <div
            className="grid-item size11 bridge"
            style={{ position: 'absolute', left: '66.5957%', top: '0px' }}
          >
            <div className="grid-box">
              <figure className="portfolio-figure">
                <img
                  src="img/uploads/portfolio/portfolio-thumb-11-289x281.jpg"
                  alt=""
                />
                <figcaption className="portfolio-caption">
                  <div className="portfolio-caption-inner">
                    <h3 className="portfolio-title">Suspension Bridge</h3>
                    <h4 className="portfolio-cat">Bridge</h4>
                    <div className="btn-group">
                      <a
                        className="btn-link"
                        href="http://bit.ly/1YtB8he"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-link" />
                      </a>
                      <a
                        className="portfolioFancybox btn-zoom"
                        data-fancybox-group="portfolioFancybox2"
                        href="#portfolio2-inline1"
                      >
                        <i className="rsicon rsicon-eye" />
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              {/* Start: Portfolio Inline Boxes */}
              <div id="portfolio2-inline1" className="fancybox-inline-box">
                <div className="inline-cont">
                  <h2 className="inline-title">
                    Suspension Bridges - Design Technology
                  </h2>
                  <div className="inline-text">
                    <p>
                      Suspension bridges in their simplest form were originally
                      made from rope and wood. Modern suspension bridges use a
                      box section roadway supported by high tensile strength
                      cables. In the early nineteenth century, suspension
                      bridges used iron chains for cables. The high tensile
                      cables used in most modern suspension bridges were
                      introduced in the late nineteenth century.
                      <br />
                      Today, the cables are made of thousands of individual
                      steel wires bound tightly together. Steel, which is very
                      strong under tension, is an ideal material for cables; a
                      single steel wire, only 0.1 inch thick, can support over
                      half a ton without breaking.
                    </p>
                    <p>
                      Light, and strong, suspension bridges can span distances
                      from 2,000 to 7,000 feet far longer than any other kind of
                      bridge. They are ideal for covering busy waterways.
                    </p>
                    <p>
                      With any bridge project the choice of materials and form
                      usually comes down to cost. Suspension bridges tend to be
                      the most expensive to build. A suspension bridge suspends
                      the roadway from huge main cables, which extend from one
                      end of the bridge to the other. These cables rest on top
                      of high towers and have to be securely anchored into the
                      bank at either end of the bridge. The towers enable the
                      main cables to be draped over long distances. Most of the
                      weight or load of the bridge is transferred by the cables
                      to the anchorage systems. These are imbedded in either
                      solid rock or huge concrete blocks. Inside the anchorages,
                      the cables are spread over a large area to evenly
                      distribute the load and to prevent the cables from
                      breaking free.
                    </p>
                    <p>
                      The Arthashastra of Kautilya mentions the construction of
                      dams and bridges.A Mauryan bridge near Girnar was surveyed
                      by James Princep. The bridge was swept away during a
                      flood, and later repaired by Puspagupta, the chief
                      architect of emperor Chandragupta I. The bridge also fell
                      under the care of the Yavana Tushaspa, and the Satrap
                      Rudra Daman. The use of stronger bridges using plaited
                      bamboo and iron chain was visible in India by about the
                      4th century. A number of bridges, both for military and
                      commercial purposes, were constructed by the Mughal
                      administration in India.
                    </p>
                  </div>
                </div>
              </div>
              {/* End: Portfolio Inline Boxes */}
            </div>
          </div>
          {/* .grid-item */}
          <div
            className="grid-item size11 nature photography"
            style={{ position: 'absolute', left: '66.5957%', top: '298px' }}
          >
            <div className="grid-box">
              <figure className="portfolio-figure">
                <img
                  src="img/uploads/portfolio/portfolio-thumb-08-289x281.jpg"
                  alt=""
                />
                <figcaption className="portfolio-caption">
                  <div className="portfolio-caption-inner">
                    <h3 className="portfolio-title">Rocky Mountains</h3>
                    <h4 className="portfolio-cat">Nature, Photography</h4>
                    <div className="btn-group">
                      <a
                        className="btn-link"
                        href="http://bit.ly/1YtB8he"
                        target="_blank"
                      >
                        <i className="rsicon rsicon-link" />
                      </a>
                      <a
                        className="portfolioFancybox btn-zoom"
                        data-fancybox-group="portfolioFancybox3"
                        href="#portfolio3-inline1"
                      >
                        <i className="rsicon rsicon-eye" />
                      </a>
                      <a
                        className="portfolioFancybox hidden"
                        data-fancybox-group="portfolioFancybox3"
                        href="#portfolio3-inline2"
                      />
                      <a
                        className="portfolioFancybox hidden"
                        data-fancybox-group="portfolioFancybox3"
                        href="#portfolio3-inline3"
                      />
                    </div>
                  </div>
                </figcaption>
              </figure>
              {/* Start: Portfolio Inline Boxes */}
              <div id="portfolio3-inline1" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="image"
                  data-embed-url="img/uploads/portfolio/portfolio-thumb-08-large.jpg"
                />
              </div>
              <div id="portfolio3-inline2" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="image"
                  data-embed-url="img/uploads/portfolio/portfolio-thumb-04-large.jpg"
                />
              </div>
              <div id="portfolio3-inline3" className="fancybox-inline-box">
                <div
                  className="inline-embed"
                  data-embed-type="image"
                  data-embed-url="img/uploads/portfolio/portfolio-thumb-02-large.jpg"
                />
              </div>
              {/* End: Portfolio Inline Boxes */}
            </div>
          </div>
          {/* .grid-item */}
        </div>
        <div className="grid-more">
          <span className="ajax-loader" />
          <button className="btn btn-border ripple">
            <i className="rsicon rsicon-add" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
