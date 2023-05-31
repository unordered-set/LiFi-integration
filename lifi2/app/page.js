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
import { Play } from 'next/font/google'

const play = Play({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
})


export default function Home() {
  return (
    <div className="wrapped">
      <header className="site-header">
        <Navbar className="is-transparent" collapseOnSelect variant="dark" expand="lg">
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
                <Nav.Link className="nav-link btn btn-sm btn-outline menu-link" href="https://harecrypta.com/harma/" style={{color: '#fff'}}>NFT Harma</Nav.Link>
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
            <div id="block-6" className="widget footer-widget widget_block widget_text" style={{display: 'block', fontSize: 14}}>
              <p>Вы еще не с нами в соцсетях? Горячие минты и свежие инсайты тут! Следите за нами в соц. сетях!</p>
            </div>
            <div className="social telegram">
              <a href="https://t.me/harecrypta_chat" target="_blank">
                <svg role="img" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
                </svg>
              </a>
            </div>
            <div className="social twitter">
              <a href="https://twitter.com/harecrypta" target="_blank">
                <svg role="img" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
            </div>
            <div className="social youtube">
              <a href="https://www.youtube.com/c/HareCrypta" target="_blank">
                <svg role="img" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>
            </div>
            <div className="social instagram">
              <a href="https://www.instagram.com/harecrypta_fun/" target="_blank">
                <svg role="img" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
            </div>
            <div className="social discord">
              <a href="https://discord.gg/harecrypta" target="_blank">
                <svg role="img" viewBox="0 0 28 20">
                  <path fill="currentColor" d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"/>
                </svg>
              </a>
            </div>
            </Col>
            <Col lg={3} className="res-m-bttm">
            <div id="nav_menu-3" className="widget footer-widget widget_nav_menu">
              <h6 className={`widget-title ${play.className}`}>Навигация</h6>
              <div className="menu-futer-menyu-2-container">
                <Nav id="menu-futer-menyu-2" className="menu" style={{display: 'block', fontSize: 14}}>
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
              <h6 className={`widget-title ${play.className}`}>Важное HareCrypta</h6>
              <div className="menu-futer-menyu-container">
                <Nav id="menu-futer-menyu" className="menu" style={{display: 'block', fontSize: 14}}>
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
              <h6 className={`widget-title ${play.className}`}>Информация</h6>
              <div className="menu-informacziya-container">
                <Nav id="menu-informacziya" className="menu" style={{display: 'block', fontSize: 14}}>
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
