import { configuration } from "../configFIle/config"
import { widgetParser } from "./widgetPaerser"

export const configParser = () => {
    let componentBox = configuration.columns.map((column) => (
        <div className={`col-span-${column.size} column-design`} >
            <h1>{column.heading}</h1>
            <>
                {widgetParser(column.widgets)}
            </>
        </div>
    ))


    return componentBox
}