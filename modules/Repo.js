import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render() {
		return (
			<div>
				<h2>{this.props.params.userName}:{this.props.params.repoName}</h2>

        <ul>
          <li><NavLink to="/repos/reactjs/munchkin">MUNCHKIN</NavLink></li>
          <li><NavLink to="/repos/facebook/good-gravy-harry">GOOD GRAVY HARRY</NavLink></li>
        </ul>

			</div>
		)
	}
})