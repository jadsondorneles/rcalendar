import logoRCalendar from '../../assets/img/logo.svg'
import { Container } from './styles'

export function ContainerPage({ children }) {
    return (
        <Container id="Container">
            <Container.LogoContent id="Container_LogoContent">
                <Container.Logo src={logoRCalendar} />
            </Container.LogoContent>
            {children}
        </Container>
    )
}