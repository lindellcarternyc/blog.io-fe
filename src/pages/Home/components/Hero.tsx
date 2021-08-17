import styled from 'styled-components'
import hero from '../../../images/hero.jpg'


const HeaderWrapper = styled.header`
  width: 100%;
  height: calc(100vh - 60px);

  background: url(${hero});
  background-size: cover;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    text-transform: capitalize;
    font-size: 80px;
    line-height: 60px;
    margin-bottom: 80px;

    .small {
      display: block;
      font-size: 40px;
    }

    .no-fill {
      color: transparent;
      font-style: italic;
      -webkit-text-stroke: 2px #fff;
    }
  }

  a {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    color: #000;
    text-decoration: none;
    text-transform: capitalize;
  }
`

const Hero = () => {
  return (
    <HeaderWrapper>
      <div>
        <h1>
          <span className="small">welcome to the world of </span>
          Blog
          <span className="no-fill"> writing</span>
        </h1>
        <a href="/editor">write a blog</a>
      </div>
    </HeaderWrapper>
  )
}

export default Hero