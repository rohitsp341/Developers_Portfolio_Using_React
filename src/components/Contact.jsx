import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Me</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Abe'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" required placeholder='Abc@gmail.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us About Your Query...'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact