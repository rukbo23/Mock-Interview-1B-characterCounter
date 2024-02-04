import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
`

export const LeftPanel = styled.div`
  height: 100vh;
  width: 50%;
  padding: 10px;
  background-color: #ffc533;
`
export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
`

export const Info = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 50px;
`

export const RightPanel = styled.div`
  height: 100vh;
  width: 50%;
  padding: 20px;
  background-color: #0f172a;
`

export const CounterHeading = styled.h1`
  color: #ffbf1f;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 60px;
`

export const AddInputContainer = styled.form`
  display: flex;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 15px;
  color: #475569;
  font-size: 16px;
`

export const AddInputButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: #475569;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  margin-left: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #ffc533;
  height: 35px;
`

export const UserInputsList = styled.ul`
  margin-top: 50px;
`

export const EmptyImage = styled.img`
  height: 400px;
  width: 100%;
  padding: 50px;
  margin-top: 60px;
`
