import {
    createConnection,
    createLongLivedTokenAuth,
} from "home-assistant-js-websocket";

export const websocketLongLife = async () => {
    const auth = createLongLivedTokenAuth(
        "http://homeassistant.local:8123",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIwZTdhN2FhOGE2MTc0YjEzYjJiY2JjNTQzNDc3MzhmYiIsImlhdCI6MTY5NzIwOTM5NiwiZXhwIjoyMDEyNTY5Mzk2fQ.hFza3z8zO5gZ-drb59vB9XOW0L-f_f0RcVlwVD-ivBg"
    );

    const connection = await createConnection({ auth });
    return connection
}

