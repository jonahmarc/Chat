import './Chatbox.css';

const Chatbox = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'Chat'}
            </p>
            <div className='center'>
                <div className='ba b--near-black pa4'>
                    <h4> Chat Area</h4>
                    
                </div>
            </div>
        </div>
    )
}

export default Chatbox;