import {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Pies extends Component{
  constructor(){
    super()
    this.state = {
      pies: []
    }
  }

  componentDidMount(){
    axios.get('/api/pies')
    .then((res) => {
      this.setState({
        pies: res.data
      })
    })
    .catch((err) => console.log(err))
  }

  render(){
    return(
      <div>
        <h1>Pies</h1>
        {this.state.pies.map((pie) => {
          return(
            <Link to={`/pie/${pie.pie_id}`}><div style={{backgroundColor: 'pink'}} key={pie.pie_id}>{pie.flavor}</div></Link>
          )
        })}
      </div>
    )
  }
}

export default Pies