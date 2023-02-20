// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// }

// export const FirstApp = () => {
//     return(
//         <>
//         <h1>Fernando</h1>
//         {/* <code>{JSON.stringify(newMessage)}</code> */}
//         <p>{newMessage.message}</p>
//         </>
//     )
// }
import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle}) => {

    return(
        <>
        <h1>{title}</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
    }