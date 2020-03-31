import React from "react"
import PropTypes from "prop-types"
// class Hello extends React.Component {

// 	getPercent = decimal => {
// 		return decimal * 100 + '%'
// 	}

// 	calGoalPercentage = (total,goal) => {
// 		return this.getPercent(total/goal)
// 	}
//   render () {
//   	const {msg,color,mins,goal,total} = this.props
//     return (
//       <React.Fragment>
//       	<div>
//       		<h1 style={{color: color}}>
//       			Hello {msg}
//       		</h1>

//       		<p>
//       			U will be redirected within {mins} minutes
//       		</p>
//       	</div>
//       	<div>
//       		Goal completed {this.calGoalPercentage(goal,total)}
//       	</div>

//       </React.Fragment>
//     );
//   }
// }

const calGoalPercentage = (total,goal) => {
	return getPercent(total/goal)
}

const getPercent = (decimal) => {
	return decimal * 100 + "%"
}

const Hello = ({msg,color,mins,goal,total}) => {
	return (
		<div>
			<h1 style={{color: color}}>
				Hello {msg}
			</h1>
			<p>
			Session will expire in {mins} minutes
		</p>
		<p>
			Goal Progress: {calGoalPercentage(total,goal)}
		</p>
		</div>
		
	)
}

export default Hello
