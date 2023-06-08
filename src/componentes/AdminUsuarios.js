
export const adminUsuarios = {
    array: [
        {
            id: 1,
            nick: 'Joel',
            email: 'joel@gmail.com',
            pass: 'Joel123'
        },
        {
            id: 2,
            nick: 'Carlos',
            email: 'carrebola@gmail.com',
            pass: 'Carlos123'
        }
    ],
    tabla: ()=>{
        let html = `<table class="table table-striped mt-5" id="tabla">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nick</th>
                                <th>Email</th>
                               <th></th> 
                            </tr>
                        </thead>
                    </table>`            
     return html;
    },
    
}
