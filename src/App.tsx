import { Layout } from 'antd';
import styled from 'styled-components'

import Navbar from './components/Navbar';
import AppFooter from './components/Footer';

import Feeds from './features/posts/Posts';

const { Content } = Layout;

const Container = styled(Content)`
  width: 976px;
  margin: 64px auto 0;
`;

const Main = styled.div`
  min-height: calc(100vh - 48px - 86px);
  padding: 24px;
`;

function App() {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Main className="site-layout-background">
          <Feeds />
        </Main>
      </Container>
      <AppFooter />
    </Layout>
  );
}

export default App;
