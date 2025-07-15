import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <img
                src={"/images/nav-logo.svg"}
                alt={"logo"}
                className={"scale-90"}
            />

            <img
                src={"/images/menu.svg"}
                className={"w-10"}
                alt={"hamburger menu"}
            />
        </nav>
    );
};

export default Navbar;
