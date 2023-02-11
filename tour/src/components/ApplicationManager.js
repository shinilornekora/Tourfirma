
import React from 'react'
import axios from 'axios'

export default class InnList extends React.Component {
	state = {
		inns: [],
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/manager/').then(res => {
			this.setState({inns: res.data}); 
		})
	}

	handleDelete(pk){
		let self = this
		axios.delete('http://127.0.0.1:8000/api/manager/' + pk + '/').then(()=>{
			let  newArr  =  self.inns.filter(function(obj) {
				return  obj.pk  !==  pk;
			});
			self.setState({inns:  newArr})
		});
	}
	
	render() {
		return (  
		<div>
			{this.state.inns.map(inn =>
				<div className="page__request">
					<div className="page__requestName">
						 Moscow, гостиница {inn.hotelName}, {Math.floor(Math.random()*200)} номер. {inn.tourop}
					</div>
					<div className="page__button-row">
						<button type="submit" className="page__button-yes" onClick={() => this.handleDelete(inn.id)}></button>
						<button type="submit" className="page__button-no" onClick={() => this.handleDelete(inn.id)}></button>
					</div>
				</div>)}
		</div>);
	}
}