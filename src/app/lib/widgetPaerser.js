import List from "../ui/List"
import Type from "../ui/Type"

export const widgetParser = (widgets) => {

    const parseWidget = widgets.map((widget, idx) => {

        if (widget.type === "list") {
            return <List key={`${widget.type}_idx`} title={widget.title} subtitle={widget.subtitle} url={widget.api} />
        }

        if (widget.type === "number") {
            return <Type key={`${widget.type}_idx`} title={widget.title} url={widget.api} />
        }
    })
    return parseWidget
}