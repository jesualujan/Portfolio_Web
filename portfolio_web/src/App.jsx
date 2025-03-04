import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '@/Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme, lightTheme } from '@/Utils/Themes';

// Estilos para el contenedor principal
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh; /* Para asegurar que el cuerpo cubra toda la altura de la ventana */
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>

        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;


