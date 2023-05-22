import { FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPositions } from '../redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPositions } from '../redux/positions/position-operations';

export const FormPosition = ({ register }) => {
  // const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  return (
    <FormLabel sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Select your position
      <RadioGroup>
        {positions &&
          positions.map(({ id, name }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={
                <Radio
                  {...register('position')}
                  size="small"
                  sx={{
                    color: '#D0CFCF',
                    '&.Mui-checked': {
                      color: '#00BDD3',
                    },
                  }}
                />
              }
              label={name}
            />
          ))}
      </RadioGroup>
    </FormLabel>
  );
};
