import { ThemeColors } from '../../theme/theme';
import { Button } from '../customTextInput/indexCss';
export default function CustomButton(props) {
  const { title,  type,width = '99%' } = props;
  // define your styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: ThemeColors.primary,
      borderRadius: 5,
      width: width,
      cursor: 'pointer',
      padding: '0 15px 0 15px',
    },
    title: {
      color: ThemeColors.white,
      fontSize: '20px',
    },
  };

  return (
    <div style={styles.container} >
      <Button type={type}>{title}</Button>
    </div>
  )
}




