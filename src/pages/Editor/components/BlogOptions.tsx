import styled from 'styled-components'

import { Button, LabelButton } from '../../../components/Button'

const BlogOptionsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Button} {
    font-size: 14px;
  }

  ${LabelButton} {
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
  }
`

const BlogOptions = () => {
  return (
    <BlogOptionsWrapper>
      <Button className="dark">publish</Button>
      <input type="file" accept="image/*" id="image-upload" hidden />
      <LabelButton className="grey" htmlFor="image-upload">Upload</LabelButton>
    </BlogOptionsWrapper>
  )
}

export default BlogOptions