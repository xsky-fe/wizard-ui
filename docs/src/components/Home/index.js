import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Button } from 'react-bootstrap';
import homeImg from '../../images/home-right.jpg';
import './style.scss';

const Home = () => (
  <div className="Home">
    <Row className="Home__hero">
      <Col xs={24} md={12} className="Home__left">
        <h1>WIZARD UI</h1>
        <h2>基于 React 16+ 和 Typescript 的组件模块化解决方案，让设计和开发专注更好的用户体验。</h2>
        <div className="Home__btn">
          <Link to="/get-started/introduction">
            <Button bsStyle="primary">
              开始使用
            </Button>
          </Link>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/xsky-fe/react-bootstrap">
            <Button>
              Github
            </Button>
          </a>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <img src={homeImg} alt="react-bootstrap" height={300} />
      </Col>
    </Row>
    <Row className="Home__feature">
      <Col xs={24} md={8}>
        <h2>基于 React、Typescript 构建</h2>
        <p>提供一套简单易用的 React 组件库，提升开发体验。Typescript 保证代码稳定性。</p>
      </Col>
      <Col xs={24} md={8}>
        <h2>可用性</h2>
        <p>尝试在多层面、多纬度封装基础组件。满足多个应用场景。</p>
        <p>提供常用的复杂业务组件。</p>
      </Col>
      <Col xs={24} md={8}>
        <h2>React Bootstrap 定制</h2>
        <p>UI 层面定制了颜色、布局结构</p>
        <p>在 React Bootstrap 的基础上，做了很多扩展，提升了可用性并补充了复杂交互组件。</p>
      </Col>
    </Row>
  </div>
)

export default Home;