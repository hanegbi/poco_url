import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function UrlForm() {
    return (
        <Container>
            <Form action='/shortUrls' method='POST' className='inline'>
                <Form.Group className="mb-3">
                    <Form.Control
                        required
                        placeholder='URL'
                        type='url'
                        name='fullUrl'
                        id='fullUrl'
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>

        // <div className='form-container'>
        //     <form action='/shortUrls' method='POST' class='my-4 form-inline'>
        //         <input
        //             required
        //             placeholder='URL'
        //             type='url'
        //             name='fullUrl'
        //             id='fullUrl'
        //             class='form-control col mr-2'
        //         />
        //         <button class='btn btn-success' type='submit'>
        //             Submit
        //         </button>
        //     </form>
        // </div>
    )
}

export default UrlForm
