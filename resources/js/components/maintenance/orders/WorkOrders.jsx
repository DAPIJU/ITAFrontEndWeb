import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Menu from '../../Menu';
import Footer from '../../Footer';
import Stack from 'react-bootstrap/Stack';
import IconOrdersUser from '/src/IconsOrders/IconOrdersUser.png';
import IconApprovedUser from '/src/IconsOrders/IconApprovedUser.png';
import IconEarringsUser from '/src/IconsOrders/IconEarringsUser.png';
import IconReleasedUser from '/src/IconsOrders/IconReleasedUser.png';

const theme = {
  nav:{
    backgroundColor:"#1B396A"
  },
  bg: {
    backgroundColor: 'white',
  },
  logo: {
    alignContent: "center",
    width: 70,
    height: 70
  },
  navImg:{
    alignContent: "center",
    weith: 40,
    height: 40
  },
  header: {
    color: 'black',
    fontSize: '96px',
    fontFamily: 'Montserrat'
  },
  fControl: {
    backgroundColor: "#ECECEC",
    borderColor: "black",
    fontFamily: 'Montserrat',
    fontSize: '20px',
    width: '17%',
    borderRadius: 50
  },
  fHText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '20px'
  },
  fDText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '30px'
  },
  button: {
    color: 'black',
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: 30
  },
  optionIcons: {
    align: "center",
    width: 450,
    height: 130
  }
};

const card = {
  backgroundColor: "blue"
};
  
function WorkOrders(){
    return (
      <>
      <Menu/>
      <section>
        <br/>
        <Container>
        <Stack align="center" gap={3}> 
            <div><img className='mb-3' src={IconOrdersUser} style={theme.optionIcons} /></div>
            <Stack direction="horizontal" gap={5}>
            <div/> 
            <div><img className='mb-3' src={IconEarringsUser} style={theme.optionIcons}/></div>
            <div/>
            <div><img className='mb-3' src={ IconReleasedUser} style={theme.optionIcons}/></div>
            </Stack>
            <Stack direction="horizontal" gap={5}>
            <div/> 
            <div><img className='mb-3' src={IconApprovedUser} style={theme.optionIcons}/></div>
            <div/>
            <div><img className='mb-3' src={IconReleasedUser} style={theme.optionIcons}/></div>
            </Stack>
          </Stack>
        </Container>
      </section>
      <Footer/>
      </>
    );
}
export default WorkOrders;