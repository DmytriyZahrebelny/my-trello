import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { useRecoilState } from 'recoil';

import { themeToggleState } from '@store/theme-toggle-state';
import { styles } from '../header.styles';

export const HeaderThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeToggleState);

  const onIconClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div css={styles.themeSwitch} onClick={onIconClick}>
      {theme === 'dark' ? <LightModeIcon /> : <Brightness3Icon />}
    </div>
  );
};
