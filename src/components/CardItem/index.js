import {Link} from 'react-router-dom'
import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {name, logoUrl, id} = eachItem

  return (
    <Link to={`/courses/${id}`}>
      <div style={{listStyleType: 'none'}}>
        <li
          style={{
            maxHeight: '350px',
            display: 'flex',
            maxWidth: '350px',
            margin: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            listStyleType: 'none',
          }}
        >
          <img src={logoUrl} alt={name} />
          <p>{name}</p>
        </li>
      </div>
    </Link>
  )
}
export default CardItem
