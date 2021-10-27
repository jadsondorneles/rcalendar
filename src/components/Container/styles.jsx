import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

Container.LogoContent = styled.div`
     max-width: 1600px;
    width: calc(100% - 40px);
    margin: 10px 0 0 0;
`

Container.Logo = styled.img`
    max-width: 250px;
    width: 100%;
    height: auto;
`