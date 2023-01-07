import { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { css } from '@emotion/react';

interface Props {
  name: string;
  label?: string;
}

const passwordStyle = css`
  width: 100%;
`;

export const Password = ({ name, label = 'password' }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name });
  const [showPassword, setShowPassword] = useState(false);

  const onShowPasswordClick = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormControl error={Boolean(fieldState.error?.message)} variant="outlined" css={passwordStyle}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        {...field}
        id={name}
        label={label}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={onShowPasswordClick}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {fieldState.error?.message && <FormHelperText>{fieldState.error?.message}</FormHelperText>}
    </FormControl>
  );
};
