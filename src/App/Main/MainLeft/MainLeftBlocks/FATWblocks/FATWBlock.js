import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class FATWBlock extends Component {
    render () {

        const {
            id,
            headline,
            image,
        } = this.props

        return (
        <div className="fatw-and-la-blocks float">
            <img src={image}/>
            <p>{headline}</p>
            <p><Link to={`FATW/${id}`}>READ MORE</Link></p>
        </div>
        )}}

export default FATWBlock