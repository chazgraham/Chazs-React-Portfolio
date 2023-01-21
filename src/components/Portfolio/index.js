import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Portfolio() {
  const [photos] = useState([
    {
      name: 'Game Seeker',
      languages: ['React, ', 'JavaScript, ', 'Apollo, ', 'MongoDb, ', 'GraphQl, ', 'Express, ', 'Bcrypt' ],
      description: 'The application allows users to track games they have played, are playing, and have completed. It also allows the user to make friends and view the same list on their profiles.',
      gitHub: 'https://github.com/chazgraham/Game-Seeker',
      heroku: 'https://game-seeker.herokuapp.com/'
    },
    {
      name: 'Music Playlist',
      languages: ['HTML, ', 'JavaScript, ', 'Bulma CSS'],
      description: 'An application that allows the user to search for songs by their favorite artists.',
      gitHub: 'https://github.com/chazgraham/Music--Playlist',
      heroku: 'https://chazgraham.github.io/Music--Playlist/'
    },
    {
      name: 'The Collective',
      languages: ['JavaScript, ', 'Handlebars, ', 'Express, ', 'Sequelize, ', 'MySQL, ', 'Node.js'],
      description: ' a social media platform that allows users to log in to an existing account or sign up for one if said user does not have an existing account. Once the user is logged in they will be able to view past posts by other users and visit their own profile via the nav bar where they will be able to create, update, and delete their own posts. Included in the posts will be how many users liked that post, how many users commented on that post, and if the user were to click on the comments tab they can view old comments and add a comment for themselves.',
      gitHub: 'https://github.com/DXHASE/Collective-Social-App',
      heroku: 'https://social-collective-app.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      languages: ['HTML, ', 'CSS'],
      description: 'A website that offers fitness training services.',
      gitHub: 'https://github.com/chazgraham/Run-Buddy',
      heroku: 'https://chazgraham.github.io/Run-Buddy/'
    },
    {
      name: 'JavaScript Test',
      languages: ['HTML, ', 'CSS, ', 'JavaScript'],
      description: 'A quiz application that asks the user 10 questions realated to JavaScript, and allows user to save their score and veiw it via local storage.',
      gitHub: 'https://github.com/chazgraham/Chazs-JavaScript-Knowledge-Test',
      heroku: 'https://chazgraham.github.io/Chazs-JavaScript-Knowledge-Test/'
    },
    {
      name: 'Note Taker',
      languages: ['HTML, ', 'CSS, ', 'JavaScript, ', 'Express'],
      description: 'This appication uses express to gather data via backend and link it with our front end page. The user has two input fields "title and text" once this fields are filled out the user clicks the save button. When a user clicks one of the saved tasks it is expanded for futher reading. The user can delete notes that are no longer needed as well.',
      gitHub: 'https://github.com/chazgraham/Chazs-Note-Taker',
      heroku: 'https://chazs-note-taker.herokuapp.com/'
    },
    {
      name: 'Random Password Generator',
      languages: ['HTML, ', 'CSS, ', 'JavaScript'],
      description: 'A website that generates a random password based on user selected criteria.',
      gitHub: 'https://github.com/chazgraham/Chazs-Random-Password-Generator',
      heroku: 'https://chazgraham.github.io/Chazs-Random-Password-Generator/'
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
          <Modal.Title>Technologies Used</Modal.Title>
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