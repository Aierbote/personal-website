function Header () {
    return (
        <>
            <header>
                <img src="" alt="LOGO" />
                <h1>Heading #1</h1>
                <p>Welcome</p>
            </header>
        </>
    );
};

// the main Component must be exported in default
export default Header;

function Hello () {
    return (
        <>
            <p>Just want to say Hello!</p>
        </>
    );
};


// all its functional components must be exported here or at their creation, still using JS non-default notation
export { Hello };