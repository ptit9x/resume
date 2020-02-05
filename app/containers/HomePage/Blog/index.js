import React from 'react';
import { FormattedMessage } from 'react-intl';

import thumb1 from '../../../assets/images/uploads/thumb-449x286-1.jpg';
import thumb2 from '../../../assets/images/uploads/thumb-449x286-5.jpg';
import messages from './messages';

function Blog() {
  return (
    <section id="blog" className="section section-blog">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="blog-grid">
          <div className="grid-sizer" />
          <div className="grid-item">
            <article className="post-box">
              <div className="post-media">
                <div className="post-image">
                  <a href="https://huynhdn.com/lap-trinh/react/cac-thu-vien-ui-dang-dung-cho-reactjs">
                    <img src={thumb1} alt="" />
                  </a>
                </div>
              </div>
              <div className="post-data">
                <time className="post-datetime">
                  <span className="day">19</span>
                  <span className="month">DEC</span>
                </time>
                <div className="post-tag">
                  <a href="https://huynhdn.com/danh-muc/lap-trinh/nodejs/">
                    #NodeJS
                  </a>
                  <a href="https://huynhdn.com/danh-muc/lap-trinh/react/">
                    #React
                  </a>
                </div>
                <h3 className="post-title">
                  <a href="https://huynhdn.com/lap-trinh/react/cac-thu-vien-ui-dang-dung-cho-reactjs">
                    Các thư viện UI đáng dùng cho ReactJS
                  </a>
                </h3>
                <div className="post-info">
                  <a href="https://huynhdn.com/author/huynhdn/">
                    <i className="rsicon rsicon-user" /> by HuynhDN
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="grid-item">
            <article className="post-box">
              <div className="post-media">
                <div className="post-image">
                  <a href="https://huynhdn.com/he-thong/google-cloud/dang-ki-google-cloud-nhan-ngay-300-do-la">
                    <img src={thumb2} alt="" />
                  </a>
                </div>
              </div>
              <div className="post-data">
                <time className="post-datetime">
                  <span className="day">29</span>
                  <span className="month">MARCH</span>
                </time>
                <div className="post-tag">
                  <a href="https://huynhdn.com/danh-muc/he-thong/">#System</a>
                  <a href="https://huynhdn.com/danh-muc/he-thong/google-cloud/">
                    #Google Cloud
                  </a>
                </div>
                <h3 className="post-title">
                  <a href="https://huynhdn.com/he-thong/google-cloud/dang-ki-google-cloud-nhan-ngay-300-do-la">
                    ĐĂNG KÝ TÀI KHOẢN GOOGLE CLOUD NHẬN $300 DÙNG 12 THÁNG.
                  </a>
                </h3>
                <div className="post-info">
                  <a href="https://huynhdn.com/author/huynhdn/">
                    <i className="rsicon rsicon-user" /> by HuynhDN
                  </a>
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
