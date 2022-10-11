import { ThemeColors } from '../../theme/theme';
export default function CustomButton(props) {
  const { title, onClick } = props;
  // define your styles
  const styles = {
    container: {
      textAlign: 'center',
      backgroundColor: ThemeColors.primary,
      borderRadius: 5,
      height:`calc(100px - 50px)`,
      width:"100%"
    },
    title: {
      color: ThemeColors.white,
      fontSize:'20px',
      lineHeight:'20px',
      textAlign: 'center',
      padding:10
    },
  };
  return (
    <div style={styles.container} onClick={() =>{onClick()}}>
      <div>
        <p style={styles.title}>{title}</p>
      </div>
    </div>
  )
}




