
import { ThemeColors } from '../../theme/theme';
export default function customButton() {
  // define your styles
const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.primary,
    borderRadius: 5,
  },
  title: {
    color: ThemeColors.white,
  },
};
  return (
    <div  style={{backgroundColor:styles.container.backgroundColor,borderRadius:styles.container.borderRadius}}>
      <div>
        <p style={{color:styles.title.color}}>Login</p>
      </div>
    </div>
  )
}



 
