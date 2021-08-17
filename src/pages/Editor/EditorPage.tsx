import styled from 'styled-components'

import UploadBanner from './components/UploadBanner'
import EditorForm from './components/EditorForm'
import BlogOptions from './components/BlogOptions'

const EditorPageWrapper = styled.div`

`

const EditorPage = () => {
  return (
    <EditorPageWrapper>
      <UploadBanner />
      <EditorForm />
      <BlogOptions />
    </EditorPageWrapper>
  )
}

export default EditorPage