import React from 'react'
import '../assets/css/Modal.css'
class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow: false
        }
    }

    closeModal =()=>{
        this.props.home.getShow(this.state.isShow)
    }
    render(){
        return(
            <div className='mask'>
                <div className='modal'>
                    <span className='close' onClick={this.closeModal}></span>
                    <p className='modal-title'>Add new  invoice information</p>
                    <div className='title-div'>
                        <label htmlFor="title" className='com-label'>Invoice title:</label>
                        <input type="text" id='title'/>
                    </div>
                    <div className='number-div'>
                        <label htmlFor="number" className='com-label'>Taxpayer's registration number:</label>
                        <input type="text" id='number'/>
                    </div>
                    <div className='bottom-div'>
                        <label className='com-label'></label>

                        <input type="checkbox" className='select-btn' />
                        <span className='default-span'>Set as default</span>
                        <button className='save-btn'>Save</button>
                        <button className='cancel-btn' onClick={this.closeModal}>Cancel</button>
                    </div>

                </div>
            </div>

        )
    }
}
export default Modal
