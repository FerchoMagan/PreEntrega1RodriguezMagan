/* una prop greeting */
import Typography from '@mui/material/Typography';
import "./itemListContainer.css"


function SaludoInicial(props) {


    return (
        <>
        <Typography variant="h3" component="h2" >
        <h3 className="tituloCentrado">Hola {props.greeting}, bienvenido a Lo de Rulo!</h3>
        </Typography>
        </>
    );

}

export default SaludoInicial;
