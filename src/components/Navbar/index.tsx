import { Layout, AutoComplete, Input } from "antd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFilters } from "../../features/posts/postsSlice";
import { User } from "../../types";

const { Header } = Layout;

const AppHeader = styled(Header)`
  position: fixed;
  width: 100%;
  color: #ffffff;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 926px 1fr;
`;

const UserNameContainer = styled.span`
  font-weight: 400;
  color: #008dff;
  margin-left: 16px;
`;

const Navbar = () => {
  const users: User[] = useAppSelector((state) => Object.values(state.users));
  const dispatch = useAppDispatch();

  const userOptions = users.map((user) => ({
    value: user.username,
    label: (
      <div>
        <span>{user.name}</span>
        <UserNameContainer>{`@${user.username}`}</UserNameContainer>
      </div>
    ),
  }));

  const onSearch = (searchText: string) => {
    const filterByUserIds = users
      .filter(
        (user) =>
          user.name.toLowerCase()?.includes(searchText.toLowerCase()) ||
          user.username.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((user) => user.id);
    dispatch(setFilters({ userIds: filterByUserIds }));
  };

  return (
    <AppHeader className="site-layout-sub-header-background">
      <div>BRAND</div>
      <div>
        <AutoComplete
          options={userOptions}
          style={{ width: "100%", verticalAlign: 'middle' }}
          onSelect={onSearch}
          onSearch={onSearch}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input.Search size="large" placeholder="Filter by users" />
        </AutoComplete>
      </div>
    </AppHeader>
  );
};

export default Navbar;
