import React from "react";

function Footer() {
    return (
        <div>
            <footer className="main_footer dis-flex coln-flex just-center align-center ">
                <div className="dis-flex just-center align-center">
                    <a
                        className="padding01 pTectColor"
                        href="https://github.com/AlligatorrA"
                    >
                        {" "}
                        <i className="fab fa-github fa-2x"></i>{" "}
                    </a>
                    <a
                        className="padding01 pTectColor"
                        href="https://www.linkedin.com/in/anand-raj-b10599171/"
                    >
                        {" "}
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </a>
                    <a
                        className="padding01 pTectColor"
                        href="https://twitter.com/Aryakkhauj"
                    >
                        {" "}
                        <i className="fab fa-twitter fa-2x"></i>{" "}
                    </a>
                </div>
                <div className="spacerhalf"></div>
                <p className="padding01">Made by Anand</p>
            </footer>
        </div>
    );
}

export default Footer;
