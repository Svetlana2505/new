import * as React from 'react';

// import { Box } from "@mui/material";
import { CssTextField } from './CssTextField';

import styled from 'styled-components';

const Box = styled.div`
  margin-bottom: 43px;
`;

export const BoxRegister = ({ register, errors }) => {
  return (
    <Box
      // component="form"
      noValidate
      autoComplete="off"
      sx={{ marginBottom: '43px' }}
    >
      <CssTextField
        sx={{ marginBottom: '25px' }}
        type="text"
        name="name"
        label="Your name"
        {...register('name', {
          required: 'Обязательное поле',
          minlength: {
            value: 3,
            message: 'Минимум 3 символа',
          },
        })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : null}
      />
      <CssTextField
        sx={{ marginBottom: '25px' }}
        type="email"
        name="email"
        label="Email"
        {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value:
              /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
            message: 'Не валидный Email',
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : null}
      />
      <CssTextField
        type="number"
        name="number"
        label="Phone"
        {...register('number', {
          required: 'Обязательное поле',
          pattern: {
            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/,
            message: '+38 (XXX) XXX - XX - XX',
          },
        })}
        error={!!errors.number}
        helperText={errors.number ? errors.number.message : null}
      />
    </Box>
  );
};
