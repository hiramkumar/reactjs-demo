import React from "react"
import PropTypes from "prop-types"

const Book = ({title, author, pages}) => {
	return (
			<section>
				<h2>{title}</h2>
				<p>Written By:{author}</p>
				<p>It Contains {pages} Pages</p>
			</section>
		)
}

const Hiring = () => {
	return (
			<p>We are hiring. Log on to https://hiring.com</p>
		)
}

const NotHiring = () => {
	return (
		<p>We are not hiring.</p>
		)
}
class BookLibrary extends React.Component {
	state = {
		open: false,
		hiring: true,
		data: [],
		loading: false
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render() {
		const books = this.props.bookList

		return (
			<div>
				{this.state.hiring ? <Hiring /> : <NotHiring />}
				{this.state.loading ? 'Loading....' : 
					<div>
						{this.state.data.map(product => {
							return (
								<div key={product.id}>
									<h3>Library product of the Week </h3>
									<h4>{product.name}</h4>
									<h5>{product.description}</h5>
									<img src={product.image} height={100} />
								</div>
							)
						})}
					</div>
				}
			<h1>The library is {this.state.open ? 'Open' : 'Closed'}</h1>
			<button onClick={this.toggleOpenClosed}>Change Status</button>
				{books.map(
					(book,i) =>
						<Book 
							key={i}
							title={book.title}
							author={book.author}
							pages={book.pages}
						/>
					)}
			}
			}
			</div>
		)

	}
}



export default BookLibrary
