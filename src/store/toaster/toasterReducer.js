import { SHOW_TOASTER, CLOSE_TOASTER, CLEAR_TOASTER } from './types'

const ToasterReducer = (state, action) => {
    switch (action.type) {
        case SHOW_TOASTER:
            return {
                open: true,
                severity: action.payload.severity
                    ? action.payload.severity
                    : 'error',
                title: action.payload.title,
                content: action.payload.content
            }

        case CLOSE_TOASTER:
            return {
                ...state,
                open: false
            }

        case CLEAR_TOASTER:
            return {
                open: false,
                severity: '',
                title: '',
                content: ''
            }
    }
}

export default ToasterReducer
