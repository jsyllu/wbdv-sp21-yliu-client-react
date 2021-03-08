import React from 'react'

const initialState = {
    modules: [
        // insert modules data
    ],
    foundModule: {}
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    return module._id !== action.deleteModule._id;
                })
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if(module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "FIND_MODULE":
            return {
                foundModule: action.foundModule
            }
        default:
            return state
    }
}

export default moduleReducer