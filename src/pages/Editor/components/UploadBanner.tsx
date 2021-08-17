import styled from 'styled-components'
import upload from '../../../images/upload.jpg'

const Banner = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #e7e7e7;
  background-size: cover;
  background-position: center;

  label {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`

const UploadBanner = () => {
  return (
    <Banner>
      <input type="file" name="upload" id="upload" hidden/>
      <label htmlFor="upload">
        <img src={upload} alt="upload icon" />
      </label>
    </Banner>
  )
}

export default UploadBanner