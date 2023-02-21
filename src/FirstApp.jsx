import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name }) => {

    return(
        <>
        <h1 data-testid="test-title">{ title }</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>{ subTitle }</p>
        <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
    }

// entran antes que el porptypes
FirstApp.defaultProps = {
    name: "Carlota",
    title : 'No hay título',
    subtitle : 'No hay subtítulo'
}