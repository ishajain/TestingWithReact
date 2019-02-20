export const findByTestAttribute = (component,testAttribute) => {
    return component.find(`[data-test='${testAttribute}']`)
}
