import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class SingleCard extends Component {
  state = {blogData: {}, isLoading: true, isSuccess: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const data = await response.json()
      const dataOne = data.course_details

      const updatedData = {
        name: dataOne.name,
        imageUrl: dataOne.image_url,
        description: dataOne.description,
      }
      console.log(updatedData)
      this.setState({blogData: updatedData, isLoading: false, isSuccess: true})
    }

    if (response.ok === false) {
      this.setState({isLoading: false, isSuccess: false})
    }
  }

  getDataAgain = () => {
    this.getBlogItemData()
  }

  renderBlogItemDetails = () => {
    const {blogData, isSuccess} = this.state
    const {name, imageUrl, description} = blogData

    return (
      <div className="myAshokDiv">
        {isSuccess ? (
          <div>
            <img src={imageUrl} alt={name} />
            <div>
              <h1>{name}</h1>

              <p>{description}</p>
            </div>
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <button type="button" onClick={this.getDataAgain}>
              Retry
            </button>
          </div>
        )}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              data-testid="loader"
            />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default SingleCard
