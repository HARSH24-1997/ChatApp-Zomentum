import React from 'react'
import Form from './AddForm'

function AddModal({Add}) {

// const Reset = () =>{
//     document.getElementById('Add').reset();
// }

    return (
            <div class="modal fade" id="Add" tabindex="-1" role="dialog" aria-labelledby="AddFunc" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="AddFunc">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="AddClose">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                         <Form Add={Add}/>
                         </div>
                    </div>
                </div>
            </div>
    )
}

export default AddModal
