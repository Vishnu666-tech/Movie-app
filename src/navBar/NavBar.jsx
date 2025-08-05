// import React, { useContext } from 'react';
// import { RiMovie2AiLine } from "react-icons/ri";
// import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { BiMoviePlay } from 'react-icons/bi';
// import { MdOutlineHome } from "react-icons/md";
// import { MovieContext } from '../App';

// const Props_Nav = () => {
//     const { setsearch } = useContext(MovieContext);

//     const handleSearch = (e) => {
//         setsearch(e.target.value);
//     };

//     const linkStyle = {
//         textDecoration: 'none',
//         color: 'white',
//         fontSize: '15px',
//         fontFamily: 'unset'
//     };

//     return (
//         <Navbar bg="dark" variant="dark" >
//             <Container>
//                 <Navbar.Brand>
//                     <RiMovie2AiLine color='red' size={10} /> Movies
//                 </Navbar.Brand>

//                 <FormControl
//                     style={{ width:"10%"  }}
//                     type="search"
//                     placeholder="Search Movies"
//                     className="me-2"
//                     aria-label="Search"
//                     onChange={handleSearch}
//                 />

//                 <Nav className="me-4 align-item-start">
//                     <Nav.Link as={Link} to="/" style={linkStyle}>
//                         <MdOutlineHome color='red' /> Home
//                     </Nav.Link>

//                     <Nav.Link as={Link} to="/comedy" style={linkStyle}>
//                         <BiMoviePlay color='red' /> Comedy
//                     </Nav.Link>

//                     <Nav.Link as={Link} to="/popular" style={linkStyle}>
//                         <BiMoviePlay color='red' /> Popular
//                     </Nav.Link>

//                     <Nav.Link as={Link} to="/latest" style={linkStyle}>
//                         <BiMoviePlay color='red' /> Latest
//                     </Nav.Link>
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// };

// export default Props_Nav;

import React, { useContext } from 'react';
import { RiMovie2AiLine } from "react-icons/ri";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';
import { MdOutlineHome } from "react-icons/md";
import { MovieContext } from '../App';
import "./Navbar.css"
const Props_Nav = () => {
    const { setsearch } = useContext(MovieContext);

    const handleSearch = (e) => {
        setsearch(e.target.value);
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '15px',
        fontFamily: 'unset'
        
    };

    return (
        <Navbar expand="lg" className="navbar bg-body-tertiary">
            <Container fluid>
                 
                <Navbar.Brand href="#"><RiMovie2AiLine color='red' size={28} /> <Link className='link' to={'/'}>Movies</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
                
                <Navbar.Collapse id="navbarScroll">
                    
                    <div className="mx-auto" style={{ width: "40%" }}>
                    <Form className="d-flex ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                    </Form>
                    </div>

                    <Nav
                        className="ms-auto  "
                        
                        navbarScroll
                    >

                        <Nav.Link as={Link} to="/comedy" style={linkStyle}>
                            <BiMoviePlay color='red' /> Comedy
                        </Nav.Link>

                        <Nav.Link as={Link} to="/popular" style={linkStyle}>
                            <BiMoviePlay color='red' /> Popular
                        </Nav.Link>

                        <Nav.Link as={Link} to="/latest" style={linkStyle}>
                            <BiMoviePlay color='red' /> Latest
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Props_Nav;
