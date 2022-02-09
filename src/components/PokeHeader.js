const PokeHeader = () => {
    return (
        <header style={headerStyling}>
            <h1 style={h1Styling}>Pokemon Picker</h1>
        </header>

    )
}

const headerStyling = {
    margin: '1rem auto'
}

const h1Styling = {
    color: 'orange',
    fontSize: '2rem',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    textAlign: 'center'
}

export default PokeHeader;