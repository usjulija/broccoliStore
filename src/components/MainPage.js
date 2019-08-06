import React from 'react';
import './styles/mainpage.css';
import './styles/animations.css';

class MainPage extends React.Component {
    state = {
        hover: false
    };
    
    toggleHover = () => {
        this.setState({ hover: !this.state.hover });
    }

    loadStore =() => {
        this.props.history.push("store");
    }
    
    render() {
        const pulseAnimation = this.state.hover ? "" : "pulse";
        const moveAnimation = this.state.hover ? "slideDown" : "hide";
        const hideShadow = this.state.hover ? "fadeIn" : "hideShadow";
        const rotation = this.state.hover ? "rotation" : "";
        return (
            <section className="main-page-background">
                <div className="main-page-ribbon">
                    <span className="left-main-page-ribbon"></span>
                    <span className="right-main-page-ribbon"></span>
                    <div className="center-main-page-ribbon">
                        <p className="logo-font">Broccoli</p>
                        <svg 
                            role="button" 
                            aria-label="button to go to store" 
                            tabIndex="0" 
                            className={pulseAnimation} 
                            onClick={this.loadStore} 
                            onMouseEnter={this.toggleHover} 
                            onMouseLeave={this.toggleHover} 
                            onFocus={this.toggleHover} 
                            onBlur={this.toggleHover} 
                            viewBox="0 0 512 512" 
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Go to Store!</title>
                            <path className="change-color" d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#ffd400"/>
                            <path className={hideShadow} d="m511.828125 264.917969-139.71875-139.71875-40.617187 44.824219-97.894532-97.894532-92.125 119.339844 51.425782 51.425781-12.808594 69.316407 99.027344 99.023437 11.382812 98.445313c122.1875-16.460938 217.023438-119.113282 221.328125-244.761719zm0 0" fill="#9b918bb8"/>
                            <path className={rotation} d="m288.066406 331.167969h-64.132812c-16.535156 0-32.519532-6.910157-43.84375-18.957031-11.328125-12.050782-17.238282-28.425782-16.222656-44.929688l7.335937-118.816406 38.925781 2.402344-7.332031 118.816406c-.367187 5.894531 1.664063 11.507812 5.707031 15.8125 4.042969 4.300781 9.523438 6.671875 15.429688 6.671875h64.132812c5.90625 0 11.382813-2.371094 15.429688-6.671875 4.042968-4.304688 6.070312-9.917969 5.707031-15.8125l-7.332031-118.816406 38.925781-2.402344 7.332031 118.816406c1.019532 16.503906-4.890625 32.878906-16.21875 44.929688-11.328125 12.046874-27.308594 18.957031-43.84375 18.957031zm0 0" fill="#fff"/>
                            <path className={rotation} d="m348.128906 267.28125-7.332031-118.816406-38.925781 2.402344 7.332031 118.816406c.363281 5.894531-1.664063 11.507812-5.707031 15.8125-4.042969 4.300781-9.523438 6.671875-15.429688 6.671875h-32.472656v39h32.472656c16.535156 0 32.515625-6.910157 43.84375-18.957031 11.328125-12.050782 17.238282-28.425782 16.21875-44.929688zm0 0" fill="#e9edf5"/>
                            <path className={rotation} d="m236.5 151h39v272.683594h-39zm0 0" fill="#fff"/>
                            <path className={rotation} d="m255.59375 151h19.90625v272.683594h-19.90625zm0 0" fill="#e9edf5"/>
                            <path className={rotation} d="m221.503906 509.679688c11.28125 1.519531 22.796875 2.320312 34.496094 2.320312s23.214844-.800781 34.496094-2.320312v-99.421876h-68.996094v99.421876zm0 0" fill="#b46e5a"/>
                            <path className={rotation} d="m255.59375 410.257812v101.738282c.136719 0 .269531.003906.40625.003906 11.699219 0 23.214844-.800781 34.496094-2.320312v-99.421876zm0 0" fill="#915041"/>
                            <path className={moveAnimation} d="m152.625 98.316406c0 4.289063.640625 8.421875 1.765625 12.347656-15.824219 9.039063-26.5 26.0625-26.5 45.59375 0 19.261719 10.378906 36.085938 25.84375 45.21875-.703125 3.15625-1.109375 6.425782-1.109375 9.796876 0 24.703124 20.023438 44.726562 44.726562 44.726562 24.699219 0 44.722657-20.023438 44.722657-44.726562 0-6.125-1.269531-11.933594-3.503907-17.242188l133.542969-9.640625v-59.191406l-133.519531-9.636719c2.234375-5.304688 3.480469-11.125 3.480469-17.246094 0-24.703125-20.023438-44.726562-44.722657-44.726562-24.703124 0-44.726562 20.027344-44.726562 44.726562zm0 0" fill="#4bbc56"/>
                            <path className={moveAnimation} d="m372.109375 155.90625h-244.214844c0 .117188-.003906.234375-.003906.351562 0 19.261719 10.378906 36.089844 25.84375 45.21875-.707031 3.15625-1.109375 6.429688-1.109375 9.796876 0 24.703124 20.023438 44.726562 44.726562 44.726562 24.699219 0 44.722657-20.023438 44.722657-44.726562 0-6.121094-1.269531-11.933594-3.503907-17.242188l133.539063-9.640625zm0 0" fill="#3f9e46"/>
                        </svg>
                        <p className="logo-font">Store</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainPage;