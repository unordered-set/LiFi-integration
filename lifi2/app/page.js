'use client'
import { LiFiWidgetNext } from './lifi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Home() {
  return (
    <div className="wrapped">
      <header className="site-header">
        <Navbar collapseOnSelect variant="dark" expand="lg" >
          <Container>
            <Navbar.Brand>
              <a href="https://harecrypta.com/">
                <img className="logo" src="https://harecrypta.com/wp-content/uploads/2022/09/logo-footer-1.png" alt="harecrypta.com" />
              </a>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-541"><a href="/cryptoactivies/testnets/" className="nav-link">Активности</a></Nav.Link>
                      <Nav.Link  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2396"><a href="https://harecrypta.com/konsalting/" className="nav-link">Консалтинг</a></Nav.Link>
                      <Nav.Link  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-822"><a href="https://harecrypta.com/news-harecrypta/" className="nav-link">Новости</a></Nav.Link>
                       <NavDropdown title="HareCrypta" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-822">
                          <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1823"><a href="https://harecrypta.com/ama/" className="nav-link">AMA HareCrypta</a></NavDropdown.Item>
                          <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2249"><a href="https://harecrypta.com/pitchday/" className="nav-link">Pitch Day</a></NavDropdown.Item>
                          <NavDropdown.Item className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1920"><a href="https://harecrypta.com/category/statya/" className="nav-link">Статьи HareCrypta</a></NavDropdown.Item>
                          <NavDropdown.Item className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2018"><a href="https://harecrypta.com/category/stati-po-makroekonomika/" className="nav-link">Макроэкономика</a></NavDropdown.Item>
                          <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2835"><a href="https://harecrypta.com/crypto-academy/" className="nav-link">Криптоакадемия</a></NavDropdown.Item>
                          <NavDropdown.Item className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503"><a href="https://harecrypta.com/haremerch/" className="nav-link">Merch</a></NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    <ul className="navbar-nav navbar-btns">
                      <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="https://harecrypta.com/harma/">NFT Harma</a></li>
                    </ul>
                  </Navbar.Collapse>
            </Container>
          </Navbar>
      </header>
      <sectione className="section-pad-md section-bg-dark">
        <Container>
            <Row>
              <Col sm={12}>
                <div className="widghet-hc"><LiFiWidgetNext /></div>
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
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-395 current_page_item menu-item-2806"><a href="https://harecrypta.com/" aria-current="page">Главная</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2813"><a href="https://harecrypta.com/konsalting/">Консалтинг</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2807"><a href="https://harecrypta.com/news-harecrypta/">Новости HareCrypta</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2808"><a href="https://harecrypta.com/ama/">AMA HareCrypta</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2810"><a href="https://harecrypta.com/harma/">Harma</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2809"><a href="https://harecrypta.com/haremerch/">HareMerch</a></Nav.Link>
                   <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2802"><a href="https://harecrypta.com/crypto-academy/">Криптоакадемия</a></Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg={3} className="res-m-bttm">
              <div id="nav_menu-3" className="widget footer-widget widget_nav_menu">
                <h6 className="widget-title">Важное HareCrypta</h6>
                <div className="menu-futer-menyu-container">
                  <Nav id="menu-futer-menyu" className="menu">
                    <Nav.Link id="menu-item-2798" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2798"><a href="https://harecrypta.com/category/statya/">Статья HareCrypta</a></Nav.Link>
                    <Nav.Link id="menu-item-2795" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2795"><a href="https://harecrypta.com/category/vyzhimki/">Выжимки HareCrypta</a></Nav.Link>
                    <Nav.Link id="menu-item-2796" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2796"><a href="https://harecrypta.com/category/makroekonomika/">Макроэкономика</a></Nav.Link>
                    <Nav.Link id="menu-item-2797" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2797"><a href="https://harecrypta.com/category/letopis-harma/">Летопись Harma</a></Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            
            <Col lg={3} className="res-m-bttm">
              <div id="nav_menu-4" className="widget footer-widget widget_nav_menu">
                <h6 className="widget-title">Информация</h6>
                <div className="menu-informacziya-container">
                  <Nav id="menu-informacziya" className="menu">
                    <Nav.Link id="menu-item-1170" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1170"><a href="https://harecrypta.com/category/statya/">Статьи HareCrypta</a></Nav.Link>
                    <Nav.Link id="menu-item-1168" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1168"><a href="https://harecrypta.com" aria-current="page">GitBook про NFT (coming soon)</a></Nav.Link>
                    <Nav.Link id="menu-item-1315" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1315"><a href="https://harecrypta.com/" aria-current="page">Инструменты (coming soon)</a></Nav.Link>
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
                      <Col md={12}>
                        <span class="copyright-text"> Copyright © 2022 by <a href="/">HareCrypta</a></span>
                      </Col>
                </Row>
              </Container>
        </footer>
    </div>
  )
}
