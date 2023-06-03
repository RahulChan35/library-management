import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <div className="footer">
      <h3>Follow Us</h3>
      <ul>
        <li>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
        </li>
        <li>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
        </li>
        <li>
          {' '}
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </li>
      </ul>
    </div>
  )
}

export default Footer
