import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog  from '@mui/material/Dialog';
import  DialogTitle  from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';
import { DialogActions } from '@mui/material';
import { TextField } from '@mui/material';



function AddCar({addCar}){

    const [open, setOpen] = React.useState(false);

    const [car, setCar] = React.useState({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        price:'',
        year:'',
    })

    const handleClose = () => {
        console.log("suljettiin ikkuna");
        addCar(car);
        setOpen(false);
    }
    const handleCancel = () => {
        console.log("suljettiin ikkuna");
        setOpen(false);
    }

    const inputChanged= (event) => {
        
        setCar({...car, [event.target.name]: event.target.value});

    }

    const handleClickOpen = () => {
        console.log("ollaan handle klik openissa");
        setOpen(true);

    }


    return (
<div>
<Button onClick={handleClickOpen} variant="outlined">
    New Car
</Button>
<Dialog onClose={handleClose} open={open}>
    <DialogTitle>Add a new car</DialogTitle>
    <DialogContent>
        <TextField 
                name = "brand"
                value={car.brand}
                label= "Brand"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
         <TextField 
                name = "model"
                value={car.model}
                label= "Model"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
         <TextField 
                name = "color"
                value={car.color}
                label= "Color"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
         <TextField 
                name = "fuel"
                value={car.fuel}
                label= "Fuel"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
        <TextField 
                name = "year"
                value={car.year}
                label= "Year"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
        <TextField 
                name = "price"
                value={car.price}
                label= "Price"
                margin="dense"
                onChange={inputChanged}
                fullWidth={true}
        />
        
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose}>Save</Button>
    <Button onClick={handleCancel}>Cancel</Button>
    </DialogActions>
</Dialog>
</div>
    );
}
export default AddCar;