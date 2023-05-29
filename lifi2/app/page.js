'use client'
import React, { useState } from 'react';
import { LiFiWidgetNext } from './lifi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

export default function Home() {
  return (
    <div className="wrapped">
      <header className="site-header">
        <Navbar collapseOnSelect variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>
              <Image className="logo" src="https://harecrypta.com/wp-content/uploads/2022/09/logo-footer-1.png" alt="harecrypta.com" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="menu-item menu-item-type-custom menu-item-object-custom menu-item-541" href="https://harecrypta.com/cryptoactivies/testnets/">Активности</Nav.Link>
                <Nav.Link className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2396" href="https://harecrypta.com/konsalting/">Консалтинг</Nav.Link>
                <Nav.Link className="menu-item menu-item-type-post_type menu-item-object-page menu-item-822" href="https://harecrypta.com/news-harecrypta/">Новости</Nav.Link>
                <NavDropdown title="HareCrypta" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-822">
                  <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1823" href="https://harecrypta.com/ama/">AMA HareCrypta</NavDropdown.Item>
                  <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2249" href="https://harecrypta.com/pitchday/">Pitch Day</NavDropdown.Item>
                  <NavDropdown.Item className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1920" href="https://harecrypta.com/category/statya/">Статьи HareCrypta</NavDropdown.Item>
                  <NavDropdown.Item className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2018" href="https://harecrypta.com/category/stati-po-makroekonomika/">Макроэкономика</NavDropdown.Item>
                  <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2835" href="https://harecrypta.com/crypto-academy/">Криптоакадемия</NavDropdown.Item>
                  <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503" href="https://harecrypta.com/haremerch/">Merch</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="navbar-nav navbar-btns">
                <Nav.Link class="nav-link btn btn-sm btn-outline menu-link" href="https://harecrypta.com/harma/" style={{color: '#fff'}}>NFT Harma</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <sectione className="section-pad-md section-bg-dark">
        <Container>
          <Row>
            <Col sm={12}>
            <div className="widghet-hc">
              <LiFiWidgetNext />
            </div>
            </Col>
          </Row>
        </Container>
      </sectione>
      <div className="section footer-section footer-particle section-pad-sm section-bg-dark ">
        <Container>
          <Row>
            <Col lg={3} className="res-m-bttm">
            <div id="block-4" className="widget footer-widget widget_block widget_media_image">
              <figure className="wp-block-image size-full"><img loading="lazy" width="287" height="82" src="https://harecrypta.com/wp-content/uploads/2022/09/logo-footer-1.png" alt="" className="wp-image-1344" /></figure>
            </div>
            <div id="block-6" className="widget footer-widget widget_block widget_text">
              <p>Вы еще не с нами в соцсетях? Горячие минты и свежие инсайты тут! Следите за нами в соц. сетях!</p>
            </div>
            </Col>
            <Col lg={3} className="res-m-bttm">
            <div id="nav_menu-3" className="widget footer-widget widget_nav_menu">
              <h6 className="widget-title">Навигация</h6>
              <div className="menu-futer-menyu-2-container">
                <Nav id="menu-futer-menyu-2" className="menu" style={{display: 'block'}}>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-395 current_page_item menu-item-2806" href="https://harecrypta.com/">Главная</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2813" href="https://harecrypta.com/konsalting/">Консалтинг</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2807" href="https://harecrypta.com/news-harecrypta/">Новости HareCrypta</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2808" href="https://harecrypta.com/ama/">AMA HareCrypta</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2810" href="https://harecrypta.com/harma/">Harma</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2809" href="https://harecrypta.com/haremerch/">HareMerch</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2802" href="https://harecrypta.com/crypto-academy/">Криптоакадемия</Nav.Link>
                </Nav>
              </div>
            </div>
            </Col>
            <Col lg={3} className="res-m-bttm">
            <div id="nav_menu-3" className="widget footer-widget widget_nav_menu">
              <h6 className="widget-title">Важное HareCrypta</h6>
              <div className="menu-futer-menyu-container">
                <Nav id="menu-futer-menyu" className="menu" style={{display: 'block'}}>
                  <Nav.Link id="menu-item-2798" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2798" href="https://harecrypta.com/category/statya/">Статья HareCrypta</Nav.Link>
                  <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2795" href="https://harecrypta.com/category/vyzhimki/">Выжимки HareCrypta</Nav.Link>
                  <Nav.Link id="menu-item-2796" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2796" href="https://harecrypta.com/category/makroekonomika/">Макроэкономика</Nav.Link>
                  <Nav.Link id="menu-item-2797" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2797" href="https://harecrypta.com/category/letopis-harma/">Летопись Harma</Nav.Link>
                </Nav>
              </div>
            </div>
            </Col>
            <Col lg={3} className="res-m-bttm">
            <div id="nav_menu-4" className="widget footer-widget widget_nav_menu">
              <h6 className="widget-title">Информация</h6>
              <div className="menu-informacziya-container">
                <Nav id="menu-informacziya" className="menu" style={{display: 'block'}}>
                  <Nav.Link id="menu-item-1170" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1170" href="https://harecrypta.com/category/statya/">Статьи HareCrypta</Nav.Link>
                  <Nav.Link id="menu-item-1168" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1168" href="https://harecrypta.com" >GitBook про NFT (coming soon)</Nav.Link>
                  <Nav.Link id="menu-item-1315" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1315" href="https://harecrypta.com/">Инструменты (coming soon)</Nav.Link>
                </Nav>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="section footer-section section-pad-nopd section-bg ">
        <Container>
          <Row className="text-center">
            <Col md={12}> <span className="copyright-text"> Copyright © 2022 by <a href="/">HareCrypta</a></span> </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
