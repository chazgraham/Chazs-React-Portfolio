import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Portfolio() {
  const [photos] = useState([
    {
      name: 'Game Seeker',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'Music Playlist',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'The Collective',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'JavaScript Test',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'Note Taker',
      languages: ['java, ', 'test, ', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'Random Password Generator',
      languages: ['java', 'test', 'another'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
  ]);

  //handles detail model 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projectDetails, setprojectDetail] = useState([])

  const getDetails = (image) => {
    const projectDetails = image
    setprojectDetail(projectDetails)
    handleShow()

    console.log(image.name)
    console.log(image.description)
  }

  return (
    <>
      <Container className="flex-row">
        {photos.map((image, i) => (
          <div className='project-card'>
            <h4>{image.name}</h4>
            <div className='overlay-position'>
              <img className="img-thumbnail" src={require(`../../assets/projectImg/${i}.jpg`)} alt={image.name} key={image.name}></img>
              <div className='img__overlay'>
                <a href={image.heroku} >See App! </a>
                |
                <a href={image.gitHub} >  <i class="fa fa-github fa-2x"></i></a>
              </div>
            </div>
            <button className="details-btn" onClick={() => getDetails(image)}>Details</button>
          </div>
        ))}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{projectDetails.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{projectDetails.description}</Modal.Body>
        <Modal.Header>
          <Modal.Title>Languages</Modal.Title>
        </Modal.Header>
        <Modal.Body>{projectDetails.languages}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Portfolio;