import React from "react"
import EntitiesState from "./entities"
import ToasterState from "./toaster"

interface Props {
    children: React.ReactNode
}

export const Store = ({ children }: Props) => {
    return (
        <EntitiesState>
            <ToasterState>
                {children}
            </ToasterState>
        </EntitiesState>
    )
}