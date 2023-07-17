//rafce for wrait Function 
//import React from 'react'   نسخة ١٨ مايحتاج

import './Sidebar.css';
import '../global.css';
import logo from '../../assets/img/logo.png';
// here logo   as varable
const Sidebar = () => {
  return (
    <>

	<div className='wrapper   '>
		<div className='  navbar-fixed-left no-sidebar'>
			<a className="navbar-brand " href="www.code-m10.com"> <img src={logo} /></a>
			<span class="menu material-icons material-symbols-outlined"> menu</span>
			<span class="close material-icons material-symbols-outlined">close</span>
			<ul className='navbar-nav'>
				<li className="nav-item"><a href="www.code-m10.com">
					<i className="icon material-icons material-symbols-outlined">signal_cellular_alt</i>Overview</a>
				</li>
				<li className="nav-item"><a href="www.code-m10.com">
					<i className="icon material-icons material-symbols-outlined">backpack</i>Prodect</a>
				</li>
				<li className="nav-item"><a href="www.code-m10.com">
					<i className="icon material-icons material-symbols-outlined">person</i>Orders</a>
				</li>
				<li className="nav-item"><a href="www.code-m10.com">
					<i className="icon material-icons material-symbols-outlined">payments</i>Checkout</a>
				</li>
				<li className="nav-item"><a href="www.code-m10.com">
					<i className="icon material-icons material-symbols-outlined">settings</i>Setting</a>
				</li>
			</ul>

			<ul className="navbar-nav BottomMenu">
				<li className="nav-item1 "><a href='www.code-m10.com'>
				<i className="icon material-icons material-symbols-outlined">info</i>Help Centre</a></li>
				<li className="nav-item1 "><a href='www.code-m10.com'>
				<i className="icon material-icons material-symbols-outlined">forum</i>Contact Us</a></li>
				<li className="nav-item1    " ><a className="red" href='www.code-m10.com' >
				<i className="icon  material-icons material-symbols-outlined">logout</i>Log out</a></li>
			</ul>
		</div>
		
	</div>

  {/* <div className="wrapper d-flex">
		<div className="sidebar">
			<ul>
				<li><a href="www.code.com"><i className="fas fa-home"></i>Dashboard</a></li>
				<li><a href="www.code.com"><i className="fas fa-users"></i>Team</a></li>
				<li className="notification1"><a href="www.code.com"><i className="fas fa-calendar-week"></i>Calender</a><span className="number1">4</span></li>
			</ul>

		<div className="userProfile">
			<a href="www.code.com"><i className="far fa-user-circle  xyz"></i></a>
			<p className="username">Dianne Robertson<br/><a href="#">View Profile</a></p>
			<a href="www.code.com"><i className="fas fa-cog mnp"></i></a>
		</div>

    </div>
  </div>
      */}
    </>
  )
}

export default Sidebar