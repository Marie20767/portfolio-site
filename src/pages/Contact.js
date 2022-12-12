// Import useState & useRef
import { useRef, useState } from 'react';

// Import email library
import emailjs from '@emailjs/browser';

// Import styles
import styled from 'styled-components';

// Import animations
import { motion } from 'framer-motion';
import { pageAnimation, contactAnimation } from '../animation';

import Button from '../components/Button';

const Contact = () => {
  // useStates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isNameMissing, setIsNameMissing] = useState(false);
  const [isEmailMissing, setIsEmailMissing] = useState(false);
  const [isMessageMissing, setIsMessageMissing] = useState(false);

  // Functions
  // Using the e-mail service library
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== '' && email !== '' && message !== '') {
      emailjs.sendForm('service_xa19syp', 'template_sy3ym1s', form.current, 'M7cFK3UxI15ETlp6h')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      setShowFeedbackMessage(true);
      setName('');
      setEmail('');
      setMessage('');
      setShowErrorMessage(false);

      setTimeout(() => {
        setShowFeedbackMessage(false);
      }, 3000);
    } else {
      setShowErrorMessage(true);
      if (name === '') {
        setIsNameMissing(true);
      }
      if (email === '') {
        setIsEmailMissing(true);
      }
      if (message === '') {
        setIsMessageMissing(true);
      }
    }
  };

  const onChangeNameInput = (e) => {
    setName(e.target.value);
    setIsNameMissing(false);
  };

  const onChangeEmailInput = (e) => {
    setEmail(e.target.value);
    setIsEmailMissing(false);
  };

  const onChangeTextArea = (e) => {
    setMessage(e.target.value);
    setIsMessageMissing(false);
  };

  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      $isNameMissing={isNameMissing}
      $isEmailMissing={isEmailMissing}
      $isMessageMissing={isMessageMissing}>
      <header>
        <h1>Get in touch</h1>
        <a href="https://www.linkedin.com/in/marie-impens/" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="#384395"
            className="bi bi-linkedin"
            viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
        <a href="https://github.com/Marie20767" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="#384395"
            className="bi bi-github"
            viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </header>
      <p className="contact-description">I am available for remote React Developer positions.</p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Full Name" onChange={onChangeNameInput} value={name} />
        <input type="text" name="user_email" placeholder="E-mail" onChange={onChangeEmailInput} value={email} />
        <textarea name="message" placeholder="Type your message here..." cols="40" rows="15" onChange={onChangeTextArea} value={message} />
        <ContactFooter>
          <Button type="submit">Submit</Button>
          {showFeedbackMessage
            ? (
              <motion.p
                variants={contactAnimation}
                initial="hidden"
                animate="show">
                Thanks for your message!
              </motion.p>
            )
            : null
          }
          {showErrorMessage
            ? (
              <motion.p
                variants={contactAnimation}
                initial="hidden"
                animate="show">
                Please fill in all required fields.
              </motion.p>
            )
            : null
          }
        </ContactFooter>
      </form>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8%;

  h1 {
    display: flex;
    font-size: 3.5vh;
    color: white;
  }

  header {
    margin-top: 40px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  
  p {
    display: flex;
    text-align: center;
    font-size: 2.35vh;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }

  svg {
    cursor: pointer;
    margin-left: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input[name="user_name"] {
      ${(props) => props.$isNameMissing ? 'border: 2px solid #dd3a08' : ''}
    }

    input[name="user_email"] {
      ${(props) => props.$isEmailMissing ? 'border: 2px solid #dd3a08' : ''}
    }

    textarea[name="message"] {
      ${(props) => props.$isMessageMissing ? 'border: 2.5px solid #dd3a08' : ''}
    }

    input, textarea {
      font-family: 'Mulish', sans-serif;
      margin-bottom: 1.1rem;
      padding: 0.7rem;
      font-size: 0.8rem;
      &:focus {
        border: 2.5px solid #5a66c0;
        outline: none;
      }
    } 

    textarea {
      height: 150px;
      resize: none;
    }
  }

 @media screen and (max-height: 420px) {
    h1 {
      font-size: 6vh;
    }
    header {
      margin-top: 20px;
      margin-bottom: 15px;
    }

    .contact-description {
      display: none;
    }

    form {
      input, textarea {
        margin-bottom: 0.6rem;
        padding: 0.3rem;
        font-size: 0.8rem;
      }

      textarea {
        height: 70px;
      }
    }

 }

 @media screen and (min-width: 1024px) {
  padding: 0;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.4rem;
  }

  form {
    width: 951px;
    
    textarea {
      height: 300px;
    }
    
    input[name="user_name"] {
      ${(props) => props.$isNameMissing ? 'border: 2px solid #dd3a08' : ''}
    }

    input[name="user_email"] {
      ${(props) => props.$isEmailMissing ? 'border: 2px solid #dd3a08' : ''}
    }

    textarea[name="message"] {
      ${(props) => props.$isMessageMissing ? 'border: 2px solid #dd3a08' : ''}
    }

    input, textarea {
      font-size: 1.1rem;
      &:focus {
        border: 2.5px solid #5a66c0;
      }
    }
 }
}
`;

const ContactFooter = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 0.8rem;
  }

  p {
    font-size: 0.8rem;
    padding: 0 0 0 1rem;
  }

  @media screen and (max-height: 420px) {
    button {
      padding: 0.4rem 1.2rem
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 1rem;
    }

    button {
      font-size: 1.1rem;
      padding: 0.7rem 1.5rem;
    }
  }
`;

export default Contact;
