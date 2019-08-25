import React from 'react';
import "./styles/notfound.css";

class NotFound extends React.Component {
  loadStore = () => {
    this.props.history.push('/store');
  }
  render() {
    return (
      <section className="not-found">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-28 0 411 411" width="250px">
          <path fill="#61c5a8" d="M96 389s27-68 20-109-41-109-41-109l41-7 34 75 21-21v-68h27v75l75-61 14 48s-41 27-48 61 7 116 7 116c-14 34-150 0-150 0zm0 0"/>
          <path fill="#54596e" d="M96 389l6 3 11-33c5-19 11-43 11-65l-1-15c-4-22-14-49-24-72-9-22-18-39-18-39l-6 3 1 6 36-6 32 71a7 7 0 0 0 11 2l21-21 2-5v-61h13v68a7 7 0 0 0 11 6l67-55 11 38 7-2-4-6s-11 7-22 19a98 98 0 0 0-29 47l-2 26c0 40 9 92 9 92l7-1-7-2-3 4c-3 2-8 4-14 5l-21 1a406 406 0 0 1-101-14l-3-1-1 7 6 3-6-3-2 7a638 638 0 0 0 107 15c11 0 22-1 31-3l12-6c4-3 6-6 8-10l1-4-1-2a658 658 0 0 1-6-112c3-14 14-29 24-40a160 160 0 0 1 19-16h1v-1h1c2-1 3-4 2-7l-13-48a7 7 0 0 0-11-3l-64 52v-61a7 7 0 0 0-7-7h-27a7 7 0 0 0-7 7v66l-12 11-30-66c-1-3-4-4-7-4l-41 7a7 7 0 0 0-5 10l1 3c4 6 12 24 20 44a315 315 0 0 1 20 73 234 234 0 0 1-17 84l-3 6v2l-1 1a7 7 0 0 0 5 9zm0 0"/>
          <path fill="#54596e" d="M148 307c-3 0-5 8-4 14 7 30 19 50 34 50 14 0 27-20 33-49 2-7 0-14-3-14l-11 2c-13 3-26 3-38 0zm0 0"/>
          <path fill="#9af43b" d="M341 212a48 48 0 1 1-95 0 48 48 0 0 1 95 0zm0 0"/>
          <path fill="#54596e" d="M341 212h7a55 55 0 1 0-109 0 55 55 0 0 0 109 0h-13a41 41 0 0 1-41 41 41 41 0 0 1-29-70 41 41 0 0 1 70 29zm0 0"/>
          <path fill="#9af43b" d="M201 7c-34 0-63 16-70 38a61 61 0 1 0 26 50v-3c12 6 28 10 44 10 40 0 72-21 72-47S241 7 201 7zm0 0"/>
          <path fill="#54596e" d="M201 7V0c-18 0-35 4-49 12-13 7-24 18-27 32l6 1 4-5c-11-8-25-13-39-13a68 68 0 1 0 68 69v-4h-7l-3 6c13 7 30 11 47 11 21 0 41-5 55-15 7-5 13-10 17-17s7-14 7-22-3-16-7-23c-6-10-16-18-29-23-12-6-27-9-43-9v14c19 0 36 5 47 13 6 3 11 8 14 13 3 4 4 9 4 15 0 5-1 10-4 15-5 7-13 13-23 18-11 5-24 8-38 8-15 0-30-4-41-10a7 7 0 0 0-10 6v4a54 54 0 0 1-54 54 54 54 0 0 1-39-93 54 54 0 0 1 70-6 7 7 0 0 0 11-4c2-8 10-17 21-23s26-10 42-10V7zm0 0"/>
          <path fill="#9af43b" d="M164 61c-49 0-88 28-88 62s39 61 88 61c27 0 52-9 68-22 12 5 26 9 41 9 42 0 75-25 75-55s-33-55-75-55c-20 0-38 6-52 16"/>
          <path fill="#54596e" d="M164 55c-26 0-49 7-66 19-9 6-16 13-21 21-5 9-8 18-8 28s3 19 8 27c8 13 20 23 35 30s33 11 52 11c29 0 55-9 72-24l-4-5-3 6c13 6 28 9 44 9 22 0 42-6 57-17 8-5 14-12 18-19a49 49 0 0 0 0-50c-6-11-17-20-30-26-13-7-28-10-45-10-21 0-41 6-55 16a7 7 0 1 0 7 11c12-8 29-14 48-14 20 0 37 6 49 15 6 4 11 10 14 15a35 35 0 0 1 0 36c-4 8-13 16-24 21-11 6-24 9-39 9-14 0-27-3-38-8-3-2-5-1-8 0a99 99 0 0 1-63 21c-23 1-44-6-58-16-8-5-13-11-17-18-4-6-6-13-6-20s2-14 6-21c6-9 16-18 29-24s29-10 46-10a7 7 0 0 0 0-13zm0 0"/>
          <path fill="#9af43b" d="M86 143a55 55 0 1 0 23 22"/>
          <path fill="#54596e" d="M89 136c-8-4-17-6-28-6a61 61 0 1 0 54 32 7 7 0 0 0-12 6 48 48 0 0 1-8 57 48 48 0 0 1-67 0 48 48 0 0 1 0-68 48 48 0 0 1 55-8 7 7 0 0 0 6-13zm0 0"/>
          <g fill="#61c5a8">
            <path d="M314 331a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm0 0M41 372a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm0 0M287 379a10 10 0 1 1-21 0 10 10 0 0 1 21 0zm0 0M355 372a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm0 0M294 119a10 10 0 1 1-21 0 10 10 0 0 1 21 0zm0 0M335 300a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M82 75a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M219 34a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M321 218a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M14 314a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M48 164a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M150 137a7 7 0 1 1-13 0 7 7 0 0 1 13 0zm0 0M82 396a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M171 96a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M48 341a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0M48 218a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm0 0"/>
          </g>
          <path fill="#54596e" d="M164 270a10 10 0 1 1-21 0 10 10 0 0 1 21 0zm0 0M212 270a10 10 0 1 1-21 0 10 10 0 0 1 21 0zm0 0"/>
        </svg>
        <h2>Ups! Page is not found!</h2>
        <button onClick={this.loadStore}>Go back to store!</button>
      </section>
    )
  }
}

export default NotFound;