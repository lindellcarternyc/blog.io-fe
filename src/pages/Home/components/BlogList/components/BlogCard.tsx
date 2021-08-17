import styled from 'styled-components'

import hero from '../../../../../images/hero.jpg'
import ButtonLink from '../../../../../components/ButtonLink'

const BlogCardWrapper = styled.article`
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin: 10px 0 20px;
    line-height: 30px;
  }

  ${ButtonLink} {
    background-color: #1b1b1b;
    color: #fff;
  }
`

const BlogCard = () => {
  return (
    <BlogCardWrapper>
      <img src={hero} alt="blog-preview" />
      <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt fugiat quos porro repellat harum. Adipisci tempora corporis rem cum.</p>
      <ButtonLink href="/">read</ButtonLink>
    </BlogCardWrapper>
  )
}

export default BlogCard