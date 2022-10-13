import { Button } from '../customTextInput/indexCss';
export default function CustomButton(props) {
  const { title, type, width='100%'} = props;
  return (
    <>
      <Button type={type} style={{width:width}}>{title}</Button>
    </>
  )
}




