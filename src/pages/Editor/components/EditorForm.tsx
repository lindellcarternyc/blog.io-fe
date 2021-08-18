import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const EditorFormWrapper = styled.form`
  width: 70vw;
  min-width: 400px;
  height: 100px;
  display: block;
  margin: auto;

  textarea {
    width: 100%;
    min-height: 100px;
    height: auto;
    outline: none;
    font-size: 50px;
    font-weight: 600;
    color: #2d2d2d;
    resize: none;
    border: none;
    padding: 10px;
    border-radius: 10px;

    &::placeholder {
      color: #2d2d2d;
    }

    &.article {
      height: 500px;
      font-size: 20px;
      margin-top: 20px;
      line-height: 20px;
      font-weight: 500;
      padding-bottom: 100px;
      white-space: pre-wrap;
    }
  }
`

const EditorForm = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    article: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'title' || name === 'article') {
      return setFormValues(curValues => (
        {...curValues, [name]: value }
      ))
    }
  }

  return (
    <EditorFormWrapper>
      <textarea 
        value={formValues.title}
        className="title" name="title" 
        id="title" placeholder="Blog title..." 
        onChange={onChange}  
      />
      <textarea 
        value={formValues.article}
        className="article" name="article" 
        id="article" placeholder="Start writing here..." 
        onChange={onChange}
      />
    </EditorFormWrapper>
  )
}

export default EditorForm