import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const AppHeader = styled(Header)`
  position: fixed;
  width: 100%;
  color: #ffffff;
  z-index: 1;
`;

const Navbar = () => (
  <AppHeader className="site-layout-sub-header-background">
    POSTS  
  </AppHeader>
);

export default Navbar;
