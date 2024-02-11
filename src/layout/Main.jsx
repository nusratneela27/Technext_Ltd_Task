import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Container from '../components/Shared/Container';

const Main = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;