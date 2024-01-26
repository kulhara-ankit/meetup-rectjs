import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  padding: 20px;
`
export const BannerImage = styled.img`
  height: 100%;
  width: 450px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 320px;
  height: 400px;
`
export const LoginHeading = styled.h1`
  color: #334155;
  font-size: 35px;
  font-family: 'Roboto';
`
export const InputLabel = styled.label`
  color: #64748b;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 8px;
`
export const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-family:'Roboto'
  font-size:16px;
  margin-bottom: 8px;
  outline: none;
`
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 16px;
  margin-bottom: 30px;
`
export const Option = styled.option``

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  width: 120px;
  padding: 10px;
  border-style: none;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto';
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 10px;
`
