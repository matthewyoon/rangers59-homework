import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface VehicleFormProps {
    id?:string;
    data?:{}
}

interface VehicleState {
    make: string;
    model: string;
}

export const VehicleForm = (props:VehicleFormProps) => {

    const dispatch = useDispatch();
    let { vehicleData, getData } = useGetData();
    const store = useStore()
    const make = useSelector<VehicleState>(state => state.make)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Vehicle Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Vehicle Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="engine">Engine Type</label>
                    <Input {...register('engine')} name="engine" placeholder="Engine"/>
                </div>
                <div>
                    <label htmlFor="fuel">Fuel Type</label>
                    <Input {...register('fuel')} name="fuel" placeholder="Fuel"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="msrp">MSRP</label>
                    <Input {...register('msrp')} name="msrp" placeholder="MSRP"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="vehicle_type">Vehicle Type</label>
                    <Input {...register('vehicle_type')} name="vehicle_type" placeholder="Vehicle Type"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}