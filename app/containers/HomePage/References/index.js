import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import avatar from '../../../assets/images/uploads/rs-avatar-60x60.jpg';

function References() {
  const elements = [
    {
      id: 1,
      personSpeech:
        'I confirm that New Company Ltd has been a customer of ours since',
      personName: 'Hai',
      personTitle: 'Hybrid-Technologies, Leader',
    },
    {
      id: 2,
      personSpeech:
        'I confirm that New Company Ltd has been a customer of ours since',
      personName: 'Bao',
      personTitle: 'Hybrid-Technologies, BrSE',
    },
    {
      id: 3,
      personSpeech:
        'I confirm that New Company Ltd has been a customer of ours since',
      personName: 'Hung',
      personTitle: 'FPT, Developer',
    },
  ];

  const ref = useRef(null);
  const [iSlide, setIslide] = useState(0);
  const [widthElement, setWidthElement] = useState(810);

  const onChangeNext = () => {
    const count = elements.length;
    const width = ref.current ? ref.current.offsetWidth : 0;
    if (iSlide + 1 < count - 1) {
      setWidthElement(widthElement + width);
      setIslide(iSlide + 1);
    }
  };

  const onChangePrev = () => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    if (iSlide > -1) {
      setWidthElement(widthElement - width);
      setIslide(iSlide - 1);
    }
  };
  return (
    <section id="references" className="section section-references">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="section-box">
          <div
            className="bx-wrapper"
            style={{ maxWidth: '100%', margin: '0px auto' }}
          >
            <div
              className="bx-viewport"
              style={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                height: '282px',
              }}
              ref={ref}
            >
              <ul
                className="ref-slider"
                style={{
                  width: '515%',
                  position: 'relative',
                  transitionDuration: '0.8s',
                  transform: `translate3d(-${widthElement}px, 0px, 0px)`,
                }}
              >
                {elements.map(v => (
                  <li
                    style={{
                      float: 'left',
                      listStyle: 'none',
                      position: 'relative',
                      width: '810px',
                    }}
                    className="bx-clone"
                    key={v.id}
                  >
                    <div className="ref-box">
                      <div className="person-speech">
                        <p>{v.personSpeech}</p>
                      </div>
                      <div className="person-info clearfix">
                        <img
                          className="person-img"
                          src={avatar}
                          alt="Headshot"
                        />
                        <div className="person-name-title">
                          <span className="person-name">{v.personName}</span>
                          <span className="person-title">{v.personTitle}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bx-controls" />
          </div>
          <div className="ref-slider-nav">
            <span id="ref-slider-prev" className="slider-prev">
              <button className="bx-next" type="button" onClick={onChangeNext}>
                <i className="rsicon rsicon-chevron_right" />
              </button>
            </span>
            <span id="ref-slider-next" className="slider-next">
              <button className="bx-prev" type="button" onClick={onChangePrev}>
                <i className="rsicon rsicon-chevron_left" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
