import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { OPEN_MODAL } from '../constants/type';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
          Reactivities
        </Menu.Item>
        <>
          <Menu.Item to="/activities" name="Activities" />
          <Menu.Item to="/errors" name="Errors" />
          <Menu.Item>
            <Button
              onClick={() => dispatch({ type: OPEN_MODAL })}
              onto="/createActivity"
              positive
              content="Create Activity"
            />
          </Menu.Item>
        </>
      </Container>
    </Menu>
  );
};

export default Navbar;
