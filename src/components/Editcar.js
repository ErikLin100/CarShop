import React from 'react';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import { DialogContent } from '@mui/material';
import { DialogActions } from '@mui/material';
import { TextField } from '@mui/material';

function Editcar({updateCar, params}){

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
       brand: '',
       model:'',
       color:'',
       fuel:'',
       price:'',
       year:''
    })

    const handleClickOpen = () => {
        console.log("handleclickOPEN kutsuttu");
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            price: params.data.price,
            year: params.data.year
        })
    }

    const handleSave = () => {
        console.log("käsitellään tallennus");
        console.log(params.value);
        updateCar(car, params.value);
        setOpen(false);
    }

    const handleClickClose = () => {
        console.log("handleclickCLOSE kutsuttu");
        setOpen(false);

    }
    const inputChanged = (event) => {
        setCar({...car, [event.target.name] : event.target.value})
    }
    
    return(
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Edit
            </Button>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Edit car</DialogTitle>
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
    <Button onClick={handleSave}>Save</Button>
    <Button onClick={handleClickClose}>Cancel</Button>
    </DialogActions>
            </Dialog>
        </div>
    );
}
export default Editcar;