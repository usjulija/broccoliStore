import React from "react";
import { shallow } from "enzyme";
import BroccoliStore from "../components/BroccoliStore";
import Modal from "../components/Modal";
import StoreMenu from "../components/StoreMenu";
import PopUpMessage from "../components/PopUpMessage";
import Support from "../components/Support";

describe("Renders components", () => {
  it("renders navigation", () => {
    const wrapper = shallow(<BroccoliStore />);
    expect(wrapper.find(StoreMenu).length).toBe(1);
  });
  it("renders modal", () => {
    const wrapper = shallow(<BroccoliStore />);
    expect(wrapper.find(Modal).length).toBe(1);
  });
  it("renders pop up message", () => {
    const wrapper = shallow(<BroccoliStore />);
    expect(wrapper.find(PopUpMessage).length).toBe(1);
  });
  it("renders support chat", () => {
    const wrapper = shallow(<BroccoliStore />);
    expect(wrapper.find(Support).length).toBe(1);
  });
});

describe("Navigation menu functionality", () => {
  it("Test click event on load products button", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<StoreMenu loadPage={mockCallBack} />);
    button.find("#color-one").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it("Test click event on cart button", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<StoreMenu loadPage={mockCallBack} />);
    button.find("#color-two").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it("Test click event on search button", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<StoreMenu loadPage={mockCallBack} />);
    button.find("#color-three").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it("Test click event on admin button", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<StoreMenu loadPage={mockCallBack} />);
    button.find("#color-four").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
