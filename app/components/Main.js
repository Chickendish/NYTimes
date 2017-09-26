var React = require('react');

var Search = require('./Search');

var Main = React.createClass({

	getInitialState: function () {
		return{
			results: [{"Title": "Obama is great"}, {"Title": "Obama is death"}]
		};
	},
	render: function () {
		console.log("Here so far", this.state.results);

		return(
			<div className = "main-container">
			  <div className = "container">
			  <nav class="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">NY Times React</a>
				    </div>
				    <ul className="nav navbar-nav">
				      <li className="active"><a href="#">Home</a></li>
				      <li><a href="#">Page 1</a></li>
				      <li><a href="#">Page 2</a></li>
				    </ul>
				    <ul className="nav navbar-nav navbar-right">
				      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
				      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
				    </ul>
				  </div>
				</nav>

				<div className="jumbotron">
                   <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
                   <h3 className="text-center">Search for and save articles of interest.</h3>
                </div>

               <Search /> 



			  </div>
			</div>
			)

	}

});

module.exports = Main;