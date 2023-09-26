import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';

import ContactCard from "./ContactCard";



function Home() {
  // state to hold the data

  const [contacts,setContacts] = useState([]) //method=>setContacts


  // api to get all contact from db.json
  const fetchContact = async () => {
    var result = await fetch('/db.json')

    //convert to js
    result.json().then(data => setContacts(data.contacts))
  }
  console.log(contacts);

  useEffect(() => {
    fetchContact()
  },[])
  return (
    <div>
      <Container>
        <ContactCard data={contacts}  > </ContactCard>
      </Container>


    </div>
  )
}

export default Home