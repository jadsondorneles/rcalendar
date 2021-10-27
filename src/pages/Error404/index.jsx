import { ContainerPage } from '../../components/Container'
import NotFound from '../../animations/NotFound'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Error } from './styles'

export default function Error404() {
    return (
        <ContainerPage>
            <Error id="Error">
                <Error.Animation>
                    <NotFound />
                </Error.Animation>
                <Error.Content id="Error_Content">
                    <Error.Title>Oops! Page not found</Error.Title>
                    <Error.Description>
                        We're sorry for the inconvenience. Looks like you are<br/>
                        trying to access a page that was deleted or never existed.
                    </Error.Description>
                    <Link to="/"><Button className="btn-error404">Go Home Page</Button></Link>
                </Error.Content>
            </Error>
        </ContainerPage>
    )
}