import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
  Snackbar, 
  Alert
} from "@mui/material";
import { CustomButton } from "../UI/CustomButton";
import { Input } from "../Inputs/Input";
import { useState } from 'react'

export const Modal = ({ open, handleClose }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const theme = useTheme();

  return (
    <>
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xs">
      <DialogTitle >Recuperar Contraseña</DialogTitle>
      <DialogContent sx={{ backgroundColor: theme.palette.background2.default}}>
        <Input
          label="Correo electrónico"
          style={{ width: "100%", marginBlock: "25px" }}
          
        />
        <DialogActions>
          <CustomButton variant="contained" texto="Enviar" onClick={() => { handleClose(); setOpenSnackbar(true);}} />
        </DialogActions>
      </DialogContent>
    </Dialog>

<Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
<Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
  Se ha enviado un enlace a su correo electrónico para reestablecer su contraseña.
</Alert>
</Snackbar>
</>
  );
};
