import React, { Component } from "react";
import Loading from './Loading';

export default function AsyncComponent(importComponent: any) {
  class AsyncComponent extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C: any = this.state.component;
      
      return C ? <C {...this.props} /> : <Loading></Loading>;
    }
  }

  return AsyncComponent;
}