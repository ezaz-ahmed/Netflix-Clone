import { Fragment } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/Jumbotron';
import { OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';

const Home = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder='Email address' />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default Home;
