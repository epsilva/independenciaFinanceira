import React from 'react'
import { Container } from '../styles/pages/Login';
import { motion } from "framer-motion";
import Pinha from '../assets/pinha.svg';

const Login: React.FC = () => {
  return (
    <Container>
    <div className="imagem">
        <Pinha />
    </div>
        <motion.div
            className="card-login"
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}
        />
    </Container>
  )
}

export default Login
