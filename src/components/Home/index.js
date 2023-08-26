import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CardItem from '../CardItem/index'
import './index.css'

class Home extends Component {
  state = {myArray: [], isLoading: true, isSuccess: true}

  componentDidMount() {
    this.getData()
  }

  getAgain = () => {
    this.getData()
  }

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={this.getAgain}>
        Retry
      </button>
    </div>
  )

  getData = async () => {
    const Data = await fetch('https://apis.ccbp.in/te/courses')
    console.log(Data)
    if (Data.ok === true) {
      this.setState({isSuccess: Data.ok})
      const response = await Data.json()
      const array = response.courses
      const updatedArray = array.map(eachItem => ({
        id: eachItem.id,
        logoUrl: eachItem.logo_url,
        name: eachItem.name,
      }))
      console.log(updatedArray)
      this.setState({myArray: updatedArray})
      this.setState({isLoading: false})
    }
    if (Data.ok === false) {
      this.setState({isLoading: false})
      this.setState({isSuccess: false})
      console.log('hi')
    }
  }

  displayingView = () => {
    const {isSuccess, myArray} = this.state
    return (
      <div>
        {isSuccess ? (
          <div>
            <ul>
              <h1>Courses</h1>
              {myArray.map(eachItem => (
                <CardItem eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        ) : (
          this.failureView()
        )}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.displayingView()
        )}
      </div>
    )
  }
}
export default Home
