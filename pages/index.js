import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import PintForm from '../components/pintForm';

class Home extends React.Component {
  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Welcome"
      >
        <div className="home">
          <div className="splash-image">
            <div className="container">
              <div className="popover">
                <h1>Buy a pint for yourself or your friend from anywhere around the globe</h1>

                <PintForm size="large" />

                <div className="button-container">
                  <Link href="/listings">
                    <a className="btn btn-primary">Show pubs</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .home {
            width: 100%;
            position: absolute;
            top: 160px;
            left: 0;
            right: 0;
            bottom: 0;
          }

          h1 {
            font-size: 27px;
            font-weight: 600;
            color: #202020;
            width: 70%;
            margin-bottom: 30px;
          }

          .splash-image {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
            vertical-align: bottom;

            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0) 50%,
                #ffffff 100%
              ),
              url(https://vinepair.com/wp-content/uploads/2019/03/perfect-guinness-header.jpg)
                no-repeat;
            background-size: cover;
            background-position: center center;
          }

          .popover {
            padding: 20px;
            position: relative;
            width: 100%;

            background: #ffffff;
            border: 0;
            box-shadow: 0 15px 35px 0 rgba(50, 50, 93, 0.1),
              0 5px 15px 0 rgba(0, 0, 0, 0.07);
            border-radius: 6px;
          }

          @media (min-width: 768px) {
            .popover {
              padding: 40px;
              width: 500px;
              max-width: 500px;
            }
          }
          .booking-form {
            width: 100%;
            margin: 20px 0;
          }

          .button-container {
            display: flex;
            justify-content: flex-end;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
