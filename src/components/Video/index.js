import { connect } from 'react-redux'
import { Container } from './styles'

const Video = ({activeModule, activeLesson}) => (
    <Container>
        <strong>Módulo <b>{activeModule.title}</b> - </strong>
        <span>Aula <b>{activeLesson.title}</b></span>
    </Container>
)

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video)