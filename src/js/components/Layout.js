import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			title: "G'day",
		};
	}
	render() {
		const title = "Hey Now";
		return (
			<div>
				<Header title={this.state.title}/>
				<Footer />
			</div>
			);
	}
}