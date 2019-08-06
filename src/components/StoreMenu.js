import React from 'react';
import logo from './images/logo-small.png';

class StoreMenu extends React.Component {
    render() {
        let visibility = this.props.mobileVisible === true ? "show" : " ";
        return (
            <nav>
                <section className="nav-logo-container">
                    <img src={logo} alt="broccoli store logo"></img>
                    <div className="logo-font">
                        <span className="left-ribbon"></span>
                        <span className="right-ribbon"></span>
                        <h1 className="ribbon">Broccoli Store</h1>
                    </div>
                </section>
                <section className="nav-mobile-menu">
                    <button className="button" id="mobile-menu" title="menu" onClick={ this.props.toggleNavMenu }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M491.3 235.3H20.7a20.7 20.7 0 1 0 0 41.4h470.6a20.7 20.7 0 1 0 0-41.4zM491.3 78.4H20.7a20.7 20.7 0 0 0 0 41.4h470.6a20.7 20.7 0 1 0 0-41.4zM491.3 392.2H20.7a20.7 20.7 0 1 0 0 41.4h470.6a20.7 20.7 0 1 0 0-41.4z"/>
                        </svg>
                    </button>
                </section>
                <section className="nav-buttons-container" id={visibility}>
                    <button onClick={() => { this.props.loadPage("store") } } className="button" id="color-one" title="products">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M198 198.9a23.4 23.4 0 0 0-40.6 15.3c0 4.2 3.2 7.6 7.4 7.6h.1c4 0 7.4-3.2 7.5-7.3a8.3 8.3 0 0 1 14.5-5.5 7.5 7.5 0 1 0 11-10.1zM237.9 223.3a21.5 21.5 0 0 0-39.8 1 7.5 7.5 0 0 0 14 5.2 6.4 6.4 0 0 1 12-.3 7.5 7.5 0 0 0 13.8-5.9zM286.2 156.9c-3-3-7.7-3-10.6 0l-7 7a7.5 7.5 0 1 0 10.5 10.7l7.1-7.1c3-3 3-7.7 0-10.6zM239.5 253.7h-10a7.5 7.5 0 1 0 0 15h10a7.5 7.5 0 1 0 0-15zM316.2 253.7h-10a7.5 7.5 0 1 0 0 15h10a7.5 7.5 0 0 0 0-15z"/>
                            <path fill="#fff" d="M511.8 389l-2-10.6a14.2 14.2 0 0 0-16.6-11.4l-39.7 7.3 18-12a14.2 14.2 0 0 0 4.5-18.8l-5.5-9.6a14.3 14.3 0 0 0-14.2-7.1c2-11.1 3-22.4 3-34 0-5-3-9.4-7.4-11.4a57.5 57.5 0 0 0 .4-43.5 9 9 0 0 0-5-5 57 57 0 0 0-24-4.1 39.6 39.6 0 0 0-47.7-36.8c1.8-10.9.7-22.3-3.5-33a9.3 9.3 0 0 0-5.2-5.2 61.5 61.5 0 0 0-55.7 5 74.2 74.2 0 0 0-17.7-28.2 12.6 12.6 0 0 0-18 0L239.2 167a37.7 37.7 0 0 0-52.2 1.8 38.1 38.1 0 0 0-28-2v-28c0-19.3-15.5-35-34.7-35.4v-16c5.9-1 10.3-6 10.3-12.2v-36c0-7-5.6-12.6-12.5-12.6h-61c-6.8 0-12.4 5.6-12.4 12.5v36c0 6.2 4.4 11.4 10.3 12.4v15.9c-19.2.3-34.7 16-34.7 35.4v218.9A71.6 71.6 0 0 0 0 410.9c0 41 36 74.5 80.3 74.5l300.2-.1a34.4 34.4 0 0 0 34-39.7l60 10.8a14.3 14.3 0 0 0 10.7-2.5c3.1-2.2 5.3-5.6 5.8-9.4l1.6-11a14.1 14.1 0 0 0-10.8-15.9l-21.2-4.8 39.7-7.3a14.1 14.1 0 0 0 11.5-16.6zM426 243.6c4.5 0 9 .8 13.2 2.2a42.5 42.5 0 0 1-3.5 34.4h-20.2l6.4-6.4a7.5 7.5 0 1 0-10.6-10.6l-3.4 3.4c-1.6-5.3-4.4-10-8-13.8a42 42 0 0 1 26.1-9.2zm-42.3-37.5c13.6 0 24.6 11 24.6 24.6v.7a57 57 0 0 0-21.4 12.7l-3-1a34.8 34.8 0 0 0-20.8-25.8c4.4-6.7 12-11.2 20.6-11.2zm-39.6-41.8c5 0 10 .8 14.9 2.4a47 47 0 0 1-1.9 34.7c-4 3.7-7.3 8.2-9.6 13.3a35.4 35.4 0 0 0-19.9 7.7 39.7 39.7 0 0 0-5.7-7.9l17.2-17.2a7.5 7.5 0 1 0-10.6-10.6l-18.8 18.9a39.2 39.2 0 0 0-11.5-3.5 46.9 46.9 0 0 1 45.9-37.8zm-57.5 116h-6.5a7.5 7.5 0 0 0-14 0h-7.6a7.5 7.5 0 0 0-11.7-9.3l-7 7.1c-.7.7-1.2 1.4-1.5 2.1H223a59.3 59.3 0 0 1-9.6-30.2h119a59.3 59.3 0 0 1-9.7 30.2H307c-.4-.7-.9-1.4-1.5-2l-7-7.2a7.5 7.5 0 0 0-11.8 9.2zM269.2 235a24.6 24.6 0 0 1 47.4 0h-47.4zm15.3-92.2a59.3 59.3 0 0 1 14.2 26.4c-3.9 4.2-7 8.8-9.6 13.7a7.5 7.5 0 0 0-3.9-1.1h-10a7.5 7.5 0 0 0 0 15h8.8c-.5 2-.9 4.2-1.1 6.3-3 .8-5.9 1.9-8.5 3.3a37.9 37.9 0 0 0-23.1-17.7 38 38 0 0 0-3-9.6l36.2-36.3zm-135.6 67.6l-1-3.7a22.9 22.9 0 0 1 36.3-22.2 7.5 7.5 0 0 0 10.7-1.9 22.7 22.7 0 0 1 19.1-10.3 22.7 22.7 0 0 1 22.8 22.8c0 4 3 7.2 6.9 7.5 8.4.7 15.5 6 18.8 13.4a39.5 39.5 0 0 0-8.7 19h-42.7c-5.3 0-10 3.3-11.8 8a56.8 56.8 0 0 0-53.3-5.9 9 9 0 0 0-5.1 5.1 57.5 57.5 0 0 0-3.5 13.3 22.9 22.9 0 0 1 7.6-35.8 7.5 7.5 0 0 0 4-9.3zm22.4 67.8l2 2h-18c-4-9.3-4.6-20-1.4-30a42 42 0 0 1 46.2 13.6 74 74 0 0 0 5.7 16.4h-11.3L182 267.7a7.5 7.5 0 1 0-10.6 10.6zm-32 2h-26.7a24.7 24.7 0 0 1 11.6-17c3.6 4.7 8.3 8.6 13.7 11.3l1.4 5.7zM63.7 41.6h56v31h-56v-31zm45.6 46v15.8H74V87.7h35.3zm-70 81.6H88a7.5 7.5 0 1 0 0-15H39.3v-15.4c0-11.3 9.1-20.4 20.3-20.4h64c11.3 0 20.4 9.1 20.4 20.4v15.4h-14a7.5 7.5 0 1 0 0 15h14v6.6a37.8 37.8 0 0 0-10.8 33.5v.1a37.9 37.9 0 0 0-15.4 40.2c-3.7 2-7.1 4.8-10 7.9H39.3v-88.3zm0 103.3h59.8c-.8 2.5-1.3 5.1-1.6 7.8h-1.3c-6.9 0-12.5 5.7-12.5 12.6 0 11.9 1.1 23.6 3.2 35a68.3 68.3 0 0 0-31 3.8c-10 4-12.8 9.7-13.4 13.6l-3.2 1.7v-74.5zm95 92.1c2.7 2.2 4.3 4 5.3 5.3h-.3c-4.2 0-11.9-1.7-20.5-6.5a54 54 0 0 1-8.7-5.8 7.5 7.5 0 0 0-9.6 0c-2.4 2-5.4 4-8.6 5.8A46.6 46.6 0 0 1 71 370c1-1.3 2.6-3.1 5.3-5.3a7.5 7.5 0 0 0-3.8-13.3c-7.3-.9-12-2.7-14.1-4 2.7-1.8 9.6-4.7 22-4.7 10.2 0 17.6 2.2 21.2 4.2 2.3 1.3 5 1.3 7.4 0 3.6-2 11-4.1 21.3-4.1 12.3 0 19.2 2.8 21.9 4.5a35.8 35.8 0 0 1-14.1 4.1 7.5 7.5 0 0 0-3.8 13.3zm-15 91.3l.2 1.4c1 4.8 2.8 9.2 5.4 13H80.3c-36 0-65.3-26.6-65.3-59.4a59 59 0 0 1 33.8-52c2.4 1.7 5.2 3.2 8.7 4.4a17.8 17.8 0 0 0-2.6 7.4c-.3 3.5.8 6.7 3 9.2 3 3.4 7.5 5 13.4 5a62 62 0 0 0 27.8-8.4 74 74 0 0 0 6.2-3.8c2 1.4 4 2.6 6.2 3.8a62 62 0 0 0 27.8 8.4c6 0 10.4-1.6 13.4-5 2.2-2.5 3.3-5.7 3-9.2-.3-2.6-1.2-5.1-2.6-7.4 3.5-1.2 6.3-2.7 8.7-4.4 16 8 27.9 22 32.1 38.5l-53 20.2a34.3 34.3 0 0 0-21.6 38.3zm276.1 7.4c-3.7 4.4-9.1 7-15 7h-7.8l-4.9-26.6a7.5 7.5 0 1 0-14.8 2.8l4.5 23.8h-25.8l-3.4-18a7.5 7.5 0 0 0-14.7 2.8l2.8 15.2h-60l-4.5-24.4a7.5 7.5 0 1 0-14.8 2.8l4 21.6h-87.6c-9.4 0-17.4-6.6-19.1-15.8l-.3-1.3a19.3 19.3 0 0 1 12.2-21.6l29.5-11.2 2.2 11.9a7.5 7.5 0 1 0 14.7-2.8l-2.7-14.5 43.8-16.6a7.5 7.5 0 0 0-5.4-14L208 392a76 76 0 0 0-39.9-46.8c-.6-4-3.4-9.6-13.5-13.6a76 76 0 0 0-41.8-2.1V325a7.5 7.5 0 0 0-12.1-6c-1.2-7.7-1.9-15.7-2-23.8H343a7.5 7.5 0 1 0 0-15h-3a74.2 74.2 0 0 0 7.4-32.5c0-6.6-5-12-11.5-12.7a19.8 19.8 0 0 1 13.7-5.4 19.8 19.8 0 0 1 19.8 19.9c0 3.9 3 7.1 6.9 7.4a19.9 19.9 0 0 1 17.7 23.3h-8a7.5 7.5 0 1 0 0 15h58.3c-.2 13.8-2 27.2-5.3 40.3l-40.6 24A34.2 34.2 0 0 0 353 337l-83.7 31.8a7.5 7.5 0 0 0 5.4 14l11-4.2 3.4 18.5a7.5 7.5 0 0 0 14.8-2.7l-4-21.2 58.5-22.2a19.5 19.5 0 0 1 26 14.6l15.2 81.9c1 5.6-.5 11.4-4.2 15.8zm26.8-58.7a7.5 7.5 0 0 0-.3 14.7l55.8 12.8-1.4 9.4-64.7-11.7-10.2-54.6 56.4-33.3 4.7 8.3L415 382a7.5 7.5 0 0 0 5.5 13.6l74.7-13.7 1.7 9-74.7 13.7z" />
                        </svg>
                    </button>
                    <button onClick={() => { this.props.loadPage("store/cart") } } className="button" id="color-two" title="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M495.4 171h-119L295 29.7a25 25 0 0 0-34.4-9.2c-1.6 1-3.1 2-4.5 3.4a25.3 25.3 0 0 0-23.6-6A25 25 0 0 0 217 29.8L135.5 171h-119c-9 0-16.5 7.5-16.5 16.6v42.8c0 9 7.4 16.5 16.6 16.5h1l15 216.6A33.8 33.8 0 0 0 66.2 495h379.6a33.8 33.8 0 0 0 33.6-31.4l15-216.6h1c9.2 0 16.6-7.4 16.6-16.5v-42.8c0-9.1-7.4-16.6-16.6-16.6zM264.4 40a9 9 0 0 1 11-6.4 9 9 0 0 1 5.6 4.2l85.5 148a9.1 9.1 0 0 1-15.8 9.2L265.3 46.8a9 9 0 0 1-.9-7zm-8.4 23L318.5 171h-125L256 62.8zM145.5 185.7L231 37.7a9 9 0 0 1 12.4-3.3 9 9 0 0 1 3.4 12.4l-85.5 148a9 9 0 0 1-12.5 3.4 9.1 9.1 0 0 1-3.3-12.4zM496 230.3c0 .3-.3.6-.6.6h-34.2a8 8 0 0 0 0 16h17l-14.8 215.5a17.7 17.7 0 0 1-17.6 16.5H66.2c-9.3 0-17-7.2-17.6-16.5L33.7 247H427a8 8 0 0 0 0-16H16.6a.5.5 0 0 1-.6-.5v-42.8c0-.3.3-.5.6-.5h111.9a25.2 25.2 0 0 0 46.6 15.8l9.2-15.8h143.4l9.2 15.8a25 25 0 0 0 34.3 9.2c9-5.2 13.6-15.3 12.3-25h112c.2 0 .5.2.5.5v42.8z"/>
                            <path fill="#fff" d="M273.1 325a8 8 0 0 0-8 8v94c0 5-4 9.1-9.1 9.1s-9-4-9-9V298.7c0-5 4-9.1 9-9.1s9 4 9 9a8 8 0 0 0 16.1 0 25.1 25.1 0 0 0-50.2 0V427a25.1 25.1 0 0 0 50.2 0v-94a8 8 0 0 0-8-8zM341.5 325a8 8 0 0 0-8 8v94a9.1 9.1 0 0 1-18.2 0V298.8a9.1 9.1 0 0 1 18.2 0 8 8 0 0 0 16 0 25.1 25.1 0 0 0-50.2 0V427a25.1 25.1 0 0 0 50.2 0v-94a8 8 0 0 0-8-8zM410 325a8 8 0 0 0-8.1 8v94a9.1 9.1 0 0 1-18.2 0V298.8a9.1 9.1 0 0 1 18.2 0 8 8 0 0 0 16 0 25.1 25.1 0 0 0-50.2 0V427a25.1 25.1 0 0 0 50.2 0v-94a8 8 0 0 0-8-8zM136.3 325a8 8 0 0 0-8 8v94a9.1 9.1 0 0 1-18.2 0V298.8c0-5 4-9.1 9-9.1s9.2 4 9.2 9a8 8 0 0 0 16 0 25.1 25.1 0 0 0-50.2 0V427a25.1 25.1 0 0 0 50.2 0v-94a8 8 0 0 0-8-8zM204.7 325a8 8 0 0 0-8 8v94a9.1 9.1 0 0 1-18.2 0V298.8c0-5 4-9.1 9-9.1s9.2 4 9.2 9a8 8 0 0 0 16 0 25.1 25.1 0 0 0-50.2 0V427a25.1 25.1 0 0 0 50.2 0v-94a8 8 0 0 0-8-8z"/>
                        </svg>
                    </button>
                    <button className="button" id="color-three" title="search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.2 380.2">
                            <path fill="#fff" d="M223.1 63.8a112 112 0 0 0-79.7-33 112.3 112.3 0 0 0-79.7 192.4 112 112 0 0 0 79.7 33 112 112 0 0 0 79.7-33 112 112 0 0 0 33-79.8 112 112 0 0 0-33-79.6zm-10.6 148.7a97 97 0 0 1-69 28.6 97.8 97.8 0 1 1 69-166.8c38 38.1 38 100.1 0 138.2z"/>
                            <path fill="#fff" d="M189 68.3a7.5 7.5 0 0 0-7.8 12.8c5 3 9.6 6.7 13.8 10.8a7.5 7.5 0 0 0 10.6 0c2.9-3 2.9-7.7 0-10.6-5-5-10.6-9.4-16.6-13zM86.6 94.1c2 0 3.8-.7 5.3-2.2a73.2 73.2 0 0 1 62.8-20.5 7.5 7.5 0 1 0 2.3-14.8c-27.6-4.3-56 5-75.7 24.7a7.5 7.5 0 0 0 5.3 12.8zM105 205.3c-4.8-2.9-9.1-6.4-13-10.3a7.5 7.5 0 1 0-10.7 10.6c4.8 4.7 10 9 15.7 12.5a7.5 7.5 0 0 0 10.3-2.4 7.5 7.5 0 0 0-2.4-10.4zM195 195a72.5 72.5 0 0 1-60.2 20.8 7.5 7.5 0 1 0-1.8 14.9 87.3 87.3 0 0 0 72.5-25.1A7.5 7.5 0 0 0 195 195z"/>
                            <path fill="#fff" d="M371 327l-90.7-90.7c-3-3-7.7-3-10.6 0l-3.6 3.6-9-9A143.7 143.7 0 0 0 245 42c-56-55.9-147-55.9-203 0a143.7 143.7 0 0 0 101.5 245c31 0 61.9-10 87.6-29.8l8.9 9-3.6 3.6a7.5 7.5 0 0 0 0 10.6L327 371a31 31 0 0 0 44 0 31.2 31.2 0 0 0 0-44zM52.7 234.3c-24.3-24.3-37.7-56.5-37.7-90.9s13.4-66.6 37.7-90.8c24.2-24.3 56.5-37.7 90.8-37.7s66.6 13.4 90.9 37.7c24.3 24.2 37.6 56.5 37.6 90.8s-13.3 66.6-37.6 90.9c-24.3 24.3-56.5 37.6-90.9 37.6s-66.6-13.3-90.8-37.6zm189.8 13a140.5 140.5 0 0 0 5-4.9l8 8-5 5-8-8zm118 113.1a16.2 16.2 0 0 1-22.8 0L252.2 275l22.8-22.8 85.4 85.4a16.2 16.2 0 0 1 0 22.8z"/>
                        </svg>
                    </button>
                    <button onClick={() => { this.props.loadPage("store/login") } } className="button" id="color-four" title="login">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M418 297.7H94a57.8 57.8 0 0 0 0 115.6h33.9l-4.4 3.5a17 17 0 0 0-5.9 16.9 17 17 0 0 0 12.4 12.9l2.3.6-11.2 43.6a10 10 0 0 0 7.2 12.2l34 8.7a10 10 0 0 0 12.2-7.2l11.2-43.6 2.2.5a17 17 0 0 0 17.1-5.3 17 17 0 0 0 3-17.6l-10.3-25.2h220.5a57.8 57.8 0 0 0 0-115.6zm-283.6 141zm47.7.6a11.2 11.2 0 0 0-13.7 8.1l-11 42.4-14.5-3.7 10.8-42.4a11.2 11.2 0 0 0-8-13.8l-5.2-1.3 19-15.3 12.4-10.2 4.1 10.2 11.2 27.3-5-1.3zm185.8-46H189.5l-4.1-10.2a10 10 0 0 0-15.6-4l-17.4 14.2H93.9a37.8 37.8 0 0 1 0-75.6h274v75.6zm50.2 0h-30.2v-75.6H418a37.8 37.8 0 0 1 0 75.6z"/>
                            <path fill="#fff" d="M423.9 332.6a10 10 0 1 0-15.7 12.4l6.7 8.5-6.7 8.5a10 10 0 0 0 15.7 12.4l11.6-14.7a10 10 0 0 0 0-12.4L424 332.6zM97 359.3a9.9 9.9 0 0 0 7.3 6 10 10 0 0 0 10.2-15.4 9.5 9.5 0 0 0-4.5-3.6l-1.8-.6a10 10 0 0 0-12 9.8 9.8 9.8 0 0 0 .8 3.8zM150.2 359.3a9.9 9.9 0 0 0 7.2 6 10 10 0 0 0 10.3-4.3 9.9 9.9 0 0 0 1.5-7.5 10.6 10.6 0 0 0-1.5-3.6l-1.2-1.5a10 10 0 0 0-14.2 0 10.2 10.2 0 0 0-2.9 7.1 9.8 9.8 0 0 0 .8 3.8zM203.3 359.3a9.9 9.9 0 0 0 7.3 6A9.9 9.9 0 0 0 221 361a9.9 9.9 0 0 0 1.5-7.5 9.8 9.8 0 0 0-2.8-5 10 10 0 0 0-14 0 9.5 9.5 0 0 0-2.3 3.2 9.8 9.8 0 0 0 0 7.6zM256.5 359.3a9.9 9.9 0 0 0 7.3 6 9.9 9.9 0 0 0 10.3-4.3 9.9 9.9 0 0 0 1.5-7.5 9.8 9.8 0 0 0-2.8-5 10 10 0 0 0-14.1 0 9.5 9.5 0 0 0-2.2 3.2 10.6 10.6 0 0 0-.7 3.8 9.9 9.9 0 0 0 .7 3.8zM309.7 359.3a9.9 9.9 0 0 0 7.3 6 9.9 9.9 0 0 0 10.3-4.3 9.9 9.9 0 0 0 1.4-7.5 10.6 10.6 0 0 0-1.4-3.6 10.2 10.2 0 0 0-6.4-4.2 9.9 9.9 0 0 0-10.3 4.3 10.1 10.1 0 0 0-.9 9.3zM168.3 252.8l.7.6a140 140 0 0 0 79 29.4H251.3l.8.1a147.8 147.8 0 0 0 6.8 0h.8a145.6 145.6 0 0 0 3.4-.1 139.8 139.8 0 0 0 80.8-31A141.3 141.3 0 0 0 255.5 0a141.6 141.6 0 0 0-87.2 252.8zm100.2 9.5l-1.8.1-2.1.2a123.1 123.1 0 0 1-24.4-.6h-.5a120.8 120.8 0 0 1-54.6-21.6v-18c0-23.9 11.9-45 30-57.8a66.3 66.3 0 0 0 81.8 0c18.1 12.8 30 34 30 57.7v17.4a120.8 120.8 0 0 1-58.4 22.6zM255.5 20a121.6 121.6 0 0 1 91.3 201.5 90.8 90.8 0 0 0-36-71.6 66.2 66.2 0 0 0 11-47.7 10 10 0 1 0-19.7 3 47.3 47.3 0 0 1-8.5 34.4 46.9 46.9 0 0 1-57.3 14.7 46.9 46.9 0 0 1-27-42.2 46.7 46.7 0 0 1 57.2-45.5 10 10 0 1 0 4.4-19.5A66.7 66.7 0 0 0 201.2 150a90.8 90.8 0 0 0-36 72.4v.3A121.6 121.6 0 0 1 255.5 20z"/>
                            <path fill="#fff" d="M288.3 77.4a10.1 10.1 0 0 0 7.2 6 9.8 9.8 0 0 0 7.5-1.5 9.5 9.5 0 0 0 2.8-2.8 10.1 10.1 0 0 0 1.5-7.5 9.4 9.4 0 0 0-1.5-3.6 9.5 9.5 0 0 0-4.5-3.7 10.4 10.4 0 0 0-5.8-.6 10.1 10.1 0 0 0-7.8 7.9 9.9 9.9 0 0 0 .6 5.8z"/>
                        </svg>
                    </button>
                </section>
            </nav>
        );
    }
}

export default StoreMenu;