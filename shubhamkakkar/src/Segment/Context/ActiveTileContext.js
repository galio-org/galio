import React from "react"

const {
    Provider: ActiveTilePropProvider,
    Consumer: ActiveTilePropConsumer
} = React.createContext(0);



export {
    ActiveTilePropConsumer,
    ActiveTilePropProvider
}