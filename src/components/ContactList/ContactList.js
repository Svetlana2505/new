import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EllipsisText from 'react-ellipsis-text';
import { fetchUsers } from '../../redux/users/users-operations';
import { Button } from '../Button';
import { Title } from '../Title';
import { Text } from '../Text';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const totalPages = useSelector(state => state.users.totalPages);
  let success = useSelector(state => state.registration.success);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page, success]);

  return (
    <>
      <Title name="users" color={'rgba(0, 0, 0, 0.87)'} marginBottom={'50px'}>
        Working with GET request
      </Title>
      <List>
        {users.map(({ name, email, phone, position, photo, id }) => (
          <Item key={id}>
            <ListItemAvatar>
              <Avatar
                src={photo}
                alt="photo"
                style={{ margin: '0 auto 20px' }}
              />
            </ListItemAvatar>

            <Text color={'rgba(0,0,0,0.87)'} marginBottom={'20px'}>
              <EllipsisText text={name} length={18} />
            </Text>

            <Text color={'rgba(0,0,0,0.87)'}>
              <EllipsisText text={position} length={15} />
            </Text>
            <Text color={'rgba(0,0,0,0.87)'}>
              <EllipsisText text={email} length={20} />
            </Text>
            <Text color={'rgba(0,0,0,0.87)'}>
              {phone}
              {/* <EllipsisText text= length={"13"} /> */}
            </Text>
          </Item>
        ))}
      </List>
      {page !== totalPages && (
        <Button
          onClick={() => {
            setPage(prev => prev + 1);
          }}
        >
          Show more
        </Button>
      )}
    </>
  );
};
