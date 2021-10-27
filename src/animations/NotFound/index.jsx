import Lottie from 'react-lottie'
import animationData from './notfound.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Lottie 
          options={defaultOptions}
          style={{ width: '100%', height: '100%' }}
          isStopped={props.valor ? true : false}
        />
    )
}