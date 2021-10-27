import logoRCalendar from '../../assets/img/logo.svg'
import { Container } from './styles'

export function ContainerPage({ children }) {
    return (
        <Container>
            <Container.LogoContent>
                <Container.Logo src={logoRCalendar} />
            </Container.LogoContent>
            {children}
        </Container>
    )
}