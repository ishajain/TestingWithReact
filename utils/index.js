import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (component,testAttribute) => {
    return component.find(`[data-test='${testAttribute}']`)
}


export const checkProps = (component,expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps,"props",component.name)
}