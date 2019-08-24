import React from "react";

class Categories extends React.Component {
  filterFunction = (category) => {
      this.props.filterProducts(category);
  }
  render() {
    const toggleTabindex = this.props.modalVisible || this.props.popUpVisible ? "-1" : "0";
    let names = [];
    Object.keys(this.props.products).map(key => {
      return names.push(this.props.products[key].category);
    });
    let categoryName = [...new Set(names)];
    categoryName.sort();
    return (
      <React.Fragment>
        <div className="categories-container">
          <button key="all" tabIndex={toggleTabindex} onClick={() => {this.filterFunction("all")}}>All products</button>
          {categoryName.map(category => (
            <button key={category} tabIndex={toggleTabindex} onClick={() => {this.filterFunction(category)}}>
              {category}
            </button>
          ))}
        </div>
        <select className="categories-list" tabIndex={toggleTabindex} onChange={(e)=> {this.filterFunction(e.currentTarget.value)}}>
          <option key="all" tabIndex={toggleTabindex} value="all">All products</option>
          {categoryName.map(category => (
            <option key={category} tabIndex={toggleTabindex} value={category}>
              {category}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default Categories;
