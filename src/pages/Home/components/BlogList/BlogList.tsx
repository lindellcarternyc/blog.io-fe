import styled from 'styled-components'

import BlogCard from './components/BlogCard'

const BlogListWrapper = styled.section`
  width: 100%;
  padding: 50px 5vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  border: 1px solid blue;
`

const BlogList = () => {
  return (
    <BlogListWrapper>
      <BlogCard />
      <BlogCard />
    </BlogListWrapper>
  )
}

export default BlogList