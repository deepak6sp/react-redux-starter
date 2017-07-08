
/**
 * Action call for dashboard Container
 * It takes a string as parameter and returns a key-value object of type and payload
 * 'type' and 'payload' is standardized here
 * @param  {Text} text value of input/textarea field
 * @return {Objects} where payload is the value of input/textarea field
 */

export const submitText = text => ({
    type: 'SUBMIT_BUTTON_CLICKED',
    payload: text
});
