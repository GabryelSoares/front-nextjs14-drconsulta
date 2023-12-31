"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Vehicle } from "@/_core/domain/models/vehicle"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { ParkingRegistersContext } from "@/context/parking-registers-context"
import { VehiclesContext } from "@/context/vehicles-context"
import { useContext } from "react"

interface Props {
  vehicle: Vehicle
}
export function RowActionsDropdown({ vehicle }: Props) {
  const {
    setShowViewVehicleModal,
    setShowUpdateVehicleModal,
    setShowDeleteVehicleModal,
    setSelectedVehicles,
  } = useContext(VehiclesContext)
  const {
    setShowCreateParkingRegisterModal
  } = useContext(ParkingRegistersContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="destructive" className="hover:bg-gray-100 hover:border hover:border-gray-300 transition-transform duration-200 hover:cursor-pointer">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white p-0 m-0">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0" onClick={() => {
          setShowViewVehicleModal(true)
          setSelectedVehicles([vehicle])
        }}>
          <span className="hover:bg-gray-100 p-2 w-full h-full transition-transform duration-200 hover:cursor-pointer">Visualizar</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0" onClick={() => {
          setShowUpdateVehicleModal(true)
          setSelectedVehicles([vehicle])
        }}>
          <span className="hover:bg-gray-100 p-2 w-full h-full transition-transform duration-200 hover:cursor-pointer">Alterar</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0" onClick={() => {
          setShowDeleteVehicleModal(true)
          setSelectedVehicles([vehicle])
        }}>
          <span className="hover:bg-gray-100 p-2 w-full h-full transition-transform duration-200 hover:cursor-pointer">Apagar</span>
        </DropdownMenuItem>
        {/* {!vehicle.updatedAt && (
          <DropdownMenuItem className="p-0" onClick={() => {
            setShowCreateParkingRegisterModal(true)
            setSelectedVehicles([vehicle])
          }}>
            <span className="hover:bg-gray-100 p-2 w-full h-full transition-transform duration-200 hover:cursor-pointer">Registrar entrada</span>
          </DropdownMenuItem>
        )} */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
