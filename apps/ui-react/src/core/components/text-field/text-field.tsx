import { TextField as MUITextField } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { useFormContext, useController } from 'react-hook-form';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

const textFieldStyle = css`
  width: 100%;
`;

interface Props {
  name: string;
  label: string;
  styles?: (theme: Partial<Theme>) => SerializedStyles;
}

export const TextField = ({ name, label, styles }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name });

  return (
    <MUITextField
      css={[textFieldStyle, styles]}
      {...field}
      label={label}
      value={(field.value as string) || ''}
      error={Boolean(fieldState.error?.message)}
      helperText={fieldState.error?.message}
    />
  );
};
