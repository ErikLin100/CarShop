import React, { useEffect } from 'react';
import { render } from 'react-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCar from './AddCar';
import EditCar from './Editcar';
import { SettingsInputComponent } from '@mui/icons-material';

function Carlist(){
    
    // State car oliota varten
    const [cars, setCars] = React.useState([]);

     // rest apista autojen haku

     useEffect(() => {
        fetchCars();
    }, [])

    //delete functio

    const deleteCar = (link) => {
        console.log("delete dunktiossa");
        console.log(link);

        fetch(link, { method: 'DELETE' })
        .then(response => { 
            if(response.ok){ 
                fetchCars();
            }
        })
        
    }

    const addCar = (car) => {
        console.log("carlistin addcar funktio "+ JSON.stringify(car));
        fetch("https://carrestapi.herokuapp.com/cars", {
            method:'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(car)
        })
            .then(response => {
                if(response.ok){
                    fetchCars();
               
                } else {
                    alert('something went wrong when adding car :(');
                }
            })
            .catch(err => console.error(err))

        }
    const fetchCars = () => {

        fetch("https://carrestapi.herokuapp.com/cars")
                .then(response => response.json())
                .then(data => setCars(data._embedded.cars));
    }
    
    const updateCar = (updateCar, link) => {
        console.log("edit car funktiossa.");
        console.log("Linkki:"+ updateCar);
        fetch(link, {
            method:'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)

        })
        .then(response => {
            if(response.ok){ 
            console.log("onnistui");
          //  setOpen(false);
            fetchCars();
        } else {
            alert('Something went wrong');
        }
     
        })
        .catch(err => console.error(err))
    }

    // määritetään columnsien nimet.

    const columns = [
        {field: 'brand', sortable: true, filter: true},
        {field: 'model', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'fuel', sortable: true, filter: true},
        {field: 'year', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params => 

                <EditCar updateCar = {updateCar} params = {params} />

            },
            { 
            headerName:'',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params => 
            <IconButton onClick={() => deleteCar(params.value)}>

                <DeleteIcon />

            </IconButton>
        },
    ]

    

   




    return (
       <>
       <AddCar addCar={addCar}  />
        <div className="ag-theme-material" style={{height: 400, width: '90'}}>
           <AgGridReact
               rowData={cars}
               pagination={true}
               paginationPageSize={10}
               columnDefs={columns}>
           </AgGridReact>
        </div>


        </>
    );
}
export default Carlist;