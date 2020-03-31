import React from "react"
import PropTypes from "prop-types"

class ListSurvey extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		fetch('/api/v1/surveys')
		.then((response) => {return response.json()})
    .then((data) => {this.setState({ data: data }) });
	}

  render () {
    return (
    	<div>
    		<table class="table table-striped">
					<thead>
						<tr>
							<th>Survey Name</th>
							<th>Survey Status</th>
						</tr>
					</thead>
					<tbody>
						{console.log(this.state.data)}
		    		{this.state.data.map(survey => {
		    			return (
		    					<tr key={survey.id}>
		    						<td>{survey.name}</td>
		    						<td>{survey.status ? "Active" : "InActive"}</td>
		    					</tr>

		    				)
		    		})}
		    	</tbody>
		    </table>
    	</div>
    );
  }
}

export default ListSurvey
