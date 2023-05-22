import { Item, List } from './ContactList.styled';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
// import { addUsers } from 'redux/users/users-operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectElem, selectTotalPages } from 'redux/selectors';
import { useState, useEffect } from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { fetchUsers } from 'redux/users/users-operations';

export const ContactList = () => {
  const [page, setPage] = useState(1);
  const users = useSelector(selectElem);
  console.log(users);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <>
      <Title name="users" color={'rgba(0, 0, 0, 0.87)'}>
        Working with GET request
      </Title>
      <List>
        {users?.map(
          ({ name, email, phone, position_id, photo, id, position }) => (
            <Item key={id}>
              {/* <img  alt="contact"  /> */}
              <ListItemAvatar>
                <Avatar
                  src={photo}
                  alt="photo"
                  style={{ margin: '0 auto 20px' }}
                />
              </ListItemAvatar>
              <Text color={'rgba(0, 0, 0, 0.87)'} marginBottom={'20px'}>
                {name}
              </Text>
              <Text color={'rgba(0, 0, 0, 0.87)'}>{position}</Text>
              <Text color={'rgba(0, 0, 0, 0.87)'}>{email}</Text>
              <Text color={'rgba(0, 0, 0, 0.87)'}>{phone}</Text>
            </Item>
          )
        )}
      </List>
      {page !== totalPages && (
        <Button
          margin={'auto'}
          width={'120px'}
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
