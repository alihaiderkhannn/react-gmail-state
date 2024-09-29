import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'
import emails from './data/emails'

function App() {
  // Use initialEmails for state
  // console.log(initialEmails)

  const [email, setEmail] = useState(initialEmails)

  const inboxcount = emails.length
  console.log(inboxcount)

  const toggleRead = (id) => {
    const updatedemails = emails.map(email => email.id === id ? {...email, read : !email.read} : email
  )
  setEmail(updatedemails)
  };

  const toggleStar = (id) => {
    const updatedemails = emails.map(email => email.id === id ? {email, starred : !email.starred} : email
  )
  setEmail(updatedemails)
  }

  
  

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count"></span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count"></span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
      <ul>
        {emails.map((email) => (

        <li key={email.id} className={`email ${email.read} ? 'read' : 'unread'}`}>

        <div className="select">
          <input
           className="select-checkbox" 
           type="checkbox"
           checked={email.read}
           onChange={() => toggleRead(id)}/>
        </div>
        <div className="star">
          <input
           className="star-checkbox"
           type='checkbox' 
           checked={email.starred}
           onClick={() => toggleStar(id)}/>
        </div>
        <div className='sender'>{email.sender}</div>
        <div className='title'>{email.title}</div>
        </li>
        )
        )}
        
      </ul>
        
        
        </main>
    </div>
  )
}

export default App


