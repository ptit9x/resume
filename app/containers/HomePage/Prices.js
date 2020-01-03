import React from 'react';
import { Link } from 'react-router-dom';

function Prices() {
  return (
    <section id="prices" className="section section-prices">
      <div className="animate-up">
        <h2 className="section-title">Pricing</h2>
        <div className="row price-list">
          <div className="col-sm-4">
            <div className="price-box" style={{ height: '627px' }}>
              <div className="price-box-top">
                <span>$16</span>
                <small>/mo</small>
              </div>
              <div className="price-box-content">
                <h3>Basic</h3>
                <ul>
                  <li>Manage tasks</li>
                  <li>Discussions in tasks</li>
                  <li>
                    File sharing
                    <span className="new">new</span>
                  </li>
                  <li>
                    <del>Real-time Activity Stream</del>
                  </li>
                  <li>
                    <del>Spreadsheet View</del>
                  </li>
                  <li>
                    <del>iPhone and Android apps</del>
                  </li>
                  <li>
                    <del>Advanced email integration</del>
                  </li>
                  <li>
                    <del>Basic Integrations</del>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-lg btn-border"
                    to="http://themeforest.net/user/px-lab/portfolio?ref=PX-lab"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="price-box box-primary" style={{ height: '627px' }}>
              <div className="price-box-top">
                <span>$50</span>
                <small>/mo</small>
              </div>
              <div className="price-box-content">
                <h3>Professional</h3>
                <ul>
                  <li>Manage tasks</li>
                  <li>Discussions in tasks</li>
                  <li>
                    File sharing
                    <span className="new">new</span>
                  </li>
                  <li>Real-time Activity Stream</li>
                  <li>
                    Spreadsheet View <span className="new">new</span>
                  </li>
                  <li>
                    <del>iPhone and Android apps</del>
                  </li>
                  <li>
                    <del>Advanced email integration</del>
                  </li>
                  <li>
                    <del>Basic Integrations</del>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-lg btn-border"
                    to="http://themeforest.net/user/px-lab/portfolio?ref=PX-lab"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="price-box" style={{ height: '627px' }}>
              <div className="price-box-top">
                <span>$250</span>
                <small>/mo</small>
              </div>
              <div className="price-box-content">
                <h3>Enterprise</h3>
                <ul>
                  <li>Manage tasks</li>
                  <li>Discussions in tasks</li>
                  <li>
                    File sharing <span className="new">new</span>
                  </li>
                  <li>Real-time Activity Stream</li>
                  <li>
                    Spreadsheet View <span className="new">new</span>
                  </li>
                  <li>iPhone and Android apps</li>
                  <li>Advanced email integration</li>
                  <li>Basic Integrations</li>
                </ul>
                <div className="btn-wrap">
                  <Link
                    className="btn btn-lg btn-border"
                    to="http://themeforest.net/user/px-lab/portfolio?ref=PX-lab"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
