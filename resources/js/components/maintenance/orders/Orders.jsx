import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Menu from '../../Menu';
import Footer from '../../Footer';
import Stack from 'react-bootstrap/Stack';
import IconEarringsUser from '/src/IconsOrders/IconEarringsUser.png';
import IconReleasedUser from '/src/IconsOrders/IconReleasedUser.png';
import { auto, left } from '@popperjs/core';
import React, { useCallback } from 'react';

const theme = {
    bg: {
      backgroundColor: 'white',
    },
    logo: {
      width: 450,
      height: auto
    },
    header: {
      color: 'black',
      fontSize: '50px',
      fontFamily: 'Montserrat',
      textAlign: 'center'
    },
    fControl: {
      backgroundColor: "white",
      borderColor: "#807E82",
      fontFamily: 'Montserrat',
      fontSize: '20px',
      color: "#807E82",
      width: 'auto',
      borderRadius: 10,
      textAlign: "left"
    },
    fControl2: {
      backgroundColor: "white",
      borderColor: "#807E82",
      fontFamily: 'Montserrat',
      fontSize: '20px',
      color: "#807E82",
      width: '450px',
      borderRadius: 10,
      textAlign: "left"
    },
    fHText: {
      fontFamily: 'Montserrat',
      fontSize: '20px',
      color: 'black',
      textAlign: "center",
    },
    button: {
      color: 'white',
      fontSize: '20px',
      backgroundColor: '#1B396A',
      borderRadius: 15
    },
    button2: {
      color: '#EE7044',
      fontSize: '20px',
      backgroundColor: 'white',
      borderColor:"white",
      borderRadius: 15
    },modalBg:{
      backgroundColor: '#807E82',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      color: 'white',
      textAlign: "center",
    }, optionIcons: {
      align: "center",
      width: 350,
      height: 100
    }
  };

  
function Orders(){
    return(
        <>
        <Menu/>
        <section>
            <Container>
              <Stack>
                <Stack direction='horizontal' gap={6}>
                <div/> 
                <div><img className='mb-3' src={IconEarringsUser} style={theme.optionIcons}/></div>
                <div/>
                <div><img className='mb-3' src={ IconReleasedUser} style={theme.optionIcons}/></div>
                <div/>
                <div><img className='mb-3' src={ IconReleasedUser} style={theme.optionIcons}/></div>
                </Stack>
              </Stack>
              <div>
  <button onClick={function noRefCheck(){}}>
    External sort by name
  </button>
  <button onClick={function noRefCheck(){}}>
    External sort by username
  </button>
  <StoryTable
    alwaysShowPagination
    filterableFields={[
      'Name',
      'Username',
      'Location'
    ]}
    rowsPerPage={10}
    rowsPerPageOptions={[
      5,
      10,
      15,
      20
    ]}
    sortableFields={[
      'Name',
      'Username',
      'Last Update',
      'Score'
    ]}
    tableEventsRef={{
      current: '[Circular]'
    }}
  />
</div>
            </Container>
        </section>
        <Footer/>
        </>
    );
}
export default Orders;

/*   <MDBDatatable data={basicData} advancedSearch={search} />*/