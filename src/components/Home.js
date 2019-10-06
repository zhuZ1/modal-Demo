import React from 'react'
import Modal from './Modal'
import '../assets/css/Home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow: false
        }
    }

    showModal =()=>{
        this.setState({
            isShow: !this.state.isShow
        })
    }
    getShow =(res)=>{
        console.log(res)
        this.setState({
            isShow: res
        })
    }

    render(){
        let isShow = this.state.isShow
        if(isShow){
            return (
                <div>
                    <Modal home={this}/>
                    <div style={{textAlign: 'center'}}>
                        <button onClick={this.showModal} className='click-btn'>show modal</button>
                    </div>
                </div>


            )
        }

        return (
            <div style={{textAlign: 'center'}}>
                <button onClick={this.showModal} className='click-btn'>show modal</button>
            </div>
        )
    }

}

export default Home
