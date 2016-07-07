import React from 'react'
import NavLink from './NavLink'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>React Router Tutorial</h1>
    		<ul role="nav">
{/*                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>*/}
                <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/repos">Repos</NavLink></li>
    		</ul>

            {this.props.children}
    	</div>
    )
  }
})