import ToolbarLayout from "./ToolbarLayout"

export const ToolbarLayoutTest = () => {

    return (
        <ToolbarLayout>
            <ToolbarLayout.Content>
                Test container
            </ToolbarLayout.Content>
            <ToolbarLayout.Toolbar style={{ width: "40vw" }}>
                Toolbar Container
            </ToolbarLayout.Toolbar>
        </ToolbarLayout>
    )
}