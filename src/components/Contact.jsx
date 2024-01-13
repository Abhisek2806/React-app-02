import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact US</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='ABC'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='ABC@xtz.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell Us about Your query....'/>
                </div>
               <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact