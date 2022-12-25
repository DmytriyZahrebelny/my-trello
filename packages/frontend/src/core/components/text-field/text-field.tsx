import { TextField as MUITextField } from '@mui/material';
import { useFormContext, useController } from 'react-hook-form';
import { css } from '@emotion/react';

const textFieldStyle = css`
  width: 100%;
`;

interface Props {
  name: string;
  label: string;
}

export const TextField = ({ name, label }: Props) => {
  const { control } = useFormContext();
  const { field } = useController({ control, name });

  return <MUITextField css={textFieldStyle} {...field} label={label} />;
};
