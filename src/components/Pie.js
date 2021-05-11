import {Component} from 'react'
import axios from 'axios'

class Pie extends Component{
  constructor(){
    super()
    this.state = {
      flavor: '',
      description: '',
      is_delicious: false,
      pie_id: null,
      crust: ''
    }
  }

  componentDidMount(){
    axios.get(`/api/pie/${this.props.match.params.id}`).then((res) => {
      this.setState({
        flavor: res.data.flavor,
        description: res.data.description,
        is_delicious: res.data.is_delicious,
        pie_id: res.data.pie_id,
        crust: res.data.crust
      })
    }).catch(err => console.log(err))
  }

  render(){
    const {flavor, description, is_delicious, pie_id, crust} = this.state
    return(
      <div>
        <h1>Pie</h1>
        <p>{flavor}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default Pie