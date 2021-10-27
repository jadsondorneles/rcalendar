import styled from 'styled-components'

export const Error = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

Error.Content = styled.div`
    max-width: 1600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
    }

    .btn-error404 {
        background: var(--tertiary) !important;
        color: var(--white) !important;
        padding: 10px 20px !important;
        text-transform: capitalize;
        margin: 0 0 0 20 px;
    }
`

Error.Animation = styled.div`
    width: calc(100% - 40px);
    max-width: 550px;
`

Error.Title = styled.h1`
    max-width: 600px;
    text-align: center;
    margin: 35px 0 0 0;
    color: var(--red);
    font-size: 21px;
    font-weight: 500;
`

Error.Description = styled.p`
    text-align: center;
`