import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const cs = classNames.bind(style);

function Header() {
    return (
        <header className = {cs('header')}>
            <div className = {cs('logo')}>
                
            </div>
            <div className = {cs('search')}>
                
            </div>
            <div className = {cs('cart')}></div>
            <div className = {cs('authen')}></div>
        </header>
    );
}

export default Header;
