import React from "react"

class ProductConfig extends React.Component {
      
    render() {
      return (
        <React.Fragment>
          {this.props.children(
            {...this.props}
          )}
        </React.Fragment>
      );
    }
  }

export default ProductConfig
