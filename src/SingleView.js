import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
function SingleView() {

  const [allUser,setUser] = useState([])

  const params = useParams()


  const getUser = async () => {
    var result = await fetch('/db.json')
    result.json().then(data => {
      setUser(data.contacts)

    })
  }
  console.log(allUser);




  useEffect(() => {
    getUser()
    // console.log(params.id);

  },[])
  //find single user

  const singleUser = allUser.find(j => j.id == params.id)
  console.log(singleUser);

  return (
    <div className='text-center'>
      {
        singleUser ?// check if single user exist
          <div>
            <h1>{singleUser.username}</h1>
            <img src={singleUser.profile} />
            <ListGroup className='mb-5'>
              <ListGroup.Item>{singleUser.place}</ListGroup.Item>
              <ListGroup.Item>{singleUser.address}</ListGroup.Item>
              <ListGroup.Item>{singleUser.email}</ListGroup.Item>

            </ListGroup>
          </div>

          //Else  case


          : <h1>  no data  </h1>
      }



    </div >
  )
}

export default SingleView
