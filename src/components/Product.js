import React from "react";
import Price from "./Price";

class Product extends React.Component {
  render() {
    const {
      category,
      description,
      discount,
      id,
      imageUrl,
      name,
      price
    } = this.props.details;
    const specialOffVisibility = discount === 0 ? "hide" : "special-offer";
    const discountVisibility = discount === 0 ? "hide" : "discount";
    const toggleTabindex = this.props.modalVisible || this.props.popUpVisible ? "-1" : "0";
    return (
      <div className="product-container">
        <div className="price-image">
          <h4 className={discountVisibility}>{discount}%</h4>
          <img src={imageUrl} alt={name} />
          <Price
            discount={discount}
            price={price}
            priceCalculator={this.props.priceCalculator}
          />
        </div>
        <div className="product-name">
          <div className={specialOffVisibility}>
            <svg viewBox="-12 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m486.554688 325.917969c3.34375 5.851562.917968 13.308593-5.214844 16.066406l-67.515625 30.375c-3.6875 1.664063-6.214844 5.152344-6.652344 9.160156l-8.039063 73.59375c-.730468 6.695313-7.070312 11.308594-13.660156 9.933594l-72.46875-15.105469c-3.957031-.824218-8.0625.507813-10.777344 3.496094l-36.296874 39.996094-13.453126 14.824218c-4.53125 4.988282-12.359374 4.988282-16.890624 0l-49.75-54.820312c-2.71875-2.988281-6.820313-4.320312-10.777344-3.496094l-72.46875 15.105469c-6.589844 1.375-12.933594-3.238281-13.660156-9.933594l-8.039063-73.59375c-.4375-4.007812-2.96875-7.496093-6.652344-9.160156l-67.515625-30.375c-6.132812-2.757813-8.558594-10.214844-5.214844-16.066406l36.765626-64.253907c2-3.507812 2-7.820312 0-11.328124l-36.765626-64.253907c-3.34375-5.851562-.917968-13.308593 5.214844-16.066406l67.515625-30.375c3.683594-1.664063 6.214844-5.152344 6.652344-9.160156l8.039063-73.59375c.726562-6.695313 7.070312-11.308594 13.660156-9.933594l72.46875 15.105469c3.957031.824218 8.058594-.507813 10.777344-3.496094l49.75-54.820312c4.53125-4.988282 12.359374-4.988282 16.890624 0l8.660157 9.546874 41.089843 45.273438c2.714844 2.988281 6.820313 4.320312 10.777344 3.496094l72.46875-15.105469c6.589844-1.375 12.929688 3.238281 13.660156 9.933594l8.039063 73.59375c.4375 4.007812 2.964844 7.496093 6.652344 9.160156l67.515625 30.375c6.132812 2.757813 8.558594 10.214844 5.214844 16.066406l-36.765626 64.253907c-2 3.507812-2 7.820312 0 11.328124zm0 0"
                fill="#fb5858"
              />
              <path
                d="m486.554688 325.917969c3.34375 5.851562.917968 13.308593-5.214844 16.066406l-67.515625 30.375c-3.6875 1.664063-6.214844 5.152344-6.652344 9.160156l-8.039063 73.59375c-.730468 6.695313-7.070312 11.308594-13.660156 9.933594l-72.46875-15.105469c-3.957031-.824218-8.0625.507813-10.777344 3.496094l-36.296874 39.996094c-83.800782-47.847656-140.277344-138.070313-140.277344-241.472656 0-101.417969 54.332031-190.152344 135.484375-238.671876l41.089843 45.273438c2.714844 2.988281 6.820313 4.320312 10.777344 3.496094l72.46875-15.105469c6.589844-1.375 12.929688 3.238281 13.660156 9.933594l8.039063 73.59375c.4375 4.007812 2.964844 7.496093 6.652344 9.160156l67.515625 30.375c6.132812 2.757813 8.558594 10.214844 5.214844 16.066406l-36.765626 64.253907c-2 3.507812-2 7.820312 0 11.328124zm0 0"
                fill="#fc7979"
              />
              <path
                d="m405.632812 323.160156c-24.398437 58.703125-77.054687 97.09375-135.632812 105.933594-30.488281 4.605469-62.578125 1.210938-93.128906-11.492188-89.253906-37.089843-131.539063-139.515624-94.4375-228.761718 31.476562-75.746094 110.027344-117.667969 187.628906-105.933594 13.828125 2.082031 27.625 5.882812 41.128906 11.496094 89.253906 37.085937 131.539063 139.515625 94.441406 228.757812zm0 0"
                fill="#af2727"
              />
              <path
                d="m311.191406 94.402344c-13.503906-5.613282-27.300781-9.414063-41.128906-11.496094-33.203125-5.019531-66.585938-.21875-96.375 12.859375-30.320312 44.511719-48.035156 98.28125-48.035156 156.195313 0 62.964843 20.941406 121.042968 56.25 167.636718 29.027344 11.050782 59.277344 13.851563 88.097656 9.496094 58.578125-8.839844 111.234375-47.230469 135.632812-105.933594 37.097657-89.242187-5.1875-191.671875-94.441406-228.757812zm0 0"
                fill="#d63030"
              />
              <g fill="#ffb52d">
                <path d="m143.871094 281.488281c0-26.457031-48.585938-16.144531-48.585938-52.019531 0-22.125 18.535156-28.703125 34.53125-28.703125 9.71875 0 27.207032 2.539063 27.207032 10.761719 0 2.992187-2.09375 8.523437-6.578126 8.523437-4.035156 0-7.921874-5.679687-20.628906-5.679687-10.914062 0-18.6875 4.183594-18.6875 13.601562 0 22.125 48.585938 12.109375 48.585938 51.871094 0 21.378906-14.351563 31.84375-34.085938 31.84375-19.433594 0-33.035156-10.167969-33.035156-17.640625 0-3.585937 3.136719-8.523437 6.875-8.523437 5.382812 0 8.96875 11.8125 25.5625 11.8125 10.765625 0 18.839844-5.085938 18.839844-15.847657zm0 0" />
                <path d="m166.894531 303.914062c0-.449218 0-.898437.148438-1.347656l29.75-96.867187c1.195312-3.589844 5.53125-5.382813 10.015625-5.382813s8.96875 1.792969 10.164062 5.382813l29.601563 96.867187c.148437.449219.296875.898438.296875 1.347656 0 3.734376-5.53125 6.574219-10.015625 6.574219-2.539063 0-4.632813-.894531-5.382813-3.285156l-6.125-21.230469h-36.925781l-6.128906 21.230469c-.746094 2.390625-2.839844 3.285156-5.53125 3.285156-4.335938 0-9.867188-2.6875-9.867188-6.574219zm54.863281-30.648437-14.949218-51.273437-14.949219 51.273437zm0 0" />
                <path d="m265.710938 310.488281c-3.441407 0-7.027344-1.792969-7.027344-5.230469v-98.960937c0-3.589844 4.035156-5.082031 7.921875-5.082031 4.035156 0 7.921875 1.492187 7.921875 5.082031v90.140625h38.867187c3.140625 0 4.785157 3.4375 4.785157 7.027344 0 3.4375-1.644532 7.023437-4.785157 7.023437zm0 0" />
                <path d="m345.835938 249.5h23.023437c3.285156 0 5.230469 2.988281 5.230469 6.425781 0 2.84375-1.644532 6.128907-5.230469 6.128907h-23.023437v34.382812h44.398437c3.289063 0 5.234375 3.289062 5.234375 7.175781 0 3.289063-1.644531 6.875-5.234375 6.875h-53.214844c-3.441406 0-7.027343-1.792969-7.027343-5.230469v-98.8125c0-3.4375 3.585937-5.230468 7.027343-5.230468h53.214844c3.589844 0 5.234375 3.585937 5.234375 6.875 0 3.886718-1.945312 7.175781-5.234375 7.175781h-44.398437zm0 0" />
              </g>
            </svg>
          </div>
          <h3>{this.props.details.name}</h3>
        </div>
        <div className="add-to-cart">
          <button
            tabIndex={toggleTabindex}
            title="more info"
            onClick={() => this.props.loadModal(this.props.details, false)}
          >
            <svg
              fill="#6c3a32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M437.019 74.982C388.667 26.628 324.381 0 256 0S123.333 26.628 74.982 74.982C26.628 123.333 0 187.619 0 256s26.628 132.667 74.982 181.019C123.333 485.372 187.619 512 256 512s132.667-26.628 181.019-74.981C485.372 388.667 512 324.381 512 256s-26.628-132.667-74.981-181.018zM256 491.602c-129.911 0-235.602-105.69-235.602-235.602S126.089 20.398 256 20.398 491.602 126.089 491.602 256 385.911 491.602 256 491.602z" />
              <path d="M462.131 298.131a10.193 10.193 0 0 0-12.4 7.367c-5.689 22.34-15.158 43.377-28.142 62.528-3.161 4.663-1.943 11.004 2.719 14.166a10.156 10.156 0 0 0 5.715 1.758c3.268 0 6.48-1.568 8.451-4.478 14.313-21.11 24.751-44.306 31.024-68.94 1.39-5.459-1.907-11.012-7.367-12.401zM466.104 245.801c-5.632 0-10.199 4.567-10.199 10.199 0 2.915-.063 5.855-.188 8.739-.244 5.628 4.121 10.387 9.749 10.63.15.007.299.01.448.01 5.43 0 9.945-4.282 10.182-9.759.138-3.176.207-6.412.207-9.62 0-5.632-4.567-10.199-10.199-10.199zM256 172.877c-19.683 0-35.697 16.014-35.697 35.697V386.04c0 19.683 16.014 35.697 35.697 35.697 19.683 0 35.697-16.014 35.697-35.697V208.574c0-19.684-16.014-35.697-35.697-35.697zm15.299 213.163c0 8.436-6.863 15.299-15.299 15.299s-15.299-6.863-15.299-15.299V208.574c0-8.436 6.863-15.299 15.299-15.299s15.299 6.863 15.299 15.299V386.04zM281.235 100.707c-6.652-6.638-15.851-10.444-25.235-10.444-9.385 0-18.584 3.806-25.246 10.453-6.642 6.644-10.451 15.844-10.451 25.244 0 9.384 3.806 18.583 10.46 25.251 6.652 6.639 15.851 10.446 25.237 10.446 9.385 0 18.584-3.807 25.251-10.461 6.639-6.652 10.446-15.851 10.446-25.236 0-9.4-3.809-18.601-10.462-25.253zm-14.408 36.066c-2.858 2.85-6.804 4.486-10.827 4.486a15.432 15.432 0 0 1-10.813-4.47c-2.85-2.858-4.486-6.805-4.486-10.828 0-4.032 1.633-7.976 4.469-10.813 2.858-2.85 6.805-4.486 10.83-4.486 4.024 0 7.971 1.636 10.819 4.478a15.405 15.405 0 0 1 4.479 10.82 15.424 15.424 0 0 1-4.471 10.813z" />
            </svg>
          </button>
          <button tabIndex={toggleTabindex} 
            title="add to cart"
            onClick={() => {this.props.addToCart(id, name)}}>
            <svg
              fill="#6c3a32"
              viewBox="0 0 496 496"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m456 176h-168v-136c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v136h-168c-22.054688 0-40 17.945312-40 40 0 19.3125 13.769531 35.472656 32 39.191406v200.808594c0 22.054688 17.945312 40 40 40h352c22.054688 0 40-17.945312 40-40v-200.808594c18.230469-3.71875 32-19.871094 32-39.191406 0-22.054688-17.945312-40-40-40zm-232-136c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v160c0 13.230469-10.769531 24-24 24s-24-10.769531-24-24zm200 440h-352c-13.230469 0-24-10.769531-24-24v-200h400v200c0 13.230469-10.769531 24-24 24zm32-240h-416c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24h168v8c0 22.054688 17.945312 40 40 40s40-17.945312 40-40v-8h168c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24zm0 0" />
              <path d="m192 288c-17.648438 0-32 14.351562-32 32v96c0 17.648438 14.351562 32 32 32s32-14.351562 32-32v-96c0-17.648438-14.351562-32-32-32zm16 128c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-96c0-8.824219 7.175781-16 16-16s16 7.175781 16 16zm0 0" />
              <path d="m112 288c-17.648438 0-32 14.351562-32 32v96c0 17.648438 14.351562 32 32 32s32-14.351562 32-32v-96c0-17.648438-14.351562-32-32-32zm16 128c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-96c0-8.824219 7.175781-16 16-16s16 7.175781 16 16zm0 0" />
              <path d="m304 288c-17.648438 0-32 14.351562-32 32v96c0 17.648438 14.351562 32 32 32s32-14.351562 32-32v-96c0-17.648438-14.351562-32-32-32zm16 128c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-96c0-8.824219 7.175781-16 16-16s16 7.175781 16 16zm0 0" />
              <path d="m384 288c-17.648438 0-32 14.351562-32 32v96c0 17.648438 14.351562 32 32 32s32-14.351562 32-32v-96c0-17.648438-14.351562-32-32-32zm16 128c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-96c0-8.824219 7.175781-16 16-16s16 7.175781 16 16zm0 0" />
              <path d="m240 192h16v16h-16zm0 0" />
              <path d="m416 160c44.113281 0 80-35.886719 80-80s-35.886719-80-80-80-80 35.886719-80 80 35.886719 80 80 80zm0-144c35.289062 0 64 28.710938 64 64s-28.710938 64-64 64-64-28.710938-64-64 28.710938-64 64-64zm0 0" />
              <path d="m408 128h16v-40h40v-16h-40v-40h-16v40h-40v16h40zm0 0" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
